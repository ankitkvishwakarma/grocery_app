import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OrderSummary = ({ subtotal, discount, total }) => {
  const itemsCount = subtotal > 0 ? subtotal / 10 : 0;

  return (
    <motion.div
      className="bg-white p-6 rounded shadow"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Items</span>
          <span>{itemsCount}</span>
        </div>
        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>₹0.00</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Coupon Discount</span>
          <span>- ₹{discount}</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Animated Checkout Button */}
      <Link to="/Checkout">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Proceed to Checkout
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default OrderSummary;
