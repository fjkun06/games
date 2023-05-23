"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavlinkProps {
  /**
   * @param {string} href - page route
   * @param {string} text - link text
   */
  href: string;
  text: string;
}

export const NavLink: React.FC<NavlinkProps> = ({ href, text }) => {
  //getting current route
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <Link className={ isActive ? "nav_link nav_link-active" : "nav_link" } href={href}>
      {text}
    </Link>
  );
};
