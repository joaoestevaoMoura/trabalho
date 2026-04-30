import React, { ChangeEvent,SyntheticEvent,useState } from 'react'

type Props = {}

const Search: React.FC<Props> = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };
  const onclick = (e: SyntheticEvent) =>{
    console.log(e);
  };

  return (
    <div>  
      <input value={search} onChange={(e) => handleChange(e)} ></input>
      <button onClick={(e) =>  onclick(e)}/>
    </div>
  )
}
export default Search