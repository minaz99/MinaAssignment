import logo from "./logo.svg";
import "./App.css";
import CountriesTable from "./components/CountriesTable";
function App() {
  return (
    <div className="bg-amber-200 h-screen">
      <CountriesTable count={10} />
    </div>
  );
}

export default App;
