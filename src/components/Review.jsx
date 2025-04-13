import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import imgEmir from "../assets/img/imgEmi.jpg";
import imgTomas from "../assets/img/imgTomas.jpg";
import imgArthur from "../assets/img/imgArthur.jpg";

const Review = () => {
  return (
    <div className="py-16 flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pb-10">
        Reseñas de clientes
      </h1>
      <div className="flex flex-col md:flex-row gap-5">
        <ReviewCard 
          img={imgEmir} 
          name="Emir Gerbasi" 
          review="La pasta es excepcional, especialmente los ravioles con salsa de hongos. El ambiente del restaurante te transporta directamente a Italia. ¡Definitivamente volveré!" 
        />
        <ReviewCard 
          img={imgTomas} 
          name="Tomas Bermejo" 
          review="Las pizzas son increíbles, la masa tiene el punto perfecto de cocción y los ingredientes son de primera calidad. El tiramisú de postre fue la cereza del pastel." 
        />
        <ReviewCard 
          img={imgArthur} 
          name="Arthur Callomamani" 
          review="El risotto es el mejor que he probado fuera de Italia. Los sabores son auténticos y el servicio es impecable. Un verdadero pedacito de Italia en la ciudad." 
        />
      </div>
    </div>
  );
};

export default Review;
