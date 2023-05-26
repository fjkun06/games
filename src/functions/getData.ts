export async function getData() {
  const data = await fetch("http://stage.whgstage.com/front-end-test/games.php");
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