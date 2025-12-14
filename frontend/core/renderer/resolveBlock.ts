import type { Theme } from '../theme/types'

export function resolveBlock(theme: Theme, block: any) {
  const entry = theme.blocks?.[block.blockType]
  if (!entry) return null

  if (typeof entry === 'function') {
    return entry
  }

  const variant = block.variant || 'default'
  return entry[variant] || entry.default || null
}
