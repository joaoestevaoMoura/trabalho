import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';
import CompanyFinder from '../../Components/CompFinder/CompFinder';
interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };

    getProfileInit();
  }, [ticker]);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />

          <CompanyDashboard ticker={ticker!}>
            <Tile
              title="Company Name"
              subTitle={company.companyName || "N/A"}
            />

            <Tile
              title="Price"
              subTitle={String(company.price ?? "N/A")}
            />

            <Tile
              title="Sector"
              subTitle={company.sector || "N/A"}
            />

            <Tile
              title="DCF"
              subTitle={String(company.dcf ?? "N/A")}
            />

            <CompanyFinder ticker={company.symbol} />
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;