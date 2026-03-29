import { useState } from "react";
import { useDrop } from 'react-dnd'
import './Experience.css'

import { ExperienceStage } from "../components.tsx/ExperienceStage";
import vocoLogo from '../assets/logos/voco.png';
import edukohtLogo from '../assets/logos/edukoht.png';
import pipedriveLogo from '../assets/logos/pipedrive.png';

export const Experience = () => {

  const [selectedStage, setSelectedStage] = useState<Stage>();
 
  const [{isOver}, drop] = useDrop(() => (
    {
      accept: "stage",
      drop: (item: Stage) => setSelectedStage(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      })
    }
  ))

  const stages: Stage[] = [
    {
      title: "Software development student",
      place: "Tartu Vocational College / VOCO",
      time: ["2022", '2026'],
      description: ["I started at Tartu Vocational College in september of 2022 and have gained a huge amount of knowledge and experience. I have participated in multiple competitions and won high places in most of them."],
      logo: vocoLogo
    },
    {
      title: "Mentor",
      place: "Edukoht OÜ",
      time: ["2022", "2023"],
      description: ["I taught young children basic programming and game development in Roblox using the programming language Lua and the Roblox game engine. It was a fun experience and gave me a good insight into the world of game development."],
      logo: edukohtLogo
    },
    {
      title: "Web design and development",
      place: "Self-employed",
      time: ["2024", "2026"],
      description: ["During my second summer break I decided to give my skills a real practical outlet through web development for local businesses.", "So far I have completed websites for 4 clients and in addition to fantastic feedback, I've also gained a lot of knowledge about web development."]
    },
    {
      title: "Junior Software Engineer",
      place: "Pipedrive",
      time: ["2025", "..."],
      description: ["Joined Pipedrive as an intern during the School of Code 2025 program and got promoted to a Junior Software Engineer. Since then I have been working on the main Pipedrive web-application.",
        "The main work focuses on full-stack development within a microservice architecture"],
      logo: pipedriveLogo
    }
  ]
  

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-4 sm:gap-8 p-2 sm:p-4">
      <div className="flex flex-col justify-start items-center w-full md:w-1/3">
        <div className="flex justify-start items-center p-2 sm:p-4 w-full">
          <p className="font-normal text-2xl sm:text-4xl">This is my <b>Experience so far</b>.</p>
        </div>
        <div className="flex flex-col mt-6 sm:mt-12 justify-center items-start gap-4 w-full">
          {stages.map((stage, index) => (
            <ExperienceStage key={index} stage={stage}/>
          ))}
        </div>
      </div>
      {selectedStage ?
        <div className="flex flex-col justify-center items-center border-2 border-black p-2 sm:p-4 w-full md:w-1/3 gap-2 sm:gap-4 mt-4 md:mt-0">
          <p className="text-3xl sm:text-5xl w-full">{selectedStage.title}</p>
          <div className="flex items-center gap-2 sm:gap-3 w-full">
            {selectedStage.logo && <img src={selectedStage.logo} alt={`${selectedStage.place} logo`} className="h-10 sm:h-12 w-auto object-contain rounded-sm" />}
            <p className="font-semibold">{selectedStage.place}</p>
          </div>
          <div className="text-base sm:text-xl">{selectedStage.description.map((paragraph: string) => (
            <p>{paragraph}</p>
          ))}</div>
          <button className="hover-black-sm flex justify-center items-center border-2 border-black p-2 sm:p-3" onClick={() => setSelectedStage(undefined)}>Pop</button>
        </div> 
        :
        <div ref={drop} className="flex flex-col justify-center items-center w-full md:w-1/3 p-2 sm:p-4 border-2 border-black h-48 sm:h-96 mt-4 md:mt-0">
            <div className={`w-full h-full flex justify-center items-center border-2 border-dashed ${isOver && 'border-gray-700'} transition-all duration-100`}>
              <p className="text-gray-500 text-base sm:text-lg text-center p-2">{isOver ? 'Drop it in here' : 'Psst! Drag one of those in here!'}</p> 
            </div> 
        </div>
      }
    </div>
  )
}
