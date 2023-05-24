"use client";

import Navbar from "@/stories/Navbar";
import "../styles/main.scss";
import "@fontsource/roboto";
import "@fontsource/biorhyme";
import React, { Suspense } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Footer from "@/stories/Footer";
import { ErrorBoundary } from "react-error-boundary";
export const metadata = {
  title: "Games",
  description: "Game application",
};

const Fallback = ({ error, resetErrorBoundary }: { error: any; resetErrorBoundary: any }) => {
  return (
    <div role="alert" className="game_error">
      <p>Something went wrong, please refresh the page.</p>
      <p id="fehler">{error.message}</p>
    </div>
  );
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

    if (!lg) window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <html lang="en">
      <body>
        <Navbar handleClick={toggleNavbar} isOpen={isOpen} />
        <ErrorBoundary FallbackComponent={Fallback} onReset={(details) => console.log("Error details: ", details)}>
          <main
            id="container"
            onClick={() => {
              if (!lg) setIsOpen(false);
            }}
          >
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </main>
        </ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}
