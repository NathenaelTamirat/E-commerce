"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/context/cart-context"
import SearchBar from "@/components/layout/search-bar"

export default function Header() {
  const pathname = usePathname()
  const { cartItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              className="mr-2 rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">NT Store</span>
            </Link>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium ${
                  pathname === link.href ? "text-black" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/cart"
              className="relative rounded-md p-2 text-gray-500 hover:bg-gray-100"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === link.href
                    ? "bg-gray-100 text-black"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute left-0 top-16 w-full bg-white p-4 shadow-md">
          <SearchBar onClose={() => setIsSearchOpen(false)} />
        </div>
      )}
    </header>
  )
}
