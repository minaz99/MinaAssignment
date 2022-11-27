import React, { useEffect, useState } from "react";
import axios from "axios";
function Country(props) {
  const cd = {
    capital: "",
    languages: [],
    population: 0,
  };

  const url = `https://restcountries.com/v3.1/name/${props.country}?fields=capital,languages,population`;
  const [countryData, setCountryData] = useState(cd);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getCountryData = async () => {
      try {
        const languages = [];
        const res = await axios.get(url);
        for (var property in res.data[0]["languages"]) {
          languages.push(res.data[0]["languages"][property]);
        }
        const { capital, population } = res.data[0];

        setCountryData({ capital, languages, population });
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCountryData();
  });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-slate-600 shadow-md rounded-md width-full p-4 flex-col">
          <div className="text-center text-2xl text-amber-300">
            {props.country}
          </div>

          <div className="text-xl text-violet-300">
            Capital: {countryData.capital}
          </div>
          <div className="text-xl text-violet-300">
            Population: {countryData.population}
          </div>
          <div className="flex text-violet-300 text-xl space-x-2">
            <div className="text-xl text-violet-300">Languages:</div>
            <ol>
              {countryData.languages.map((lang) => {
                return <li>{lang}</li>;
              })}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default Country;
