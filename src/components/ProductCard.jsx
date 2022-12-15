import React from "react";

const ProductCard = ({ name, price, cat, img }) => {
  return (
    <section className="bg-white flex flex-col gap-1 max-w-fit p-2 h-full">
      <div className="flex flex-row justify-center items-center px-5 h-1/2">
        <img src={img} alt={`${name} img`} className="scale-50" />
      </div>

      <div className="flex flex-col gap-2 min-w-min h-1/2 ml-4">
        <span className="bg-blue-500 text-white max-w-fit py-0.5 px-1 rounded-sm text-xs font-semibold">
          OFERTA DEL DÍA
        </span>

        <div className="text-xs line-through">{`$${(
          price -
          price * 0.15
        ).toFixed(2)}`}</div>

        <div className="flex flex-row items-center">
          <div className="text-xl">{`$ ${price}`}</div>
          <div className="text-green-500">15% OFF</div>
        </div>

        <div className="w-full">{name}</div>

        <div className="text-gray-400 text-xs">{`por ${cat}`}</div>

        <div className="flex flex-row items-center gap-1">
          <span className="bg-green-100 text-green-500 max-w-fit py-0.5 px-1 rounded-sm text-xs font-semibold">
            Llega gratis mañana
          </span>
          <svg
            viewBox="0 0 56 18"
            xmlns="http://www.w3.org/2000/svg"
            className="full-icon"
            width="38px"
            height="12px"
          >
            <path
              d="M3.545 0L0 10.286h5.91L3.544 18 13 6.429H7.09L10.637 0zm14.747 14H15.54l2.352-10.672h7.824l-.528 2.4h-5.072l-.352 1.664h4.944l-.528 2.4h-4.96L18.292 14zm13.32.192c-3.28 0-4.896-1.568-4.896-3.808 0-.176.048-.544.08-.704l1.408-6.352h2.8l-1.392 6.288c-.016.08-.048.256-.048.448.016.88.688 1.728 2.048 1.728 1.472 0 2.224-.928 2.496-2.176L35.5 3.328h2.784l-1.392 6.336c-.576 2.592-1.984 4.528-5.28 4.528zM45.844 14h-7.04l2.352-10.672h2.752L42.1 11.6h4.272l-.528 2.4zm9.4 0h-7.04l2.352-10.672h2.752L51.5 11.6h4.272l-.528 2.4z"
              fill="#00a650"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
