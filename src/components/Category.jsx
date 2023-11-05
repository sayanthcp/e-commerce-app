import React from 'react'

const Category = ({item, index}) => {
  return (
         <div key={index} className="relative w-full h-full">
            <div className="w-full h-full absolute bg-gradient-to-r from-black/50 "></div>
            <img src={item.src} alt="" className="object-cover w-full" />
            <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0">
              <h2 className="text-white font-medium text-3xl py-2">{item.title}</h2>
              <button className="btn">See more</button>
            </div>
          </div>
  )
}

export default Category
