import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pb-5">
      <div className="flex items-center py-4 max-sm:mb-0 justify-center ">
        <div className="h-px bg-pink-100 w-[90%]"></div>
      </div>
      <div className="flex justify-between">
        <h1 className="text-white mx-[5%] font-great">
          Made by - <span className="text-fuchsia-600">Shrey Sinha</span>
        </h1>
        <p className="text-white mr-20 max-sm:mr-4">
          <a href="https://iconscout.com/">Icons by @iconScout</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
