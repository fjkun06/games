"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import test from "../../public/test.jpg";
import TopRibbon from "./../components/TopRibbon";
import NewRibbon from "./../components/NewRibbon";
import { useRouter } from "next/navigation";
interface CardProps {
  /**
   * Card image source
   */
  src: string | StaticImageData;
  /**
   * Determines ribbon text and eqaully if the item has a ribbon
   */
  ribbonType?: "new" | "top_games" | null;
  /**
   * Determines if there will be jackpot and displays its value
   */
  jackpot?: number;
  /**
   * Determines if an item is a jackpot
   */
  isJackpot?: boolean;
  /**
   * The name of the item
   */
  name: string;
}

/**
 * Primary UI component for user interaction
 */
const Card: React.FC<CardProps> = ({ src, ribbonType, jackpot, isJackpot, name }) => {
   //refresh page after evry 5s
   const router = useRouter();

   React.useEffect(() => {
     let canceler: any;
     function raf(ms: number) {
       let start = performance.now();
       const loop = (curr: number) => {
         if (curr - start >= ms) {
          //  router.refresh();
           start = curr;
         }
 
         canceler = requestAnimationFrame(loop);
       };
       canceler = requestAnimationFrame(loop);
     }
 
     raf(5000);
 
     return () => {
       cancelAnimationFrame(canceler);
     };
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


  return (
    <article className="game_card">
      <span className="game_card-default">
        <Image src={src} alt="game image" width={260} height={154} />
      </span>
      <span className="game_card-play">
        <span className="game_card-play--name">{name}</span>
        <span>Play</span>
      </span>

      {isJackpot && (
        <span className="game_card-jackpot">
          <span>{jackpot ?? "$123,564.78"}</span>
        </span>
      )}

      {ribbonType === "new" && (
        <span className="game_card-ribbon">
          <NewRibbon />
        </span>
      )}
      {ribbonType === "top_games" && (
        <span className="game_card-ribbon">
          <TopRibbon />
        </span>
      )}
    </article>
  );
};

export default Card;
