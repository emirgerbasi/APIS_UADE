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
        <ReviewCard img={imgEmir} name="Emir Gerbasi" />
        <ReviewCard img={imgTomas} name="Tomas Bermejo" />
        <ReviewCard img={imgArthur} name="Arthur Callomamani" />
      </div>
    </div>
  );
};

export default Review;
