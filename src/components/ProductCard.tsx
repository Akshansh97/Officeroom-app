"use client";
import { Product } from "../utils/CartContext";

interface ProductCardProps {
  product: Product;
  onAdd?: () => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      {onAdd && <button onClick={onAdd}>Add to Cart</button>}
    </div>
  );
}
