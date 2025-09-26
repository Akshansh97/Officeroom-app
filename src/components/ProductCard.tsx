"use client";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAdd?: () => void; // ✅ make onAdd optional
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      {onAdd && (
        <button onClick={onAdd} style={{ marginTop: "0.5rem" }}>
          Add to Cart
        </button>
      )}
    </div>
  );
}
