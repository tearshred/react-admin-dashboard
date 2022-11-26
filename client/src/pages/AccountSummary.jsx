import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Stacked, Pie, Button, SparkLine, FinancialSummary, RevenueOverview } from '../components';

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';

import { currencyNumberFormat, percentageCalculator } from '../components/index';



const AccountSummary = () => {

  const [backendData, setBackendData] = useState([{}]);

  const [earnings, setEarnings] = useState();
  const [expenses, setExpenses] = useState();
  const [profit, setProfit] = useState();
  const [marketingBudget, setMarketingBudget] = useState();
  const [marketingExpenses, setMarketingExpenses] = useState();
  const [q1, setQ1] = useState()
  const [q2, setQ2] = useState()
  const [q3, setQ3] = useState()
  const [q4, setQ4] = useState()

  // useEffect(() => {
  //   fetch('/api/ledger').then(response => response.json()
  //   ).then(
  //     data => {
  //       setEarnings(data.earnings);
  //       setExpenses(data.expenses);
  //       setProfit(data.earnings - data.expenses);
  //       setMarketingBudget(data.marketingBudget);
  //       setMarketingExpenses(data.marketingExpenses);
  //       setQ1(data.q1);
  //       setQ2(data.q2);
  //       setQ3(data.q3);
  //       setQ4(data.q4);
  //     }
  //   )
  // }, []);

  const [data, setData] = useState({})

  useEffect(() => {
    fetch('/api/ledger')
    .then(res => res.json())
    .then(data => setData(data));
    console.log(data)
  }, [])

  return (
    <div className='mt-12 mb-28 max-w-screen-xl m-auto'>

      <FinancialSummary
        currencyNumberFormat={currencyNumberFormat}
        earnings={earnings}
        expenses={expenses}
        profit={profit}
      />

      <div className='flex m-3 flex-wrap justify-center gp-1 items-center'>
        {earningData.map((item) =>
          <div
            key={item.title} className='bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg md:w-56 m-2 p-4 pt-9 rounded-2xl'
          >
            <button
              type='button'
              style={{
                color: item.iconColor,
                backgroundColor: item.iconBg
              }}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
            >
              {item.icon}
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>
                {item.amount}
              </span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className='text-sm text-gray-400 mt-1'>
              {item.title}
            </p>
          </div>
        )}
      </div>

      <RevenueOverview
        currencyNumberFormat={currencyNumberFormat}
        marketingBudget={marketingBudget}
        marketingExpenses={marketingExpenses}
        expenseData={expenses}
      />
    </div>
  )
}

export default AccountSummary