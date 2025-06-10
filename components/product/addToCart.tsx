"use client"

import { useState } from "react"
import { ShoppingBag, Check } from "lucide-react"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/types"

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setIsAdded(true)

    // Reset the added state after 2 seconds
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <label htmlFor="quantity" className="mr-4 text-sm font-medium">
          Quantity:
        </label>
        <div className="flex items-center rounded-md border border-gray-300">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
            className="w-12 border-x border-gray-300 py-1 text-center"
            aria-label="Quantity"
          />
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className={`flex w-full items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white ${
          isAdded ? "bg-green-600 hover:bg-green-700" : "bg-black hover:bg-black/80"
        }`}
      >
        {isAdded ? (
          <>
            <Check className="mr-2 h-5 w-5" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingBag className="mr-2 h-5 w-5" />
            Add to Cart
          </>
        )}
      </button>
    </div>
  )
}
