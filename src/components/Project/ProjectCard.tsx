import React from 'react'
import {card} from '../../utility/interface';

const ProjectCard = ( props : card ) => {
  return (
    <div className='w-[20rem] h-[22rem] rounded-lg m-auto relative bg-zinc-950 p-2 my-5'>
        <img src={props.image} alt='codebuddy' className='m-auto w-[96%] h-[55%] rounded-md mt-1'></img>
        <div className='w-[100%] bg-zinc-950 rounded-lg mt-3 align-middle justify-center text-center'>
        <h1 className='text-2xl text-white font-roboto font-bold text-center rounded-md m-auto'>{props.firstName}<span className='text-fuchsia-600'>{props.lastName}</span></h1>
        <div className='flex justify-evenly'>
          {
            props.stack.map((tech,idx)=>(
              <div key = {idx} className='h-[2rem] w-[5rem] border-2 border-pink-700 rounded-md text-white font-bold text-center mt-2 px-1'>{tech}</div>
            ))
          }
        </div>
        <div className='flex justify-between px-3 mt-4'>
        <a href={props.liveLink} className='h-[2rem] w-[45%] bg-gray-800 rounded-md text-white font-bold text-center mt-2 px-2 pt-1'>Live</a>
        <a href={props.codeLink} className='h-[2rem] w-[45%] bg-gray-800 rounded-md text-white font-bold text-center mt-2 px-2 pt-1'>Code</a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard;