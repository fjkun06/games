"use client";

import Navbar from "@/stories/Navbar";
import "../styles/main.scss";
import "@fontsource/roboto";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
export const metadata = {
  title: "Games",
  description: "Game application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lg = useMediaQuery("(width > 840px)");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  
  //display navbar items horisontally when above 840px width
  React.useEffect(() => {
    if (lg) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [lg]);

  //scroll useEffect to colse navbar one scroll [mobile]
  React.useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <html lang="en">
      <body>
        <Navbar handleClick={toggleNavbar} isOpen={isOpen} />
        <main onClick={() => setIsOpen(false)}>{children}</main>
      </body>
    </html>
  );
}
