"use client"

import { useCart } from "@/context/cart-context"

export default function OrderSummary() {
  const { cartItems } = useCart()

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)

  const shipping = subtotal > 0 ? 10 : 0
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + shipping + tax

  return (
    <div className="rounded-lg border bg-gray-50 p-6">
      <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

      <div className="mb-4 max-h-60 overflow-auto">
        {cartItems.map((item) => (
          <div key={item.product.id} className="mb-3 flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs">{item.quantity}</span>
              <span className="text-sm">{item.product.name}</span>
            </div>
            <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

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
