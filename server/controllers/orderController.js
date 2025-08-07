import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

export const placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate("items.product");
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: "Cart is empty" });

    const totalAmount = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const order = await Order.create({
      userId: req.user._id,
      items: cart.items,
      totalAmount,
    });

    cart.items = [];
    await cart.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).populate("items.product");
  res.json(orders);
};
