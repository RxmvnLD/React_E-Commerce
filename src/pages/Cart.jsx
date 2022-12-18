import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
import ItemInCart from "../components/ItemInCart";
import { AiFillThunderbolt } from "react-icons/ai";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartState } = useContext(CartContext);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    console.log(cartState);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center m-3 lg:m-10">
        <div className="bg-white flex flex-col w-5/6 lg:w-1/2 gap-4 items-center p-4">
          <div className="flex my-3 w-11/12 mr-2 flex-row items-center gap-5 self-start mx-5 pb-2 border-b border-gray-300">
            <span className="cursor-pointer text-lg font-medium text-blue-500">
              Carrito
            </span>{" "}
            <span className="cursor-pointer">Guardados</span>
          </div>

          {cartState.cart.length === 0 ? (
            <>
              <h2 className="font-medium">Tu carrito está vacío</h2>
              <p className="text-sm text-gray-500">
                ¿No sabes qué comprar? ¡Miles de productos te esperan!
              </p>
              <Link to="/offers" className="w-48 text-center">
                <Button text="Descubrir ofertas" />
              </Link>
            </>
          ) : (
            <>
              <div className="flex my-3 w-11/12 mr-2 flex-col gap-1 self-start mx-5 pb-2 border-b border-gray-300">
                <div className="flex flex-row items-center">
                  <AiFillThunderbolt className="text-green-500" />
                  <span className="text-md font-semibold italic text-green-500">
                    FULL
                  </span>{" "}
                </div>
                <div className="w-4/12 h-2 bg-gray-500 rounded-md ">
                  <div className="bg-blue-500 w-3/4 h-full rounded-md" />
                </div>
                <div className="text-sm">
                  ¡Estás a $ 69.90 de tener envío gratis!
                </div>
              </div>
              <div className="w-full flex flex-col gap-10">
                {cartState.cart.map((item) => {
                  return (
                    <ItemInCart
                      key={item.prod.id}
                      name={item.prod.title}
                      price={item.prod.price}
                      img={item.prod.image}
                      cat={item.prod.category}
                      id={item.prod.id}
                      initialQuantity={item.quantity}
                      cartID={item.cartID}
                    />
                  );
                })}
              </div>
              <div className="w-11/12 mx-5 pb-10 border-b border-gray-300 flex flex-row items-center gap-28 justify-end">
                <span className="font-medium text-lg">Envío</span>{" "}
                <span className="text-green-400 text-sm font-medium">
                  Gratis
                </span>
              </div>
              <div className="w-11/12 mx-5 pb-10 border-b border-gray-300 flex flex-row items-center gap-24 lg:gap-28 justify-end">
                <span className="font-medium text-lg lg:text-2xl">
                  Total con envío
                </span>{" "}
                <span className="font-medium text-lg lg:text-2xl">
                  ${cartState.total.toFixed(2)}
                </span>{" "}
              </div>
              <Link
                to={state.success ? "/checkout" : "/login"}
                className={`lg:w-1/4 ${state.success ? "" : ""}`}
              >
                <Button
                  text="Continuar compra"
                  bgColor={state.success ? "" : "bg-blue-200"}
                  textColor={state.success ? "" : "text-blue-500"}
                />
              </Link>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Cart;
