import React from "react";
import ImageComputer from "../assets/image-computer.png";

const Features = () => {
  return (
    <section className="mt-24">
      <div className="text-center px-6">
        <h2 className="text-[36px] font-bold text-Gray700">
          Keep track of your clipboard history
        </h2>
        <p className="text-Gray500 mt-4 sm:text-[18px] px-4 lg:max-w-[720px] mx-auto opacity-85">
          Clipboard instantly stores any item you copy in cloud, meaning you can
          access your snippets immediately on all your devices. Our Mac and iOS
          apps will help you organize everything.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20 max-sm:px-8 2xl:mx-auto 2xl:container">
        <div>
          <img src={ImageComputer} alt="Computer" className="lg:-ml-9" />
        </div>
        <div className="flex flex-col gap-14 mt-10 lg:mt-0 max-lg:text-center">
          <div>
            <h1 className="text-[24px] font-bold text-Gray700">Quick Search</h1>
            <p className="max-w-[580px] lg:pr-24 text-Gray500">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>

          <div>
            <h1 className="text-[24px] font-bold text-Gray700">iCloud Sync</h1>
            <p className="max-w-[580px] lg:pr-24 text-Gray500">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>

          <div>
            <h1 className="text-[24px] font-bold text-Gray700">
              Complete History
            </h1>
            <p className="max-w-[580px] lg:pr-24 text-Gray500">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
