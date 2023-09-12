import React from "react";

function Hero() {
  return (
    <div className="relative pb-16 w-[100%] shadow-[0_115px_95px_-45px_rgba(109,94,102,0.63)] bg-[#151515] " id="About">
      <div className="w-[100%] text-center pt-[3rem] max-sm:pt-8">
        <h1
          className="text-[4rem] font-roboto bg-gradient-to-r
   from-pink-600 via-yellow-500 to-white inline-block 
     text-transparent bg-clip-text mb-6 font-bold selection:bg-white selection:text-black max-xl:text-[3rem] max-lg:text-[2.5rem] max-md:text-[1.8rem] max-xs:text-[1.8rem]">
          Hi, I'm Shrey a Frontend Engineer.
        </h1>
        <p className="font-roboto text-[1.4rem] text-white selection:bg-white selection:text-black w-[65%] m-auto max-xl:text-[1rem] max-lg:text-[1rem] max-md:text-[0.8rem] max-xs:text-[0.8rem] max-xs:w-[85%]">
          Skilled Front-End Developer adept in building web applications with
          React.js, JavaScript, TypeScript, and enhancing UI with TailwindCSS.
        </p>
      </div>
     
    </div>
  );
}

export default Hero;
