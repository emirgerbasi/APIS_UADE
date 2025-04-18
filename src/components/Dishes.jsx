import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pb-10">
        Nuestros Platos
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Bruschettas" price="$35.000" />
        <DishesCard img={img2} title="Melanzane alla parmigiana" price="$45.000" />
        <DishesCard img={img3} title="Focaccia casera con romero y aceite de oliva" price="$38.000" />
        <DishesCard img={img4} title="Pizza Napoletana" price="$39.000" />
        <DishesCard img={img5} title="Ñoquis di patata" price="$41.000" />
        <DishesCard img={img6} title="Tiramisú" price="$43.000" />
      </div>
    </div>
  );
};

export default Dishes;
