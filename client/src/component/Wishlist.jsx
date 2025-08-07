import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const initialItems = [
  {
    id: 1,
    name: "Fresh Green Apple",
    image: "https://via.placeholder.com/50",
    weight: "500 g",
    price: "₹12.00",
    date: "15 July 2024",
    stock: true,
  },
  {
    id: 2,
    name: "Fresh Tomato",
    image: "https://via.placeholder.com/50",
    weight: "500 g",
    price: "₹7.50",
    date: "12 July 2024",
    stock: true,
  },
  {
    id: 3,
    name: "Green Bell Peppers",
    image: "https://via.placeholder.com/50",
    weight: "250 g",
    price: "₹8.00",
    date: "12 July 2024",
    stock: true,
  },
  {
    id: 4,
    name: "Pineapple",
    image: "https://via.placeholder.com/50",
    weight: "750 g",
    price: "₹15.00",
    date: "11 July 2024",
    stock: true,
  },
  {
    id: 5,
    name: "Gold Bangles",
    image: "https://via.placeholder.com/50",
    weight: "500 g",
    price: "₹12.00",
    date: "11 July 2024",
    stock: true,
  },
];

export default function Wishlist() {
  const [items, setItems] = useState(initialItems);
  const [wishlistLink] = useState("https://www.example.com");

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wishlistLink);
    alert("Link copied!");
  };

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-2">Wishlist</h2>
      <p className="text-center text-gray-500 mb-8">Home / Wishlist</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-yellow-400 text-left text-sm font-semibold text-gray-700">
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Date Added</th>
              <th className="py-3 px-4">Stock Status</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b text-sm">
                <td className="py-4 px-4 flex items-center gap-4">
                  <button onClick={() => removeItem(item.id)}>
                    <FaTimes className="text-gray-400 hover:text-red-600" />
                  </button>
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.weight}</p>
                  </div>
                </td>
                <td className="py-4 px-4">{item.price}</td>
                <td className="py-4 px-4">{item.date}</td>
                <td className="py-4 px-4">
                  <span className="text-green-600 font-medium">{item.stock ? "In Stock" : "Out of Stock"}</span>
                </td>
                <td className="py-4 px-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 text-sm">
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom controls */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Wishlist link:</span>
          <input
            value={wishlistLink}
            readOnly
            className="border border-gray-300 px-3 py-2 rounded-md text-sm w-[250px]"
          />
          <button
            onClick={copyToClipboard}
            className="bg-green-700 text-white px-4 py-2 rounded-full text-sm hover:bg-green-800"
          >
            Copy Link
          </button>
        </div>

        <div className="flex gap-4">
          <button
            onClick={clearWishlist}
            className="text-sm text-green-700 underline hover:text-green-900"
          >
            Clear Wishlist
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700">
            Add All to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
