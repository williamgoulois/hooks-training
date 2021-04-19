import * as React from "react"

export const useCountRenders = () => {
  const renderCount = React.useRef(1)
  React.useEffect(() => {
    renderCount.current++
  })
  return renderCount.current
}
