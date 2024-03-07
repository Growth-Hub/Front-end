import { useEffect, useState } from 'react'

export const useDebounceQuery = (query: string, delay: number) => {
  const [debounceQuery, setDebounceQuery] = useState<string>(query)

  useEffect(() => {
    if (query) {
      const timer = setTimeout(() => {
        setDebounceQuery(query)
      }, delay)

      return () => {
        clearTimeout(timer)
      }
    }
    return undefined
  }, [query, delay])

  return debounceQuery
}
