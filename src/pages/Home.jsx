import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AccessAnywhere from "../components/AccessAnywhere";
import Workflow from "../components/Workflow";
import Partners from "../components/Partners";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <AccessAnywhere />
      <Workflow />
      <Partners />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
