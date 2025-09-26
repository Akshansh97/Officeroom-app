"use client";
import React from "react";
import { Product, useCart } from "../utils/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <article className="w-64 bg-white dark:bg-gray-800 border rounded-lg overflow-hidden shadow-sm">
      <div className="h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="font-medium">₹{product.price}</div>
          <button
            onClick={() => addToCart(product)}
            className="ml-2 px-3 py-1 text-sm rounded bg-primary text-white hover:bg-accent"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
