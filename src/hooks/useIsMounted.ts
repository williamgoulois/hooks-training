import { useCallback, useEffect, useRef } from "react"

export default function useIsMounted(): () => boolean {
  const ref = useRef(false)
  const cb = useCallback(() => ref.current, [])

  useEffect(() => {
    ref.current = true
    return () => {
      ref.current = false
    }
  }, [])

  return cb
}
