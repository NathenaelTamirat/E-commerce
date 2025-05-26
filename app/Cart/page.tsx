import type { Metadata } from "next"
import Link from "next/link"
import CartItems from "@/components/cart/cart-items"
import CartSummary from "@/components/cart/cart-summary"

export const metadata: Metadata = {
  title: "Shopping Cart | Nathenael Tamirat E-commerce",
  description: "Review and manage your shopping cart items",
}

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CartItems />
        </div>
        <div className="lg:col-span-1">
          <CartSummary />
          <div className="mt-6">
            <Link
              href="/checkout"
              className="block w-full rounded-md bg-black px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-black/80"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
