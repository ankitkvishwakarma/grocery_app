import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice"; // Ensure this path is correct
import toast from "react-hot-toast";
import { dairyProducts } from "./dairyProducts";

const DairyBreadEggs = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const filtered = dairyProducts.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (brand === "" || p.name.toLowerCase().includes(brand.toLowerCase())) &&
      p.price <= maxPrice
    );
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Buy Dairy Bread & Eggs Online</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* <input
          type="text"
          placeholder="Search..."
          className="border px-2 py-1 rounded"
          onChange={(e) => setSearch(e.target.value)}
        /> */}
        <select
          onChange={(e) => setBrand(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="">All Brands</option>
          <option value="amul">Amul</option>
          <option value="moreish">Moreish</option>
          <option value="sudha">Sudha</option>
        </select>
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <span>Under ₹{maxPrice}</span>
      </div>

      {/* Skeleton loading */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse border p-4 rounded">
              <div className="bg-gray-200 h-40 mb-3 rounded"></div>
              <div className="bg-gray-200 h-4 w-3/4 mb-2"></div>
              <div className="bg-gray-200 h-4 w-1/2 mb-2"></div>
              <div className="bg-gray-200 h-4 w-1/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {paginated.map((product) => (
              <div
                key={product.id}
                className="border p-2 rounded shadow hover:shadow-md relative"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-2"
                />
                <p className="font-medium text-sm">{product.name}</p>
                <p className="text-xs text-gray-600">{product.quantity}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="font-semibold">₹{product.price}</p>
                  <button
                    onClick={() => handleAdd(product)}
                    className="border px-2 py-1 text-green-600 border-green-600 rounded hover:bg-green-100"
                  >
                    ADD
                  </button>
                </div>
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-1 rounded">
                    {product.discount}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-green-600 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DairyBreadEggs;
