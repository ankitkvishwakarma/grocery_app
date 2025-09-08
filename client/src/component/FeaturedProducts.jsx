import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAsync } from "../redux/cartSlice"; // ✅ only this

// ⚠️ Dummy products me `_id` add karna zaroori hai (backend ke liye)
const products = [
  {
    _id: "1",
    name: "Fresh Strawberry",
    type: "Fruits",
    price: 8,
    oldPrice: 10,
    rating: 4.8,
    image: "/assets/strwabarry.jpg",
  },
  {
    _id: "2",
    name: "Fresh Cauliflower",
    type: "Vegetables",
    price: 12,
    oldPrice: 15,
    rating: 4.9,
    image: "/assets/culiflower.jpg",
  },
  {
    _id: "3",
    name: "Fresh Yellow Lemon",
    type: "Fruits",
    price: 12,
    oldPrice: 15,
    rating: 4.8,
    image: "/assets/lemon.jpg",
  },
];

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  return (
    <section className="px-6 py-10 bg-lime-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-green-900">
          Featured Products
        </h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
          <Link to="/ProductGrid">View All Products</Link>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-contain mb-4 rounded"
            />
            <h3 className="font-semibold text-green-800">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.type}</p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-green-600 font-bold">
                ₹{item.price.toFixed(2)}
              </span>
              <span className="line-through text-gray-400 text-sm">
                ₹{item.oldPrice.toFixed(2)}
              </span>
            </div>
            <div className="text-yellow-500 text-sm">★ {item.rating}</div>

            {/* ✅ Backend Cart Call */}
            <button
              onClick={() =>
                dispatch(addToCartAsync({ productId: item._id, quantity: 1 }))
              }
              className="mt-3 w-full bg-green-600 text-white py-1 rounded"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
