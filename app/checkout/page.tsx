import type { Metadata } from "next"
import CheckoutForm from "@/components/checkout/checkout-form"
import OrderSummary from "@/components/checkout/order-summary"

export const metadata: Metadata = {
  title: "Checkout | Nathenael Tamirat E-commerce",
  description: "Complete your purchase securely",
}

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>
        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}
