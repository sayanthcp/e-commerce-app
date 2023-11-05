import React, { useState } from 'react'
import {ApiTopProducts} from '../assets/ApiTopProducts'
import {ShoppingCartOutlined,FavoriteBorder,Search} from '@mui/icons-material';
const TopProducts = () => {
    //state
    const [hoverEffect,setHoverEffect] = useState(' opacity-0')

    //hover icons
    const hoverIcon = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-110 ease-in duration-100 cursor-pointer'

    // mouse enter in products
    const mouseEnterHandler = () => {
        setHoverEffect(' opacity-1')
    }

    //mouse leave in products
    const mouseLeaveHandler = () => {
        setHoverEffect(' opacity-0')
    }
  return (
    <>
        <h1 className='text-4xl font-bold text-center mt-12'>Top Trendings</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-12 px-4">
            {
                ApiTopProducts?.map((product,index) => {
                    return(
                        <div key={index} className='flex justify-center items-center overflow-hidden rounded-md shadow-lg relative'
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        >
                            <img src={product?.src} alt={'image'} className='w-full h-full'/>
                            {/* icons */}
                            <div className={`flex absolute ease-in cursor-pointer duration-100 justify-center items-center ` + hoverEffect}>
                                <div className={hoverIcon}>
                                    <ShoppingCartOutlined />
                                </div>
                                <div className={hoverIcon}>
                                    <FavoriteBorder />
                                </div>
                                <div className={hoverIcon}>
                                    <Search />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        
        </div>
    </>
  )
}

export default TopProducts
