import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDishes } from '../services/api';
import config from '../config/config';

const RecipeDetails = () => {
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  const { nombreReceta } = useParams();

  // Función para manejar la URL de la imagen (igual que en DishesCard)
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

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDish();
  }, [nombreReceta]);

  const fetchDish = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Convert URL parameter back to original format
      const originalNombre = nombreReceta.replace(/-/g, ' ');
      
      // Get all dishes from API
      const response = await getDishes();
      const allDishes = response.data;
      
      // Find the dish by title (case insensitive)
      const foundDish = allDishes.find(d => 
        d.title.toLowerCase() === originalNombre.toLowerCase()
      );

      if (!foundDish) {
        setError('Plato no encontrado');
        return;
      }

      setDish(foundDish);
    } catch (error) {
      console.error('Error fetching dish:', error);
      setError('Error al cargar el plato');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Cargando plato...</div>
      </div>
    );
  }

  if (error || !dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl text-red-600 mb-4">{error || 'Plato no encontrado'}</div>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-5 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8 text-white">{dish.title}</h1>
        
        <div className="space-y-8">
          <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden w-3/4 mx-auto">
            <img
              className="w-full h-full object-cover"
              src={getImageUrl(dish.imageUrl)}
              alt={dish.title}
              onError={(e) => {
                if (!imageError) {
                  setImageError(true);
                  // Intenta cargar la imagen desde assets si falla la carga desde el servidor
                  try {
                    const imgNumber = dish.imageUrl.match(/img(\d+)/)?.[1];
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

          <div className="space-y-4 w-3/4 mx-auto">
            <h2 className="text-2xl font-semibold text-white">Descripción</h2>
            <p className="text-white leading-relaxed">{dish.description}</p>
          </div>

          {dish.ingredients && dish.ingredients.length > 0 && (
            <div className="space-y-4 w-3/4 mx-auto">
              <h2 className="text-2xl font-semibold text-white">Ingredientes</h2>
              <ul className="text-white list-disc list-inside space-y-1">
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {dish.recipe && (
            <div className="space-y-4 w-3/4 mx-auto">
              <h2 className="text-2xl font-semibold text-white">Receta</h2>
              <p className="text-white leading-relaxed whitespace-pre-line">{dish.recipe}</p>
            </div>
          )}

          <div className="space-y-4 w-3/4 mx-auto">
            <h2 className="text-2xl font-semibold text-white">Información del Plato</h2>
            <div className="space-y-2">
              <p className="text-white">Categoría: {dish.category}</p>
              <p className="text-white">Precio: ${dish.price.toLocaleString()}</p>
            </div>
            <button 
              onClick={() => navigate(-1)}
              className="mt-8 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors w-full"
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
