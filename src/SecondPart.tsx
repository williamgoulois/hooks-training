import { useCallback, useMemo, useState } from "react"
import { Hello } from "./components/Hello"
import useFetch from "./hooks/useFetch"
import { Square } from "./components/Square"

// if dependancies needed => useCallback
const computeLongestWord = (array: string[] | undefined) => {
  if (array === undefined) {
    return []
  }
  console.log("computing longestWord")
  let longestWord = ""
  array.forEach((sentence) =>
    sentence.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word
      }
    }),
  )
  return longestWord
}

export const SecondPart: React.FC = () => {
  const [count, setCount] = useState(1)
  const favoriteNumbers = [4, 11, 23]
  const increment = useCallback(() => {
    setCount((count) => count + 1)
  }, [setCount])
  const incrementWithArgument = useCallback(
    (n: number) => {
      setCount((count) => count + n)
    },
    [setCount],
  )
  const [response, error] = useFetch<string[]>(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json",
  )
  const longestWord = useMemo(() => computeLongestWord(response), [response])

  if (error !== undefined) return <div>{error.message}</div>
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>count : {count}</div>
        <Hello increment={increment} />
        {favoriteNumbers.map((n) => {
          return <Square increment={incrementWithArgument} n={n} key={n} />
        })}
      </div>
      <div>Longest word of the API is {longestWord}</div>
    </>
  )
}
