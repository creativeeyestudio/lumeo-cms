import { useTheme } from '../theme/ThemeProvider'
import { BlockError } from './errors'

interface GlobalSlotProps {
  name: string
  data?: any
}

export function GlobalSlot({ name, data }: GlobalSlotProps) {
  const theme = useTheme()

  const Slot = theme.globals?.[name]

  if (!Slot) {
    if (process.env.NODE_ENV !== 'production') {
      return <BlockError message={`Global slot "${name}" is missing in theme`} />
    }
    return null
  }

  return <Slot {...data} />
}
