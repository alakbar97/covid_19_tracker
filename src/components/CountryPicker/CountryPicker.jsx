import { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ onChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };

    fetchApi();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => onChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
