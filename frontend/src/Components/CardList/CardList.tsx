import { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";

interface Props {
  companies: CompanySearch[];
  onPortifolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ companies, onPortifolioCreate }) => {
  return (
    <div>
      {companies.length > 0 ? (
        companies.map((company) => (
          <Card
            key={company.symbol}
            companyName={company.name}
            ticker={company.symbol}
            price={0}
            onPortifolioCreate={onPortifolioCreate}
          />
        ))
      ) : (
        <h2>Nenhum resultado</h2>
      )}
    </div>
  );
};

export default CardList;