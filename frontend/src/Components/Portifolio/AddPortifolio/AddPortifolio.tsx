import React, { SyntheticEvent } from "react";

interface Props {
  onPortifolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortifolio = ({ onPortifolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortifolioCreate}>
      <input readOnly hidden value={symbol} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPortifolio;