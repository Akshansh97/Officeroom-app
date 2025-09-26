"use client";
import Link from "next/link";
import React from "react";
import { useCart } from "../utils/CartContext";
import { useTheme } from "../utils/ThemeContext";

export default function Navbar() {
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const totalQty = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container-max mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-semibold text-primary">
            OfficeRoom
          </Link>
          <nav className="hidden md:flex gap-4 items-center">
            <Link href="/products" className="text-sm">
              Products
            </Link>
            <Link href="/about" className="text-sm">
              About
            </Link>
            <Link href="/contact" className="text-sm">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <input
            aria-label="Search products"
            className="hidden sm:inline-block px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search products..."
          />
          <Link
            href="/cart"
            className="text-sm px-3 py-2 rounded-md border relative"
          >
            Cart{" "}
            <span className="ml-1 font-medium text-primary">({totalQty})</span>
          </Link>
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-md text-sm border"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </header>
  );
}
