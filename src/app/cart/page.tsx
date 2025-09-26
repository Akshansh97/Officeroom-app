"use client";
import { useCart } from "../../utils/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-lg font-semibold">Total: ₹{total}</h2>
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
