import React from "react";
import ServiceImage1 from "../assets/service-1.jpg";
import ServiceImage2 from "../assets/service-2.jpg";
import ServiceImage3 from "../assets/service-3.jpg";

export default function ServicesEvent() {
  return (
    <>
      <section className="bg-rich-black-fogra-39" aria-label="service">
        <div className="px-4 md:px-8 lg:px-12 py-16 lg:py-32 max-w-[1200px] w-full mx-auto">
          <ul className="grid gap-7 lg:grid-cols-3">
            <li>
              <a
                href="#"
                className="relative overflow-hidden z-10 hover:scale-105"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="absolute top-0 left-0 w-full h-full -z-10 transition">
                  <img
                    src={ServiceImage1}
                    width="450"
                    height="350"
                    loading="lazy"
                    alt="Restaurant Menu"
                    className="w-full h-full object-cover rounded-md transition"
                  />
                </figure>

                <div className="bg-rich-black-fogra-29_a85 rounded-md text-center py-20 transition duration-300 hover:bg-rich-black-fogra-29_a75">
                  <i className="ri-restaurant-line text-3xl md:text-5xl text-WhitE mx-auto mb-1"></i>

                  <h3 className="font-oswald text-WhitE font-normal text-xl md:text-2xl mb-2">
                    Restaurant Menu
                  </h3>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative overflow-hidden z-10 hover:scale-105"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="absolute top-0 left-0 w-full h-full -z-10 transition">
                  <img
                    src={ServiceImage2}
                    width="450"
                    height="350"
                    loading="lazy"
                    alt="Coffee Menu"
                    className="w-full h-full object-cover rounded-md transition"
                  />
                </figure>

                <div className="bg-rich-black-fogra-29_a85 rounded-md text-center py-20 transition duration-300 hover:bg-rich-black-fogra-29_a75">
                  <i className="ri-cup-line text-3xl md:text-5xl text-WhitE mx-auto mb-1"></i>

                  <h3 className="font-oswald text-WhitE font-normal text-xl md:text-2xl mb-2">
                    Coffee Menu
                  </h3>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group relative overflow-hidden z-10 group-hover:scale-105"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="absolute top-0 left-0 w-full h-full -z-10 transition">
                  <img
                    src={ServiceImage3}
                    width="450"
                    height="350"
                    loading="lazy"
                    alt="Food Services"
                    className="w-full h-full object-cover rounded-md transition"
                  />
                </figure>

                <div className="bg-rich-black-fogra-29_a85 rounded-md text-center py-20 transition duration-300 group-hover:bg-rich-black-fogra-29_a75">
                  <i className="ri-goblet-line text-3xl md:text-5xl text-WhitE mx-auto mb-1"></i>

                  <h3 className="font-oswald text-WhitE font-normal text-xl md:text-2xl mb-2">
                    Food Services
                  </h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
