import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import ListPortifolio from "./Components/Portifolio/ListPortifolio/ListPortifolio";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { searchCompanies } from "./api";
import { CompanySearch } from "./company";

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
const onPortifolioCreate = (e: SyntheticEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const input = form.elements[0] as HTMLInputElement;
  const symbol = input.value;

  const exists = portfolioValues.find((value) => value === symbol);
  if (exists) return;

  setPortfolioValues([...portfolioValues, symbol]);
};

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    const result = await searchCompanies(search);
    if (result.length > 0) {
      setSearchResult(result);
    }
  };

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />

      <ListPortifolio portfolioValues={portfolioValues} />

      {serverError && <div>Unable to connect to API</div>}

      <CardList companies={searchResult} onPortifolioCreate={onPortifolioCreate} />
    </div>
  );
}

export default App;