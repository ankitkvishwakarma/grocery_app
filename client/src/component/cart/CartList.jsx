import React from "react";
import CartItem from "./CartItem";
import { AnimatePresence, motion } from "framer-motion";

const CartList = ({ items, onChangeQty, onRemove }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4">Your Shopping Cart</h2>

      {items.length === 0 ? (
        <motion.div
          className="text-center text-gray-500"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Your cart is empty 🛒
        </motion.div>
      ) : (
        <AnimatePresence>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onChangeQty={onChangeQty}
              onRemove={onRemove}
            />
          ))}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default CartList;
