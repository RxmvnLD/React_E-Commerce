import { useContext } from "react";
import user4 from "../helpers/user";
import { TfiLocationPin } from "react-icons/tfi";
import Button from "../components/Button";
import CartContext from "../context/CartContext";
import { TYPES } from "../actions/cart.actions";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center m-3 lg:m-10 ">
      <div className="flex flex-col w-full lg:w-1/2 items-center mb-32">
        <div className="w-3/4">
          <h1 className="text-xl font-medium my-5">
            ¿Cómo quieres recibir o retirar tu compra?
          </h1>
          <h3 className="text-xs font-medium my-5">Domicilio</h3>
          <div className="bg-[#f5f5f5] p-5 rounded-sm text-xs flex flex-row gap-10">
            <div className="bg-white rounded-full text-blue-500 w-10 h-10 flex items-center justify-center">
              {" "}
              <TfiLocationPin className="text-2xl font-medium" />
            </div>
            <div>
              <h2 className="text-base font-medium">C.P. 58000</h2>
              <div>
                <span>
                  {user4.address.street} {user4.address.number}
                </span>
              </div>
              <div>
                {user4.name.firstname} {user4.name.lastname} - {user4.phone}
              </div>
              <div className="text-blue-500 text-xs cursor-pointer">
                Editar o elegir otro
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-medium my-5">Recibir tu compra</h3>
            <div className="bg-white flex flex-row items-center justify-between p-5 rounded-sm">
              <div>
                <input type="radio" className="bg-blue" checked />{" "}
                <span className="text-sm">Llega mañana a tu domicilio</span>{" "}
              </div>
              <span className="text-lg text-green-500">Gratis</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className="text-lg text-gray-500">
              <span className="mr-20">Productos</span>{" "}
              <span>${cartState.total && cartState.total.toFixed(2)}</span>
            </div>
            <div className="text-xl">
              <span className="mr-20">Pagas</span>{" "}
              <span>${cartState.total && cartState.total.toFixed(2)}</span>
            </div>
          </div>

          <div
            className="w-1/2 md:w-1/4 my-10"
            onClick={() => {
              alert("Gracias por tu compra");
              cartDispatch({ type: TYPES.CLEAR_CART });
              navigate("/");
            }}
          >
            <Button text={"Continuar"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;

/* const user4 = {
    address: {
      geolocation: {
        lat: "50.3467",
        long: "-20.1310",
      },
      city: "San Antonio",
      street: "Hunters Creek Dr",
      number: 6454,
      zipcode: "98234-1734",
    },
    id: 4,
    email: "don@gmail.com",
    username: "donero",
    password: "ewedon",
    name: {
      firstname: "don",
      lastname: "romer",
    },
    phone: "1-765-789-6734",
    __v: 0,
  }; */
