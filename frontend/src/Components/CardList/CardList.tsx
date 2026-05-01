import Card from "../Card/Card";
import { CompanySearch } from "../../company";

interface Props {
  companies: CompanySearch[];
}

const CardList: React.FC<Props> = ({ companies }) => {
  return (
    <div>
      {companies.length > 0 ? (
        companies.map((company) => (
          <Card
            key={company.symbol}
            companyName={company.name}
            ticker={company.symbol}
            price={0}
          />
        ))
      ) : (
        <h2>Nenhum resultado</h2>
      )}
    </div>
  );
};

export default CardList;