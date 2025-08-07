import React from "react";
import { motion } from "framer-motion";

const CartItem = ({ item, onChangeQty, onRemove }) => {
  const { id, name, price, quantity, weight, emoji } = item;

  return (
    <motion.div
      className="grid grid-cols-4 items-center border-b p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left section: Emoji, Name */}
      <div className="flex gap-2 items-center">
        <motion.button
          onClick={() => onRemove(id)}
          className="text-red-500 text-xl"
          whileTap={{ scale: 0.8 }}
        >
          ×
        </motion.button>

        <motion.div
          className="text-2xl"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {emoji}
        </motion.div>

        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-500">{weight}</p>
        </div>
      </div>

      {/* Price */}
      <span>${price.toFixed(2)}</span>

      {/* Quantity Buttons */}
      <div className="flex items-center gap-2">
        <motion.button
          onClick={() => onChangeQty(id, -1)}
          className="px-2 bg-gray-200 rounded"
          whileTap={{ scale: 0.9 }}
        >
          −
        </motion.button>
        <span>{quantity}</span>
        <motion.button
          onClick={() => onChangeQty(id, 1)}
          className="px-2 bg-gray-200 rounded"
          whileTap={{ scale: 0.9 }}
        >
          +
        </motion.button>
      </div>

      {/* Subtotal */}
      <span>${(price * quantity).toFixed(2)}</span>
    </motion.div>
  );
};

export default CartItem;
