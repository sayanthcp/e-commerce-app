import React from 'react'
import {Send} from '@mui/icons-material';

const Newsletter = () => {
  return (
    <div className='w-full h-[300px] md:h-[500px] flex flex-col justify-center items-center py-4 md:py-8 md:px-4 bg-[#c4a4f9] shadow-lg my-8'>
        <h1 className='text-4xl md:text-5xl font-medium mb-2 md:mb-4'>NEWSLETTER</h1>
        <h2 className='text-xl mb-4 md:mb-8 text-center'>Always in touch with us, for your favourite products</h2>
        <div className='flex justify-between bg-white w-[300px] md:w-[450px] h-[40px]'>
            <input 
            className='outline-none p-2 w-full'
            type="email"
            placeholder='Enter your email'
            />
            <button className='bg-green-500 h-full text-white p-2'>
                <Send/>
            </button>
        </div>
      
    </div>
  )
}

export default Newsletter
