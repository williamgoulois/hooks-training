import * as React from "react"
import { useCountRenders } from "../hooks/useCountRenders"

type SquareProps = {
  increment: (n: number) => void
  n: number
}

export const Square = React.memo<SquareProps>(({ increment, n }) => {
  const count = useCountRenders()
  console.log(`Square rendered ${count} times`)
  return <button onClick={() => increment(n)}>{n}</button>
})
