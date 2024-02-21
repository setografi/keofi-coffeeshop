import React from "react";
import LogoWeb from "../assets/logo.svg";

export default function HeaderEvent() {
  return (
    <section>
      <header className="header">
        <div className="block text-lightGray bg-rich-black-fogra-39 py-3 px-8">
          <div className="flex justify-between items-center">
            <p className="flex gap-1 text-sm uppercase">
              <i className="ri-time-line text-Camel"></i>
              <span className="text-Camel">Opening Hours :</span> 08:00 Am -
              09:00 Pm
            </p>

            <ul className="flex gap-3">
              <li>
                <a
                  href="#"
                  className="social-link duration-300 transition hover:animate-pulse"
                >
                  <i className="ri-facebook-line"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="social-link duration-300 transition hover:animate-pulse"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="social-link duration-300 transition hover:animate-pulse"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="social-link duration-300 transition hover:animate-pulse"
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </li>
            </ul>

            <p className="flex gap-1 text-sm uppercase">
              <i className="ri-map-pin-2-line text-Camel"></i>
              <span className="text-Camel">Location :</span> 55 Main Street, New
              York
            </p>
          </div>
        </div>

        <div
          className="absolute left-0 w-full bg-rich-black-fogra-29"
          data-header
        >
          <div className="flex justify-between items-center py-2 px-8 bg-rich-black-fogra-39">
            <a
              href="#"
              className="relative z-20 w-28 duration-300 transition hover:animate-pulse"
            >
              <img src={LogoWeb} alt="" />
            </a>

            <nav className="w-full py-2 flex items-center" data-navbar>
              <ul className="flex items-center mx-auto gap-12">
                <li>
                  <a
                    href="#home"
                    className="text-WhitE text-sm font-medium uppercase p-2 transition hover:text-Camel"
                    data-nav-link
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className="text-WhitE text-sm font-medium uppercase p-2 transition hover:text-Camel"
                    data-nav-link
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#menu"
                    className="text-WhitE text-sm font-medium uppercase p-2 transition hover:text-Camel"
                    data-nav-link
                  >
                    Menu
                  </a>
                </li>

                <li>
                  <a
                    href="#blog"
                    className="text-WhitE text-sm font-medium uppercase p-2 transition hover:text-Camel"
                    data-nav-link
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-WhitE text-sm font-medium uppercase p-2 transition hover:text-Camel"
                    data-nav-link
                  >
                    Contacts
                  </a>
                </li>
              </ul>

              <a
                href="#"
                className="bg-Camel text-WhitE flex items-center gap-1 max-w-max py-4 px-10 text-sm font-medium uppercase rounded-lg transition duration-300 hover:bg-WhitE hover:text-Camel"
              >
                Book A Table
              </a>
            </nav>

            <button
              className="nav-open-btn"
              aria-label="open menu"
              data-nav-toggler
            >
              <span className="span"></span>
              <span className="span"></span>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}
