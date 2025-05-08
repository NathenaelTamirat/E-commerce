import type { Metadata } from "next"
import ProductGrid from "@/components/products/product-grid"
import ProductFilters from "@/components/products/product-filters"

export const metadata: Metadata = {
  title: "Products | Nathenael Tamirat E-commerce",
  description: "Browse our complete collection of premium products",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">All Products</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <ProductFilters />
        </div>
        <div className="md:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}
