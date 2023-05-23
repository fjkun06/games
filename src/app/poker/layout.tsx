


export const metadata = {
  title: 'Poker',
  description: 'Page for poker games',
}

export default function PokerLayout({
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
