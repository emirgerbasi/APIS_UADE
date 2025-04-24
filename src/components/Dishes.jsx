import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img12 from "../assets/img/img12.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pb-10">
        Nuestros Platos
      </h1>
      <h1 className="text-4xl font-semibold text-center pb-10">
        Entradas
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Bruschettas" price="$11.000" />
        <DishesCard img={img2} title="Melanzane alla parmigiana" price="$12.400" />
        <DishesCard img={img3} title="Focaccia casera con romero y aceite de oliva" price="$11.800" />
      </div>

      <h1 id="pizzas" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center pb-10 mt-10 mb-6">
        Pizzas
      </h1>
      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img4} title="Pizza Margherita" price="$26.000" />
        <DishesCard img={img5} title="Pizza Diavola" price="$30.000" />
        <DishesCard img={img6} title="Pizza Quattro Formaggi" price="$33.000" />
      </div>

      <h1 id="pastas" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center pb-10 mt-10 mb-6">
        Pastas
      </h1>
      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img7} title="Spaghetti alla Carbonara" price="$22.000" />
        <DishesCard img={img8} title="Ñoquis di Patata al Pesto" price="$25.000" />
        <DishesCard img={img9} title="Lasagna alla Napoletana" price="$28.000" />
      </div>
   
      <h1 id="postres" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center pb-10 mt-10 mb-6">
        Postres
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img10} title="Tiramisú" price="$14.000" />
        <DishesCard img={img11} title="Cannoli Siciliani" price="$15.000" />
        <DishesCard img={img12} title="Torta Caprese" price="$16.400" />
      </div>
    </div>
  );
};

export default Dishes;
