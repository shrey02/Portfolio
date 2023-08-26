import React from "react";

function Hero() {
  return (
    <div className="relative w-[100%] h-[22rem] shadow-[0_115px_95px_-45px_rgba(109,94,102,0.63)] bg-[#151515] max-[1300px]:h-[16rem] max-[780px]:h-[15rem] max-[550px]:h-[13rem]">
      <div className="w-[100%]  text-center pt-[4rem] z-20">
        <h1
          className="text-[4rem] font-roboto bg-gradient-to-r
   from-pink-600 via-yellow-500 to-white inline-block 
     text-transparent bg-clip-text mb-6 font-bold selection:bg-white selection:text-black max-xl:text-[3rem] max-lg:text-[2.5rem] max-md:text-[1.8rem] max-xs:text-[1.3rem]">
          Hi, I'm Shrey a Frontend Engineer.
        </h1>
        <p className="font-roboto text-[1.4rem] text-white selection:bg-white selection:text-black w-[65%] m-auto max-xl:text-[1rem] max-lg:text-[1rem] max-md:text-[0.8rem] max-xs:text-[0.8rem] max-xs:w-[85%]">
          Skilled Front-End Developer adept in building web applications with
          React.js, JavaScript, TypeScript, and enhancing UI with TailwindCSS.
        </p>
      </div>
      <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className='w-[100%] h-[40%] opacity-100 absolute bottom-[-8.8rem] min-[1300px]:bottom-[-8.7rem] min-[780px]:bottom-[-6.34rem] min-[550px]:bottom-[-5.9rem] min-[200px]:bottom-[-5.15rem]'>
    <path
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
      className="fill-[#151515] opacity-100"></path>
  </svg>
    </div>
  );
}

export default Hero;
