import React from "react";

const Buttons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button className="bg-Green500 text-white font-semibold text-[18px] px-9 py-3 rounded-full shadow-Green500 hover:bg-opacity-75 ease-in-out duration-300">
        Download for iOS
      </button>
      <button className="bg-Blue100 text-white font-semibold text-[18px] px-9 py-3 rounded-full shadow-Blue100 hover:bg-opacity-75 ease-in-out duration-300">
        Download for Mac
      </button>
    </div>
  );
};

export default Buttons;
