import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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


  useEffect(() => {
    fetch('/api').then(response => response.json()
    ).then(
      data => {
        setEarnings(data.earnings);
        setExpenses(data.expenses);
        setProfit(data.earnings - data.expenses);
        setMarketingBudget(data.marketingBudget);
        setMarketingExpenses(data.marketingExpenses);
      }
    )
  }, []);

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