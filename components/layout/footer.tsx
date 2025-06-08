import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">NT Store</h3>
            <p className="mb-4 text-sm text-gray-600">Premium quality products for your everyday needs.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories/featured" className="text-gray-600 hover:text-gray-900">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/categories/new-arrivals" className="text-gray-600 hover:text-gray-900">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/categories/best-sellers" className="text-gray-600 hover:text-gray-900">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-gray-900">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">
                <span className="font-medium">Email:</span> info@ntstore.com
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Phone:</span> +251991439979
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Address:</span> Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">© {currentYear} Nathenael Tamirat — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
