


export const metadata = {
  title: 'Table',
  description: 'Page for classic games',
}

export default function ClassicLayout({
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
