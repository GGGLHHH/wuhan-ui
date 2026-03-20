/**
 * Theme transition utilities using View Transition API
 *
 * Provides smooth theme transitions with a circular animation
 * radiating from the mouse position.
 */

let lastMouseX = window.innerWidth / 2
let lastMouseY = window.innerHeight / 2

if (typeof window !== 'undefined') {
  window.addEventListener(
    'mousemove',
    (e) => {
      lastMouseX = e.clientX
      lastMouseY = e.clientY
    },
    { passive: true },
  )
}

export function toggleThemeWithTransition(callback: () => void): void {
  if (!document.startViewTransition) {
    callback()
    return
  }

  const x = lastMouseX
  const y = lastMouseY

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  document.documentElement.classList.add('theme-transitioning')

  const transition = document.startViewTransition(async () => {
    callback()
    await new Promise((resolve) => setTimeout(resolve, 0))
  })

  void transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]

    document.documentElement.animate(
      { clipPath },
      {
        duration: 400,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  })

  void transition.finished.finally(() => {
    document.documentElement.classList.remove('theme-transitioning')
  })
}
