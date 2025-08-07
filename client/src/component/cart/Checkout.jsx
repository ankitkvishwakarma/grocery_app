import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, discount } = useSelector((state) => state.cart); // ✅ FIXED

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = (items || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  const formatCurrency = (num) => `₹${num.toFixed(2)}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (items.length === 0) {
      toast.error("Cart is empty!");
      return;
    }

    toast.success("Payment Confirmed! Redirecting...");
    setTimeout(() => {
      navigate("/"); // redirect to home
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Billing Form */}
      <div className="flex-1 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="border p-2 rounded" required />
          <input type="email" placeholder="Email" className="border p-2 rounded" required />
          <input type="text" placeholder="Phone" className="border p-2 rounded" required />
          <input type="text" placeholder="City" className="border p-2 rounded" />
          <input type="text" placeholder="State" className="border p-2 rounded" />
          <input type="text" placeholder="Pincode" className="border p-2 rounded" />
          <textarea placeholder="Full Address" className="border p-2 rounded col-span-2" rows={3} required></textarea>

          {/* Payment Method */}
          <div className="col-span-2">
            <h3 className="font-medium mb-2">Payment Method</h3>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <span>Cash on Delivery (COD)</span>
            </label>
            <label className="flex items-center space-x-2 mt-1">
              <input
                type="radio"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
              />
              <span>UPI / Online Payment</span>
            </label>
          </div>

          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded col-span-2 hover:bg-green-700">
            Confirm Payment
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {/* Cart Items */}
        <div className="space-y-2 text-sm">
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="flex justify-between border-b py-1">
                <div>
                  {item.name} <span className="text-gray-500">x{item.quantity}</span>
                </div>
                <div>{formatCurrency(item.price * item.quantity)}</div>
              </div>
            ))
          ) : (
            <p className="text-red-500">Cart is empty</p>
          )}
        </div>

        <hr className="my-3" />
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>Discount ({discount}%)</span>
            <span>-{formatCurrency(discountAmount)}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
