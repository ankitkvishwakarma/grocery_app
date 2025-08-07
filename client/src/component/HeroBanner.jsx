import React from 'react';

const HeroBanner = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat px-10 py-12 rounded-xl shadow-lg m-6 flex flex-col md:flex-row items-center justify-between"
      style={{ backgroundImage: `url('/assets/banner1.png')` }} 
    >
      <div className="max-w-xl mb-6 md:mb-0 bg-white/80 p-6 rounded-xl backdrop-blur-sm">
        <p className="text-sm text-gray-500 uppercase">The Best Online Grocery Store</p>
        <h1 className="text-4xl font-bold leading-tight text-green-900 mb-4">
          Your One-Stop Shop for <span className="text-green-600">Quality Groceries</span>
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="flex items-center space-x-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded font-semibold">Shop Now</button>
          <button className="bg-gray-100 text-green-800 px-6 py-2 rounded font-semibold">View All Products</button>
        </div>
        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
          <span className="text-yellow-500">★ 4.8 Ratings+</span>
          <span>Trusted by 75k+ Customers</span>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/assets/bannerimage.png" 
          alt="Grocery Banner"
          className="w-[600px] h-[300px] object-contain ml-auto"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
