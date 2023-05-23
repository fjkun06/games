


export const metadata = {
  title: 'Live',
  description: 'Page for live games',
}

export default function LiveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
