import type { Metadata } from "next"
import Hero from "@/components/home/hero"
import FeaturedProducts from "@/components/home/featured-products"
import Categories from "@/components/home/categories"
import Newsletter from "@/components/home/newsletter"
import Testimonials from "@/components/home/testimonials"

export const metadata: Metadata = {
  title: "Home | Nathenael Tamirat E-commerce",
  description: "Discover our curated collection of premium products",
}

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
