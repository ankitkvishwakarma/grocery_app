import React, { useState } from "react";
import { FaGoogle, FaGithub, FaPinterestP } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./Redux/authSlice"; // 👈 import login action

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      if (!res.data.token) {
        toast.error(res.data.error?.message || "Login failed");
        return;
      }

      toast.success("Login Successful ✅");

      // 👇 Redux + localStorage update
      dispatch(
        login({
          user: res.data.user, // backend se aapko user object milna chahiye
          token: res.data.token,
        })
      );

      navigate("/"); // home page par redirect
    } catch (err) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#d1f0b2] font-sans overflow-hidden">
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center bg-white rounded-lg shadow-lg py-10 px-6 md:px-12"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full max-w-md">
          <motion.h1
            className="text-3xl font-bold mb-2 text-gray-800"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Login
          </motion.h1>

          <motion.p
            className="text-sm text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome back! Please login to your account.
          </motion.p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              value={formData.email}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            />

            <motion.input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
              value={formData.password}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            />

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/ForgetPassword" className="text-green-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold"
              transition={{ type: "spring", stiffness: 200 }}
            >
              Login
            </motion.button>
          </form>

          <motion.div
            className="my-6 text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            or login with
          </motion.div>

          <motion.div
            className="flex justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[FaGoogle, FaGithub, FaPinterestP].map((Icon, idx) => (
              <motion.button
                key={idx}
                className="group p-3 border rounded-full transition duration-300 ease-in-out hover:bg-green-100 hover:shadow-lg"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-green-600 group-hover:text-green-700 text-xl transition-all duration-300" />
              </motion.button>
            ))}
          </motion.div>

          <motion.p
            className="text-sm text-center mt-6 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-600 font-semibold hover:underline">
              Sign up
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
