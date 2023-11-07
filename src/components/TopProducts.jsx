import React from "react";
import { ApiTopProducts } from "../assets/ApiTopProducts";
import {
  ShoppingCartOutlined,
  FavoriteBorder,
  Search,
} from "@mui/icons-material";
const TopProducts = () => {

  //hover icons
  const hoverIcon =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-125 ease-in duration-100 cursor-pointer";

  return (
    <>
      <h1 className="text-4xl text-gray-500 font-bold text-center mt-12">Top Trendings</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-12 px-4">
        {ApiTopProducts?.map((product, index) => {
          return (
            
              <div key={index} className="flex justify-center items-center overflow-hidden rounded-md shadow-lg relative">
                <img
                  src={product?.src}
                  alt={"image"}
              className="w-full h-auto object-cover"/>

                {/* icons */}
                <div
                  className=
                    'flex absolute ease-in w-full h-full cursor-pointer duration-100 justify-center items-center opacity-0 hover:opacity-100 hover:bg-black/30'      
                >
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
            
          );
        })}
      </div>
    </>
  );
};

export default TopProducts;
