import React from "react";

const ProductCard = ({ product }) => {
  const {
    image,
    name,
    category,
    brand,
    originalPrice,
    discountedPrice,
    isNew,
    isOutOfStock,
    discount,
  } = product;

  return (
    <div className=" p-4 relative hover:shadow-lg transition duration-200">
      {/* Discount or Stock Status Badge */}
      {isOutOfStock ? (
        <span className="absolute top-2 left-2 bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded">
          Out of Stock
        </span>
      ) : discount ? (
        <span className="absolute top-2 left-2 bg-blue-200 text-blue-800 text-xs font-bold px-2 py-1 rounded">
          {discount}% OFF
        </span>
      ) : null}

      {isNew && (
        <span className="absolute top-2 right-2 bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
          NEW
        </span>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Product Details */}
      <p className="text-xs text-gray-400">{category}</p>
      <h3 className="font-medium text-sm mb-1">{name}</h3>
      <p className="text-xs text-gray-500 mb-1">By {brand}</p>

      {/* Pricing */}
      <div className="flex items-center gap-2 text-sm mb-3">
        <span className="text-green-600 font-semibold">${discountedPrice}</span>
        {discount && (
          <span className="text-gray-400 line-through">${originalPrice}</span>
        )}
      </div>

      {/* Add Button */}
      <button
        className={`w-full text-center py-1.5 rounded font-medium text-sm transition ${
          isOutOfStock
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? "Unavailable" : "Add"}
      </button>
    </div>
  );
};

export default ProductCard;
