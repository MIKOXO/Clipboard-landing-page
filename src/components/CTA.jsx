import React from "react";
import Buttons from "./Buttons";

const CTA = () => {
  return (
    <section className="mt-24 px-4">
      <div className="flex flex-col items-center text-center">
        <div>
          <h1 className="text-Gray700 text-[28px] sm:text-[36px] px-5 font-bold mt-10 mb-3">
            Clipboard for iOS and Mac OS
          </h1>
          <p className="text-Gray500 mt-4 sm:text-[18px] px-5 lg:max-w-[720px] mx-auto">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
        </div>

        <div>
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default CTA;
