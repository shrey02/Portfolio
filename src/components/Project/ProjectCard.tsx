import React from 'react'
import { motion } from 'framer-motion';
import {card} from '../../utility/interface';
import {FiExternalLink} from 'react-icons/fi';
import {BsGithub} from 'react-icons/bs';

const ProjectCard = ( props : card ) => {
  return (
    <motion.div
    transition={{ ease: "easeOut", duration: 0.8 ,  }}
    initial={{ scale:0.2 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
     className='w-[20rem] h-[29.5rem] rounded-3xl m-auto relative my-5 bg-zinc-950 bg-opacity-40 shadow-2xl  border-zinc-800 border'>
     <h1 className='text-center text-2xl text-gray-200 font-pecifico font-semibold w-[100%] mt-2'>{props.firstName +" "+props.lastName}</h1>  
     <img alt='project' src={props.image} className='w-[95%] rounded-sm m-auto h-[10rem] mt-2'></img>   
     <div className='text-base  border-zinc-500 text-gray-300 font-mono  text-left ml-5 mt-3 '>{props.about}</div>
     <div className='w-[95%] m-auto flex flex-wrap text-lg text-black font-semibold justify-evenly mt-5'>
      {
        props.stack.map((tech,idx)=>(
           <div key={idx} className=' bg-emerald-100  bg-opacity-40 rounded-md px-2 mx-2 mb-2'>{tech}</div>
        ))
      }
     </div>
    
     <div className='flex absolute bottom-3 left-1/2 -translate-x-1/2'>
        <a href={props.codeLink} className='text-4xl text-white mr-16 hover:text-teal-300'><FiExternalLink/></a>
        <a href={props.codeLink} className='text-4xl text-white hover:text-teal-300'><BsGithub/></a>
     </div>
    </motion.div>
  )
}

export default ProjectCard;