import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Order Confirmation | Nathenael Tamirat E-commerce",
  description: "Your order has been successfully placed",
}

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 text-center">
      <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
      <h1 className="mb-4 text-3xl font-bold">Thank You for Your Order!</h1>
      <p className="mb-8 max-w-md text-gray-600">
        Your order has been successfully placed. We've sent a confirmation email with all the details.
      </p>
      <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6 text-left">
        <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
        <div className="mb-4 flex justify-between border-b pb-2">
          <span>Order Number:</span>
          <span className="font-medium">#ORD-{Math.floor(100000 + Math.random() * 900000)}</span>
        </div>
        <div className="mb-4 flex justify-between border-b pb-2">
          <span>Order Date:</span>
          <span className="font-medium">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Delivery:</span>
          <span className="font-medium">{new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <Link
          href="/"
          className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
        >
          Continue Shopping
        </Link>
        <Link
          href="/account/orders"
          className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
        >
          View Orders
        </Link>
      </div>
    </div>
  )
}
