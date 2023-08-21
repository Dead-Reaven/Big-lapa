import { useState } from 'react'

type SwipeDirection = 'next' | 'prev'

function useSwipe(onSwipe: (direction: SwipeDirection) => void) {
  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      onSwipe('next')
    }

    if (diff < -5) {
      onSwipe('prev')
    }

    setTouchPosition(null)
  }

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
  }
}

export default useSwipe
