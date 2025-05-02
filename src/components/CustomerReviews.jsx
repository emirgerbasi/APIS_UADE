import React, { useState, useEffect } from 'react';
import imgEmir from "../assets/img/imgEmi.jpg";
import imgTomas from "../assets/img/imgTomas.jpg";
import imgArthur from "../assets/img/imgArthur.jpg";

const CustomerReviews = () => {
  const reviews = [
    {
      text: "La pasta es excepcional, especialmente los ravioles con salsa de hongos. El ambiente del restaurante te transporta directamente a Italia. ¡Definitivamente volveré!",
      name: "Emir Gerbasi",
      avatar: imgEmir
    },
    {
      text: "Las pizzas son increíbles, la masa tiene el punto perfecto de cocción y los ingredientes son de primera calidad. El tiramisú de postre fue la cereza del pastel.",
      name: "Tomas Bermejo",
      avatar: imgTomas
    },
    {
      text: "El risotto es el mejor que he probado fuera de Italia. Los sabores son auténticos y el servicio es impecable. Un verdadero pedacito de Italia en la ciudad.",
      name: "Arthur Callomamani",
      avatar: imgArthur
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleDotClick = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  return (
    <div className="bg-black text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Reseñas</h2>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="mr-8 p-4 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-300 ease-in-out"
            style={{
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          >
            <>&lt;</>
          </button>

          {/* Review Card */}
          <div
            className={`transform transition-transform duration-300 ease-in-out ${
              isTransitioning ? 'opacity-75' : 'opacity-100'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 relative">
              <p className="text-gray-700 mb-6">{reviews[currentIndex].text}</p>
              <div className="flex items-center">
                <img
                  src={reviews[currentIndex].avatar}
                  alt={reviews[currentIndex].name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <span className="font-bold">{reviews[currentIndex].name}</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handleNext}
            className="ml-8 p-4 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-300 ease-in-out"
            style={{
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          >
            <>&gt;</>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full mx-1 cursor-pointer transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
