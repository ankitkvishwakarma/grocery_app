import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  changeQuantity,
  applyCoupon,
  clearCart
} from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom'; // <-- Add this if using routing

const CartPage = () => {
  const { items, discount, couponApplied } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate(); // <-- Required for routing to checkout page

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedPrice = totalPrice - (totalPrice * discount) / 100;

  const handleQuantityChange = (id, amount) => {
    if (amount > 0) {
      dispatch(changeQuantity({ id, quantity: amount }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleApplyCoupon = () => {
    dispatch(applyCoupon(couponCode.trim()));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Adjust route path if needed
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-3 border-b">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">₹{item.price} x {item.quantity}</p>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon"
              className="border px-2 py-1 mr-2"
            />
            <button
              onClick={handleApplyCoupon}
              className="px-4 py-1 bg-blue-600 text-white rounded"
            >
              Apply
            </button>
            {couponApplied && (
              <p className="text-green-600 mt-2">Coupon applied! -{discount}%</p>
            )}
          </div>

          <div className="mt-6">
            <p className="text-lg font-medium">Total: ₹{discountedPrice.toFixed(2)}</p>
            {discount > 0 && (
              <p className="text-sm text-gray-500 line-through">₹{totalPrice.toFixed(2)}</p>
            )}
          </div>

          <div className="mt-4 flex gap-4">
            <button
              onClick={handleClearCart}
              className="px-6 py-2 bg-lime-700 text-white rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="px-6 py-2 bg-green-600 text-white rounded"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
