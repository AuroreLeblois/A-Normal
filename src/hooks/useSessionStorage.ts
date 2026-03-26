import { useState } from 'react'

/**
 * useState persisté dans sessionStorage (sérialisé en JSON).
 * Compatible avec les valeurs booléennes : JSON.stringify(true) === 'true' ✓
 */
export function useSessionStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(() => {
    const stored = sessionStorage.getItem(key)
    if (stored === null) return initialValue
    try { return JSON.parse(stored) as T } catch { return initialValue }
  })

  const setValue = (value: T) => {
    sessionStorage.setItem(key, JSON.stringify(value))
    setState(value)
  }

  return [state, setValue]
}
