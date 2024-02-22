import React from "react";
import HeaderEvent from "../components/HeaderEvent";
import HeroEvent from "../components/HeroEvent";
import AboutEvent from "../components/AboutEvent";
import ServicesEvent from "../components/ServicesEvent";
import MenuEvent from "../components/MenuEvent";

export default function HomePage() {
  return (
    <>
      <section>
        <HeaderEvent />
        <HeroEvent />
        <AboutEvent />
        <ServicesEvent />
        <MenuEvent />
      </section>
    </>
  );
}
