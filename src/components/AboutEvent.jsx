import React from "react";
import AboutBanner from "../assets/about-banner.png";
import AboutImg from "../assets/about-img.png";

export default function AboutEvent() {
  return (
    <>
      <section
        className="bg-rich-black-fogra-39"
        id="about"
        aria-labelledby="about-label"
      >
        <div className="px-4 md:px-8 lg:px-12 py-16 lg:py-32 max-w-[1200px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 items-end gap-12 mx-auto">
            <div className="about-content">
              <p
                className="uppercase text-Camel reveal-left"
                id="about-label"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                About Us
              </p>

              <h2
                className="text-3xl md:text-4xl font-normal font-oswald text-WhitE mt-3 mb-7 max-w-[18ch] reveal-left"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                Organic & Fresh Coffee Provider Center
              </h2>

              <p
                className="section-text reveal-left"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                Sed ut perspiciatis unde omnis iste natus error voluptate
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae abillo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit
                aspernatur aut odit aut fugit sed quia consequuntur magni
                dolores eos qui ratione
              </p>

              <div
                className="mt-7 bg-Camel p-5 flex items-start gap-5 rounded-md reveal-left"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <figure className="flex-shrink-0 rounded-full aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src={AboutImg}
                    width="95"
                    height="95"
                    loading="lazy"
                    alt="john doe"
                  />
                </figure>

                <p className="text-base md:text-2xl italic text-WhitE">
                  Quis autem vel eum iure reprehenderit in ealuptate velit esse
                  molestiae
                </p>
              </div>
            </div>

            <figure className="mx-auto  w-full overflow-hidden">
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <img
                  className="object-cover"
                  src={AboutBanner}
                  width="686"
                  height="544"
                  loading="lazy"
                  alt="about banner"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
