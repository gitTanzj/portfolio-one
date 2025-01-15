import { useState } from "react";
import { useDrag } from 'react-dnd'

type Stage = {
  title: string,
  place: string,
  time: string[],
  description: string[]
}

export const Experience = () => {

  const [selectedStage, setSelectedStage] = useState<Stage>();

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
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-start items-center w-1/3">
        <div className="flex justify-start items-center p-4 w-full">
          <p className="font-normal text-5xl">This is my <b>Experience</b>.</p>
        </div>
        <div className="flex flex-col mt-12 justify-center items-start gap-8">
          {stages.map((stage) => (
            <div className="stage-container hover-black border-2 w-full border-black p-4 flex flex-col gap-1">
              <div id="draggable" className="flex flex-col w-full justify-center items-center h-4 w-10 top-0 gap-1 p-3 transition-all duration-200">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="flex flow-row gap-1">
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="bg-gray-400 w-1 h-1 rounded-full"/>
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-4xl">{stage.title}</p>
              <p>{stage.place}</p>
              <p>{stage.time.length > 1 ? `${stage.time[0]} - ${stage.time[1]}` : stage.time[0]}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedStage ? 
        <div>
          {selectedStage.description}
        </div> 
        :
        <div className="flex flex-col justify-center items-center w-1/3 border-2 border-black min-h-96">
          <p className="text-gray-500 text-lg">Psst! Drag one of those in here!</p>
        </div>
      }
    </div>
  )
}
