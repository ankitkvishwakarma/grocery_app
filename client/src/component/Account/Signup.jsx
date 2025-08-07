import React from "react";
import { useState } from "react";
import { FaGoogle, FaGithub, FaPinterestP } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log("this is form data", formData)

  const handleChange = (e) => {
    // setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await fetch("http://localhost:5000/api/auth/signup", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),

      // });
      // const data = await res.json();

      const res = await axios.post('http://localhost:5000/api/auth/signup', formData)
      if (!res.data.token) {
        toast.error(data.error.message || "Signup failed");
        return;
      }

      toast.success("Signup successful!");
      // Optional: redirect to login or store token
    } catch (err) {
      console.error("Signup error:", err.message);
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#d1f0b2] font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Sign Up Form */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center bg-white rounded-lg shadow-lg py-10 px-6 md:px-12"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full max-w-md">
          <motion.h1
            className="text-3xl font-bold mb-2 text-gray-800"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            SignUp
          </motion.h1>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <motion.input
              onChange={handleChange}
              type="text"
              value={formData.name}
              name="name"
              placeholder="Enter Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            />
            <motion.input
              onChange={handleChange}
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            />
            <motion.input
              onChange={handleChange}
              type="password"
              name='password'
              value={formData.password}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            />

            <motion.button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Create account
            </motion.button>
          </form>

          <motion.div
            className="my-6 text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            or sign up with
          </motion.div>

          {/* Social Buttons */}
          <motion.div
            className="flex justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[FaGoogle, FaGithub, FaPinterestP].map((Icon, i) => (
              <motion.button
                key={i}
                className="group p-3 border rounded-full hover:bg-gray-100 transition"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-green-600 group-hover:text-green-700 text-xl" />
              </motion.button>
            ))}
          </motion.div>

          {/* Terms & Links */}
          <motion.p
            className="text-xs text-center mt-6 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            By creating an account you agree to Messimo’s{" "}
            <span className="text-green-600 underline">Terms of Services</span> and{" "}
            <span className="text-green-600 underline">Privacy Policy</span>.
          </motion.p>

          <motion.p
            className="text-sm text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            Have an account?{" "}
            <Link to="/userlogin" className="text-green-600 font-semibold hover:underline">
              Log in
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
