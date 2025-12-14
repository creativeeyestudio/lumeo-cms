import { useTheme } from '../theme/ThemeProvider'
import { BlockRenderer } from './BlockRenderer'
import { BlockError } from './errors'

export function PageRenderer({ page }: { page: any }) {
  const theme = useTheme()

  const Layout = theme.layouts?.Page

  if (!Layout) {
    return <BlockError message="Page layout is missing in theme" />
  }

  return (
    <Layout page={page}>
      {page.blocks?.map((block: any, i: number) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </Layout>
  )
}
