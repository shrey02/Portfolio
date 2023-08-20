import React from 'react'
import signature from '../images/signature.png';
function Navbar() {
  return (
    <div className='w-[100%] h-[10rem] bg-[#282727] p-3 flex flex-row justify-between pt-6 pr-6'>
     <img src={signature} alt="Shrey Sinha" className="w-[13rem] h-[2.5rem] mt-2 text-red-700" />
     <ul className='text-white flex justify-between w-[40%] text-lg mt-2'>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Project</li>
        <li>Contact</li>
     </ul>
     <button className='bg-pink-600 w-[5rem] h-[2.5rem] rounded-lg text-white'>Resume</button> 
    </div>
  )
}

export default Navbar