import React from 'react'

const Footer = () => {
  return (

    <div className='p-6 mt-2 fixed bottom-0 w-full 
    text-center bg-white dark:bg-secondary-dark-bg
    z-1001 border-t-2 dark:border-gray-800'>
      <p className='dark:text-gray-200 text-gray-700'>
        © {new Date().getFullYear()} Thank you for checking out my React Dashboard Project!
      </p>
    </div>


  )
}

export default Footer