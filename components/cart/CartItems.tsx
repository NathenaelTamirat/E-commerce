"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function CartItems() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center">
        <h2 className="mb-4 text-xl font-semibold">Your cart is empty</h2>
        <p className="mb-6 text-gray-500">Looks like you haven't added any products to your cart yet.</p>
        <Link
          href="/products"
          className="inline-block rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/80"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="rounded-lg border">
      <div className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Cart Items</h2>
        <div className="divide-y">
          {cartItems.map((item) => (
            <div key={item.product.id} className="flex py-6">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium">
                      <Link href={`/products/${item.product.id}`} className="hover:underline">
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
                  </div>
                  <p className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center rounded-md border border-gray-300">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.product.id, Math.max(1, Number.parseInt(e.target.value) || 1))
                      }
                      className="w-12 border-x border-gray-300 py-1 text-center"
                      aria-label="Quantity"
                    />
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-sm font-medium text-red-600 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
