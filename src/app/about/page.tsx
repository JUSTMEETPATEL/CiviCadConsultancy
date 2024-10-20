"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";


export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="bg-gray-600 text-white px-3 py-1 md:px-4 md:py-2 mr-6 rounded-lg hover:text-lg transition-all duration-200"
        >
          Home
        </Link>
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          About Civicad
        </h1>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Civicad, our mission is to transform spaces and enhance lives
            through innovative and sustainable architectural design. We strive
            to create environments that inspire, function efficiently, and
            contribute positively to the communities we serve.
          </p>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Our History
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 2024, Civicad has grown from a small local firm to a
                renowned architectural consultancy with projects across the
                country. Our journey has been marked by a commitment to
                excellence, innovation, and sustainable design practices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we&apos;ve had the privilege of working on
                diverse projects, from residential homes to large-scale
                commercial developments, each contributing to our rich portfolio
                and expertise.
              </p>
            </div>
            {/* <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Civicad+Office"
                alt="Civicad Office"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div> */}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-8">Our Team</h2>
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
                role: "Marketing Head",
                image: "/Rudransh.jpg?height=200&width=200&text=Rudransh",
                link: "https://www.linkedin.com/in/rudransh-basu-63a19a224",
              },
            ].map((member) => (
              <Card key={member.name} className="text-center">
                <Link href={member.link}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-between gap-5">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="mx-auto mb-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-black">
                          {member.name}
                        </h3>
                        <p className="text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries in design and technology",
              },
              {
                title: "Sustainability",
                description:
                  "Creating eco-friendly and energy-efficient solutions",
              },
              {
                title: "Collaboration",
                description: "Working closely with clients and partners",
              },
              {
                title: "Integrity",
                description:
                  "Maintaining the highest ethical standards in all we do",
              },
            ].map((value) => (
              <Card
                key={value.title}
                className="bg-white shadow-lg border-t-4 border-gray-500"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 mb-6">
            Let&apos;s bring your vision to life. Contact us today for a
            consultation.
          </p>
          <Link
            href="mailto:civicadconsultancy@gmail.com"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
