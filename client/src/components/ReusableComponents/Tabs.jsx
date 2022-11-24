import React, { useState, useEffect } from 'react';

const Tabs = ({ values, currentColor, className, ...props }) => {
    
    const [activeTab, setActiveTab] = useState(values[0]);

    useEffect(() => {
      props.changeActiveTab(activeTab)
    }, [activeTab])
    

    return (
        <>
            <div className='flex flex-row justify-between w-full'>
                {values.map(value => (
                    <div
                        className={className}
                        style={{ backgroundColor: currentColor }}
                        key={value}
                        value={value}
                        activeTab={activeTab === value}
                        onClick={() => setActiveTab(value)}
                    >
                        <div
                            className='w-full p-2 cursor-pointer
                             hover:bg-white hover:text-black
                             text-center duration-500
                            '
                        >
                            {value}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Tabs