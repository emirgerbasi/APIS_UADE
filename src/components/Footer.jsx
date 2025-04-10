import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Il Vero Ristorante</h1>
          <p className=" text-sm">
            Animate a conocer la mejor cocina italiana. Desde Europa hasta tu plato.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Platos
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Sobre nosotros
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menú
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reseñas
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menú</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Nuestros platos
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menú Premium
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contactanos</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              info@ilveroristorante.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +54 113 456 789
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Redes sociales
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright desarrollado por
            <span className=" text-brightColor"> Grupo 7</span> |
            Todos los derechos reservados
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
