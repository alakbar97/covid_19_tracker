import React, { useEffect, useState } from "react";

import { fetchData } from "./api";

import { Cards, Chart, CountryPicker } from "./components";

import styles from "./index.module.css";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    fetchApi();
  }, []);

  const onSelectChange = async (val) => {
    const fetchedData = await fetchData(val);
    setData(fetchedData);
    setCountry(val);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker onChange={onSelectChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
