import Image from "next/image";
import React from "react";
import test from "../../public/test.jpg";
import TopRibbon from "./../components/TopRibbon";
import NewRibbon from "./../components/NewRibbon";
interface CardProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Sub elements or text
   */
  children?: React.ReactNode;
  /**
   * Determines ribbon text and eqaully if the item has a ribbon
   */
  ribbonType?: "new" | "top";
  /**
   * Determines if there will be jackpot and displays its value
   */
  jackpot?: number;
}

/**
 * Primary UI component for user interaction
 */
const Card: React.FC<CardProps> = ({ children, ribbonType }) => {
  return (
    <article className="game_card">
      <span className="game_card-default">
        <Image src={test} alt="game image" />
      </span>
      {/* <span className="game_card-default">{children}</span> */}
      <span className="game_card-play">
        <span>Play</span>
      </span>
      <span className="game_card-jackpot">
        <span>$123,564.78</span>
      </span>

      {ribbonType === "new" && (
        <span className="game_card-ribbon">
          <NewRibbon />
        </span>
      )}
      {ribbonType === "top" && (
        <span className="game_card-ribbon">
          <TopRibbon />
        </span>
      )}
    </article>
  );
};

export default Card;
