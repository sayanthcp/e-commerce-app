import React, { useState } from 'react'
import {ArrowLeft, ArrowRight} from '@mui/icons-material';
import {ApiSlides} from '../assets/ApiSlides'

const Slider = () => {
    //state
    const [slide,] = useState(ApiSlides)
    const [activeSlide, setActiveSlide] = useState(0)

    //onclick slide handler
    const slideHandler = () => {
        
        {activeSlide === slide.length - 1 ? setActiveSlide(0) : setActiveSlide(1)}
    }


  return (
    <div className='h-[600px] flex justify-between items-center shadow-md'>
      {/* left arrow */}
      <div className='cursor-pointer shadow-lg'>
        <ArrowLeft style={{fontSize: "50px"}} onClick={slideHandler}/>
      </div>

      {/* slider */}
     {slide?.map((item,index) => {
        if(activeSlide === index) {
            return(
                <div key={index} className={`relative w-full h-[550px] flex justify-center items-center border-[#c0c0c0] overflow-hidden shadow-2xl rounded-lg ` + item?.background}>
    
                <div className='flex justify-center items-center h-full'>
                    <img className='h-full object-cover' src={item?.image} alt="" />
                </div>
                <div className='flex flex-col flex-1 place-items-start justify-center -ml-12 py-8'>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>{item.content?.heading}</h1>
                    <p className='text-xl md:text-2xl lg:text-3xl text-white font-bold py-4 lg:py-8'>{item.content?.paragraph}</p>   
                    <button className='btn'>Shop now</button> 
                </div>
        
              </div>
            )
        }
     })}

      {/* right arrow */}
      <div className='cursor-pointer shadow-lg'>
        <ArrowRight style={{fontSize: "50px"}} onClick={slideHandler}/>
      </div>
    </div>
  )
}

export default Slider
