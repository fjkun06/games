"use client";

import { nanoid } from "nanoid";
import { NavLink } from "./NavLink";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

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

interface Category {
  categories: string[];
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, handleClick }) => {
  const navLinks = ["top_games", "new", "slots", "blackjack", "roulette", "classic", "poker", "other"];
  const allCategory = new Set();
  const { data, error } = useSWR("http://stage.whgstage.com/front-end-test/games.php", fetcher);
  data !== undefined &&
    data.map(({ categories }: Category) => {
      categories.map((el) => allCategory.add(el === "fun" || el === "ball" || el === "virtual" ? "other" : el)); //Group “ball”, “virtual” and “fun” in an “Other” category.
    });

  //getting current route
  const href = useSelectedLayoutSegment() as string;

  //defining mdeia query
  const max840 = useMediaQuery("(width < 840px)");
  const opened = max840 && isOpen === true;

  //function for togglimg state in mobile
  const toggler = () => handleClick();

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
      </div>
      <div className={isOpen ? "nav_link-container" : "off"}>
        {allCategory.size > 1
          ? [...allCategory].map((link) => {
              const castedLink = link as string;
              if (castedLink === "new") return <NavLink toggle={handleClick} href={`/${castedLink}`} text="new games" key={nanoid()} />;
              if (castedLink === "top") return <NavLink toggle={handleClick} href={`/top_games`} text="top games" key={nanoid()} />;
              return <NavLink toggle={toggler} href={`/${castedLink}`} text={castedLink} key={nanoid()} />;
            })
          : [...navLinks].map((link) => {
              const castedLink = link as string;
              if (castedLink === "new") return <NavLink toggle={handleClick} href={`/${castedLink}`} text="new games" key={nanoid()} />;
              if (castedLink === "top") return <NavLink toggle={handleClick} href={`/top_games`} text="top games" key={nanoid()} />;
              return <NavLink toggle={toggler} href={`/${castedLink}`} text={castedLink} key={nanoid()} />;
            })}
      </div>
    </nav>
  );
};

export default Navbar;
