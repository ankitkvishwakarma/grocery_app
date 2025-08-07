import React from "react";
import ProductGrid from "./shoppage/ProductGrid";
import SidebarFilter from "./shoppage/SidebarFilter";
import RecentlyViewed from "./shoppage/RecentlyViewed";


const dummyProducts = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  name: "Pure Pineapple",
  image: "/pineapple.png",
  price: 14,
  oldPrice: 18,
}));

const ShopPage = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <SidebarFilter />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Shop Grid 5 Column</h2>
            <div className="flex gap-4 items-center">
              <select className="border px-2 py-1 text-sm rounded">
                <option>Default Sorting</option>
              </select>
              <select className="border px-2 py-1 text-sm rounded">
                <option>Show: 10</option>
              </select>
            </div>
          </div>
          <ProductGrid products={dummyProducts} />
          <RecentlyViewed />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
