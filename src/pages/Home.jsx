import { useState, useEffect } from "react";
import HomePaymentsBanner from "../components/HomePaymentsBanner";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { axiosGet } from "../helpers/axiosInstance";

const Home = () => {
  const [products, setProducts] = useState([]),
    [loader, setLoader] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axiosGet("/products?limit=8");
      await setProducts(res);
      await setLoader(false);
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
