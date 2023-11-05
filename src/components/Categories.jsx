import React from "react";
import { ApiCategories } from "../assets/ApiCategories";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {ApiCategories.map((item,index) => {
        return (
          <Category item={item} key={index}/>
        );
      })}
    </div>
  );
};

export default Categories;
