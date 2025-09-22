import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AccessAnywhere from "../components/AccessAnywhere";
import Workflow from "../components/Workflow";
import Partners from "../components/Partners";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <AccessAnywhere />
      <Workflow />
      <Partners />
      <CTA />
    </>
  );
};

export default Home;
