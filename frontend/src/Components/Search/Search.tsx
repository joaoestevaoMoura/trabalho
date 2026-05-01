import { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  search: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: SyntheticEvent) => void;
}

const Search: React.FC<Props> = ({ search, handleChange, onClick }) => {
  return (
    <form onSubmit={onClick}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Buscar empresa..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Search;