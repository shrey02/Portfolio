import React from "react";

function Hero() {
  return (
    <div className="relative h-[0.1rem]">
      <div className="w-[100%] h-[20rem] bg-[#151515] text-center pt-[4rem] ">
        <h1
          className="text-[4rem] font-roboto bg-gradient-to-r
   from-pink-600 via-yellow-500 to-white inline-block 
     text-transparent bg-clip-text mb-6 font-bold selection:bg-white selection:text-black">
          Hi, I'm Shrey a Frontend Engineer.
        </h1>
        <p className="font-roboto text-[1.4rem] text-white selection:bg-white selection:text-black w-[50%] m-auto">
          Skilled Front-End Developer adept in building web applications with
          React.js, JavaScript, TypeScript, and enhancing UI with TailwindCSS.
        </p>
      </div>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="aboslute bottom-[-10]">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-[#151515]"></path>
      </svg>
    </div>
  );
}

export default Hero;
