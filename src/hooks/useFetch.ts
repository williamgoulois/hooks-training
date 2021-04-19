import { useEffect, useState } from "react"
import useIsMounted from "./useIsMounted"

export default function useFetch<T>(
  url: RequestInfo,
  options?: RequestInit | undefined,
): [T | undefined, Error | undefined] {
  const [response, setResponse] = useState<T>()
  const [error, setError] = useState<Error>()
  const isMounted = useIsMounted()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const json = await res.json()
        if (isMounted()) {
          setResponse(json)
        }
      } catch (error) {
        setError(error)
      }
    }
    void fetchData()
  }, [url, options, isMounted])

  return [response, error]
}
