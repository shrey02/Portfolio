import React from 'react'
import photo from '../images/codeBuddyPhoto.jpeg'
const ProjectCard = () => {
  return (
    <div className='w-[20rem] h-[25rem] rounded-lg m-auto relative bg-zinc-950 p-2'>
        <img src={photo} alt='codebuddy' className='m-auto w-[96%] h-[60%] rounded-md mt-1'></img>
        <div className='w-[100%] bg-zinc-950 rounded-lg mt-3 align-middle justify-center text-center'>
        <h1 className='text-2xl text-white font-roboto font-bold text-center rounded-md m-auto'>Code<span className='text-fuchsia-600'>Buddy</span></h1>
        <div className='flex justify-evenly'>
        <div className='h-[2rem] w-[5rem] border-2 border-pink-700 rounded-md text-white font-bold text-center mt-2 px-1'>Node</div>
        <div className='h-[2rem] w-[5rem] border-2 border-pink-700 rounded-md text-white font-bold text-center mt-2 px-1'>React</div>
        <div className='h-[2rem] w-[5rem] border-2 border-pink-700 rounded-md text-white font-bold text-center mt-2 px-1'>Socket</div>
        </div>
        
        <div className='flex justify-between px-3 mt-5'>
        <button className='h-[2rem] w-[45%] bg-gray-800 rounded-md text-white font-bold text-center mt-2 px-2'>Live</button>
        <button className='h-[2rem] w-[45%] bg-gray-800 rounded-md text-white font-bold text-center mt-2 px-2'>Code</button>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard;