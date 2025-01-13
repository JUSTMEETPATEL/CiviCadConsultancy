import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="mx-auto px-4 py-16 space-y-24 bg-[#EEEEEE]">
      {/* Hero Section */}
      <section className="text-center space-y-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          We&apos;re Building the Future of Digital Innovation
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our company is at the forefront of innovation through groundbreaking technology.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800">10+</p>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800">50+</p>
            <p className="text-sm text-gray-600">Successful Projects</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800">20+</p>
            <p className="text-sm text-gray-600">Industry Awards</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800">1000+</p>
            <p className="text-sm text-gray-600">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="space-y-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-sage-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Purpose</h3>
            <p className="text-gray-600 text-sm">
              We strive to make a meaningful impact through innovation and dedication.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-sage-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Teamwork</h3>
            <p className="text-gray-600 text-sm">
              Collaboration and mutual support drive our success.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-sage-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Excellence</h3>
            <p className="text-gray-600 text-sm">
              We pursue the highest standards in everything we do.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-sage-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Commitment</h3>
            <p className="text-gray-600 text-sm">
              We are dedicated to delivering exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="space-y-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
          Meet Our Leadership Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Thompson",
              role: "VP of Design",
              quote: "Innovation isn't just about new technology – it's about solving real problems and creating value for people.",
              image: ""
            },
            {
              name: "Sarah Chen",
              role: "Chief Strategy Officer",
              quote: "The best way to predict the future is to create it. We're here to shape tomorrow's digital landscape.",
              image: ""
            },
            {
              name: "David Miller",
              role: "Head of Engineering",
              quote: "Every line of code we write and every design we create serves a greater purpose: making technology more human.",
              image: ""
            }
          ].map((member) => (
            <div key={member.name} className="space-y-4">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sage-600 text-sm">{member.role}</p>
                <p className="text-gray-600 text-sm italic">&quot;{member.quote}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

