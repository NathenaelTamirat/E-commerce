import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "I'm extremely satisfied with the quality of products. The customer service is exceptional and delivery was faster than expected.",
    author: "Sarah Johnson",
    role: "Loyal Customer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The attention to detail and product quality is outstanding. I've been shopping here for years and have never been disappointed.",
    author: "Michael Chen",
    role: "Verified Buyer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "The website is so easy to navigate and the checkout process is seamless. I received my order in perfect condition and will definitely be shopping here again.",
    author: "Emily Rodriguez",
    role: "New Customer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl">What Our Customers Say</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
