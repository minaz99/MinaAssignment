import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Country from "./Country";
function CountriesTable(props) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [countriesOrdered, setCountriesOrdered] = useState([]);
  const api = `https://random-data-api.com/api/v2/addresses`;

  const reOrderCountries = async () => {
    const countryDetails = [];
    const orderedCountries = [];

    for (let i = 0; i < countries.length; i++) {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${countries[i]}?fields=population`
        );
        const { population } = res.data[0];
        const c = countries[i];
        countryDetails.push({ c, population });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    countryDetails.sort((c1, c2) => c2.population - c1.population);
    countryDetails.forEach((cntry) => orderedCountries.push(cntry.c));
    setCountriesOrdered(orderedCountries);
  };

  const getCountry = async () => {
    let data = [];
    if (count < 5 || count > 20) setError("Number must be between 5-20");
    else {
      for (let i = 0; i < count; i++) {
        try {
          setIsLoading(true);
          const res = await axios.get(api);
          data.push(res.data.country);
          setError("");
        } catch (err) {
          console.log(err);
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
      setCountries(data);
    }
  };

  useEffect(() => {
    getCountry();
  }, [count]);

  useEffect(() => {
    reOrderCountries();
  }, [countries]);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter a number 5-20"
          className="bg-rose-400 rounded-md p-2 "
          onChange={(e) => setCount(e.target.value)}
        />

        <div className="flex-col overflow-y-scroll space-y-2">
          {error === "" ? (
            <div />
          ) : (
            <div className="text-rose-600 text-xl">{error}</div>
          )}
          {isLoading ? (
            <div className="text-2xl font-semibold text-center">
              Waiting....
            </div>
          ) : (
            countriesOrdered.map((country) => {
              return <Country country={country} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default CountriesTable;
