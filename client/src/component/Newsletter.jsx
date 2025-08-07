import React from 'react';

const Newsletter = () => {
  return (
    <section className=" py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Subscribe to Our Newsletter to <br />
        Get <span className="text-green-600">Updates on Our Latest Offers</span>
      </h2>
      <p className="text-gray-500 mb-6">
        Get 25% off on your first order just by subscribing to our newsletter
      </p>

      <form className="flex justify-center items-center gap-2 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-full"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
