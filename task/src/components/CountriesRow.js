import React from "react";
import Country from "./Country";
function CountriesRow(props) {
  return (
    <div className="flex">
      {props.countries.map((c) => {
        return (
          <div className="bg-slate-600 text-amber-300 text-center shadow-md rounded-md">
            {c}
          </div>
        );
      })}
    </div>
  );
}

export default CountriesRow;
