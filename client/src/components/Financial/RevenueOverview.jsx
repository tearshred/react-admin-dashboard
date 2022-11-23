import React, { useEffect, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

import { Button, SparkLine, Stacked } from '../../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const RevenueOverview = (props) => {

    const { currentColor } = useStateContext();


    return (
        <div className='flex gap-10 flex-wrap justify-center max-w-screen-xl'>
            <div className='bg-white dark:text-gray-200
           dark:bg-secondary-dark-bg m-4 p-5 rounded-2xl w-full'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-xl'>Revenue Overview</p>
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
                                <span className='text-3xl font-semibold'>{props.marketingBudgetData}</span>
                                <span className='p-1.5 hover:drop-shadow-xl 
                    cursor-pointer rounded-full bg-green-400 text-white ml-3 text-xs'
                                >
                                    {Math.round(props.percentage)} %
                                </span>
                            </p>
                            <p className='text-gray-500 dark:text-white mt-1'>Annual Marketing Budget</p>
                        </div>
                        <div className='mt-8'>
                            <p>
                                <span className='text-3xl font-semibold'>{props.marketingExpenses}</span>
                            </p>
                            <p className='text-gray-500 dark:text-white mt-1'>Marketing Expenses</p>
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
    )
}

export default RevenueOverview