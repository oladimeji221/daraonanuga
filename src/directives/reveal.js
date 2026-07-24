// A tiny scroll-reveal directive powered by IntersectionObserver.
// Usage:  v-reveal            -> fades/slides element in when it enters view
//         v-reveal="{ delay: 150 }" -> staggered delay in ms
//         v-reveal:up / :left / :right / :zoom  -> direction of the entrance
//
// It respects prefers-reduced-motion by revealing instantly.

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observer =
  typeof window !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const el = entry.target
              const delay = Number(el.dataset.revealDelay || 0)
              window.setTimeout(() => el.classList.add('is-revealed'), delay)
              observer.unobserve(el)
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      )
    : null

export default {
  mounted(el, binding) {
    if (prefersReduced || !observer) {
      el.classList.add('is-revealed')
      return
    }
    const dir = binding.arg || 'up'
    el.classList.add('reveal', `reveal-${dir}`)
    if (binding.value && binding.value.delay) {
      el.dataset.revealDelay = String(binding.value.delay)
    }
    observer.observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  }
}
