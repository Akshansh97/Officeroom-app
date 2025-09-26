"use client";
import { useCart } from '../utils/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '200px', background: '#fff' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Add to Cart
      </button>
    </div>
  );
}