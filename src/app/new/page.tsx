import { Data, getDataByCategory } from "@/functions/getDataByCategory";
import { getData } from "@/functions/getData";
import { getJackpotData } from "@/functions/getJackpotData";

export default async function Page() {
  const data = await getData();
  const jackpots = await getJackpotData();
  return data.length > 0 ? (
    <section className="games_page">
      {...getDataByCategory(
        data.filter((c: Data) => c?.categories?.some((el) => el === "new")),
        jackpots,
        "new"
      )}
    </section>
  ) : (
    <section className="games_page">
      <p>Error while fetching data, please refresh the page.</p>
    </section>
  );
}
