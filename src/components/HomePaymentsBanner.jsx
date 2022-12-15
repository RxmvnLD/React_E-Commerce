import React from "react";
import banamex from "../assets/img/banamex.png";
import { AiFillPlusCircle } from "react-icons/ai";

const HomePaymentsBanner = () => {
  return (
    <section className="grid md:grid-flow-col w-8/12 m-5 lg:m-10">
      <div className="bg-white flex flex-row gap-4 items-center p-4">
        <div className="bg-blue-600 w-1 h-full p-0 m-0" />
        <div className="flex flex-col gap-1">
          <span>Paga cómodo y seguro</span>
          <span className="text-sm text-gray-400 cursor-pointer">
            con Mercado Pago
          </span>
        </div>
      </div>

      <div className="bg-white lg:flex flex-row items-center gap-44 px-2 border-x p-4 hidden">
        <div className="flex flex-col gap-1">
          <span>Hasta 3 meses sin intereses con:</span>
          <span className="text-sm text-blue-400 cursor-pointer">
            Ver condiciones
          </span>
        </div>
        <img
          src={banamex}
          alt="banamex"
          className="w-32 h-14 hidden lg:flex mr-20"
        />
      </div>

      <div className="bg-white hidden md:flex flex-row gap-4 items-center p-4 ">
        <div className="bg-transparent border rounded-full p-2">
          <AiFillPlusCircle className="text-blue-400 text-3xl " />
        </div>
        <div className="flex flex-col gap-1">
          <span>Más medios de pago</span>
          <span className="text-sm text-blue-400 cursor-pointer">
            Ver todos
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomePaymentsBanner;
