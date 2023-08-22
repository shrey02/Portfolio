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
import skillIcon from '../images/create-file.png'

function Skills() {
  return (
    <div className='w-[100%] h-[40rem] pt-32 align-middle text-center'>
       <div className='flex'>
        <img src={skillIcon} alt='skills' className='w-[6rem] h-[6rem] ml-auto max-[500px]:h-[4rem] max-[500px]:w-[4rem]'></img>
       <div className='text-[3rem] bg-gradient-to-r
   from-yellow-200 via-yellow-100 to-white inline-block 
     text-transparent bg-clip-text font-bold font-roboto mb-16 mr-auto mt-4 max-lg:mt-0'>
        Skills
       </div>
       </div>
       <div className='justify-center w-[80%] place-items-center m-auto container grid grid-cols-4 gap-y-10'>
           <img src={jsIcon} alt='javascript' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/>
           <img src={reactIcon} alt='react' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/>
           <img src={htmlIcon} alt='html' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/>
           <img src={cssIcon} alt='css' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/>
           <img src={tailwindIcon} alt='tailwind' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/>
           <img src={nodeIcon} alt='node' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/>
           <img src={typescriptIcon} alt='typescript' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/>
           <img src={mongodbIcon} alt='mongoDb' className='w-[6rem] h-[6rem] max-[500px]:h-[4rem] max-[500px]:w-[4rem]'/>
       </div>
       
    </div>

  )
}

export default Skills;