import React, { useEffect, useState } from "react";
import axios from "axios";
import CountriesRow from "./CountriesRow";
function CountriesTable(props) {
  const [countries, setCountries] = useState([]);
  const [countriesPerRow, setCountriesPerRow] = useState([]);
  const [error, setError] = useState("");
  //const [countriesCount, setCountriesCount] = useState(0);
  const api = `https://random-data-api.com/api/v2/addresses`;

  const requestAPI = async () => {
    let data = [];
    let rowData = [];
    for (let i = 0; i < props.count; i++)
      try {
        const res = await axios.get(api);
        data.push(res.data.country);
      } catch (err) {
        console.log(err);
      }
    setCountries(data);
  };

  useEffect(() => {
    requestAPI();
  }, [props.count]);

  return (
    <div>
      <div>
        {countries.length > 0 ? (
          <div>
            {countries.map((country) => {
              return <div>{country}</div>;
            })}
          </div>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
}

export default CountriesTable;
