import logo from "./logo.svg";
import "./App.css";
import CountriesTable from "./components/CountriesTable";
import { Input } from "postcss";
import { useState } from "react";
function App() {
  return (
    <div className="bg-amber-200 h-screen">
      <CountriesTable />
    </div>
  );
}

export default App;
