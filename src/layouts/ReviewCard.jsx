import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-gradient-to-br from-gray-700 to-gray-500 border-2 border-gray-400 md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p style={{color: '#F5F5F7'}} className="font-sans">
          {props.review}
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img 
          className="rounded-full w-1/4 transition-transform duration-300 hover:scale-125 cursor-pointer" 
          src={props.img} 
          alt="img" 
        />
        <h3 className="font-semibold text-black">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
