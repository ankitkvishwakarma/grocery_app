import React from "react";

const SidebarFilter = () => {
  return (
    <aside className="w-full md:w-64 bg-white p-4 border rounded shadow-sm space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Departments</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Vegetables</li>
          <li>Fruits</li>
          <li>Fastfood</li>
          <li>Drinks</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Filter by Price</h3>
        <input type="range" min="0" max="100" className="w-full" />
        <div className="text-sm text-gray-600 mt-1">$10 - $90</div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex gap-2 flex-wrap">
          {["red", "green", "blue", "yellow", "black"].map((color) => (
            <span key={color} className={`w-5 h-5 rounded-full bg-${color}-500 cursor-pointer`}></span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Popular Size</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Large</li>
          <li>Medium</li>
          <li>Small</li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarFilter;
