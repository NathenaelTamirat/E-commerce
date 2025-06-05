"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1000)
  }

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Subscribe to Our Newsletter</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-300">
          Stay updated with our latest products, exclusive offers, and promotions.
        </p>

        {isSubmitted ? (
          <div className="mx-auto max-w-md rounded-lg bg-green-100 p-4 text-green-800">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm">You'll receive our newsletter updates soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-md border-gray-300 px-4 py-3 focus:border-white focus:ring-white"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-md bg-white px-6 py-3 font-medium text-gray-900 hover:bg-gray-100 disabled:opacity-75"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
