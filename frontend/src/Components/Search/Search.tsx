import React, { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
  onClick: (e: SyntheticEvent) => void;
  search: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onClick, search, handleChange }) => {
  return (
    <div>  
      <input 
        value={search} 
        onChange={handleChange} 
      />
      <button onClick={(e) => onClick(e)}>
        Buscar
      </button>
    </div>
  );
};

export default Search;