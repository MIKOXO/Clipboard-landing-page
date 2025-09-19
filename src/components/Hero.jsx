import React from "react";
import logo from "../assets/logo.svg";

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
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-Green500 text-white font-semibold text-[18px] px-9 py-3 rounded-full shadow-Green500 hover:bg-opacity-75 ease-in-out duration-300">
            Download for iOS
          </button>
          <button className="bg-Blue100 text-white font-semibold text-[18px] px-9 py-3 rounded-full shadow-Blue100 hover:bg-opacity-75 ease-in-out duration-300">
            Download for Mac
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
