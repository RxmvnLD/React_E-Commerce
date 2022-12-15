import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full flex px-10 py-5 lg:pl-80">
      <section>
        <div className="hidden lg:text-sm lg:flex flex-row gap-5 ">
          <span>Trabaja con nosotros</span>
          <span>Términos y condiciones</span>
          <span>Cómo cuidamos tu privacidad</span>
          <span>Accesibilidad</span>
          <span>Ayuda</span>
        </div>
        <div className="flex text-xs lg:hidden flex-row gap-5 ">
          <span>Acerca de</span>
          <span>Otros sitios</span>
          <span>Ayuda</span>
          <span>Redes sociales</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Copyright © 1999-2022 El presente canal de instrucción o ambiente, es
          operado por DeRemate.Com de México, S. de R.L. de C.V. identificada
          bajo la marca comercial "Mercado Libre". <br />
          <br className=" md:hidden" />
          Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito
          Juarez, 03940 Ciudad de México, CDMX, Mexico
        </p>
      </section>
    </footer>
  );
};

export default Footer;
