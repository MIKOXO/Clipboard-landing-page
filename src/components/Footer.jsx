import React from "react";
import logo from "../assets/logo.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="mt-24 bg-Gray500 bg-opacity-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mx-auto container px-10 lg:px-20 py-10">
        <div>
          <img src={logo} alt="Logo" className="w-16" />
        </div>

        <div className="lg:mr-44 grid grid-cols-1 sm:grid-cols-3 sm:gap-10 text-Gray700 opacity-80 font-medium max-sm:text-center max-sm:py-8">
          <div className="flex flex-col gap-4">
            <a id="footer-links" href="#">
              FAQs
            </a>
            <a id="footer-links" href="#">
              Contact Us
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a id="footer-links" href="#">
              Privacy Policy
            </a>
            <a id="footer-links" href="#">
              Press Kit
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a id="footer-links" href="#">
              Install Guide
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center gap-5">
          <img src={iconFacebook} alt="Facebook" />
          <img src={iconTwitter} alt="Twitter" />
          <img src={iconInstagram} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
