import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectData";

function Projects() {
  const [projectTypeIndex, setProjectTypeIndex] = useState<number>(1);
  const projectType: string[] = ["Full stack", "React", "JavaScript"];

  const handleOnButtonClick = (index: number) => {
    setProjectTypeIndex(index);
  };

  return (
    <div className="w-[100%]" id="Project">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0e0b0e"
          fill-opacity="1"
          d="M0,256L14.1,240C28.2,224,56,192,85,170.7C112.9,149,141,139,169,128C197.6,117,226,107,254,96C282.4,85,311,75,339,106.7C367.1,139,395,213,424,229.3C451.8,245,480,203,508,165.3C536.5,128,565,96,593,112C621.2,128,649,192,678,197.3C705.9,203,734,149,762,133.3C790.6,117,819,139,847,154.7C875.3,171,904,181,932,160C960,139,988,85,1016,58.7C1044.7,32,1073,32,1101,64C1129.4,96,1158,160,1186,197.3C1214.1,235,1242,245,1271,213.3C1298.8,181,1327,107,1355,85.3C1383.5,64,1412,96,1426,112L1440,128L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path>
      </svg>
      <div className="flex items-center py-4 mb-14 justify-center">
        <div className="h-px bg-amber-300 w-[10%]"></div>
        <div
          className="text-[3rem] bg-gradient-to-r
   from-yellow-100 via-amber-100 to-white inline-block 
     text-transparent bg-clip-text font-bold font-roboto max-lg:mt-0 mx-2">
          Projects
        </div>
        <div className="h-px bg-amber-300 w-[10%]"></div>
      </div>
      <div className="bg-[#00000073] w-[25rem] max-md:w-[90%] max-sm:w-[90%] h-[3rem] rounded-lg m-auto mb-5 flex p-2">
        {projectType.map((type, index) => (
          <button
            key={index}
            className={`w-32 h-8 ${
              index === projectTypeIndex ? "bg-pink-700" : "bg-transparent"
            } font-roboto rounded-md m-auto text-white font-bold`}
            onClick={() => handleOnButtonClick(index)}>
            {type}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {projectData[projectTypeIndex].map((data) => (
          <ProjectCard {...data} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
