"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { getCategories, getPriceRange } from "@/lib/products"

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categories = getCategories()
  const { min: minAvailable, max: maxAvailable } = getPriceRange()

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([minAvailable, maxAvailable])
  const [sort, setSort] = useState("featured")

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get("category")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    const sortParam = searchParams.get("sort")

    if (category) {
      setSelectedCategories(category.split(","))
    }

    if (minPrice && maxPrice) {
      setPriceRange([Number.parseFloat(minPrice), Number.parseFloat(maxPrice)])
    }

    if (sortParam) {
      setSort(sortParam)
    }
  }, [searchParams])

  // Apply filters
  const applyFilters = () => {
    const params = new URLSearchParams()

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","))
    }

    if (priceRange[0] !== minAvailable) {
      params.set("minPrice", priceRange[0].toString())
    }

    if (priceRange[1] !== maxAvailable) {
      params.set("maxPrice", priceRange[1].toString())
    }

    if (sort !== "featured") {
      params.set("sort", sort)
    }

    router.push(`/products?${params.toString()}`)
  }

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  // Reset filters
  const resetFilters = () => {
    setSelectedCategories([])
    setPriceRange([minAvailable, maxAvailable])
    setSort("featured")
    router.push("/products")
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.slug)}
                onCheckedChange={() => handleCategoryChange(category.slug)}
              />
              <Label htmlFor={`category-${category.id}`} className="ml-2 cursor-pointer text-sm font-medium">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
        <Slider
          defaultValue={[minAvailable, maxAvailable]}
          min={minAvailable}
          max={maxAvailable}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-6"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm">${priceRange[0]}</span>
          <span className="text-sm">${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Sort By</h3>
        <select
          value={sort}
          onChange={handleSortChange}
          className="w-full rounded-md border border-gray-300 p-2 text-sm"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <button
          onClick={applyFilters}
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/80"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Reset Filters
        </button>
      </div>
    </div>
  )
}
