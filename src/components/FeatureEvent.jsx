import React from "react";
import FeatureAbs1 from "../assets/feature-abs-1.png";
import FeatureAbs2 from "../assets/feature-abs-2.png";
import FeatureAbs3 from "../assets/feature-abs-3.png";
import FeatureBanner from "../assets/feature-banner.jpg";
import FeatureIcon1 from "../assets/feature-icon-1.png";
import FeatureIcon2 from "../assets/feature-icon-2.png";

export default function FeatureEvent() {
  return (
    <>
      <section
        className="bg-rich-black-fogra-39 relative overflow-hidden"
        aria-labelledby="feature-label"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-[90px] items-center px-4 md:px-8 lg:px-7 py-16 lg:py-32 max-w-[1200px] w-full mx-auto">
          <figure
            className="feature-banner rounded-md overflow-hidden bg-lightGray reveal-left w-[560] h-[700]"
            data-reveal
          >
            <img
              src={FeatureBanner}
              width="560"
              height="700"
              loading="lazy"
              alt="feature banner"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="feature-content">
            <p className="text-Camel uppercase reveal-right" data-reveal>
              Why Choose Us
            </p>

            <h2
              className="font-oswald text-WhitE font-normal text-3xl md:text-4xl lg:text-5xl mt-3 mb-7 reveal-right"
              id="feature-label"
              data-reveal
            >
              New London Coffee Founded For Extraordinary Test
            </h2>

            <p className="mb-10 mt-7 reveal-right" data-reveal>
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo inventore veritatis
            </p>

            <ul className="feature-list">
              <li>
                <div
                  className="flex items-start gap-5 mb-7 reveal-right"
                  data-reveal
                >
                  <div className="card-icon">
                    <img
                      className="w-32 md:w-16 lg:w-24 h-auto object-cover"
                      src={FeatureIcon1}
                      width="70"
                      height="70"
                      loading="lazy"
                      alt="feature icon"
                    />
                  </div>

                  <div>
                    <h3 className="font-oswald font-normal text-WhitE text-2xl mb-2">
                      Natural Coffee Beans
                    </h3>

                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error voluptate
                      accusantium doloremque
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div
                  className="flex items-start gap-5 mb-7 reveal-right"
                  data-reveal
                >
                  <div className="card-icon">
                    <img
                      className="w-32 md:w-16 lg:w-24 h-auto object-cover"
                      src={FeatureIcon2}
                      width="70"
                      height="70"
                      loading="lazy"
                      alt="feature icon"
                    />
                  </div>

                  <div>
                    <h3 className="font-oswald font-normal text-WhitE text-2xl mb-2">
                      100% ISO Certification
                    </h3>

                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error voluptate
                      accusantium doloremque
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <a
              href="#"
              className="mt-10 bg-Camel text-WhitE flex items-center gap-1 max-w-max py-4 px-4 md:px-10 text-sm font-medium uppercase rounded-md transition duration-300 hover:bg-WhitE hover:text-Camel reveal-right"
              data-reveal
            >
              <span className="span">Explore More</span>

              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>

          <img
            src={FeatureAbs1}
            width="318"
            height="290"
            loading="lazy"
            alt=""
            className="hidden lg:block absolute w-40 top-[150px] left-[-10px]"
          />

          <img
            src={FeatureAbs2}
            width="262"
            height="356"
            loading="lazy"
            alt=""
            className="hidden lg:block absolute w-[130px] top-[200px] right-[-10px]"
          />

          <img
            src={FeatureAbs3}
            width="410"
            height="212"
            loading="lazy"
            alt=""
            className="hidden lg:block absolute w-[200px] bottom-[100px] right-[-20px]"
          />
        </div>
      </section>
    </>
  );
}
