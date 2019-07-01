import { useState, useCallback } from 'react'

export const useInput = (initialState = '') => {
  const [value, setValue] = useState(initialState)
  return [value, useCallback(e => setValue(e.target.value), [])]
}
