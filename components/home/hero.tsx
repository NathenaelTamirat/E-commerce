import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative container mx-auto px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
        <div className="max-w-2xl text-center sm:mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium Quality Products
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Discover our curated collection of high-quality products designed to enhance your lifestyle.
          </p>
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Link
              href="/products"
              className="rounded-md bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Shop Now
            </Link>
            <Link
              href="/categories"
              className="rounded-md border border-white bg-transparent px-8 py-3 text-base font-medium text-white hover:bg-white/10"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
