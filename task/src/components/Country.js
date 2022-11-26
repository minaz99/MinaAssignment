import React from "react";
import axios from "axios";
function Country(props) {
  return (
    <div className="bg-slate-600 shadow-md rounded-md flex-col">
      <div className="text-center text-2xl text-amber-300">{props.country}</div>
      <div className="text-xl text-violet-300">Capital: {props.Capital}</div>
      <div className="text-xl text-violet-300">
        Population: {props.population}
      </div>
      <div className="text-xl text-violet-300">
        Languages: {props.Languages}
      </div>
    </div>
  );
}

export default Country;
