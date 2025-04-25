import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg bg-[#F4ECE3]">
      <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-4">
  <img
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
    src={props.img}
    alt="img"
  />
</div>
      <div className=" space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6" style={{color: '#111'}}>{props.title}</h3>
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" font-semibold text-lg">{props.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
