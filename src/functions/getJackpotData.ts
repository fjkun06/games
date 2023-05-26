export async function getJackpotData() {
  const data = await fetch("https://stage.whgstage.com/front-end-test/jackpots.php");
  // The return value is *not* serialized
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.json();

  // return res.json();
}
