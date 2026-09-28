import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const postsFile = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../data/posts.json')

export async function readPosts() {
  try {
    const raw = await readFile(postsFile, 'utf8')
    const data = JSON.parse(raw)
    return Array.isArray(data) ? data : []
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
}

export async function writePosts(posts) {
  await mkdir(path.dirname(postsFile), { recursive: true })
  await writeFile(postsFile, `${JSON.stringify(posts, null, 2)}\n`, 'utf8')
}
