import { Search, LocalMall, DragHandle,Mail, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  //state
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };
  return (
    <div className="navbar w-full h-[60px] shadow-lg relative z-10">
      <div className="wrapper h-full flex justify-between items-center px-[5px] md:px-[20px] py-[10px]">

        {/* search */}
        <div className="flex flex-1 gap-3 items-center">
          <p className="cursor-pointer">En</p>
          <div className="flex border-[2px] border-solid rounded-md  focus-within:border-[#8a4af3] shadow-md p-1 transition-all">
            <input type="text" placeholder="search" className="outline-none" />
            <Search className="cursor-pointer" />
          </div>
        </div>

        {/* logo */}
        <div className="flex-1">
          <h1 className="hidden md:block text-3xl font-bold text-[#8a4af3] px-0 md:px-2">
            Summer Kings
          </h1>
          <div className="md:hidden xs:hidden">
            <LocalMall
              className="text-[#8a4af3] ml-5"
              style={{ fontSize: "38px" }}
            />
          </div>
        </div>

        {/* nav items */}
        <div className="hidden md:block">
          <div className="flex flex-1 gap-3 items-center">
            <button className="outline-none border-none bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:opacity-80">Register</button>
            <button className="outline-none border-none bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:opacity-80">Sign in</button>
            <Badge badgeContent={2} color="error">
              <ShoppingCart color="primary" className="cursor-pointer"/>
            </Badge>
          </div>
        </div>
    
        {/* mobile menu */}
        <div className="md:hidden">
          <DragHandle onClick={navHandler} className="cursor-pointer" />
          {nav &&
            <div className="absolute top-[60px] right-[5px] w-[100px] h-[150px] bg-gray-400 rounded-md shadow-lg">
                <div className="flex flex-1 flex-col">
                    <h4 className="w-full text-center text-white py-3 border-b text-lg">Register</h4>
                    <h4 className="w-full text-center text-white py-3 border-b text-lg">Sign in</h4>
                    <div className="flex flex-col items-center mt-3">
                      <Badge badgeContent={2} color="error">
                        <ShoppingCart color="primary" className="cursor-pointer"/>
                      </Badge>
                    </div>
                </div>
            </div>
           }
        </div>

      </div>
    </div>
  );
};

export default Navbar;
