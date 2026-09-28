import { readPosts, writePosts } from './blogStore.js'
import { verifyAdmin } from './firebaseAdmin.js'

const text = (value, max) => String(value ?? '').replace(/\u0000/g, '').trim().slice(0, max)

const slugify = (value) => {
  const map = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' }
  return text(value, 160)
    .toLocaleLowerCase('tr')
    .replace(/[çğıöşü]/g, (char) => map[char] || char)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

const excerptFrom = (body) => {
  const flat = body.replace(/\s+/g, ' ').trim()
  if (flat.length <= 180) return flat
  return `${flat.slice(0, 177).trim()}…`
}

const summary = (post) => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
})

const sortNewest = (posts) =>
  [...posts].sort((a, b) => String(b.date).localeCompare(String(a.date)))

const requireAdmin = async (request, response) => {
  const result = await verifyAdmin(request)
  if (!result.ok) {
    response.status(result.status).json({ ok: false, message: result.message })
    return false
  }
  return true
}

const uniqueSlug = (posts, base, currentSlug = '') => {
  const root = base || 'yazi'
  let slug = root
  let index = 2
  while (posts.some((post) => post.slug === slug && post.slug !== currentSlug)) {
    slug = `${root}-${index}`
    index += 1
  }
  return slug
}

export const registerBlogRoutes = (app) => {
  app.get('/api/posts', async (_request, response) => {
    const posts = sortNewest(await readPosts()).filter((post) => post.published)
    response.json(posts.map(summary))
  })

  app.get('/api/posts/:slug', async (request, response) => {
    const posts = await readPosts()
    const post = posts.find((item) => item.slug === request.params.slug && item.published)
    if (!post) {
      response.status(404).json({ ok: false, message: 'Yazı bulunamadı.' })
      return
    }
    response.json({ ...summary(post), body: post.body })
  })

  app.get('/api/admin/posts', async (request, response) => {
    if (!(await requireAdmin(request, response))) return
    const posts = sortNewest(await readPosts())
    response.json(posts)
  })

  app.post('/api/admin/posts', async (request, response) => {
    if (!(await requireAdmin(request, response))) return
    const title = text(request.body?.title, 160)
    const body = text(request.body?.body, 20000)
    if (!title || !body) {
      response.status(400).json({ ok: false, message: 'Başlık ve yazı metni gerekli.' })
      return
    }

    const posts = await readPosts()
    const post = {
      slug: uniqueSlug(posts, slugify(request.body?.slug || title)),
      title,
      excerpt: text(request.body?.excerpt, 280) || excerptFrom(body),
      body,
      date: text(request.body?.date, 10) || new Date().toISOString().slice(0, 10),
      published: request.body?.published !== false,
    }
    posts.push(post)
    await writePosts(posts)
    response.status(201).json(post)
  })

  app.put('/api/admin/posts/:slug', async (request, response) => {
    if (!(await requireAdmin(request, response))) return
    const posts = await readPosts()
    const index = posts.findIndex((post) => post.slug === request.params.slug)
    if (index < 0) {
      response.status(404).json({ ok: false, message: 'Yazı bulunamadı.' })
      return
    }

    const title = text(request.body?.title, 160)
    const body = text(request.body?.body, 20000)
    if (!title || !body) {
      response.status(400).json({ ok: false, message: 'Başlık ve yazı metni gerekli.' })
      return
    }

    posts[index] = {
      ...posts[index],
      slug: posts[index].slug,
      title,
      excerpt: text(request.body?.excerpt, 280) || excerptFrom(body),
      body,
      date: text(request.body?.date, 10) || posts[index].date,
      published: Boolean(request.body?.published),
    }
    await writePosts(posts)
    response.json(posts[index])
  })

  app.delete('/api/admin/posts/:slug', async (request, response) => {
    if (!(await requireAdmin(request, response))) return
    const posts = await readPosts()
    const next = posts.filter((post) => post.slug !== request.params.slug)
    if (next.length === posts.length) {
      response.status(404).json({ ok: false, message: 'Yazı bulunamadı.' })
      return
    }
    await writePosts(next)
    response.json({ ok: true })
  })
}
