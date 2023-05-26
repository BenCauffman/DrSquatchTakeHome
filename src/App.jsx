import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import getBundlesWithMoreInfo from "../utils/getBundlesWithMoreInfo";
import Filter from "./Filter";
import CollectionPage from "./CollectionPage";

const App = () => {
  const [data, setData] = useState([]);
  const [scents, setScents] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [checkedScents, setCheckedScents] = useState([]);
  const [bundlesToShow, setBundlesToShow] = useState([]);

  async function getData() {
    try {
      const res = await getBundlesWithMoreInfo();
      setData(res);

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
    setLoaded(true);
  });

  useEffect(() => {
    const newData = data.filter((bundle) => {
      for (let i = 0; i < bundle.scents.length; ++i) {
        if (checkedScents.includes(bundle.scents[i])) {
          return bundle;
        }
      }
    });
    console.log(newData)
    setBundlesToShow(newData);
  }, [checkedScents]);

  return (
    <>
      {scents ? (
        <>
          <Filter
            scents={scents}
            checkedScents={checkedScents}
            setCheckedScents={setCheckedScents}
          />
          <CollectionPage bundlesToShow={bundlesToShow} />
        </>
      ) : (
        "loading"
      )}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
