import { useTheme } from '../theme/ThemeProvider'
import { resolveBlock } from './resolveBlock'
import { MissingBlock } from './errors'

export function BlockRenderer({ block }: { block: any }) {
  const theme = useTheme()

  const Component = resolveBlock(theme, block)

  if (!Component) {
    return <MissingBlock slug={block.blockType} />
  }

  return <Component {...block} />
}
