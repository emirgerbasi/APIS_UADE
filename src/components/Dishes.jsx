import React, { useState, useEffect } from "react";
import DishesCard from "../layouts/DishesCard";
import { getDishes } from "../services/api";

const Dishes = () => {
  const [dishes, setDishes] = useState({
    Entradas: [],
    Pizzas: [],
    Pastas: [],
    Postres: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getDishes();
        const allDishes = response.data;
        
        // Agrupar platos por categoría
        const groupedDishes = allDishes.reduce((acc, dish) => {
          if (!acc[dish.category]) {
            acc[dish.category] = [];
          }
          acc[dish.category].push(dish);
          return acc;
        }, {
          Entradas: [],
          Pizzas: [],
          Pastas: [],
          Postres: []
        });

        setDishes(groupedDishes);
      } catch (error) {
        console.error('Error fetching dishes:', error);
        setError('Error al cargar los platos. Por favor, intente nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  if (loading) {
    return (
      <div className="py-16 flex justify-center items-center">
        <p className="text-xl">Cargando platos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 flex justify-center items-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-16 flex flex-col justify-center items-center lg:px-32 px-5">
      <div className="space-y-16">
        <h1 className="text-4xl font-semibold text-center">
          Nuestros Platos
        </h1>
        
        <div>
          <h1 className="text-4xl font-semibold text-center pb-10">
            Entradas
          </h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {dishes.Entradas.map((dish) => (
              <DishesCard 
                key={dish._id}
                img={dish.imageUrl} 
                title={dish.title} 
                price={`$${dish.price.toLocaleString()}`} 
              />
            ))}
          </div>
        </div>

        <div>
          <h1 id="pizzas" className="text-4xl font-semibold text-center pb-10 mb-6">
            Pizzas
          </h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {dishes.Pizzas.map((dish) => (
              <DishesCard 
                key={dish._id}
                img={dish.imageUrl} 
                title={dish.title} 
                price={`$${dish.price.toLocaleString()}`} 
              />
            ))}
          </div>
        </div>

        <div>
          <h1 id="pastas" className="text-4xl font-semibold text-center pb-10 mb-6">
            Pastas
          </h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {dishes.Pastas.map((dish) => (
              <DishesCard 
                key={dish._id}
                img={dish.imageUrl} 
                title={dish.title} 
                price={`$${dish.price.toLocaleString()}`} 
              />
            ))}
          </div>
        </div>
   
        <div>
          <h1 id="postres" className="text-4xl font-semibold text-center pb-10 mb-6">
            Postres
          </h1>
          <div className="flex flex-wrap gap-8 justify-center">
            {dishes.Postres.map((dish) => (
              <DishesCard 
                key={dish._id}
                img={dish.imageUrl} 
                title={dish.title} 
                price={`$${dish.price.toLocaleString()}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
