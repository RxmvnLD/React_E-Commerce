import { useState, useEffect } from "react";
import HomePaymentsBanner from "../components/HomePaymentsBanner";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { axiosGet } from "../helpers/axiosInstance";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]),
    [loader, setLoader] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axiosGet("/products?limit=8");
      setProducts(res);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <main className="flex flex-col items-center m-3 lg:m-10">
        <HomePaymentsBanner />
        <div className="flex flex-row self-start items-end gap-3 ml-20 sm:ml-36 lg:ml-80 mb-2">
          <div className="text-2xl text-gray-500">Ofertas</div>
          <Link to="/offers" className="text-sm text-blue-400">
            Ver todas
          </Link>
        </div>
        {products.length === 0 ? (
          loader && (
            <Loader className="place-content-center self-center justify-self-center" />
          )
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 w-8/12 gap-5 content-center place-content-center">
            {products.map((prod) => {
              return (
                <ProductCard
                  key={prod.id}
                  name={prod.title}
                  price={prod.price}
                  img={prod.image}
                  cat={prod.category}
                  id={prod.id}
                />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
