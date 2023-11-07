import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  PinDrop,
  Phone,
  Message,
} from "@mui/icons-material";

const Footer = () => {
    
  return (
    <div className="grid md:grid-cols-2 gap-4 p-4 relative">
      <div className="flex flex-col justify-center items-center mb-4">
        <h2 className="text-2xl mb-2">sayanthsayu@</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          perferendis maiores tempora consequatur similique? Aliquam hic enim
          quaerat magni voluptatibus praesentium sit neque, quia asperiores odio
          temporibus mollitia minima voluptas.
        </h3>
        <div className="flex w-full justify-around py-4">
          <Facebook
            style={{ width: "35px", height: "35px", padding: "4px" }}
            className="bg-blue-600 text-white rounded-full  "
          />

          <Instagram
            style={{ width: "35px", height: "35px", padding: "4px" }}
            className="bg-pink-700 text-white rounded-full  "
          />

          <Twitter
            style={{ width: "35px", height: "35px", padding: "4px" }}
            className="bg-sky-500 text-white rounded-full  "
          />

          <GitHub
            style={{ width: "35px", height: "35px", padding: "4px" }}
            className="bg-black text-white rounded-full  "
          />
        </div>
      </div>
      <div className="flex flex-col items-center m-4">
        <div className="pb-2">
          <PinDrop
            style={{ width: "30px", height: "30px" }}
            className="mr-4 text-gray-800"
          />
          state of kerala
        </div>

        <div className="pb-2">
          <Phone
            style={{ width: "30px", height: "30px" }}
            className="mr-4 text-gray-800"
          />
          +91-006-743-587
        </div>

        <div className="pb-2">
          <Message
            style={{ width: "30px", height: "30px" }}
            className="mr-4 text-gray-800"
          />
          sayanthsayu@gmail.com
        </div>        
      </div>
    </div>
  );
};

export default Footer;
