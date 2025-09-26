"use client";
import { useCart, Product } from "../../utils/CartContext";
import ProductCard from "../../components/ProductCard";

const products: Product[] = [
  { id: 1, name: "Office Chair", price: 2500, image: "/images/chair.jpg" },
  { id: 2, name: "Wooden Desk", price: 5500, image: "/images/desk.jpg" },
  { id: 3, name: "Table Lamp", price: 1200, image: "/images/lamp.jpg" },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => addToCart(product, 1)}
          />
        ))}
      </div>
    </div>
  );
}
