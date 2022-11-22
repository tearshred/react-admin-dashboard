import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { TiChartLine } from 'react-icons/ti'
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine } from '../components';

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';

const AccountSummary = () => {

  const { currentColor } = useStateContext();

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        rounded-xl w-full lg:w-5/6 p-8 pt-9 m-3'>
          <div className='flex justify-between border-b-1'>
            <h1 className='font-bold text-2xl mb-3'>Financial Summary</h1>
            <TiChartLine className='text-2xl' />
          </div>
          <div className='flex justify-between items-center mt-3'>
            <div>
              <p className='font-bold text-gray-400 dark:text-white'>Revenue</p>
              <p className='text-2xl'>$63,449.78</p>
            </div>
            <div>
              <p className='font-bold text-gray-400 dark:text-white'>Expenses</p>
              <p className='text-2xl text-red-500'>- $23,449.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor={currentColor}
              text='Download Report'
              borderRadius='10px'
              size='md'
            />
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

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200
           dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,341.32</span>
                  <span className='p-1.5 hover:drop-shadow-xl 
                    cursor-pointer rounded-full bg-green-400 text-white ml-3 text-xs'
                  >
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$43,831.16</span>
                </p>
                <p className='text-gray-500 mt-1'>Expenses</p>
              </div>
              <div className='mt-5'>
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