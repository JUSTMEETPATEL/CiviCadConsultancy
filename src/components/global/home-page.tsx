import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Ruler, MessageCircle, House, Store } from "lucide-react";
import Testimonial from "../Tetimonial";
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-12 md:gap-y-36 bg-[#EEEEEE]">
      {/* Hero Section */}
      <section className="container px-4 pt-8 md:pt-24 pb-8 md:pb-16">
        <div className="max-w-3xl space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#2A332F] via-[#FFFFFF] to-[#4B5563] text-transparent bg-clip-text">
              Designing{" "}
            </span>
            <span className="block text-[#4B5563]">tomorrow&apos;s spaces</span>
          </h1>
          <p className="text-base md:text-lg text-[#2A332F] max-w-2xl">
            At Civicad, we bring architectural visions to life. Our passion for
            design, precision, and innovation fuels our mission to create
            inspiring spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href='/get-started'
              className={`${buttonVariants({size:"lg"})}bg-[#2A332F] hover:bg-[#94ADA3] text-white w-full sm:w-auto`}
            >
              Start your project →
            </Link>
            <Link
              href="/projects"
              className={`${buttonVariants({size:"lg"})}bg-[#2A332F] hover:bg-[#94ADA3] text-white w-full sm:w-auto`}
            >
              <span className="text-black">View our Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="container px-4 py-8 md:py-16 relative">
          <div className="z-20 w-[200px] bg-white rounded-t-3xl shadow-lg p-4 flex items-center gap-3">
            <Image
              src="/Civicad.png"
              alt="Civicad Logo"
              width={80}
              height={32}
              className="h-6 w-auto"
            />
            <h2 className="font-medium text-sm mb:text-lg">Civicad</h2>
          </div>
        <Card className="bg-white/90 rounded-none backdrop-blur-sm p-4 md:p-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute right-4 sm:right-8 top-8 z-20">
            <Card className="bg-white/90 backdrop-blur-sm p-3 md:p-4 flex items-center gap-2 md:gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#7E998D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-xs md:text-sm">Expert Team</h3>
                <p className="text-xs text-gray-600">Industry professional</p>
              </div>
            </Card>
          </div>
          <div className="absolute left-0 sm:-left-4 bottom-8 z-20">
            <Card className="bg-white/90 backdrop-blur-sm p-3 md:p-4 ml-4 sm:ml-10 flex items-center gap-2 md:gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#7E998D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-xs md:text-sm">Interactive Design</h3>
                <p className="text-xs text-gray-600">Experience our 3D renders</p>
              </div>
            </Card>
          </div>
          <Image
            src="/Image 5.png"
            alt="Modern interior design showcase"
            width={1200}
            height={800}
            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
            priority
            />
        </div>
            </Card>
      </section>

      {/* Expertise Section */}
      <section className="container space-y-36 px-4 py-8 md:py-16 mb-8 md:mb-20">
        <div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center text-[#7E998D] mb-8 md:mb-16">
          Our Expertise
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[6rem]">
          <Card className="bg-white/90 w-full backdrop-blur-sm p-4 md:w-auto">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <Home size={30} stroke="#7E998D" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Interior Renderings</h3>
                <p className="text-base text-gray-600">Excellent 3D renders</p>
              </div>
            </div>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm p-4 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <Ruler size={30} stroke="#7E998D" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Architectural Design</h3>
                <p className="text-base text-gray-600">International standard design</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex justify-center mt-6 md:mt-10">
          <Card className="bg-white/90 backdrop-blur-sm p-4 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <MessageCircle size={30} stroke="#7E998D" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Consultation</h3>
                <p className="text-base text-gray-600">Need suggestion we can help</p>
              </div>
            </div>
          </Card>
        </div>
        </div>

      {/* Delicate Spaces Section */}

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-28 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
            Delicate spaces
          </h2>
          <p className="text-gray-600 text-left text-base md:text-lg">
            We believe that a well-designed space can have a positive impact on your life, <br />  and we are committed to creating spaces that are not only beautiful but also <br/> functional and comfortable.
          </p>
        </div>
      </section>

      {/* Sustainable Design Section */}
      <section className="container px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Great design doesn&apos;t have to <br/> come at a cost to the environment.
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              From sleek minimalist designs to more organic, nature-inspired homes, we&apos;ve designed a wide range of modern sustainable homes for clients across the country.
            </p>
          </div>
          <div className="bg-transparent">
            <Image
              src="/Image.png"
              alt="Sustainable architectural model"
              width={400}
              height={400}
              className="rounded-lg w-full md:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Design Component */}
      <section className="container px-4 py-8 md:py-16 relative">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute right-4 sm:right-8 top-8 z-20">
            <Card className="bg-white/90 backdrop-blur-sm p-3 md:p-4 flex items-center gap-2 md:gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <House size={24} stroke="#7E998D" />
              </div>
              <div>
                <h3 className="font-medium text-xs md:text-sm">Active Work</h3>
                <p className="text-xs text-gray-600">View our work</p>
              </div>
            </Card>
          </div>
          <div className="absolute left-0 sm:-left-4 bottom-8 z-20">
            <Card className="bg-white/90 backdrop-blur-sm p-3 md:p-4 ml-4 sm:ml-10 flex items-center gap-2 md:gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <Store size={24} stroke="#7E998D" />
              </div>
              <div>
                <h3 className="font-medium text-xs md:text-sm">Completed Projects</h3>
                <p className="text-xs text-gray-600">View our work</p>
              </div>
            </Card>
          </div>
          <Image
            src="/Image 4.png"
            alt="Modern interior design showcase"
            width={1200}
            height={800}
            className="rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
            priority
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container px-4 py-8 md:py-16">
        <Testimonial />
      </section>
    </div>
  );
}
