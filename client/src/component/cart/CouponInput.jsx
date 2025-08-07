import React from "react";
import { motion } from "framer-motion";

const CouponInput = ({ coupon, setCoupon, onApply, onClear }) => {
  return (
    <motion.div
      className="flex flex-wrap gap-4 items-center p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Coupon input field */}
      <motion.input
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="Coupon Code"
        className="border px-4 py-2 rounded w-60"
        whileFocus={{ scale: 1.02 }}
      />

      {/* Apply button with animation */}
      <motion.button
        onClick={onApply}
        className="bg-green-600 text-white px-4 py-2 rounded"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply Coupon
      </motion.button>

      {/* Clear cart with subtle hover effect */}
      <motion.button
        onClick={onClear}
        className="text-sm text-green-700 underline"
        whileHover={{ scale: 1.05 }}
      >
        Clear Shopping Cart
      </motion.button>
    </motion.div>
  );
};

export default CouponInput;
