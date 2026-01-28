'use client'

import { useEffect } from 'react'

export function UnicornStudioBackground({ projectSrc }: { projectSrc: string }) {
  useEffect(() => {
    // Wait for UnicornStudio to be available, then initialize
    const initUnicorn = () => {
      if (typeof window !== 'undefined' && (window as any).UnicornStudio) {
        try {
          (window as any).UnicornStudio.init()
        } catch (e) {
          // Silently fail if already initialized
        }
      } else {
        // Retry if library not loaded yet
        setTimeout(initUnicorn, 100)
      }
    }

    // Give the DOM a moment to render the element
    setTimeout(initUnicorn, 200)
  }, [])

  return (
    <div className="hidden lg:block absolute inset-0 w-full h-full">
      <div data-us-project-src={projectSrc} className="w-full h-full"></div>
    </div>
  )
}
