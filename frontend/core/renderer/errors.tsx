export function MissingBlock({ slug }: { slug: string }) {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <div style={{ border: '2px dashed red', padding: 16 }}>
      Block "{slug}" is missing in the theme
    </div>
  )
}

export function BlockError({ message }: { message: string }) {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <div style={{ border: '2px dashed orange', padding: 16 }}>
      {message}
    </div>
  )
}
