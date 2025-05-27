"use client"

import { useCart } from "@/context/cart-context"

export default function CartSummary() {
  const { cartItems } = useCart()

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)

  const shipping = subtotal > 0 ? 10 : 0
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + shipping + tax

  return (
    <div className="rounded-lg border bg-gray-50 p-6">
      <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between border-b border-gray-200 pb-4">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-4">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-4">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
