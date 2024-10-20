import React from "react";
import Globe from "./Globe";


const About = () => {
  return (
    <div>
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">About Civicad</h2>
          <div className="flex flex-col md:flex-row items-center ">
            <div className="md:w-1/2">
              
              <Globe />
            </div>
            <div className="md:w-1/2">
              <p className="text-xl mb-4">
              Civicad is a fast-growing architectural firm, started in 2024 as an MSME startup. We specialize in designing buildings that reflect the best qualities of our clients and their surroundings. Our team comprises of innovative and skilled professionals who are passionate about creating exceptional spaces that withstand the test of time. We believe in pushing boundaries, taking on challenges, and designing buildings that make a positive impact on society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
