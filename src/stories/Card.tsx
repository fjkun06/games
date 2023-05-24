import Image from "next/image";
import React from "react";
import test from "../../public/test.jpg";
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
}

/**
 * Primary UI component for user interaction
 */
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <article className="game_card">
      <span className="game_card-default">
        <Image src={test} alt="game image" />
      </span>
      {/* <span className="game_card-default">{children}</span> */}
      <span className="game_card-play"><span>Play</span></span>
    </article>
  );
};

export default Card;
