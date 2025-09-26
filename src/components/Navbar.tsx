"use client";
import Link from "next/link";
import { useCart } from "../utils/CartContext";
import { useTheme } from "../utils/ThemeContext";

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
          <Link href="/cart">
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>{" "}
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
