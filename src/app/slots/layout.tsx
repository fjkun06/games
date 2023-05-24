


export const metadata = {
  title: 'Slots',
  description: 'Page for slot games',
}

export default function SlotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
