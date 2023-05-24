import Card from "@/stories/Card";
import { nanoid } from "nanoid";
export interface Category {
  categories: string[];
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
  ribbonType?: "new" | "top_games" | null;
  categories?: string[];
}
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const getDataByCategory = (data: Data[], jackpot: Jackpot[], route?: string) => {
  const bigData: JackpotData[] = [];
  // check if element exits already before pushiing data
  data.forEach(({ name, id, image, categories }) =>
    jackpot.forEach(({ game, amount }) => {
      if (id === game) {
        if (route === "new" && categories.some((e) => e === "top")) {
          bigData.push({ name, src: `https:${image}`, jackpot: amount, isJackpot: true, ribbonType: "top_games" });
        } else if (route === "top_games" && categories.some((e) => e === "new")) {
          bigData.push({ name, src: `https:${image}`, jackpot: amount, isJackpot: true, ribbonType: "new" });
        } else if (route !== "top_games" && route !== "new" && categories.some((e) => e === "top") && categories.some((e) => e === "new")) {
          bigData.push({ name, src: `https:${image}`, jackpot: amount, isJackpot: true, ribbonType: getRandomInt(100) % 2 === 1 ? "new" : "top_games" });
        } else if (route !== "top_games" && route !== "new" && categories.some((e) => e === "top")) {
          bigData.push({ name, src: `https:${image}`, jackpot: amount, isJackpot: true, ribbonType: "top_games" });
        } else if (route !== "top_games" && route !== "new" && categories.some((e) => e === "new")) {
          bigData.push({ name, src: `https:${image}`, jackpot: amount, isJackpot: true, ribbonType: "new" });
        } else if (route !== "top_games" && route !== "new" && !categories.some((e) => e === "top") && !categories.some((e) => e === "new")) {
          bigData.push({ name, src: `https:${image}`, jackpot: amount, isJackpot: true });
        }
      } else if (!bigData.some((e) => e.name === name) && !jackpot.some((e) => e.game === id)) {
        if (route === "new" && categories.some((e) => e === "top")) {
          bigData.push({ name, src: `https:${image}`, jackpot: 0, isJackpot: false, ribbonType: "top_games" });
        } else if (route === "top_games" && categories.some((e) => e === "new")) {
          bigData.push({ name, src: `https:${image}`, jackpot: 0, isJackpot: false, ribbonType: "new" });
        } else if (route !== "top_games" && route !== "new" && categories.some((e) => e === "top") && categories.some((e) => e === "new")) {
          bigData.push({ name, src: `https:${image}`, jackpot: 0, isJackpot: false, ribbonType: getRandomInt(100) % 2 === 1 ? "new" : "top_games" });
        } else if (route !== "top_games" && route !== "new" && categories.some((e) => e === "top")) {
          bigData.push({ name, src: `https:${image}`, jackpot: 0, isJackpot: false, ribbonType: "top_games" });
        } else if (route !== "top_games" && route !== "new" && categories.some((e) => e === "new")) {
          bigData.push({ name, src: `https:${image}`, jackpot: 0, isJackpot: false, ribbonType: "new" });
        } else if (route !== "top_games" && route !== "new" && !categories.some((e) => e === "top") && !categories.some((e) => e === "new")) {
          bigData.push({ name, src: `https:${image}`, jackpot: 0, isJackpot: false });
        }
      }
      // bigData.push({ name, src: `https:${image}`, isJackpot: false, jackpot: 0 });
    })
  );
  return bigData.map((props) => <Card {...props} key={nanoid()} />);
};
