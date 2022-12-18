import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

const MobileMenu = ({ setIsOpen, isOpen }) => {
  const { state } = useContext(AuthContext);
  return (
    <ul
      className={`lg:hidden w-screen py-5 fixed bg-[#fff15a] z-40  transition-all duration-300 ease-in  ${
        isOpen ? "top-12 " : "top-[-550px]"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        {state.success ? (
          <div className="flex flex-row gap-3 mb-5">
            <Link to="/account" className="flex flex-row items-center gap-1">
              <FaUserCircle className="text-lg text-gray-500 " />
              <span className="cursor-pointer">
                {state.user
                  ? `${state.user.name.firstname} ${state.user.name.lastname}`
                  : "USER"}
              </span>
            </Link>

            <span className="cursor-pointer">Mis compras</span>
            <span className="cursor-pointer">Favoritos</span>
          </div>
        ) : (
          <div className="flex flex-row gap-10 mb-5">
            <Link to="/signup">
              <span>Crea tu cuenta</span>
            </Link>
            <Link to="/login">
              <span>Ingresa</span>
            </Link>
          </div>
        )}
        <Link
          to="/offers"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="flex flex-row items-center gap-1">
            <li className="cursor-pointer">Categorías</li>
            <FiChevronDown />
          </div>
        </Link>
        <Link
          to="/offers"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <li className="cursor-pointer">Ofertas</li>
        </Link>
        <li className="cursor-pointer">Historial</li>
        <Link
          to="/offers"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <li className="cursor-pointer">Supermercado</li>
        </Link>
        <Link
          to="/offers"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <li className="cursor-pointer">Moda</li>
        </Link>
        <li className="cursor-pointer">Vender</li>
        <li className="cursor-pointer">Ayuda</li>
      </div>
    </ul>
  );
};

export default MobileMenu;
