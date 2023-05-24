import axios from "axios";
interface Category {
  categories: string[];
}
interface Data {
  name: string;
  id: string;
  image: string;
  categories: string[];
}
export const getDataByCategory = (category: string) => {
  // axios.get(url).then((res) => res.data);
};
