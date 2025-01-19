import { useState } from "react";
import { useDrop } from 'react-dnd'
import './Experience.css'

import { ExperienceStage } from "../components.tsx/ExperienceStage";

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
      place: "Tartu Vocational College",
      time: ["2022", '...'],
      description: ["I started at Tartu Vocational College in september of 2022 and have gained a huge amount of knowledge and experience. I have participated in multiple competitions and won high places in most of them."]
    },
    {
      title: "Mentor",
      place: "Edukoht OÜ",
      time: ["2022", "2023"],
      description: ["I taught young children basic programming and game development in Roblox using the programming language Lua and the Roblox game engine. It was a fun experience and gave me a good insight into the world of game development."]
    },
    {
      title: "Website design and development",
      place: "Self employed",
      time: ["2024", "..."],
      description: ["During my second summer break I decided to give my skills a real practical outlet through web development for local businesses.", "So far I have completed websites for 3 clients and in addition to fantastic feedback, I've also gained a lot of knowledge about web development."]
    }
  ]
  

  return (
    <div className="flex justify-center items-center min-h-screen gap-8">
      <div className="flex flex-col justify-start items-center w-1/3">
        <div className="flex justify-start items-center p-4 w-full">
          <p className="font-normal text-4xl">This is my <b>Experience so far</b>.</p>
        </div>
        <div className="flex flex-col mt-12 justify-center items-start gap-8">
          {stages.map((stage) => (
            <ExperienceStage stage={stage}/>
          ))}
        </div>
      </div>
      {selectedStage ? 
        <div className="flex flex-col justify-center items-center border-2 border-black p-4 w-1/3 gap-4">
          <p className="text-5xl w-full">{selectedStage.title}</p>
          <p className="font-semibold w-full ">{selectedStage.place}</p>
          <p className="text-xl">{selectedStage.description.map((paragraph: string) => (
            <p>{paragraph}</p>
          ))}</p>
          <button className="hover-black-sm flex justify-center items-center border-2 border-black p-3" onClick={() => setSelectedStage(undefined)}>Pop</button>
        </div> 
        :
        <div ref={drop} className="flex flex-col justify-center items-center w-1/3 p-4 border-2 border-black h-96">
            <div className={`w-full h-full flex justify-center items-center border-2 border-dashed ${isOver && 'border-gray-700'} transition-all duration-100`}>
              <p className="text-gray-500 text-lg text-center">{isOver ? 'Drop it in here' : 'Psst! Drag one of those in here!'}</p> 
            </div> 
        </div>
      }
    </div>
  )
}
