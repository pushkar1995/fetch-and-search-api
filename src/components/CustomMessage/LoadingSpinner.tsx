import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className=''>
      <div className='flex justify-center items-center mt-20'>
      <svg className="animate-spin w-8 h-8 border-4 border-indigo-500 rounded-full" role="status">
      </svg>
      </div>
      <div className='flex justify-center items-center'>
      <span className="visually-hidden text-gray-300">loading data...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner