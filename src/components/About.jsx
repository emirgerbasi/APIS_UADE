import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="py-16 flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img 
        src={img} 
        alt="img" 
        className="transition-transform duration-20 hover:scale-110 cursor-pointer"
      />

      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-center md:text-start pb-10">
          ¿Por qué elegirnos?
        </h1>
        <p>
        En Il Vero Ristorante creemos que la comida es mucho más que sabores: es tradición, 
        encuentro y emoción. Nacimos con la idea de traer un pedacito de Italia a tu mesa,
        con recetas que honran a las nonnas y una atención que te hace sentir en casa.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
