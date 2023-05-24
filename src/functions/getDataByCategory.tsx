import Card from "@/stories/Card";
import axios from "axios";
import { nanoid } from "nanoid";
export interface Category {
  categories?: string[];
  jackpot?: boolean;
}
export interface Data extends Category {
  name: string;
  id: string;
  image: string;
}
export interface Jackpot {
  amount: number;
  game: string;
}
export interface JackpotData {
  name: string;
  id?: string;
  src: string;
  amount?: number;
  isJackpot: boolean;
  jackpot: number;
}

export const getDataByCategory = (data: Data[], jackpot: Jackpot[]) => {
  const bigData: JackpotData[] = [];
  // check if element exits already before pushiing data
  data.forEach(({ name, id, image }) =>
    jackpot.forEach(({ game, amount }) => {
      if (id === game) {
        bigData.push({ name, src: `https:${image}`, jackpot: amount, isJackpot: true });
      } else if (!bigData.some((e) => e.name === name) && !jackpot.some((e) => e.game === id)) bigData.push({ name, src: `https:${image}`, isJackpot: false, jackpot: 0 });
    })
  );
  return bigData.map((props) => <Card {...props} key={nanoid()} />);
};
