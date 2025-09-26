import ProductCard from "../components/ProductCard";

const sampleProducts = [
  { id: 1, name: "Office Chair", price: 4999, image: "/images/chair.jpg" },
  { id: 2, name: "Office Table", price: 8999, image: "/images/table.jpg" },
  { id: 3, name: "Lamp", price: 1299, image: "/images/lamp.jpg" },
];

export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Featured Products</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
