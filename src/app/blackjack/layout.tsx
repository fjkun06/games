export const metadata = {
  title: "Blackjack",
  description: "Page for blackjack games",
};

export default function BlackjackLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
