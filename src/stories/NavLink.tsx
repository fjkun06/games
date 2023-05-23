"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavlinkProps {
  /**
   * @param {string} href - page route
   * @param {string} text - link text
   * @param {void} toggle - Toggle menu state.
   *
   */
  href: string;
  text: string;
  toggle: () => void;
}

export const NavLink: React.FC<NavlinkProps> = ({ href, text, toggle }) => {
  //getting current route
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  const lg = useMediaQuery("(width > 840px)");

  return lg ? (
    <Link className={isActive ? "nav_link nav_link-active" : "nav_link"} href={href}>
      {text}
    </Link>
  ) : (
    <Link className={isActive ? "nav_link nav_link-active" : "nav_link"} href={href} onClick={toggle}>
      {text}
    </Link>
  );
};
