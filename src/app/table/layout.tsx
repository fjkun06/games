


export const metadata = {
  title: 'Table',
  description: 'Page for table games',
}

export default function TableLayout({
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
