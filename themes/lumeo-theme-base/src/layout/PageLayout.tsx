export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      {children}
    </main>
  )
}
