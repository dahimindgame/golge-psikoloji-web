import { onMounted, onUnmounted } from 'vue'

export function useReveal(elementRef) {
  let observer = null

  onMounted(() => {
    const el = elementRef?.value
    if (!el) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
          }
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    )

    el.classList.add('reveal')
    observer.observe(el)
  })

  onUnmounted(() => {
    if (observer && elementRef?.value) {
      observer.disconnect()
    }
  })
}
