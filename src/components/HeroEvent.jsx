import React from "react";
import HeroBanner from "../assets/hero-banner.jpg";

export default function HeroEvent() {
  return (
    <section>
      <div
        className="text-Camel has-bg-image h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${HeroBanner})` }}
        id="home"
        aria-labelledby="hero-label"
      >
        <div className="grid px-4 md:px-8 lg:px-12 mt-20 py-32 max-w-[1200px] w-full mx-auto">
          <div className="py-32 max-w-[1200px] w-full mx-auto">
            <p className="text-WhitE pl-2 uppercase" data-reveal>
              <span className="text-Camel"> ―― </span> Welcome to the keofi
            </p>

            <h1
              className="font-oswald font-medium text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-WhitE max-w-[10ch] mb-10 mt-3 md:leading-[6rem] lg:leading-[9rem]"
              id="hero-label"
              data-reveal
            >
              Great Coffee Good Vibes
            </h1>

            <div className="flex flex-wrap gap-7" data-reveal>
              <a
                href="#"
                className="bg-Camel text-WhitE flex items-center gap-1 max-w-max py-4 px-4 md:px-10 text-sm font-medium uppercase rounded-md transition duration-300 hover:bg-WhitE hover:text-Camel"
              >
                <span className="span">Explore more</span>
                <i className="ri-arrow-right-s-line"></i>
              </a>

              <a
                href="#"
                className="bg-rich-black-fogra-29 text-WhitE flex items-center gap-1 max-w-max py-4 px-4 md:px-10 text-sm font-medium uppercase rounded-md transition duration-300 hover:bg-WhitE hover:text-Camel"
              >
                <span className="span">Get delivery</span>

                <i className="ri-arrow-right-s-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
