"use client";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "New Games",
  description: "Page for new games",
};

export default function NewLayout({ children }: { children: React.ReactNode }) {

  return <>{children}</>;
}
