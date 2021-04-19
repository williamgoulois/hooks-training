import { useEffect, useRef, useState } from "react"
import useFetch from "./hooks/useFetch"
import useForm from "./hooks/useForm"
import useMeasure from "./hooks/useMeasure"

type APIResponse = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const FirstPart: React.FC = () => {
  const [values, handleChange] = useForm({ email: "", password: "" })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const [count, setCount] = useState<number>(() => JSON.parse(localStorage.getItem("count") ?? ""))

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  const [response, error] = useFetch<APIResponse>(
    `https://jsonplaceholder.typicode.com/todos/${count}`,
  )

  const inputRef = useRef<HTMLInputElement>(null)
  const logRef = useRef(() => {
    console.log("Fonction called")
  })

  const divRef = useRef<HTMLDivElement>(null)
  const rect = useMeasure<HTMLDivElement>(divRef, [response])

  // React.useEffect(() => {
  //   const onMouseMove = (e: MouseEvent) => {
  //     console.log(e)
  //   }
  //   window.addEventListener("mousemove", onMouseMove)
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove)
  //   }
  // }, [])

  if (error !== undefined) return <div>{error.message}</div>
  if (response === undefined) return <div>Loading...</div>

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{response.title}</div>
      </div>

      <button
        onClick={() => {
          setCount((count) => count + 1)
        }}
      >
        Change Text
      </button>
      <pre>{JSON.stringify(rect, null, 2)}</pre>

      <input
        ref={inputRef}
        value={values.email}
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <input
        value={values.password}
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />
      <button
        onClick={() => {
          inputRef.current?.focus()
          logRef.current()
        }}
      >
        Focus Email
      </button>
    </div>
  )
}
