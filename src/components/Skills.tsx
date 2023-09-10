import React from 'react'
import { motion } from 'framer-motion'
import jsIcon from '../images/javascript.png'
import htmlIcon from '../images/html.png'
import cssIcon from '../images/css.png'
import tailwindIcon from '../images/tailwind.png'
import reactIcon from '../images/react.png'
import nodeIcon from '../images/nodejs.png'
import mongodbIcon from '../images/mongo-db.png'
import typescriptIcon from '../images/typescript.png'
import cIcon from '../images/s.png'
import gitIcon from '../images/git.png'

function Skills() {
  return (
    <div className='w-[100%] align-middle text-center flex flex-col' id='Skills'>
      <svg className='z-20 -mb-9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151515" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,74.7C672,96,768,128,864,160C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
       <div className='flex items-center py-1 mb-14 max-sm:mb-0 justify-center'>
       <div className="h-px bg-amber-300 w-[10%]"></div> 
        {/* <img src={skillIcon} alt='skills' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'></img> */}
       <div className='text-[3rem] bg-gradient-to-r
   from-yellow-100 via-amber-100 to-white inline-block 
     text-transparent bg-clip-text font-bold font-roboto max-lg:mt-0'>
        Skills
       </div>
       <div className="h-px bg-amber-300 w-[10%]"></div> 
       </div>
       <div className='justify-center w-[80%] place-items-center m-auto container grid grid-cols-5 max-sm:grid-cols-3 gap-y-10'>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={jsIcon} alt='javascript' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> JavaScript </span> </motion.div>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={htmlIcon} alt='react' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> HTML </span> </motion.div>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={reactIcon} alt='react' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> React </span> </motion.div>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={cssIcon} alt='css' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> CSS </span> </motion.div>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={tailwindIcon} alt='tailwind' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> Tailwind </span> </motion.div>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={typescriptIcon} alt='typescript' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> TypeScript </span> </motion.div>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={mongodbIcon} alt='mongoDb' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> MongoDB </span> </motion.div>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={cIcon} alt='tailwind' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> C++ </span> </motion.div>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={gitIcon} alt='git' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> Github </span> </motion.div>
           <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}><img src={nodeIcon} alt='node' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/><span className='text-white font-bold text-2xl max-sm:text-sm'> Node </span> </motion.div>
       </div>
       
    </div>

  )
}

export default Skills;