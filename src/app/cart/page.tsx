"use client";
import { useCart } from "../../utils/CartContext";
import Link from "next/link";

export default function CartPage() {
  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    getTotal,
    clearCart,
  } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/products">Shop Now</Link>
        </p>
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
                  <p>₹{item.price}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="px-2 bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-lg font-semibold">Total: ₹{getTotal()}</h2>
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              Clear Cart
            </button>
            <Link href="/checkout">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
