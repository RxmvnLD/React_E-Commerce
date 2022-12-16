import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosGet } from "../helpers/axiosInstance";
import Loader from "./Loader";

const CategoriesAside = () => {
  const [categories, setCategories] = useState([]),
    [loader, setLoader] = useState(true);

  const getCategories = async () => {
    try {
      const res = await axiosGet("/products/categories");
      setCategories(res);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <aside className=" ml-10 w-40 hidden h-full sm:flex flex-col rounded-md">
      {categories?.length === 0 ? (
        loader && (
          <Loader className="place-content-center self-center justify-self-center" />
        )
      ) : (
        <>
          <h2 className="text-lg font-medium mb-2">Tipo de oferta</h2>
          <div className="cursor-pointer">
            Oferta del día <span className="text-gray-400">(43)</span>
          </div>
          <div className="cursor-pointer mb-5">
            Oferta relámpago <span className="text-gray-400">(35)</span>
          </div>
          <h2 className="text-lg font-medium mb-3">Categorías</h2>
          {categories.map((cat) => {
            return (
              <div>
                <Link to={`/category/${cat}`}>{cat}</Link>
                <span className="ml-2 text-gray-400">
                  ({(Math.random() * (100 - 30) + 30).toFixed(0)})
                </span>
              </div>
            );
          })}
          <h2 className="mt-5 text-lg font-medium mb-2">Costo del envío</h2>
          <div className="cursor-pointer mb-5">
            Gratis <span className="text-gray-400">(12)</span>
          </div>
          <h2 className="text-lg font-medium mb-2">Pago</h2>
          <div className="mb-5 cursor-pointer">
            Meses sin intereses <span className="text-gray-400">(29)</span>
          </div>
          <h2 className="text-lg font-medium mb-2">Precio</h2>
          <div className="cursor-pointer">
            Hasta $ 400 <span className="text-gray-400">(11)</span>
          </div>
          <div className="cursor-pointer">
            $400 a $950 <span className="text-gray-400">(22)</span>
          </div>
          <div className="cursor-pointer">
            Más de $950 <span className="text-gray-400">(34)</span>
          </div>
        </>
      )}
    </aside>
  );
};

export default CategoriesAside;
