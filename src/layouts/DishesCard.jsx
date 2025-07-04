import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";
import config from "../config/config";

const DishesCard = (props) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    // Format the recipe name for URL to match RecipeDetails format
    const nombreReceta = props.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/recetas/${nombreReceta}`);
  };

  // Función para manejar la URL de la imagen
  const getImageUrl = (imgPath) => {
    if (!imgPath) return ''; // Manejar caso de imagen no definida
    
    try {
      // Si es una importación directa (objeto con default)
      if (typeof imgPath === 'object' && imgPath.default) {
        return imgPath.default;
      }
      
      // Si es una importación directa (objeto)
      if (typeof imgPath === 'object') {
        return imgPath;
      }
      
      // Si es una URL completa
      if (imgPath.startsWith('http') || imgPath.startsWith('data:')) {
        return imgPath;
      }
      
      // Si la ruta ya comienza con /img
      if (imgPath.startsWith('/img')) {
        return `${config.IMAGES_URL}${imgPath}`;
      }
      
      // En cualquier otro caso, construir la ruta completa
      return `${config.IMAGES_URL}/img/${imgPath}`;
    } catch (error) {
      console.error('Error processing image path:', error);
      return '';
    }
  };

  return (
    <div 
      className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg bg-[#F4ECE3] cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleCardClick}
    >
      <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-4">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          src={getImageUrl(props.img)}
          alt={props.title}
          onError={(e) => {
            if (!imageError) {
              setImageError(true);
              // Intenta cargar la imagen desde assets si falla la carga desde el servidor
              try {
                const imgNumber = props.img.match(/img(\d+)/)?.[1];
                if (imgNumber) {
                  import(`../assets/img/img${imgNumber}.jpg`)
                    .then(image => {
                      e.target.src = image.default;
                    })
                    .catch(() => {
                      e.target.src = '/placeholder.jpg';
                    });
                } else {
                  e.target.src = '/placeholder.jpg';
                }
              } catch {
                e.target.src = '/placeholder.jpg';
              }
            }
          }}
          style={{ opacity: imageError ? 0.9 : 1 }}
        />
      </div>
      <div className=" space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6" style={{color: '#111'}}>{props.title}</h3>
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" font-semibold text-lg">{props.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
