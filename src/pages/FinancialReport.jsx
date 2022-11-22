import React from 'react';
import { TiChartLine } from 'react-icons/ti'
import { GoPrimitiveDot } from 'react-icons/go';
import { Link, NavLink } from 'react-router-dom';

import { Stacked, Pie, Button, SparkLine } from '../components';

import { financialData, SparklineAreaData, ecomPieChartData } from '../data/financialReportData';

import { useStateContext } from '../contexts/ContextProvider';

const FinancialReport = () => {

    const { currentColor } = useStateContext();

    return (
        // Body
        <div className='mt-12 mb-28 max-w-screen-xl m-auto'>

            {/* Header */}
            <div className='text-center'>
                <h1 className='dark:text-white text-3xl font-bold text-gray-800'>Company Inc.</h1>
            </div>

            {/* Main Container */}
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>

                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
                rounded-xl w-full p-8 pt-9 m-4'>

                    {/* Top Grid, Financial Overview */}
                    <div className='grid grid-cols-4 gap-4'>

                        {/* Mapping through an array of objects and obtaining their values */}
                        {financialData.map((item) => (
                            <div key={item.title}>
                                {item.title}
                            </div>
                        ))}

                    </div>

                </div>


            </div>
        </div>
    )
}

export default FinancialReport