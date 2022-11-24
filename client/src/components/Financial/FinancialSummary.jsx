import React, { useEffect, useState } from 'react';
import { TiChartLine } from 'react-icons/ti';
import { Link, NavLink } from 'react-router-dom';
import { percentageCalculator } from '../../components/index';
import { Button, CircularGauge } from '../../components';

import { useStateContext } from '../../contexts/ContextProvider';

const FinancialSummary = (props) => {

    const { currentColor } = useStateContext();

    const [percentage, setPercentage] = useState();

    useEffect(() => {
        if (props.earnings !== 'undefined' && props.expenses !== 'undefined') {
            setPercentage(Math.round(percentageCalculator(props.expenses, props.earnings)));
        }
    }, [props.earnings, props.expenses]);

    return (
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
                        <p className='text-2xl'> {(props.currencyNumberFormat(props.earnings))}</p>
                    </div>
                    <div>
                        <p className='font-bold text-gray-400 dark:text-white'>Expenses</p>
                        <p className='text-2xl text-red-500'>- {(props.currencyNumberFormat(props.expenses))}</p>
                    </div>
                </div>
                <div className='flex justify-between mt-3'>
                    <div>
                        <p className='font-bold text-gray-400 dark:text-white'>Profit</p>
                        <p className='text-2xl text-green-500'>+ {(props.currencyNumberFormat(props.profit))}</p>
                    </div>
                </div>

                <div className='mt-6'>
                    <div>
                        <Button
                            color='white'
                            bgColor={currentColor}
                            text='Download Report'
                            // borderRadius='10px'
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

            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        rounded-xl w-1/3 p-8 pt-9 m-4 ml-0 text-center'>
                <div className='border-b-1'>
                    <h1 className='font-bold text-2xl mb-3'>Profitability</h1>
                </div>

                <div className='text=2xl font-bold flex items-center h-full'>
                    <CircularGauge
                        className='text-black dark:text-white fill-black dark:fill-white'
                        value={percentage}
                        stroke={currentColor}
                    />
                </div>
            </div>
        </div>

    )
}

export default FinancialSummary