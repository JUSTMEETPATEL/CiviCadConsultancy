'use client'

import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote: "I've tried many similar solutions, but this one stands out for its intuitive interface and robust feature set. It's made our development process so much smoother.",
    author: "Sounak Dutta",
    role: "Product Manager",
    company: "Future Design",
    rating: 5,
    image: "/SounakDutta.jpg"
  },
  // Add more testimonials here
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-semibold text-[#6B8579] mb-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-8">
          Discover why leading companies trust us to deliver exceptional results.
        </p>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10"
            onClick={previousTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Card className="bg-white mt-20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                
                <blockquote className="text-gray-700 text-lg italic max-w-2xl">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </blockquote>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentIndex].role} · {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

