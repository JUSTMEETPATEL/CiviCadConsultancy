import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Ruler, MessageCircle } from "lucide-react";
import Testimonial from "../Tetimonial";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-36 bg-[#EEEEEE]">
      {/* Hero Section */}
      <section className="container px-4 pt-12 md:pt-24 pb-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#2A332F] via-[#FFFFFF] to-[#4B5563] text-transparent bg-clip-text">
              Designing{" "}
            </span>
            <span className="block text-[#4B5563]">tomorrow&apos;s spaces</span>
          </h1>
          <p className="text-lg text-[#2A332F] max-w-2xl">
            At Civicad, we bring architectural visions to life. Our passion for
            design, precision, and innovation fuels our mission to create
            inspiring spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[#2A332F] hover:bg-[#94ADA3] text-white"
            >
              Start your project →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#7E998D] text-[#7E998D] hover:bg-[#EEEEEE]"
            >
              <span className="text-black">View our Work</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="container px-4 py-16 relative">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="ml-[5.5rem] z-20 w-[200px] bg-white rounded-t-3xl shadow-lg p-4 flex items-center gap-3">
            <Image
              src="/Civicad.png"
              alt="Civicad Logo"
              width={80}
              height={32}
              className="h-6 w-auto"
            />
            <h2 className="font-medium text-lg">Civicad</h2>
          </div>
          <div className="absolute right-8 top-8 z-20">
            <Card className="bg-white/90 backdrop-blur-sm p-4 flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <svg
                  className="w-5 h-5 text-[#7E998D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-sm">Expert Team</h3>
                <p className="text-xs text-gray-600">Industry professional</p>
              </div>
            </Card>
          </div>
          <div className="absolute -left-4 bottom-8 z-20">
            <Card className="bg-white/90 backdrop-blur-sm p-4 ml-10 flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <svg
                  className="w-5 h-5 text-[#7E998D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-sm">Interactive Design</h3>
                <p className="text-xs text-gray-600">
                  Experience our 3D renders
                </p>
              </div>
            </Card>
          </div>
          <Image
            src="/Group 10.svg"
            alt="Modern interior design showcase"
            width={1200}
            height={800}
            className="rounded-2xl w-full h-[500px] md:h-[600px] object-cover"
            priority
          />
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container flex justify-center items-center flex-col space-y-56 px-4 py-16 mb-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7E998D] mb-16">
            Our Expertise
          </h2>
          <div className="flex justify-center items-center gap-[6rem]">
            <Card className="bg-white/90 backdrop-blur-sm p-4 ml-10 flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <Home size={24} stroke="#7E998D" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Interior Renderings</h3>
                <p className="text-xs text-gray-600">Excellent 3D renders</p>
              </div>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm p-4 ml-10 flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <Ruler size={24} stroke="#7E998D" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Architectural Design</h3>
                <p className="text-xs text-gray-600">
                  International standard design
                </p>
              </div>
            </Card>
          </div>
          <div className="flex justify-center items-center space-y-10 mt-10 mr-4">
            <Card className="bg-white/90 backdrop-blur-sm p-4 ml-10 flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <MessageCircle size={24} stroke="#7E998D" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Consultation</h3>
                <p className="text-xs text-gray-600">
                  Need suggestion we can help
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Delicate Spaces Section */}

        <div className="flex justify-center items-center">
          <div className=" flex justify-center items-center gap-28">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Delicate spaces
            </h2>
            <p className="text-gray-600 text-lg">
              We believe that a well-designed space can have a positive impact{" "}
              <br />
              on your life, and we are committed to creating spaces that are not{" "}
              <br />
              only beautiful but also functional and comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Design Section */}
      <section className="container flex justify-center items-center px-4 py-16">
        <div className="flex justify-center gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Great design doesn&apos;t have to come <br />
              at a cost to the environment.
            </h2>
            <p className="text-gray-600 text-mb">
              From sleek minimalist designs to more organic, nature-inspired
              homes, we&apos;ve designed <br /> a wide range of modern
              sustainable homes for clients across the country.
            </p>
          </div>
          <div className="bg-transparent">
            <Image
              src="/Image.png"
              alt="Sustainable architectural model"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Desgin Component */}
      <section className="container ml-[25rem] px-4 py-16 relative">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute right-8 top-8 z-20">
            <Card className="bg-white/90 backdrop-blur-sm p-4 flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <svg
                  className="w-5 h-5 text-[#7E998D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-sm">Expert Team</h3>
                <p className="text-xs text-gray-600">Industry professional</p>
              </div>
            </Card>
          </div>
          <div className="absolute -left-4 bottom-8 z-20">
            <Card className="bg-white/90 backdrop-blur-sm p-4 ml-10 flex items-center gap-3">
              <div className="rounded-full bg-[#7E998D]/10 p-2">
                <svg
                  className="w-5 h-5 text-[#7E998D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-sm">Interactive Design</h3>
                <p className="text-xs text-gray-600">
                  Experience our 3D renders
                </p>
              </div>
            </Card>
          </div>
          <Image
            src="/Group 25.svg"
            alt="Modern interior design showcase"
            width={1200}
            height={800}
            className="rounded-2xl w-full h-[500px] md:h-[600px] object-cover"
            priority
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container flex justify-center items-center px-4 py-16">
        <Testimonial />
      </section>
    </div>
  );
}
