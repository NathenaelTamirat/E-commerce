"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { getAllProducts } from "@/lib/products"

export default function ProductGrid() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState(getAllProducts())

  // FilAter products based on URL parameters
  useEffect(() => {
    const category = searchParams.get("category")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    const sort = searchParams.get("sort")

    let filteredProducts = getAllProducts()

    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter((product) => product.price >= Number.parseFloat(minPrice))
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter((product) => product.price <= Number.parseFloat(maxPrice))
    }

    if (sort) {
      switch (sort) {
        case "price-asc":
          filteredProducts.sort((a, b) => a.price - b.price)
          break
        case "price-desc":
          filteredProducts.sort((a, b) => b.price - a.price)
          break
        case "newest":
          filteredProducts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          break
        default:
          break
      }
    }

    setProducts(filteredProducts)
  }, [searchParams])

  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-gray-600">No products found matching your criteria.</p>
        <Link href="/products" className="mt-4 inline-block text-sm font-medium text-black underline">
          Clear filters
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`} className="group">
          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-lg font-semibold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
