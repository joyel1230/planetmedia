import React, { useEffect } from "react";
import Header from "../../components/micros/Header";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import Product from "../../components/shop/Product";
import Loading from "../../components/loading/Loading";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import { products } from "../../hooks/initialFetch";
import { useDispatch } from "react-redux";
import { addProducts } from "../../redux/slices/products";

interface ProductT {
  images: [{ src: string }];
  name: string;
  price: string;
  id: number;
}

const Shop = () => {
  const data = useSelector(
    (state: State) => state.productStore.products
  ) as Array<ProductT>;
  const dispatch = useDispatch();
  useEffect(() => {
    products()
      .then((res) => {
        dispatch(addProducts(res));
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Pure Beauty Shop</title>
        <meta name="description" content="Shop page for Pure Beauty" />
        <link rel="canonical" href="/shop" />
      </Helmet>
      <Navbar />
      <Header title="Shop" />
      {data.length === 0 ? (
        <div className="h-screen">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap">
            {data.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Shop;
