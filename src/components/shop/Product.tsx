import React from "react";

interface PropsProduct {
  product: {
    images: [{ src: string }];
    name: string;
    price: string;
  };
}

const Product = ({ product }: PropsProduct) => {
  return (
    <div className="w-1/2 relative">
      <img src={product.images[0].src} className="border-[#842A3A] border" alt="" />
      <div className="absolute bottom-1 left-2 sm:bottom-6 sm:left-10 text-[#842A3A] font-sans font-semibold">
        <p className="text-xs mb-1 font-light">MIST</p>
        <h1 className="text-sm mb-2 tracking-[0.1rem]">{product.name}</h1>
        <p className="text-xs">${product.price || 28}</p>
      </div>
    </div>
  );
};

export default Product;
