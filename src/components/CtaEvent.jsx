import React from "react";
import CtaBgImage from "../assets/cta-bg.jpg";

export default function CtaEvent() {
  return (
    <>
      <section
        className="section bg-fixed bg-cover bg-center bg-no-repeat"
        aria-labelledby="cta-label"
        style={{ backgroundImage: `url(${CtaBgImage})` }}
      >
        <div className="lg:flex justify-between items-center px-4 md:px-8 lg:px-7 py-[70px] max-w-[1200px] w-full mx-auto">
          <div>
            <p
              className="uppercase text-Camel"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              Need A Table On Coffee House
            </p>

            <h2
              className="font-oswald text-WhitE font-normal text-3xl md:text-4xl mb-7 lg:mb-0 mt-3"
              id="cta-label"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              Booking Table For Your & Family Members
            </h2>
          </div>

          <a
            href="#"
            className="bg-Camel text-WhitE flex items-center gap-1 max-w-max py-4 px-4 md:px-7 text-base font-medium uppercase rounded-md transition duration-300 hover:bg-WhitE hover:text-Camel"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
          >
            <span className="span">Booking Table</span>

            <i className="ri-arrow-right-s-line"></i>
          </a>
        </div>
      </section>
    </>
  );
}
