import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">United States</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;

// import React, { useState, useEffect } from "react";
// import { NativeSelect, FormControl } from "@material-ui/core";

// import styles from "./CountryPicker.module.css";

// import { fetchCountries } from "../../api";

// const Countries = ({handleCountryChange})

// const CountryPicker = () => {
//   const { countries, setCountries } = useState([]);
//   useEffect(() => {
//     const fetchAPI = async () => {
//       setCountries(await fetchCountries());
//     };
//     fetchAPI();
//   }, []);
//   // console.log(fetchedCountries);
//   return (
//     <FormControl className={styles.formControl}>
//       <NativeSelect>
//         <options value="global"> GLOBAL </options>{" "}
//       </NativeSelect>{" "}
//     </FormControl>
//   );
// };

// export default CountryPicker;
