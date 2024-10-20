"use client"

import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-gray-800 transition-all duration-200 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="flex items-center">
              Home
              <ChevronRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
          <h1 className="text-5xl font-extrabold text-center mt-8 mb-4 bg-gradient-to-r from-black to-gray-600 text-transparent bg-clip-text">
            About Civicad
          </h1>
          <p className="text-xl text-center text-gray-600">Shaping the Future of Architecture</p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          className="mb-16 bg-gray-100 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Civicad, our mission is to transform spaces and enhance lives
            through innovative and sustainable architectural design. We strive
            to create environments that inspire, function efficiently, and
            contribute positively to the communities we serve.
          </p>
        </motion.section>

        {/* History Section */}
        <motion.section
          className="mb-16 bg-gray-100 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-black mb-4">Our History</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                Founded in 2024, Civicad has grown from a small local firm to a
                renowned architectural consultancy with projects across the
                country. Our journey has been marked by a commitment to
                excellence, innovation, and sustainable design practices.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Over the years, we&apos;ve had the privilege of working on
                diverse projects, from residential homes to large-scale
                commercial developments, each contributing to our rich portfolio
                and expertise.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sounak Dutta",
                role: "CEO",
                image: "/SounakDutta.jpg?height=200&width=200&text=Sounak",
                link: "https://www.linkedin.com/in/sounak-dutta-bbb4162a6",
              },
              {
                name: "Meet Patel",
                role: "CTO",
                image: "/Meet.jpeg?height=200&width=200&text=Meet",
                link: "https://www.linkedin.com/in/meetpatel011/",
              },
              {
                name: "Shayan Hazra",
                role: "COO",
                image: "/Shayan.jpg?height=200&width=200&text=Shayan",
                link: "https://www.linkedin.com/in/shayan-hazra-65402027a/",
              },
              {
                name: "Rudransh Basu",
                role: "CMO",
                image: "/Rudransh.jpg?height=200&width=200&text=Rudransh",
                link: "https://www.linkedin.com/in/rudransh-basu-63a19a224",
              },
            ].map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white text-center overflow-hidden group rounded-xl shadow-lg border border-gray-200">
                  <Link href={member.link}>
                    <CardContent className="pt-6 p-4">
                      <div className="flex flex-col items-center justify-between gap-5">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-black">
                          <Image
                            src={member.image}
                            alt={member.name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-black group-hover:text-gray-600 transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-lg text-gray-600">{member.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries in design and technology",
                icon: "🚀",
              },
              {
                title: "Sustainability",
                description: "Creating eco-friendly and energy-efficient solutions",
                icon: "🌿",
              },
              {
                title: "Collaboration",
                description: "Working closely with clients and partners",
                icon: "🤝",
              },
              {
                title: "Integrity",
                description: "Maintaining the highest ethical standards in all we do",
                icon: "🛡️",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Card className="bg-white shadow-lg border border-gray-200 h-full group hover:bg-gray-50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Let&apos;s bring your vision to life. Contact us today for a
            consultation.
          </p>
          <Link
            href="mailto:civicadconsultancy@gmail.com"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </motion.section>
      </div>
    </div>
  )
}