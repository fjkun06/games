import Navbar from "@/stories/Navbar"
import '../styles/main.scss'
export const metadata = {
  title: 'Games',
  description: 'Game application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}</body>
    </html>
  )
}
