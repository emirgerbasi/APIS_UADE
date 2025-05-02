import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const recipes = [
  {
    "nombre": "Bruschettas",
    "descripcion": "Pan tostado con tomate fresco, ajo, albahaca y aceite de oliva virgen extra.",
    "apto_celiacos": false,
    "alergenos": ["gluten"]
  },
  {
    "nombre": "Melanzane alla parmigiana",
    "descripcion": "Berenjenas al horno con salsa de tomate, queso parmesano y albahaca.",
    "apto_celiacos": true,
    "alergenos": ["lácteos"]
  },
  {
    "nombre": "Focaccia casera con romero y aceite de oliva",
    "descripcion": "Pan esponjoso italiano con romero fresco y aceite de oliva.",
    "apto_celiacos": false,
    "alergenos": ["gluten"]
  },
  {
    "nombre": "Pizza Margherita",
    "descripcion": "Clásica pizza con salsa de tomate, mozzarella y albahaca fresca.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "lácteos"]
  },
  {
    "nombre": "Pizza Diavola",
    "descripcion": "Pizza con salsa de tomate, mozzarella y salame picante.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "lácteos"]
  },
  {
    "nombre": "Pizza Quattro Formaggi",
    "descripcion": "Pizza con mezcla de cuatro quesos italianos.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "lácteos"]
  },
  {
    "nombre": "Pizza Prosciutto e Rucola",
    "descripcion": "Pizza con jamón crudo, rúcula fresca y lascas de parmesano.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "lácteos"]
  },
  {
    "nombre": "Spaghetti alla Carbonara",
    "descripcion": "Pasta con panceta, huevo y queso pecorino romano.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "huevo", "lácteos"]
  },
  {
    "nombre": "Ñoquis di Patata al Pesto",
    "descripcion": "Ñoquis de papa caseros con salsa pesto de albahaca y piñones.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "lácteos", "frutos secos"]
  },
  {
    "nombre": "Lasagna alla Napoletana",
    "descripcion": "Capas de pasta, salsa de carne, ricota y mozzarella gratinada.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "lácteos", "huevo"]
  },
  {
    "nombre": "Risotto de hongos",
    "descripcion": "Arroz cremoso con setas seleccionadas, vino blanco y parmesano.",
    "apto_celiacos": true,
    "alergenos": ["lácteos", "sulfitos"]
  },
  {
    "nombre": "Ravioli di Ricotta e Spinaci",
    "descripcion": "Pasta rellena de ricota y espinaca, con manteca y salvia o salsa a elección.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "lácteos", "huevo"]
  },
  {
    "nombre": "Tiramisú",
    "descripcion": "Postre frío de capas de mascarpone, bizcochos empapados en café y cacao.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "lácteos", "huevo", "cafeína"]
  },
  {
    "nombre": "Cannoli Siciliani",
    "descripcion": "Masa crujiente rellena de crema de ricota dulce, con chips de chocolate o fruta.",
    "apto_celiacos": false,
    "alergenos": ["gluten", "lácteos", "huevo"]
  },
  {
    "nombre": "Torta Caprese",
    "descripcion": "Torta húmeda de chocolate y almendras, sin harina.",
    "apto_celiacos": true,
    "alergenos": ["lácteos", "huevo", "frutos secos"]
  },
  {
    "nombre": "Risotto",
    "descripcion": "Arroz cremoso con setas seleccionadas, vino blanco y parmesano.",
    "apto_celiacos": true,
    "alergenos": ["lácteos", "sulfitos"]
  }
];

const RecipeDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { nombreReceta } = useParams();
  // Convert URL parameter back to original format
  const originalNombre = nombreReceta.replace(/-/g, ' ');
  const recipe = recipes.find(r => r.nombre.toLowerCase() === originalNombre.toLowerCase());

  if (!recipe) {
    return <div className="min-h-screen flex items-center justify-center">Receta no encontrada</div>;
  }

  return (
    <div className="py-16 px-5 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8 text-white">{recipe.nombre}</h1>
        
        <div className="space-y-8">
          {recipe.descripcion && (
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-white">{recipe.descripcion}</p>
            </div>
          )}
          <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={
                recipe.nombre === "Pizza Prosciutto e Rucola" ? menu1 :
                recipe.nombre === "Risotto" ? menu2 :
                recipe.nombre === "Ravioli di Ricotta e Spinaci" ? menu3 :
                recipe.nombre === "Bruschettas" ? img1 :
                recipe.nombre === "Melanzane alla parmigiana" ? img2 :
                recipe.nombre === "Focaccia casera con romero y aceite de oliva" ? img3 :
                recipe.nombre === "Pizza Margherita" ? img4 :
                recipe.nombre === "Pizza Diavola" ? img5 :
                recipe.nombre === "Pizza Quattro Formaggi" ? img6 :
                recipe.nombre === "Spaghetti alla Carbonara" ? img7 :
                recipe.nombre === "Ñoquis di Patata al Pesto" ? img8 :
                recipe.nombre === "Lasagna alla Napoletana" ? img9 :
                recipe.nombre === "Tiramisú" ? img10 :
                recipe.nombre === "Cannoli Siciliani" ? img11 :
                recipe.nombre === "Torta Caprese" ? img12 : img1
              }
              alt={recipe.nombre}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Descripción</h2>
            <p className="text-white leading-relaxed">{recipe.descripcion}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Información Nutricional</h2>
            <div className="space-y-2">
              <p className="text-white">Apto para celiacos: {recipe.apto_celiacos ? 'Sí' : 'No'}</p>
              <p className="text-white">Alergenos: {recipe.alergenos.join(', ')}</p>
            </div>
            <button 
              onClick={() => navigate(-1)}
              className="mt-8 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors w-fit mx-auto"
            >
              ← Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

// Add this to prevent TypeScript errors
RecipeDetails.displayName = 'RecipeDetails';
