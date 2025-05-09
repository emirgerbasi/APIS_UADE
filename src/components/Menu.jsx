import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pb-10">
        Nuestros recomendados del mes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Pizza Prosciutto e Rucola" price="$35.000" />
        <DishesCard img={menu2} title="Risotto" price="$18.250" />
        <DishesCard img={menu3} title="Ravioli di Ricotta e Spinaci" price="$17.500" />
      </div>
    </div>
  );
};

export default Menu;
