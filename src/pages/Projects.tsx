import React, { Dispatch, useState } from 'react'
import arrowIcon from '../assets/icons/arrow.svg'

import { Wisdiphy } from '../projects/Wisdiphy'
import { InternHub } from '../projects/InternHub'

interface ProjectsProps {
  setCurrentOverlayProject: React.Dispatch<React.SetStateAction<(() => JSX.Element) | undefined>>
}

export const Projects: React.FC<ProjectsProps> = ({ setCurrentOverlayProject }) => {

  const projects = [
    {
      name: 'InternHub',
      description: 'This is the description for the first project in the array of all the projects. I am explaining what were the technical requirements, why and how I did it.',
      url: 'https://internhub.arendusekoobas.ee',
      component: InternHub
    },
    {
      name: 'Wisdiphy',
      description: 'This is the description for the second project in the array of all the projects. I am explaining what were the technical requirements, why and how I did it.',
      url: "",
      component: Wisdiphy
    }
  ]

  const [currentProject, setCurrentProject] = useState<{name: string, description: string, url: string, component: () => JSX.Element}>(projects[0]);

  return (
    <div className="flex justify-center items-center min-h-screen w-full text-gray-800 p-4">
      

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="" onClick={() => setCurrentOverlayProject(currentProject.component)}>
          <img width={400} height={300} className="rounded-xl border-2 border-black"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex gap-1 items-center justify-center">
            <h2 className="text-4xl">{currentProject.name}</h2>
            <a href={currentProject.url} target="_blank">
              <img src={arrowIcon} className="bg-gray-800 h-min hover:bg-gray-700 hover:cursor-pointer hover-black-sm"/>
            </a>
          </div>
          <p className="text-md">
            {currentProject.description}
          </p>
        </div>
      </div>

      
    </div>
  )
}
