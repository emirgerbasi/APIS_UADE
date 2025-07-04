import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Show full navbar only on home page
  const showFullNavbar = location.pathname === '/';

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  // Manejar click en el slogan
  const handleSloganClick = () => {
    if (location.pathname === '/') {
      // Scroll suave al inicio
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
    }
  };

  return (
    <div className="fixed w-full z-50">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-black text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer" onClick={handleSloganClick} title="Ir al inicio">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className=" text-xl font-semibold">Il Vero Ristorante</h1>
          </div>

          {showFullNavbar && (
            <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Inicio
            </Link>

            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Platos
                </Link>

                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Entradas
                  </Link>
                </li>
                <li>
                  <Link
                    to="pizzas"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Pizzas
                  </Link>
                </li>
                <li>
                  <Link
                    to="pastas"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Pastas
                  </Link>
                </li>
                <li>
                  <Link
                    to="postres"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Postres
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Sobre nosotros
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Recomendados
            </Link>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reseñas
            </Link>


          </nav>
          )}

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Platos
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Sobre nosotros
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Recomendados
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reseñas
          </Link>

          <Button title="login" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
