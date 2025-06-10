"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Product } from "@/lib/types"

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="mt-16">
      <Tabs defaultValue="description">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6 rounded-md border p-6">
          <h3 className="mb-4 text-lg font-semibold">Product Description</h3>
          <div className="prose max-w-none text-gray-700">
            <p>{product.description}</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="mt-6 rounded-md border p-6">
          <h3 className="mb-4 text-lg font-semibold">Product Specifications</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-md bg-gray-50 p-4">
              <h4 className="font-medium">Dimensions</h4>
              <p className="text-sm text-gray-600">10 x 5 x 2 inches</p>
            </div>
            <div className="rounded-md bg-gray-50 p-4">
              <h4 className="font-medium">Weight</h4>
              <p className="text-sm text-gray-600">1.5 lbs</p>
            </div>
            <div className="rounded-md bg-gray-50 p-4">
              <h4 className="font-medium">Materials</h4>
              <p className="text-sm text-gray-600">Premium quality materials</p>
            </div>
            <div className="rounded-md bg-gray-50 p-4">
              <h4 className="font-medium">Warranty</h4>
              <p className="text-sm text-gray-600">1 year limited warranty</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6 rounded-md border p-6">
          <h3 className="mb-4 text-lg font-semibold">Customer Reviews</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
              </div>
              <div>
                <div className="flex items-center">
                  <h4 className="font-medium">John Doe</h4>
                  <span className="ml-2 text-sm text-gray-500">- 2 months ago</span>
                </div>
                <div className="mt-1 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-gray-700">Great product! Exactly as described and arrived quickly.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
              </div>
              <div>
                <div className="flex items-center">
                  <h4 className="font-medium">Jane Smith</h4>
                  <span className="ml-2 text-sm text-gray-500">- 1 month ago</span>
                </div>
                <div className="mt-1 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < 5 ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-gray-700">
                  Absolutely love this! The quality is exceptional and it looks even better in person.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
