import React from "react";
import signature from "../images/signature.png";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <div className="w-[100%] h-[6rem] bg-[#151515] p-3 flex flex-row justify-between pt-6 pr-6">
      <img
        src={signature}
        alt="Shrey Sinha"
        className="w-[13rem] h-[2.5rem] mt-2 text-red-700"
      />
      <motion.ul
        className="text-white flex justify-between w-[40%] text-lg mt-2 font-roboto"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Project</li>
        <li>Contact</li>
      </motion.ul>
      <button className="bg-pink-600 w-[5rem] h-[2.5rem] rounded-lg text-white">
        Resume
      </button>
    </div>
  );
}

export default Navbar;
