"use client";
import React from "react";
import { useCart } from "../../utils/CartContext";

export default function CartPage() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    getTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container-max mx-auto py-12">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container-max mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg border"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain bg-gray-100 rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">₹{item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 border rounded"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => addToCart(item, 1)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">₹{item.price * item.quantity}</div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={clearCart}
          className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Clear Cart
        </button>
        <div className="text-right">
          <div className="text-lg font-bold">Total: ₹{getTotal()}</div>
          <button className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-accent">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
