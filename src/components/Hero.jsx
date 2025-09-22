import React from "react";
import logo from "../assets/logo.svg";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <section className="hero px-4 pt-28">
      <div className="flex flex-col items-center text-center">
        <img src={logo} alt="Clipboard logo" className="mb-6" />
        <h1 className="text-[28px] sm:text-[44px] text-Gray700 font-bold mt-10 mb-3">
          A history of everything you copy
        </h1>
        <p className="sm:text-[20px] text-Gray500 px-5 max-w-[700px] mx-auto">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div>
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default Hero;
