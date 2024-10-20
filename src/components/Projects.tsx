'use client'

import React, { useRef, useEffect,useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'


const images = [
  '/1.png?height=300&width=400&text=Image+1',
  '/2.png?height=300&width=400&text=Image+2',
  '/3.png?height=300&width=400&text=Image+3',
  '/4.png?height=300&width=400&text=Image+4',
  '/5.png?height=300&width=400&text=Image+5',
  '/6.png?height=300&width=400&text=Image+6',
  '/7.png?height=300&width=400&text=Image+7',
  '/8.png?height=300&width=400&text=Image+8',
  '/9.png?height=300&width=400&text=Image+9',
  '/10.png?height=300&width=400&text=Image+10',
  '/11.png?height=300&width=400&text=Image+11',
]

export default function Projects() {
  const stripRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const totalWidth = images.length * 420 // 400px image width + 20px gap
    const duration = totalWidth / 100 // Adjust this value to change animation speed

    animationRef.current = gsap.to(strip, {
      x: -totalWidth,
      duration: duration,
      ease: 'none',
      repeat: -1,
      paused: true,
    })

    animationRef.current.play()

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [])

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    if (animationRef.current) {
      animationRef.current.pause()
    }
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    if (animationRef.current) {
      animationRef.current.play()
    }
  }



  return (

    <section className="w-full overflow-hidden bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-24 text-center">Projects</h2>
          
        <div className="relative">
          <div
            ref={stripRef}
            className="flex space-x-5"
            style={{ width: `${images.length * 420}px` }}
          >
            {images.concat(images).map((src, index) => (
              <div
                key={index}
                className="relative w-[400px] h-[300px] flex-shrink-0"
                onMouseEnter={() => handleMouseEnter(index % images.length)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-all duration-300 ${
                    hoveredIndex !== null && hoveredIndex !== index % images.length
                      ? 'grayscale'
                      : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}