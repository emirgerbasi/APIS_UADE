import React from "react";

import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center lg:px-32 px-5">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="bg-[#F4ECE3] border border-gray-300 shadow-[rgba(0,_0,_0,_0.12)_0px_3px_8px] rounded-xl px-8 py-10 max-w-5xl w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold text-black text-center mb-4">Il Vero Ristorante</h2>
          <h1 className="text-4xl font-semibold text-center pb-10" style={{WebkitTextStroke: '1.5px black'}}>¿Por qué elegirnos?</h1>
          <p className="text-center text-lg text-black">
            En Il Vero Ristorante creemos que la comida es mucho más que sabores: es tradición, <br />
            encuentro y emoción. Nacimos con la idea de traer un pedacito de Italia a tu mesa,<br />
            con recetas que honran a las nonnas y una atención que te hace sentir en casa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
