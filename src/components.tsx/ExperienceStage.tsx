import React from 'react'
import { useDrag } from "react-dnd";


interface ExperienceStageProps {
    stage: Stage
}

export const ExperienceStage: React.FC<ExperienceStageProps> = ({ stage }) => {
    const [ _ , drag] = useDrag(() => ({
        type: "stage",
        item: stage,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));


  return (
    <div 
        ref={drag} 
        className={`stage-container hover-black border-2 w-full border-black p-4 flex flex-col gap-1`}
        style={{cursor: 'move'}}
    >
        <div id="draggable" className="flex flex-col w-full justify-center items-center h-4 w-10 top-0 gap-1 p-3 transition-all duration-200">
        {[...Array(2)].map((_, index) => (
            <div key={index} className="flex flow-row gap-1">
            {[...Array(3)].map((_, index) => (
                <div key={index} className={`bg-gray-400 w-1 h-1 rounded-full`}/>
            ))}
            </div>
        ))}
        </div>
        <p className="text-4xl">{stage.title}</p>
        <p>{stage.place}</p>
        <p>{stage.time.length > 1 ? `${stage.time[0]} - ${stage.time[1]}` : stage.time[0]}</p>
    </div>
  )
}
