import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { searchCompanies } from "./api";
import { CompanySearch } from "./company";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string |  null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!search.trim()) return; // 🔥 evita erro 400

    const result = await searchCompanies(search);
    console.log(result);

    if (result.length > 0) {
      setSearchResult(result);
    }
  };

  return (
    <div className="App">
      <Search
        onClick={onClick}
        search={search}
        handleChange={handleChange}
      />
      {serverError && <div>Unable to connect to API</div>}

      <CardList companies={searchResult} />
    </div>
  );
}

export default App;