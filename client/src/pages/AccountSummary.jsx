import React from 'react';
import { TiChartLine } from 'react-icons/ti'
import { GoPrimitiveDot } from 'react-icons/go';
import { Link, NavLink } from 'react-router-dom';

import { Stacked, Pie, Button, SparkLine } from '../components';

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';

const AccountSummary = () => {

  const { currentColor } = useStateContext();

  return (
    <div className='mt-12 mb-28 max-w-screen-xl m-auto'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        rounded-xl w-full p-8 pt-9 m-4'>
          <div className='flex justify-between border-b-1'>
            <h1 className='font-bold text-2xl mb-3'>Financial Summary</h1>
            <TiChartLine className='text-2xl' />
          </div>
          <div className='mt-3 text=2xl'>
            <p>Fiscal Year {new Date().getFullYear()}</p>
          </div>
          <div className='flex justify-between items-center mt-3'>
            <div>
              <p className='font-bold text-gray-400 dark:text-white'>Total Revenue</p>
              <p className='text-2xl'>$ 6,237,449.78</p>
            </div>
            <div>
              <p className='font-bold text-gray-400 dark:text-white'>Expenses</p>
              <p className='text-2xl text-red-500'>- $ 2,633,823.17</p>
            </div>
          </div>
          <div className='flex justify-between mt-3'>
            <div>
              <p className='font-bold text-gray-400 dark:text-white'>Profit</p>
              <p className='text-2xl text-green-500'>+ $ 3,063,626.61 </p>
            </div>
          </div>
          <div className='mt-6'>
            <div>
              <Button
                color='white'
                bgColor={currentColor}
                text='Download Report'
                borderRadius='10px'
                size='md'
              />
            </div>
            <div className='mt-3 grid'>
              <NavLink
                to={'/orders'}
                className='justify-self-end'
              >
                <p className='hover:underline hover:underline-offset-4'>View Full Report</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
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

      <div className='flex gap-10 flex-wrap justify-center max-w-screen-xl'>
        <div className='bg-white dark:text-gray-200
           dark:bg-secondary-dark-bg m-4 p-5 rounded-2xl w-full'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expenses</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-3 flex justify-between'>
            <h2 className='text-2xl'>Q1</h2>
            <h2 className='text-2xl'>Q2</h2>
            <h2 className='text-2xl'>Q3</h2>
            <h2 className='text-2xl'>Q4</h2>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$ 2,000,000.00</span>
                  <span className='p-1.5 hover:drop-shadow-xl 
                    cursor-pointer rounded-full bg-green-400 text-white ml-3 text-xs'
                  >
                    23%
                  </span>
                </p>
                <p className='text-gray-500 dark:text-white mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$ 403,626.61 </span>
                </p>
                <p className='text-gray-500 dark:text-white mt-1'>Expenses</p>
              </div>
              <div className='mt-5 rounded-md'>
                <SparkLine
                  currentColor='blue'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked
                bgColor={'transparent'}
                width='320px'
                height='360px'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSummary