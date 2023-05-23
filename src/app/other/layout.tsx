


export const metadata = {
  title: 'Other',
  description: 'Page for other games',
}

export default function OtherLayout({
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
