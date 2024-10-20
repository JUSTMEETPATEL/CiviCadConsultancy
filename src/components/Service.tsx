import React from "react";

const Service = () => {
  return (
    <div>
      <section className="bg-gray-200 py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Architectural Design", "Urban Planning", "Interior Design"].map(
              (service) => (
                <div
                  key={service}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="#"
                    className="text-primary font-semibold hover:underline"
                  >
                    Learn more
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
