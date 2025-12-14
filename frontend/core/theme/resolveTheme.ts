import type { Theme } from './types'

let cachedTheme: Theme | null = null

export function resolveTheme(): Theme {
  if (cachedTheme) return cachedTheme

  const themeName = process.env.CMS_THEME

  if (!themeName) {
    throw new Error('[Lumeo] CMS_THEME is not defined')
  }

  let mod: any

  try {
    mod = require(themeName)
  } catch (e) {
    throw new Error(`[Lumeo] Cannot load theme "${themeName}"`)
  }

  const theme: Theme = mod.default ?? mod

  cachedTheme = theme
  return theme
}
