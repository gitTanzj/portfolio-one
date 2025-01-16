import { useState } from "react";
import { useDrop } from 'react-dnd'
import './Experience.css'

import DraggableItem from "../UI/Draggable";
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
      description: [""]
    },
    {
      title: "Mentor",
      place: "Edukoht OÜ",
      time: ["2022", "2023"],
      description: [""]
    },
    {
      title: "Website design and development",
      place: "Self employed",
      time: ["2024", "..."],
      description: [""]
    }
  ]
  

  return (
    <div className="flex justify-center items-center min-h-screen gap-8">
      <div className="flex flex-col justify-start items-center w-1/3">
        <div className="flex justify-start items-center p-4 w-full">
          <p className="font-normal text-5xl">This is my <b>Experience</b>.</p>
        </div>
        <div className="flex flex-col mt-12 justify-center items-start gap-8">
          {stages.map((stage) => (
            <ExperienceStage stage={stage}/>
          ))}
        </div>
      </div>
      {selectedStage ? 
        <div>
          {selectedStage.description}
        </div> 
        :
        <div ref={drop} className="flex flex-col justify-center items-center w-1/3 border-2 border-black min-h-96">
            <p className="text-gray-500 text-lg">Psst! Drag one of those in here!</p>
        </div>
      }
    </div>
  )
}
