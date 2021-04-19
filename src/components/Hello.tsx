import * as React from "react"
import { useCountRenders } from "../hooks/useCountRenders"

type HelloProps = {
  increment: () => void
}

export const Hello = React.memo<HelloProps>(({ increment }) => {
  const count = useCountRenders()
  console.log(`Hello rendered ${count} times`)
  return <button onClick={increment}>Increment</button>
})
