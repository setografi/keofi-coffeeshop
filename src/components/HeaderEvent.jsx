import React, { useEffect, useState } from "react";
import LogoWeb from "../assets/logo.svg";

function HeaderEvent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener setelah komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <header className="header">
        <div className="hidden lg:block text-lightGray bg-rich-black-fogra-39 py-3 px-8">
          <div className="md:flex justify-between items-center">
            <p className="flex gap-1 text-xs md:text-sm uppercase">
              <i className="ri-time-line text-Camel"></i>
              <span className="text-Camel">Opening Hours :</span> 08:00 Am -
              09:00 Pm
            </p>

            <ul className="flex gap-3 text-xs md:text-sm">
              <li className="transition duration-300 hover:scale-125">
                <a
                  href="#"
                  className="social-link duration-300 transition hover:text-Camel"
                >
                  <i className="ri-facebook-line"></i>
                </a>
              </li>

              <li className="transition duration-300 hover:scale-125">
                <a
                  href="#"
                  className="social-link duration-300 transition hover:text-Camel"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </li>

              <li className="transition duration-300 hover:scale-125">
                <a
                  href="#"
                  className="social-link duration-300 transition hover:text-Camel"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </li>

              <li className="transition duration-300 hover:scale-125">
                <a
                  href="#"
                  className="social-link duration-300 transition hover:text-Camel"
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </li>
            </ul>

            <p className="flex gap-1 text-xs md:text-sm uppercase">
              <i className="ri-map-pin-2-line text-Camel"></i>
              <span className="text-Camel">Location :</span> 55 Main Street, New
              York
            </p>
          </div>
        </div>

        <div
          className={`fixed left-0 w-full bg-rich-black-fogra-29 transition ${
            isScrolled ? "bg-rich-black-fogra-39 top-0 z-40" : ""
          }`}
          data-header
        >
          <div className="flex justify-between items-center py-2 px-8 bg-rich-black-fogra-39">
            <a href="#" className="relative z-20 w-28">
              <img className="object-cover" src={LogoWeb} alt="" />
            </a>

            <nav
              className="w-full py-2 lg:flex items-center hidden"
              data-navbar
            >
              <ul className="flex items-center mx-auto gap-12">
                <li>
                  <a
                    href="#home"
                    className="text-WhitE text-sm font-medium uppercase p-2 duration-300 transition hover:text-Camel"
                    data-nav-link
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className="text-WhitE text-sm font-medium uppercase p-2 duration-300 transition hover:text-Camel"
                    data-nav-link
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#menu"
                    className="text-WhitE text-sm font-medium uppercase p-2 duration-300 transition hover:text-Camel"
                    data-nav-link
                  >
                    Menu
                  </a>
                </li>

                <li>
                  <a
                    href="#blog"
                    className="text-WhitE text-sm font-medium uppercase p-2 duration-300 transition hover:text-Camel"
                    data-nav-link
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-WhitE text-sm font-medium uppercase p-2 duration-300 transition hover:text-Camel"
                    data-nav-link
                  >
                    Contacts
                  </a>
                </li>
              </ul>

              <a
                href="#"
                className="bg-Camel text-WhitE flex items-center gap-1 max-w-max py-4 px-10 text-sm font-medium uppercase rounded-md transition duration-300 hover:bg-WhitE hover:text-Camel"
              >
                Book A Table
              </a>
            </nav>

            <button
              className="lg:hidden text-2xl text-WhitE transition duration-300 hover:scale-125"
              aria-label="open menu"
              data-nav-toggler
            >
              <i className="ri-menu-line transition duration-300 hover:text-Camel"></i>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default HeaderEvent;
