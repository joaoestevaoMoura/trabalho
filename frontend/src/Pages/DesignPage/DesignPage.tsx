import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData'

type Props = {}

const tableConfig = [
  {
    label: "Year",
    render: (company: any) => company.calendarYear,
    subTitle: "Year of the report"
  }
]

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <RatioList config={tableConfig} data={testIncomeStatementData[0]} />
      <Table />
    </>
  )
}

export default DesignPage