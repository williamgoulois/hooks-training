import { useLayoutEffect, useState } from "react"

export default function useMeasure<T extends Element>(
  ref: React.RefObject<T>,
  dependancies: React.DependencyList,
) {
  const [rect, setRect] = useState<DOMRect>()

  useLayoutEffect(() => {
    console.log(ref, dependancies)
    setRect(ref.current?.getBoundingClientRect())
  }, dependancies)

  return rect
}
