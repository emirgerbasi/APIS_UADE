import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 border-2 border-gray-400 md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" style={{backgroundColor: '#DCCABC'}}>
      <div>
        <p style={{color: '#111'}}>
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
