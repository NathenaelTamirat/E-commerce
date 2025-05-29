"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"

export default function CheckoutForm() {
  const router = useRouter()
  const { clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      clearCart()
      router.push("/checkout/success")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1 block text-sm font-medium">
              First Name
            </label>
            <input id="firstName" type="text" required className="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1 block text-sm font-medium">
              Last Name
            </label>
            <input id="lastName" type="text" required className="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input id="email" type="email" required className="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium">
              Phone
            </label>
            <input id="phone" type="tel" required className="w-full rounded-md border border-gray-300 p-2" />
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Shipping Address</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="address" className="mb-1 block text-sm font-medium">
              Address
            </label>
            <input id="address" type="text" required className="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label htmlFor="city" className="mb-1 block text-sm font-medium">
              City
            </label>
            <input id="city" type="text" required className="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label htmlFor="state" className="mb-1 block text-sm font-medium">
              State/Province
            </label>
            <input id="state" type="text" required className="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label htmlFor="zip" className="mb-1 block text-sm font-medium">
              ZIP/Postal Code
            </label>
            <input id="zip" type="text" required className="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div>
            <label htmlFor="country" className="mb-1 block text-sm font-medium">
              Country
            </label>
            <select id="country" required className="w-full rounded-md border border-gray-300 p-2">
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="ET">Ethiopia</option>
            </select>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Payment Information</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="cardName" className="mb-1 block text-sm font-medium">
              Name on Card
            </label>
            <input id="cardName" type="text" required className="w-full rounded-md border border-gray-300 p-2" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="cardNumber" className="mb-1 block text-sm font-medium">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              required
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="expDate" className="mb-1 block text-sm font-medium">
              Expiration Date
            </label>
            <input
              id="expDate"
              type="text"
              required
              placeholder="MM/YY"
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="mb-1 block text-sm font-medium">
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              required
              placeholder="123"
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-black px-6 py-3 text-base font-medium text-white hover:bg-black/80 disabled:opacity-70"
      >
        {isSubmitting ? "Processing..." : "Place Order"}
      </button>
    </form>
  )
}
