import { Data, getDataByCategory } from "@/functions/getDataByCategory";

async function getData() {
  const data = await fetch("http://stage.whgstage.com/front-end-test/games.php", { next: { revalidate: 5 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return data.json();

  // return res.json();
}
async function getJackpotData() {
  const data = await fetch("https://stage.whgstage.com/front-end-test/jackpots.php", { next: { revalidate: 5 } });
  // The return value is *not* serialized
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.json();

  // return res.json();
}
export default async function Page() {
  const data = await getData();
  const jackpots = await getJackpotData();
  return (
    <section className="games_page">
      {...getDataByCategory(
        data.filter((c: Data) => c?.categories?.some((el) => el === "top")),
        jackpots,
        "top_games"
      )}
    </section>
  );
}
