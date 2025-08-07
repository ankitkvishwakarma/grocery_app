import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { cartCount } from "../redux/Selector";
import UserLocation from './Header/UserLocation'; // Import UserLocation component
import CustomCategoryDropdown from "./Header/CustomCategoryDropdown"; // Import custom dropdown component

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   // gets full cart object
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <header className="bg-green-700 text-white shadow-md">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src="/assets/banner-img-2-1.png" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Grocery.</span>
        </motion.div>

        {/* Search Bar - Desktop Only */}
        <motion.div
          className="hidden md:flex flex-1 mx-4 max-w-xl relative items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Category Dropdown */}
          <div className="relative flex items-center w-full">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
              <CustomCategoryDropdown />
            </div>
            <input
              className="w-full pl-48 pr-10 py-2 rounded text-sm text-gray-200 border"
              placeholder="Search products..."
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-200" />
          </div>
        </motion.div>


        {/* Icons - Desktop */}
        <motion.div
          className="hidden md:flex items-center gap-4 text-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/wishlist">
            <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
              <FaHeart />
            </motion.div>
          </Link>

          <Link to="/cart">
            <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer relative">
              <FaShoppingCart size={24} />
               {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
              {totalCount}
            </span>
            )}
            </motion.div>
          </Link>

          <Link to="/userlogin">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaUser className="cursor-pointer" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Hamburger - Mobile */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
          whileTap={{ scale: 0.8 }}
        >
          {mobileMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
        </motion.button>
      </div>

      {/* Menu Links - Desktop */}
      <motion.nav
        className="hidden md:flex max-w-7xl mx-auto px-4 gap-6 text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <button className="bg-yellow-400 text-black px-4 py-1.5 rounded flex items-center gap-2 font-semibold text-sm">
          <GiHamburgerMenu />
          Browse All Categories
        </button>
        {[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/ProductGrid" },
          { label: "Fruits", path: "/fruits" },
          { label: "Vegetable", path: "/vegetables" },
          { label: "Beverages", path: "/beverages" },
          { label: "About Us", path: "/about" },
          { label: "Blogs", path: "/blogs" },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="hover:text-yellow-400 transition"
          >
            {item.label}
          </Link>
        ))}

        {/* <div className="ml-auto text-yellow-400 bg-transparent">
          <UserLocation />
        </div> */}
      </motion.nav>

      {/* Mobile Menu with Framer Motion Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden px-4 pb-4 space-y-3 bg-green-800 text-sm font-medium"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2 py-2">
              <button className="bg-yellow-400 text-black px-4 py-1.5 rounded flex items-center gap-2 font-semibold text-sm w-fit">
                <GiHamburgerMenu />
                Browse All Categories
              </button>

              {/* 🔍 Mobile Search Bar */}
              <div className="relative w-full">
                <CustomCategoryDropdown />
                <input
                  className="w-full mt-2 pl-4 pr-10 py-2 rounded text-sm text-gray-800"
                  placeholder="Search products..."
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-200" />
              </div>

              {["Home", "Shop", "Fruits", "Vegetable", "Beverages", "About Us", "Blogs"].map((item, i) => (
                <Link key={i} to="/" className="hover:text-yellow-400 transition">
                  {item}
                </Link>
              ))}
              <Link to="/userlogin" className="hover:text-yellow-400">Login</Link>
              {/* <select className="text-yellow-400 bg-transparent">
          {/* <UserLocation/> 
        </select> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
