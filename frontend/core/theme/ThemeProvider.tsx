'use client'

import { createContext, useContext } from 'react'
import type { Theme } from './types'
import { resolveTheme } from './resolveTheme'

const ThemeContext = createContext<Theme | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = resolveTheme()
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): Theme {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('ThemeProvider is missing')
  return ctx
}
