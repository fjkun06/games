"use client";

import { nanoid } from "nanoid";
import { NavLink } from "./NavLink";

const Navbar = () => {
  const navLinks = ["top_games", "new", "slots", "jackpots", "live", "blackjack", "roulette", "table", "poker", "other"];
  return (
    <nav>
      {navLinks.map((link) => (
        <NavLink href={`/${link}`} text={link} key={nanoid()} />
      ))}
    </nav>
  );
};

export default Navbar;
