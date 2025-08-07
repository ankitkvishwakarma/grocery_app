// src/component/shoppage/ProductCard.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, } from "../../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-4 shadow-md rounded-md border">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>₹{product.price}</p>
      <button
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
