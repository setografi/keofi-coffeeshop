import React from "react";
import MenuImage1 from "../assets/menu-1.jpg";
import MenuImage2 from "../assets/menu-2.jpg";
import MenuImage3 from "../assets/menu-3.jpg";
import MenuImage4 from "../assets/menu-4.jpg";
import MenuImage5 from "../assets/menu-5.jpg";
import MenuImage6 from "../assets/menu-6.jpg";
import MenuBgLogo from "../assets/menu-bg-logo.png";
import MenuBg from "../assets/menu-bg.jpg";

export default function MenuEvent() {
  return (
    <>
      <section
        className="px-4 md:px-8 lg:px-12 py-16 lg:py-32 bg-fixed has-bg-image"
        id="menu"
        aria-labelledby="menu-label"
        style={{ backgroundImage: `url(${MenuBg})` }}
      >
        <div className="max-w-[1200px] w-full mx-auto">
          <p
            className="uppercase text-Camel text-center"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            Choose Best Coffee
          </p>

          <h2
            className="font-oswald text-WhitE font-normal text-3xl md:text-4xl lg:text-5xl mt-3 mb-7 md:mb-12 text-center"
            id="menu-label"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            Kaffen Popular Coffee Menu
          </h2>

          <ul
            className="grid lg:grid-cols-2 bg-rich-black-fogra-39 p-5 lg:py-14 lg:px-12 gap-10 bg-no-repeat bg-cover bg-center rounded-md"
            style={{
              backgroundImage: `url(${MenuBgLogo})`,
              backgroundSize: "500px",
            }}
          >
            <li>
              <div
                className="md:flex items-center gap-5"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="w-40 rounded-md mb-4 overflow-hidden bg-lightGray">
                  <img
                    src={MenuImage1}
                    width="200"
                    height="200"
                    loading="lazy"
                    alt="Americano Coffee"
                    className="img-cover"
                  />
                </figure>

                <div className="grid">
                  <h3 className="font-oswald text-WhitE font-normal text-xl md:text-2xl mb-2">
                    Americano Coffee
                  </h3>

                  <p className="mb-2">2/3 espresso, 1/3 streamed milk</p>

                  <data
                    className="text-Camel font-merienda text-base lg:text-2xl w-full"
                    value="4.9"
                  >
                    • • • • • • • • • • $4.9
                  </data>
                </div>
              </div>
            </li>

            <li>
              <div
                className="md:flex items-center gap-5"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="w-40 rounded-md mb-4 overflow-hidden bg-lightGray">
                  <img
                    src={MenuImage2}
                    width="200"
                    height="200"
                    loading="lazy"
                    alt="Espresso Coffee"
                    className="img-cover"
                  />
                </figure>

                <div className="grid">
                  <h3 className="font-oswald text-WhitE font-normal text-xl md:text-2xl mb-2">
                    Espresso Coffee
                  </h3>

                  <p className="mb-2">2/3 espresso, 1/3 streamed milk</p>

                  <data
                    className="text-Camel font-merienda text-base lg:text-2xl w-full"
                    value="4.9"
                  >
                    • • • • • • • • • • $4.9
                  </data>
                </div>
              </div>
            </li>

            <li>
              <div
                className="md:flex items-center gap-5"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="w-40 rounded-md mb-4 overflow-hidden bg-lightGray">
                  <img
                    src={MenuImage3}
                    width="200"
                    height="200"
                    loading="lazy"
                    alt="Barista Pouring Syrup"
                    className="img-cover"
                  />
                </figure>

                <div className="grid">
                  <h3 className="font-oswald text-WhitE font-normal text-xl md:text-2xl mb-2">
                    Barista Pouring Syrup
                  </h3>

                  <p className="mb-2">2/3 espresso, 1/3 streamed milk</p>

                  <data
                    className="text-Camel font-merienda text-base lg:text-2xl w-full"
                    value="3.5"
                  >
                    • • • • • • • • • • $3.5
                  </data>
                </div>
              </div>
            </li>

            <li>
              <div
                className="md:flex items-center gap-5"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="w-40 rounded-md mb-4 overflow-hidden bg-lightGray">
                  <img
                    src={MenuImage4}
                    width="200"
                    height="200"
                    loading="lazy"
                    alt="Cold - Coffee"
                    className="img-cover"
                  />
                </figure>

                <div className="grid">
                  <h3 className="font-oswald text-WhitE font-normal text-xl md:text-2xl mb-2">
                    Cold - Coffee
                  </h3>

                  <p className="mb-2">2/3 espresso, 1/3 streamed milk</p>

                  <data
                    className="text-Camel font-merienda text-base lg:text-2xl w-full"
                    value="6.0"
                  >
                    • • • • • • • • • • $6.0
                  </data>
                </div>
              </div>
            </li>

            <li>
              <div
                className="md:flex items-center gap-5"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="w-40 rounded-md mb-4 overflow-hidden bg-lightGray">
                  <img
                    src={MenuImage5}
                    width="200"
                    height="200"
                    loading="lazy"
                    alt="Cappuccino Arabica"
                    className="img-cover"
                  />
                </figure>

                <div className="grid">
                  <h3 className="font-oswald text-WhitE font-normal text-xl md:text-2xl mb-2">
                    Cappuccino Arabica
                  </h3>

                  <p className="mb-2">2/3 espresso, 1/3 streamed milk</p>

                  <data
                    className="text-Camel font-merienda text-base lg:text-2xl w-full"
                    value="2.8"
                  >
                    • • • • • • • • • • $2.8
                  </data>
                </div>
              </div>
            </li>

            <li>
              <div
                className="md:flex items-center gap-5"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="w-40 rounded-md mb-4 overflow-hidden bg-lightGray">
                  <img
                    src={MenuImage6}
                    width="200"
                    height="200"
                    loading="lazy"
                    alt="Milk Cream Coffee"
                    className="img-cover"
                  />
                </figure>

                <div className="grid">
                  <h3 className="font-oswald text-WhitE font-normal text-xl md:text-2xl mb-2">
                    Milk Cream Coffee
                  </h3>

                  <p className="mb-2">2/3 espresso, 1/3 streamed milk</p>

                  <data
                    className="text-Camel font-merienda text-base lg:text-2xl w-full"
                    value="7.5"
                  >
                    • • • • • • • • • • $7.5
                  </data>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
