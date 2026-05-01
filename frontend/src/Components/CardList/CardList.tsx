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
            id={company.symbol}
            searchResult={company}
            onPortifolioCreate={onPortifolioCreate}
          />
        ))
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </div>
  );
};

export default CardList;