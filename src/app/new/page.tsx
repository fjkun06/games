"use client";

import Card from "@/stories/Card";
import { nanoid } from "nanoid";

export default function Jackpot() {
  return <section className="games_new">{...new Array(15).fill(15).map((x, i) => <Card name='card to  be played by fjkun06' key={nanoid()} src={''} />)}</section>;
}
