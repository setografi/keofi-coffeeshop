import React from "react";
import LogoWeb from "../assets/logo.svg";
import GalleryImage1 from "../assets/gallery-1.jpg";
import GalleryImage2 from "../assets/gallery-2.jpg";
import GalleryImage3 from "../assets/gallery-3.jpg";
import GalleryImage4 from "../assets/gallery-4.jpg";
import GalleryImage5 from "../assets/gallery-5.jpg";

export default function FooterEvent() {
  return (
    <>
      <footer className="bg-rich-black-fogra-39">
        <div className="px-4 md:px-8 lg:px-7 max-w-[1200px] w-full mx-auto">
          <div
            className="text-WhitE grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-5 border-b border-whiteA10 py-[70px] section"
            data-reveal
          >
            <div className="footer-brand">
              <a href="#">
                <img src={LogoWeb} className="w-28" alt="Keofi home" />
              </a>
            </div>

            <ul className="footer-list">
              <li>
                <p className="font-oswald text-2xl mb-5">Working Hours</p>
              </li>

              <li className="list-disc mb-3 ml-4">
                <p>Sunday - Thursday</p>

                <span className="text-Camel">08:00 am - 09:00pm</span>
              </li>

              <li className="list-disc mb-3 ml-4">
                <p>Only Friday</p>

                <span className="text-Camel">03:00 pm - 09:00pm</span>
              </li>

              <li>
                <strong className="text-darkOrange font-merienda ml-4">
                  Saturday Close
                </strong>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="font-oswald text-2xl mb-5">Contact Us</p>
              </li>

              <li>
                <div className="flex items-start gap-2 mt-3">
                  <i className="ri-map-pin-2-line text-Camel mt-1 text-3xl"></i>

                  <div>
                    <span className="text-Camel font-semibold">Location :</span>

                    <p>55 Main Street, New York</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-2 mt-3">
                  <i className="ri-mail-unread-line text-Camel mt-1 text-3xl"></i>

                  <div>
                    <span className="text-Camel font-semibold">
                      Email Address :
                    </span>

                    <p>keofi@gmail.com</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-2 mt-3">
                  <i className="ri-phone-line text-Camel mt-1 text-3xl"></i>

                  <div>
                    <span className="text-Camel font-semibold">
                      Phone Number :
                    </span>

                    <p>+012 (345) 678 99</p>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="font-oswald text-2xl mb-5">Gallery</p>
              </li>

              <li>
                <ul className="grid grid-cols-3 gap-2">
                  <li>
                    <div>
                      <img
                        src={GalleryImage1}
                        width="80"
                        height="80"
                        loading="lazy"
                        alt="Gallery"
                        className="w-full rounded-md"
                      />
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={GalleryImage2}
                        width="80"
                        height="80"
                        loading="lazy"
                        alt="Gallery"
                        className="w-full rounded-md"
                      />
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={GalleryImage3}
                        width="80"
                        height="80"
                        loading="lazy"
                        alt="Gallery"
                        className="w-full rounded-md"
                      />
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={GalleryImage4}
                        width="80"
                        height="80"
                        loading="lazy"
                        alt="Gallery"
                        className="w-full rounded-md"
                      />
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={GalleryImage5}
                        width="80"
                        height="80"
                        loading="lazy"
                        alt="Gallery"
                        className="w-full rounded-md"
                      />
                    </div>
                  </li>

                  <li>
                    <div>
                      <img
                        src={GalleryImage1}
                        width="80"
                        height="80"
                        loading="lazy"
                        alt="Gallery"
                        className="w-full rounded-md"
                      />
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="py-7">
            <p className="text-center text-sm">
              Copyright © 2022 codewithsadee. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
