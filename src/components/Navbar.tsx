"use client";
import Link from "next/link";
import { useTheme } from "../utils/ThemeContext";
import { useCart } from "../utils/CartContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h1>OfficeRoom</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/cart">Cart ({cart.length})</Link>
        </li>
        <li>
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </li>
      </ul>
    </nav>
  );
}
