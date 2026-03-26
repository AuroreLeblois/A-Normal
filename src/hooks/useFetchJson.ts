import { useState, useEffect } from 'react'

interface FetchState<T> {
  data:      T | null
  error:     string | null
  isLoading: boolean
}

/**
 * Récupère et parse un JSON depuis une URL.
 * Si `url` est vide, le fetch est ignoré.
 */
export function useFetchJson<T>(url: string): FetchState<T> {
  const [data,      setData]      = useState<T | null>(null)
  const [error,     setError]     = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!url) return

    let cancelled = false
    setIsLoading(true)

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`)
        return res.json() as Promise<T>
      })
      .then(json  => { if (!cancelled) setData(json) })
      .catch(err  => { if (!cancelled) setError((err as Error).message) })
      .finally(()  => { if (!cancelled) setIsLoading(false) })

    return () => { cancelled = true }
  }, [url])

  return { data, error, isLoading }
}
