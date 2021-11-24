import { useRef, useState, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"

const initialState = { width: 100, height: 100 }

//  ref is the reference to the element whose height and with is required
//  const divRef = useRef(null)
//  const { height, width } = useDimension(divRef)
//  <div ref={divRef}>

const useDimension = (ref) => {
  const [dimensions, setdDimensions] = useState(initialState)
  const resizeObserverRef = useRef(null)

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect
        setdDimensions({ width, height })
      })
    })
    if (ref.current) resizeObserverRef.current.observe(ref.current)
    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect()
    }
  }, [ref])

  return dimensions
}

export default useDimension