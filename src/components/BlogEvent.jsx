import React from "react";
import BlogImage1 from "../assets/blog-1.jpg";
import BlogImage2 from "../assets/blog-2.jpg";
import BlogImage3 from "../assets/blog-3.jpg";

export default function BlogEvent() {
  return (
    <>
      <section className="section blog" id="blog" aria-labelledby="blog-label">
        <div className="px-4 md:px-8 lg:px-7 py-16 lg:py-32 max-w-[1200px] w-full mx-auto">
          <p className="uppercase text-Camel text-center" data-reveal>
            Get Every Single Update
          </p>

          <h2
            className="font-oswald text-WhitE font-normal text-3xl md:text-4xl lg:text-5xl mt-3 mb-12 text-center"
            id="blog-label"
            data-reveal
          >
            Read Some Latest Blog & News
          </h2>

          <ul className="grid lg:grid-cols-3 gap-12">
            <li>
              <a
                href="#"
                className="relative h-[360px] bg-lightGray overflow-hidden has-before"
                data-reveal
              >
                <figure className="w-full h-full aspect-square md:aspect-auto">
                  <img
                    src={BlogImage1}
                    width="670"
                    height="450"
                    loading="lazy"
                    alt="SWR React Hooks With Next Increm Ental Static Regeneration"
                    className="rounded-md w-full h-full object-cover transition duration-300 hover:bg-rich-black-fogra-29 hover:opacity-75"
                  />
                </figure>

                <div className="absolute bottom-0 left-0 right-0 p-7 z-20 bg-gradient-to-t from-rich-black-fogra-29 to-transparent">
                  <h3 className="font-oswald font-normal text-WhitE text-2xl mb-2">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h3>

                  <div className="flex items-center flex-wrap gap-y-1 gap-x-5">
                    <div className="flex items-center gap-1">
                      <i className="ri-calendar-2-line"></i>

                      <time className="text-sm" dateTime="2022-09-25">
                        25 Sep 2022
                      </time>
                    </div>

                    <div className="flex items-center">
                      <i className="ri-question-answer-line"></i>
                      &nbsp;
                      <p className="text-sm">Comments (7)</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative h-[360px] bg-lightGray overflow-hidden has-before"
                data-reveal
              >
                <figure className="w-full h-full aspect-square md:aspect-auto">
                  <img
                    src={BlogImage2}
                    width="670"
                    height="450"
                    loading="lazy"
                    alt="Decisions For Building Flexible Components DevTools Browser"
                    className="rounded-md w-full h-full object-cover transition duration-300 hover:bg-rich-black-fogra-29 hover:opacity-75"
                  />
                </figure>

                <div className="absolute bottom-0 left-0 right-0 p-7 z-20 bg-gradient-to-t from-rich-black-fogra-29 to-transparent">
                  <h3 className="font-oswald font-normal text-WhitE text-2xl mb-2">
                    Decisions For Building Flexible Components DevTools Browser
                  </h3>

                  <div className="flex items-center flex-wrap gap-y-1 gap-x-5">
                    <div className="flex items-center gap-1">
                      <i className="ri-calendar-2-line"></i>

                      <time className="text-sm" dateTime="2022-09-25">
                        25 Sep 2022
                      </time>
                    </div>

                    <div className="flex items-center">
                      <i className="ri-question-answer-line"></i>
                      &nbsp;
                      <p className="text-sm">Comments (7)</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative h-[360px] bg-lightGray overflow-hidden has-before"
                data-reveal
              >
                <figure className="w-full h-full aspect-square md:aspect-auto">
                  <img
                    src={BlogImage3}
                    width="670"
                    height="450"
                    loading="lazy"
                    alt="SWR React Hooks With Next Increm Ental Static Regeneration"
                    className="rounded-md w-full h-full object-cover transition duration-300 hover:bg-rich-black-fogra-29 hover:opacity-75"
                  />
                </figure>

                <div className="absolute bottom-0 left-0 right-0 p-7 z-20 bg-gradient-to-t from-rich-black-fogra-29 to-transparent">
                  <h3 className="font-oswald font-normal text-WhitE text-2xl mb-2">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h3>

                  <div className="flex items-center flex-wrap gap-y-1 gap-x-5">
                    <div className="flex items-center gap-1">
                      <i className="ri-calendar-2-line"></i>

                      <time className="text-sm" dateTime="2022-09-25">
                        25 Sep 2022
                      </time>
                    </div>

                    <div className="flex items-center">
                      <i className="ri-question-answer-line"></i>
                      &nbsp;
                      <p className="text-sm">Comments (7)</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>

          <a
            href="#"
            className="mx-auto mt-10 bg-Camel text-WhitE flex items-center gap-1 max-w-max py-4 px-4 md:px-10 text-sm font-medium uppercase rounded-md transition duration-300 hover:bg-WhitE hover:text-Camel"
            data-reveal
          >
            <span className="span">View All</span>

            <i className="ri-arrow-right-s-line"></i>
          </a>
        </div>
      </section>
    </>
  );
}
