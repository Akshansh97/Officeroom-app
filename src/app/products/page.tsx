"use client";
import { useCart } from "../../utils/CartContext";
import ProductCard from "../../components/ProductCard";

const products = [
  { id: 1, name: "Office Chair", price: 2500, image: "/images/chair.jpg" },
  { id: 2, name: "Wooden Desk", price: 5500, image: "/images/desk.jpg" },
  { id: 3, name: "Table Lamp", price: 1200, image: "/images/lamp.jpg" },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Our Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => addToCart(product)}
          />
        ))}
      </div>
    </main>
  );
}
