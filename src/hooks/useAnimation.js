import { useState, useEffect, useCallback } from 'react'

export const useAnimation = (initialState = true) => {
  const [isAnimating, setIsAnimating] = useState(initialState)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation])

  return {
    isAnimating,
    toggleAnimation,
    startAnimation,
    stopAnimation
  }
}