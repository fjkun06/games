


export const metadata = {
  title: 'Top Games',
  description: 'Page for top games',
}

export default function TopGamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main lang="en">
      {children}
    </main>
  )
}
