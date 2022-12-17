import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TYPES } from "../actions/cart.actions";
import CartContext from "../context/CartContext";

const ItemInCart = ({ id, name, price, img, cat, initialQuantity, cartID }) => {
  const { cartDispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState(Number(initialQuantity));

  return (
    <section className="w-11/12 mx-5 pb-10 border-b border-gray-300 flex flex-col">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="w-10 lg:w-20 flex justify-center">
          <Link to={`/product/${id}`}>
            <img src={img} alt={`${name} img`} className="max-h-10" />
          </Link>
        </div>
        <div className="w-full sm:w-2/5">
          <Link to={`/product/${id}`}>
            <div className="text-sm lg:text-base font-medium">
              {name.length > 40 ? `${name.substr(0, 30)}...` : name}
            </div>
          </Link>
          <div className="text-xs">
            {cat}{" "}
            <span className="text-blue-400 cursor-pointer"> Modificar</span>
          </div>
        </div>
        <div className="flex flex-row border border-gray-300 items-center gap-3 px-2 rounded-sm max-h-max">
          <button
            className={`font-semibold ${
              quantity == 1 ? "text-gray-300" : "text-blue-500"
            }`}
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
                cartDispatch({
                  type: TYPES.UPDATE_AMOUNT,
                  payload: (price - price * 0.15) * -1,
                });
              }
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="font-semibold text-blue-500"
            onClick={() => {
              setQuantity(quantity + 1);
              cartDispatch({
                type: TYPES.UPDATE_AMOUNT,
                payload: price - price * 0.15,
              });
            }}
          >
            +
          </button>
        </div>
        <div>
          <div className="text-green-400 text-xs">
            15% <span className="line-through text-gray-400">${price}</span>
          </div>
          <div className="font-medium">
            ${((price - price * 0.15) * quantity).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="text-blue-500 text-xs mt-5">
        <div
          className="cursor-pointer w-fit"
          onClick={() => {
            cartDispatch({
              type: TYPES.REMOVE_FROM_CART,
              payload: cartID,
            });
            cartDispatch({
              type: TYPES.UPDATE_AMOUNT,
              payload: (price - price * 0.15) * quantity * -1,
            });
          }}
        >
          Eliminar
        </div>
        <Link to={`/category/${cat}`} className="w-fit">
          Más productos del vendedor
        </Link>
        <div className="cursor-pointer w-fit">Comprar ahora</div>
        <div className="cursor-pointer w-fit">Guardar para después</div>
      </div>
    </section>
  );
};

export default ItemInCart;
