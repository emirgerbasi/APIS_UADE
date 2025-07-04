import React from "react";
import DishesCard from "../layouts/DishesCard";

const Menu = () => {
  const recommendedDishes = [
    {
      img: "/img/img1.jpg",
      title: "Pizza Prosciutto e Rucola",
      price: "$35.000",
      category: "Pizzas"
    },
    {
      img: "/img/img2.jpg",
      title: "Risotto",
      price: "$18.250",
      category: "Pastas"
    },
    {
      img: "/img/img3.jpg",
      title: "Ravioli di Ricotta e Spinaci",
      price: "$17.500",
      category: "Pastas"
    }
  ];

  return (
    <div className="py-16 flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pb-10">
        Nuestros recomendados del mes
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {recommendedDishes.map((dish, index) => (
          <DishesCard
            key={index}
            img={dish.img}
            title={dish.title}
            price={dish.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
