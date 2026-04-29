import React, { useState } from 'react'

type Props = {}

const Search: React.FC<Props> = () => {
  const [search, setSearch] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input value={search} onChange={onChange} />
    </div>
  )
}

export default Search