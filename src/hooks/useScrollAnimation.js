import { useEffect, useState } from 'react'

export default function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const [element, setElement] = useState(null)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin: '50px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [element, threshold])

  return [setElement, isVisible]
}