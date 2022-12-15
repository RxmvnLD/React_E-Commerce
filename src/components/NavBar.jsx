import { useState, useEffect } from "react";
import { VscClose } from "react-icons/vsc";
import { BiMenu } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineTags } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import logo from "../assets/img/logo.png";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { state } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="flex flex-col py-2 text-sm bg-[#fff15a] md:flex md:px-10 shadow-xl w-full">
        <div className="flex flex-row items-center sm:justify-center lg:justify-around gap-2 md:gap-7 lg:gap-0 lg:px-80">
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 lg:w-40" />
          </Link>

          <div className="bg-white flex flex-row items-center gap-2 p-2 lg:w-2/4">
            <BsSearch />
            <input
              type="text"
              placeholder="buscar productos, marcas y más..."
              className="w-full"
            />
          </div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {" "}
            <div className="text-3xl sm:text-2xl lg:hidden">
              {isOpen ? <VscClose /> : <BiMenu />}
            </div>
          </button>
          <Link>
            <AiOutlineShoppingCart className="text-3xl sm:text-2xl lg:hidden" />
          </Link>
          <div className=" lg:flex lg:flex-row hidden text-lg m-0 gap-2">
            {" "}
            <AiOutlineTags className="text-3xl" />
            <span>Ofertas por tiempo limitado</span>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-row  items-center justify-center lg:justify-around gap-2 md:gap-7 lg:gap-0 lg:px-80">
          <div className="flex flex-row cursor-pointer">
            <GrLocation className="text-2xl self-start" />
            <div className="flex flex-col items-center justify-center">
              <span>Enviar a</span>
              <span className="">CP 58000</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1">
              <span className="cursor-pointer">Categorías</span>
              <FiChevronDown />
            </div>
            <span className="cursor-pointer">Ofertas</span>
            <span className="cursor-pointer">Historial</span>
            <span className="cursor-pointer">Supermercado</span>
            <span className="cursor-pointer">Moda</span>
            <span className="cursor-pointer">Vender</span>
            <span className="cursor-pointer">Ayuda</span>
          </div>
          {state.success ? (
            <div className="flex flex-row gap-3">
              <Link to="/account" className="flex flex-row items-center gap-1">
                <FaUserCircle className="text-lg text-gray-500 " />
                <span className="cursor-pointer">
                  {state.user
                    ? `${state.user.name.firstname} ${state.user.name.lastname}`
                    : "USER"}
                </span>
                <FiChevronDown />
              </Link>

              <span className="cursor-pointer">Mis compras</span>
              <span className="cursor-pointer">Favoritos</span>
              <Link to="/cart">
                <AiOutlineShoppingCart className="hidden text-3xl sm:text-2xl lg:inline" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-row gap-3">
              <Link to="/signup">
                <span>Crea tu cuenta</span>
              </Link>
              <Link to="/login">
                <span>Ingresa</span>
              </Link>
              <span className="cursor-pointer">Mis Compras</span>
              <Link to="/cart">
                <AiOutlineShoppingCart className="hidden text-3xl sm:text-2xl lg:inline" />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
