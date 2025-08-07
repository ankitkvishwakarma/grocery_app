import React from "react";
import ProductCard from "./product/ProductCard";
import ProductFilter from "./product/ProductFilter"

// Sample data
const products = [
  {
    name: "Seeds of Change Organic Red Rice",
    image: "https://via.placeholder.com/150",
    category: "Fresh Pack",
    brand: "NestFood",
    originalPrice: 30.0,
    discountedPrice: 28.85,
    discount: 15,
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Seeds of Change Organic Red Rice",
    image: "https://via.placeholder.com/150",
    category: "Fresh Pack",
    brand: "NestFood",
    originalPrice: 30.0,
    discountedPrice: 28.85,
    discount: 15,
    isNew: false,
    isOutOfStock: false,
  },
 
  {
    name: "Seeds of Change Organic Red Rice",
    image: "https://via.placeholder.com/150",
    category: "Fresh Pack",
    brand: "NestFood",
    originalPrice: 30.0,
    discountedPrice: 28.85,
    discount: 15,
    isNew: false,
    isOutOfStock: false,
  },
 
  {
    name: "Seeds of Change Organic Red Rice",
    image: "https://via.placeholder.com/150",
    category: "Fresh Pack",
    brand: "NestFood",
    originalPrice: 30.0,
    discountedPrice: 28.85,
    discount: 15,
    isNew: false,
    isOutOfStock: false,
  },
 
  {
    name: "Seeds of Change Organic Red Rice",
    image: "https://via.placeholder.com/150",
    category: "Fresh Pack",
    brand: "NestFood",
    originalPrice: 30.0,
    discountedPrice: 28.85,
    discount: 15,
    isNew: false,
    isOutOfStock: false,
  },
 
  {
    name: "Seeds of Change Organic Red Rice",
    image: "https://via.placeholder.com/150",
    category: "Fresh Pack",
    brand: "NestFood",
    originalPrice: 30.0,
    discountedPrice: 28.85,
    discount: 15,
    isNew: false,
    isOutOfStock: false,
  },
 
  {
    name: "All Natural Style Chicken Meatballs",
    image: "https://via.placeholder.com/150",
    category: "Fresh Seafood",
    brand: "NestFood",
    originalPrice: 60.0,
    discountedPrice: 23.0,
    discount: 66,
    isNew: false,
    isOutOfStock: false,
  },
  {
    name: "Angie’s Sweet & Salty Kettle Corn",
    image: "https://via.placeholder.com/150",
    category: "Baking material",
    brand: "Country Crock",
    originalPrice: 58.0,
    discountedPrice: 48.85,
    discount: 20,
    isNew: true,
    isOutOfStock: false,
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    image: "https://via.placeholder.com/150",
    category: "Baking material",
    brand: "Country Crock",
    originalPrice: 19.0,
    discountedPrice: 17.85,
    isNew: false,
    isOutOfStock: true,
  },
  {
    name: "Blue Almonds Lightly Salted Vegetables",
    image: "https://via.placeholder.com/150",
    category: "Fresh Fruit",
    brand: "Country Crock",
    discountedPrice: 23.85,
    isNew: false,
    isOutOfStock: false,
  },
  // Add more items...
];

const ProductGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Shop Our Products</h2>
      <ProductFilter/>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
