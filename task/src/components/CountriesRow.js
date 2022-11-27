import React from "react";
import Country from "./Country";
function CountriesRow(props) {
  return (
    <div className="flex space-x-3 space-y-3 justify-center">
      {props.countries.map((c) => {
        return (
          <div className="bg-slate-600 h-44 w-44 text-amber-300 text-center shadow-md rounded-md">
            {c}
          </div>
        );
      })}
    </div>
  );
}

export default CountriesRow;
