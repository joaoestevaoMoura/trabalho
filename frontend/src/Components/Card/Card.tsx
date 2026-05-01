import AddPortifolio from "../Portifolio/AddPortifolio/AddPortifolio";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
  onPortifolioCreate: (e: React.SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ companyName, ticker, price, onPortifolioCreate }) => {
  return (
    <div className="card">
      <img src="https://picsum.photos/200/150" alt="empresa" />
      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
        <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <AddPortifolio onPortifolioCreate={onPortifolioCreate} symbol={ticker} />
      </div>
    </div>
  );
};

export default Card;