"use client";
import React from "react";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../utils/CartContext";

const products: Product[] = [
  {
    id: 1,
    name: "Ergonomic Office Chair",
    price: 4999,
    image: "/images/products/Chairs/chair1.jpg",
  },
  {
    id: 2,
    name: "Wooden Office Desk",
    price: 7999,
    image: "/images/products/Tables/table1.jpg",
  },
  {
    id: 3,
    name: "Modern Desk Lamp",
    price: 1999,
    image: "/images/products/Lamps/lamp1.jpg",
  },
  // 👉 add more products here
];

export default function ProductsPage() {
  return (
    <main className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
