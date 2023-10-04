import { useEffect, useState } from "react"

export default function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth - 8)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth - 8)
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return width
}