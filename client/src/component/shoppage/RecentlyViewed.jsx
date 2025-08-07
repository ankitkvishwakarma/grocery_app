import React from "react";

const RecentlyViewed = () => {
  const viewed = [
    { id: 1, name: "Milk Tea", price: 3, image: "/milk.png" },
    { id: 2, name: "Beef", price: 22, image: "/beef.png" },
    // Add more
  ];
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-3">Recently Viewed Products</h3>
      <div className="flex gap-4 overflow-x-auto">
        {viewed.map((item) => (
          <div key={item.id} className="min-w-[120px] text-center">
            <img src={item.image} alt={item.name} className="h-20 mx-auto" />
            <p className="text-sm mt-1">{item.name}</p>
            <p className="text-green-600 font-bold text-sm">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
