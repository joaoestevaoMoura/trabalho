import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio'

interface Props {
  portfolioValues: string[];
}

const ListPortifolio = ({ portfolioValues }: Props) => {
  return (
    <>
      <h3>My Portifólio</h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => {
            return <CardPortfolio key={portfolioValue} portfolioValue={portfolioValue} />;
          })
        }
      </ul>
    </>
  )
}

export default ListPortifolio