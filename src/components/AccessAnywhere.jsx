import React from "react";
import ImageDevices from "../assets/image-devices.png";

const AccessAnywhere = () => {
  return (
    <section className="mt-24 flex flex-col items-center text-center px-6 lg:px-0">
      <div>
        <h1 className="text-Gray700 text-[28px] sm:text-[36px] font-bold">
          Access Clipboard anywhere
        </h1>
        <p className="text-Gray500 mt-4 sm:text-[18px] px-4 lg:max-w-[720px] mx-auto">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>

      <div className="mt-10 lg:mt-20">
        <img src={ImageDevices} alt="Devices" />
      </div>
    </section>
  );
};

export default AccessAnywhere;
