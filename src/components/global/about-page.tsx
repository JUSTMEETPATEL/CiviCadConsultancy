import { Heart, Target, Bug, Users } from "lucide-react";
import Image from "next/image";
import { Check, BarChart2, Globe, Trophy } from "lucide-react";

const achievements = [
  "Industry leader in innovative solutions",
  "Award-winning customer service",
  "Recognized for technological excellence",
  "Sustainable and eco-friendly practices",
];

const metrics = [
  {
    icon: BarChart2,
    title: "Performance",
    description: "Exceeding industry",
  },
  {
    icon: Users,
    title: "Community",
    description: "Lasting partnerships",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Across continents",
  },
  {
    icon: Trophy,
    title: "Recognition",
    description: "Industry awards",
  },
];
const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We push boundaries",
  },
  {
    icon: Bug,
    title: "Excellence",
    description: "We maintain the highest",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power",
  },
];

const team = [
  {
    name: "Sounak Dutta",
    role: "CEO & Founder",
    quote:
      "I've tried many similar solutions, but this one stands out for its intuitive interface and robust feature set. It's made our development process so much smoother.",
    image: "/SounakDutta.jpg?height=400&width=400",
    align: "left",
  },
  {
    name: "Meet Patel",
    role: "CTO",
    quote:
      "I've tried many similar solutions, but this one stands out for its intuitive interface and robust feature set. It's made our development process so much smoother.",
    image: "/Meet.jpeg?height=400&width=400",
    align: "right",
  },
  {
    name: "Shayan Hazra",
    role: "COO",
    quote:
      "I've tried many similar solutions, but this one stands out for its intuitive interface and robust feature set. It's made our development process so much smoother.",
    image: "/Shayan.jpg?height=400&width=400",
    align: "left",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto px-4 py-16 space-y-24 bg-[#EEEEEE]">
      {/* Hero Section */}
      <section className="text-center space-y-12">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-4xl mx-auto leading-tight bg-gradient-to-b from-[#2A332F] to-[#4B5563] text-transparent bg-clip-text">
            We&apos;re Building the Future of{" "}
            <span className="block">Digital Innovation</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-16">
            Our mission is to transform businesses through innovative technology
            solutions and exceptional service.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 mt-44 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#5B7B7A] mb-2">
                10+
              </div>
              <div className="text-gray-600">Year of Experience</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#5B7B7A] mb-2">
                50+
              </div>
              <div className="text-gray-600">Team Members</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#5B7B7A] mb-2">
                20+
              </div>
              <div className="text-gray-600">Countries Served</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#5B7B7A] mb-2">
                1000+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Components */}
      <section className="text-center space-y-12">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold  text-[#5B7B7A] mb-4">
              Our Core Value
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-44 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`bg-white rounded-lg p-6 shadow-sm flex items-start gap-4 ${
                    index === 2 || index === 3 ? "md:translate-x-12" : ""
                  }`}
                >
                  <div className="p-2 bg-[#5B7B7A]/10 rounded-lg">
                    <Icon className="w-6 h-6 text-[#5B7B7A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Component */}
      <section className="text-center space-y-12">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#5B7B7A] mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 text-lg">
              Passionate experts driving innovation and excellence in everything
              we do.
            </p>
          </div>

          <div className="space-y-20">
            {team.map((member) => (
              <div
                key={member.name}
                className={`flex flex-col ${
                  member.align === "right"
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                } items-center gap-8 md:gap-16`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-900">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#5B7B7A] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                    <blockquote className="text-gray-600 italic">
                      &quot;{member.quote}&quot;
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advancement Component */}
      <section className="text-center space-y-12">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl text-left font-semibold text-[#5B7B7A] mb-12">
            Achievements That Make Us Proud
          </h2>

          <div className="space-y-16">
            {/* Achievements List */}
            <div className="space-y-4 mt-20 mb-20">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#5B7B7A]/10">
                    <Check className="w-4 h-4 text-[#5B7B7A]" />
                  </div>
                  <span className="text-gray-600">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-44 gap-6 max-w-4xl mx-auto">
              {metrics.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className={`bg-white rounded-lg p-6 shadow-sm flex items-start gap-4 ${
                      index === 2 || index === 3 ? "md:translate-x-12" : ""
                    }`}
                  >
                    <div className="p-2 bg-[#5B7B7A]/10 rounded-lg">
                      <Icon className="w-6 h-6 text-[#5B7B7A]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
