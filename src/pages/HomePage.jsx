import React from "react";
import HeaderEvent from "../components/HeaderEvent";
import HeroEvent from "../components/HeroEvent";
import AboutEvent from "../components/AboutEvent";
import ServicesEvent from "../components/ServicesEvent";
import MenuEvent from "../components/MenuEvent";
import FeatureEvent from "../components/FeatureEvent";
import BlogEvent from "../components/BlogEvent";
import CtaEvent from "../components/CtaEvent";
import FooterEvent from "../components/FooterEvent";

export default function HomePage() {
  return (
    <>
      <section>
        <HeaderEvent />
        <HeroEvent />
        <AboutEvent />
        <ServicesEvent />
        <MenuEvent />
        <FeatureEvent />
        <BlogEvent />
        <CtaEvent />
        <FooterEvent />
      </section>
    </>
  );
}
