"use client";

import { nanoid } from "nanoid";
import { NavLink } from "./NavLink";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

//navbar interface
interface NavbarProps {
  /**
   * @param {boolean} [isOpen=false] - Used to check if navbar is open or not.
   * @param {void} handleClick - Toggle menu state.
   *
   * */
  isOpen: boolean;
  handleClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, handleClick }) => {
  const navLinks = ["top_games", "new", "slots", "jackpots", "live", "blackjack", "roulette", "table", "poker", "other"];
  //getting current route
  const pathname = usePathname();
  const href = useSelectedLayoutSegment() as string;

  //defining mdeia query
  const max840 = useMediaQuery("(width < 840px)");
  const opened = max840 && isOpen === true;

  //function for togglimg state in mobile
  const toggler = () => max840 && handleClick()


  return (
    <nav className={opened ? "open" : "closed"}>
      <div className="nav_mobile">
        <h2>{href}</h2>
        <span onClick={handleClick}>
          {isOpen ? (
            <svg viewBox="0 0 53.05 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.52,1 L52.52,33 M0.52,33 L52.52,1" fill="none" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          ) : (
            <svg viewBox="0 0 53.05 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.02,1 L53.02,1 M53.02,17 L0.02,17 M0.02,33 L53.02,33" fill="none" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          )}
        </span>
        {/* {...navLinks.filter((link) => lin} */}
      </div>
      <div className={isOpen ? "nav_link-container" : "off"}>
        {navLinks.map((link) => {
          if (link === "new") return <NavLink toggle={handleClick} href={`/${link}`} text="new games" key={nanoid()} />;
          if (link === "top_games") return <NavLink toggle={handleClick} href={`/${link}`} text="top games" key={nanoid()} />;
          return <NavLink toggle={toggler} href={`/${link}`} text={link} key={nanoid()} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
