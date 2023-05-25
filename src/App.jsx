import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import getBundlesWithScents from "../utils/getBundlesWithMoreInfo";
import CollectionPage from "./CollectionPage";
import Filter from "./Filter";

const App = () => {
  const [data, setData] = useState([]);
  const [scents, setScents] = useState([]);

  async function getData() {
    try {
      const res = await getBundlesWithScents();
      setData(res);
      console.log(res)

      const uniqueScents = [];
      for (let i = 0; i < res.length; ++i) {
        uniqueScents.push(res[i].scents);
      }
      const uniqueScentsFlat = uniqueScents.flat();
      const uniqueScentSet = new Set(uniqueScentsFlat);
      setScents([...uniqueScentSet]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Filter scents={scents} />
      <CollectionPage data={data} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
