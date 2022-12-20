import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { axiosGet } from "../helpers/axiosInstance";
import Loader from "../components/Loader";
import {
  MdOutlineLocationOn,
  MdOutlineLocalShipping,
  MdSecurity,
} from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import { CiTrophy } from "react-icons/ci";
import Button from "../components/Button";
import CartContext from "../context/CartContext";
import { TYPES } from "../actions/cart.actions";

const ProductView = () => {
  const { id } = useParams();
  const [prod, setProd] = useState({}),
    [isLoading, setIsLoading] = useState(true),
    [quantity, setQuantity] = useState(1);
  const { cartDispatch } = useContext(CartContext);

  const getProd = async () => {
    try {
      const res = await axiosGet(`/products/${id}`);
      setProd(res);
      setIsLoading(false);
    } catch (error) {
      console.log(err);
    }
  };

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addToCart = (event) => {
    event.preventDefault();
    cartDispatch({
      type: TYPES.ADD_TO_CART,
      payload: {
        cartID: Math.floor(Math.random() * 100),
        prod,
        quantity: quantity,
      },
    });
    cartDispatch({
      type: TYPES.UPDATE_AMOUNT,
      payload: (prod.price - prod.price * 0.15) * quantity,
    });
    alert("Producto agregado exitosamente");
  };

  useEffect(() => {
    getProd();
  }, []);

  return (
    <>
      <main className="flex flex-row justify-center w-full">
        <section className="flex flex-col bg-white w-5/6 lg:w-3/5 p-10 my-20 rounded-md ">
          {isLoading ? (
            <Loader></Loader>
          ) : (
            <>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex items-center justify-center ">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="max-w-xs lg:max-w-sm"
                  />
                </div>
                <section className="flex flex-col lg:w-2/4 gap-2">
                  <div>{`Nuevo | ${prod.rating.count} vendidos`}</div>
                  <h1 className="text-2xl font-medium">{[prod.title]}</h1>
                  <div>⭐⭐⭐⭐⭐ ({prod.rating.rate})</div>
                  <div className="text-xs line-through ">{`$${(
                    prod.price -
                    prod.price * 0.15
                  ).toFixed(2)}`}</div>
                  <div className=" flex flex-row text-2xl">
                    <span className="">{`$${prod.price}`}</span>{" "}
                    <span className="text-green-500 self-start text-xs">
                      15% OFF
                    </span>
                  </div>
                  <div>
                    Paga en meses <br />
                    IVA incluido
                  </div>
                  <div className="text-xs text-blue-400 cursor-pointer">
                    Ver los métodos de pago
                  </div>
                  <div className="bg-blue-500 text-white max-w-fit py-0.5 px-1 rounded-sm text-xs font-semibold my-2">
                    OFERTA DEL DÍA
                  </div>
                  <div>Lo que tienes que saber de este producto:</div>
                  <div className="mb-2">{prod.description}</div>
                  <div className="text-xs text-blue-400 cursor-pointer">
                    Ver las características
                  </div>
                </section>

                <section className="flex flex-col gap-2 items-start border border-gray-300 rounded-lg lg:w-2/5 p-3">
                  <div className=" flex flex-row items-center gap-2 text-green-500 text-lg self-center">
                    <MdOutlineLocalShipping className="text-2xl" />{" "}
                    <span>
                      Llega gratis{" "}
                      <span className="font-semibold">El viernes</span>
                    </span>
                  </div>
                  <div className="flex flex-row text-blue-400 items-center self-center">
                    {" "}
                    <MdOutlineLocationOn className="text-2xl" />{" "}
                    <div>Enviar a Morelia 58000</div>
                  </div>
                  <div className="text-sm">
                    Tienda oficial{" "}
                    <span className="text-md text-blue-400">
                      {prod.category}
                    </span>
                    <div>{prod.rating.count * 6} ventas</div>
                  </div>
                  <div className="font-semibold my-2">Stock disponible</div>
                  <form onSubmit={addToCart}>
                    <div>
                      Cantidad:{" "}
                      <input
                        type="number"
                        defaultValue={quantity}
                        min="1"
                        required
                        className="w-7"
                        onChange={handleChangeQuantity}
                      />{" "}
                      unidad <span>({prod.rating.count} disponibles)</span>
                    </div>
                    <div className="w-full flex flex-col gap-2 items-center">
                      <Button text="Comprar ahora" />
                      <Button
                        text="Agregar al carrito"
                        bgColor={"bg-blue-200"}
                        textColor="text-blue-500"
                      />
                    </div>
                  </form>
                  <div className="text-gray-400 text-base w-full">
                    <div className="flex flex-row ">
                      <TbArrowBack className="text-2xl self-start w-1/12" />
                      <div>
                        <span className="text-blue-400">
                          Devolución gratis.
                        </span>{" "}
                        Tienes 30 días desde que lo recibes.
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-base w-full">
                    <div className="flex flex-row">
                      <MdSecurity className="text-3xl self-start w-1/12" />
                      <div>
                        <span className="text-blue-400">Compra protegida,</span>{" "}
                        recibe el producto que esperabas o te devolvemos tu
                        dinero.
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-base w-full">
                    <div className="flex flex-row">
                      <CiTrophy className="text-sm self-start w-1/12" />
                      <div>
                        <span className="text-blue-400">Mercado Puntos.</span>
                        Sumas {prod.rating.count * 2} puntos.
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default ProductView;
