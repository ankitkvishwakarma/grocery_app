import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d1f0b2] font-sans overflow-hidden">
      <motion.div
        className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Forgot Password
        </motion.h1>

        <motion.p
          className="text-sm text-gray-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Enter your email and we’ll send you a link to reset your password.
        </motion.p>

        <form className="space-y-4">
          <motion.input
            type="email"
            placeholder="Email address"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          />

          <motion.button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Send Reset Link
          </motion.button>
        </form>

        <motion.p
          className="text-sm text-center mt-6 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Remember your password?{" "}
          <Link to="/" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ForgetPassword;
