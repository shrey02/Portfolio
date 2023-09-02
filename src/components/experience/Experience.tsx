import React from "react";
import Card from "./Card";
import boyIcon from '../../images/me-light.png';
import { experienceData,experienceData2 } from "./ExperienceData";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="w-[100%] bg-[#0e0b0e] mt-4 h-auto pb-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1c171c"
          fill-opacity="1"
          d="M0,192L24,208C48,224,96,256,144,256C192,256,240,224,288,224C336,224,384,256,432,234.7C480,213,528,139,576,106.7C624,75,672,85,720,117.3C768,149,816,203,864,229.3C912,256,960,256,1008,234.7C1056,213,1104,171,1152,138.7C1200,107,1248,85,1296,106.7C1344,128,1392,192,1416,224L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
      </svg>
      <div className="flex items-center py-4 mb-14 justify-center">
        <div className="h-px bg-amber-300 w-[7%]"></div>
        {/* <img src={skillIcon} alt='skills' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'></img> */}
        <div
          className="text-[3rem] bg-gradient-to-r
   from-yellow-100 via-amber-100 to-white inline-block 
     text-transparent bg-clip-text font-bold font-roboto max-lg:mt-0 mx-2">
          Experience
        </div>
        <div className="h-px bg-amber-300 w-[7%]"></div>
      </div>
      
      <div className="min-[800px]:flex-wrap min-[800px]:justify-center min-[800px]:flex">
        <motion.img src={boyIcon} 
        className="w-[10rem] h-[15rem] m-auto min-[800px]:hidden mb-7"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, repeat:Infinity,repeatType:"reverse" }}
        />
        <Card {...experienceData}/>
        <motion.img src={boyIcon} 
        className="w-[10rem] h-[15rem] mt-24 max-[800px]:hidden"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, repeat:Infinity,repeatType:"reverse" }}
        />
        <Card {...experienceData2}/>
      </div>
    </div>
  );
}

export default Experience;
