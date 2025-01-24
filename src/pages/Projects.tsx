import React from 'react'
import arrowIcon from '../assets/icons/arrow.svg'

import internhubImage from '../assets/images/internhub.png'
import mustkoutsImage from '../assets/images/mustkouts.png'
import suurepeetriImage from '../assets/images/suurepeetri.png'
import suurkaruImage from '../assets/images/suurkaru.png'

export const Projects: React.FC = () => {

  const projects = [
    {
      name: 'InternHub',
      description: 'A startup currently under development by me and my friends. InternHub is a web-based platform for IT-students to prepare for their first interviews and the work environment through innovative solutions utilizing AI and psychology. I am currently the team lead and a full-stack software developer.',
      url: 'https://internhub.arendusekoobas.ee',
      tech: 'React, TailwindCSS, Express, Supabase',
      img: internhubImage,
      misc: <div>Watch the pitch - <a target="_blank" href="https://www.youtube.com/watch?v=RI9v7KF7sLg&t=3371s&ab_channel=Tallinna%C3%9ClikoolITallinnUniversity" className="font-bold text-blue-400 hover:underline">here</a>!</div>
    },
    {
      name: 'Suur Karu',
      description: 'A website and homepage made for a local event organization business. Built during October-November of 2024, the single-page site has features such as a gallery, a mail form built with EmailJS and a beautiful minimalist design approach.',
      url: 'https://suurkaru.ee',
      tech: 'React, TypeScript, EmailJS, TailwindCSS',
      img: suurkaruImage
    },
    {
      name: 'Must Kõuts',
      description: 'A homepage for a local pub and restaurant. I made this during june of 2024. The website hosts a vast gallery and a good overview of the business.',
      tech: 'Vanilla HTML/CSS',
      url: 'https://mustkouts.ee',
      img: mustkoutsImage
    },
    {
      name: 'Suurepeetri',
      description: 'A homepage for a local housing business. This was made during july-august of 2024. The webpage has a unique style that is beautifully implemented and a unique structure.',
      url: 'https://darkslategray-dog-188572.hostingersite.com/',
      tech: 'React, TypeScript',
      img: suurepeetriImage
    }
  ]

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full text-gray-800 p-2 sm:p-4 gap-6 sm:gap-10 bg-gray-700 text-white">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-center items-center min-h-96 w-full md:w-2/3 gap-4 sm:gap-8 p-2">
              <div className={`flex flex-col gap-4 w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}>
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center gap-2`}>
                  <h2 className={`text-3xl sm:text-6xl ${index}`}>{project.name}</h2>
                  {
                    project.url &&
                    <a href={project.url} target="_blank">
                      <img src={arrowIcon} className="bg-gray-800 h-min hover:bg-gray-600 hover:cursor-pointer hover-black-sm"/>
                    </a>
                  }
                </div>
                <p className={`text-base sm:text-xl text-left`}>{project.description}</p>
                {project.misc && project.misc}
                <div className="text-sm sm:text-lg font-light">Technologies: <span className="text-white font-bold">{project.tech}</span></div>
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-last' : 'md:order-first'} w-full sm:w-96 h-48 sm:h-64 flex justify-center items-center`}>
                <a href={project.url} target="_blank" className="w-full h-full flex justify-center items-center">
                  <img style={{ objectFit: 'contain'}} src={project.img} alt={`Project ${index + 1}`} width={600} height={500} className="max-w-full max-h-full rounded-xl shadow-lg hover:cursor-pointer hover:shadow-xl transition-all"/>
                </a>
              </div>
          </div>
        ))}
    </div>
  )
}
