import React, { useEffect, useState } from 'react';
import { TiChartLine } from 'react-icons/ti';
import { Link, NavLink } from 'react-router-dom';

import { useStateContext } from '../../contexts/ContextProvider';

import { Button } from '../../components';

const FinancialSummary = (props) => {

    const { currentColor } = useStateContext();

    return (
        <div>
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
                    <p className='text-2xl'>{props.earningsData}</p>
                </div>
                <div>
                    <p className='font-bold text-gray-400 dark:text-white'>Expenses</p>
                    <p className='text-2xl text-red-500'>- {props.expenseData}</p>
                </div>
            </div>
            <div className='flex justify-between mt-3'>
                <div>
                    <p className='font-bold text-gray-400 dark:text-white'>Profit</p>
                    <p className='text-2xl text-green-500'>+ {props.profitData} </p>
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
    )
}

export default FinancialSummary