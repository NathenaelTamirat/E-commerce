"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getFeaturedProducts } from "@/lib/products"

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()
  const [currentIndex, setCurrentIndex] = useState(0)

  const productsPerView = {
    sm: 1,
    md: 2,
    lg: 4,
  }

  const maxIndex = Math.max(0, featuredProducts.length - productsPerView.lg)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const visibleProducts = featuredProducts.slice(currentIndex, currentIndex + productsPerView.lg)

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold sm:text-3xl">Featured Products</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="group">
            <div className="overflow-hidden rounded-lg">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

      <div className="mt-10 text-center">
        <Link
          href="/products"
          className="inline-block rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          View All Products
        </Link>
      </div>
    </section>
  )
}
