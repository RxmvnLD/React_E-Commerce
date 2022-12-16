import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { axiosGet } from "../helpers/axiosInstance";
import CategoriesAside from "../components/CategoriesAside";
import { useParams } from "react-router-dom";

const Category = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState([]),
    [loader, setLoader] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axiosGet(
        cat !== undefined ? `/products/category/${cat}` : "/products"
      );
      setProducts(res);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [cat]);
  return (
    <main className="flex flex-row justify-evenly gap-3 m-3 lg:m-10">
      {" "}
      <CategoriesAside />
      {products.length === 0 ? (
        loader && (
          <Loader className="place-content-center self-center justify-self-center" />
        )
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 w-8/12 gap-5 content-center place-content-center">
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
  );
};

export default Category;
