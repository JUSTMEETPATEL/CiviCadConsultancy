import React from "react";

const Service = () => {
  return (
    <div>
      <section className="bg-gray-200 py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Architectural Design",
                content:"Our architectural design services focus on creating innovative, functional, and aesthetically pleasing structures. We work closely with our clients to transform their vision into reality, ensuring each design meets their unique needs and aligns with modern architectural standards."
              },
              {
                name: "Urban Planning",
                content: "We provide comprehensive urban planning solutions that integrate sustainable design principles with community needs. Our goal is to create livable, dynamic urban environments that foster growth, connectivity, and a high quality of life for residents.",
              },
              {
                name: "Interior Design",
                content: "Our interior design services offer a blend of creativity and functionality to enhance your living or workspace. We focus on creating cohesive designs that reflect your style, optimize space, and elevate the overall ambiance of your interiors.",
              },
            ].map((service) => (
              <div key={service.name} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-4">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
