import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/types"

export default function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null

  return (
    <div className="mt-16">
      <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
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
    </div>
  )
}
