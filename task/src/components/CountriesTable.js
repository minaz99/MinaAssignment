import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Country from "./Country";
function CountriesTable(props) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const api = `https://random-data-api.com/api/v2/addresses`;

  const requestAPI = async () => {
    let data = [];
    for (let i = 0; i < count; i++) {
      try {
        setIsLoading(true);
        const res = await axios.get(api);
        data.push(res.data.country);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setCountries(data);
  };

  useEffect(() => {
    requestAPI();
  }, [count]);

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
          {isLoading === true ? (
            <div>Loading...</div>
          ) : (
            countries.map((country) => {
              return <Country country={country} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default CountriesTable;
