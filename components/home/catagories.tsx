import Link from "next/link"
import Image from "next/image"
import { getCategories } from "@/lib/products"

export default function Categories() {
  const categories = getCategories()

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Shop by Category</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
