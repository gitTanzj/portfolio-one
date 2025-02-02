import React, { useState } from 'react'
import arrowIcon from '../assets/icons/arrow.svg'
import './Projects.css';

import internhubImage from '../assets/images/internhub.png'
import mustkoutsImage from '../assets/images/mustkouts.png'
import suurepeetriImage from '../assets/images/suurepeetri.png'
import suurkaruImage from '../assets/images/suurkaru.png'

export const Projects: React.FC = () => {

  const projects = [
    {
      name: 'InternHub',
      description: 'A startup currently under development by me and some of my friends. InternHub is a web-based platform for IT-students to prepare for their first interviews and the work environment through innovative solutions utilizing AI and psychology. I am currently the team lead and a full-stack software developer.',
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
      img: suurepeetriImage,
      misc: <div className="font-light">The site also has a dynamic version with an admin panel and backend, but is not currently live. - <a href="https://github.com/gitTanzj/suurepeetri-dynamic" className="font-bold text-blue-400 hover:underline" target="_blank">Github link</a></div>
    }
  ]

  const [showOther, setShowOther] = useState<boolean>(false);

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
        <div className="flex flex-col justify-start items-start min-h-[500px] w-full md:w-2/3 gap-4 sm:gap-8 p-4">
          <h2 className="text-5xl">Some other projects I worked on</h2>
          <div>
            <h3 className="font-semibold text-2xl">Doc Gen - <a className="text-blue-400 hover:underline" href="https://docgen.kalleriit.ee" target="_blank">docgen.kalleriit.ee</a></h3>
            <p className="font-light">A web app that utilizes the power of an LLM to create a custom notice in seconds.</p>
            <p className="font-semibold">Technologies - React, Express, Redis, Typescript, Tailwind</p>
          </div>
            {showOther ? (
            <>
              <div>
                <h3 className="font-semibold text-2xl">Andergraund labeli ametlik veebileht - <a className="text-blue-400 hover:underline" href="https://andergraund.ee" target="_blank">andergraund.ee</a></h3>
                <p className="font-light">As the second person to work on this site, I overhauled the styling, optimized the site for mobile and added the news and contact pages.</p>
                <p className="font-semibold">Technologies - Vanilla HTML/CSS</p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl">Afke / Tauri Väli ametlik veebileht - <a className="text-blue-400 hover:underline" href="https://afke.ee" target="_blank">afke.ee</a></h3>
                <p className="font-light">Also as the second person to work on this, I optimized it for mobile and created the Portfolio section.</p>
                <p className="font-semibold">Technologies - Vanilla HTML/CSS</p>
              </div>
            </>)
            :
            <div className="flex justify-center items-center w-1/6">
              <button onClick={() => setShowOther(true)} className="dots-animation text-6xl flex flex-row gap-2 justify-center items-center w-24 h-12 transition-all border-2 border-white">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="h-2 w-2 bg-gray-800 rounded-full bg-white"></div>
                ))}
              </button>
            </div>
            }
        </div>
    </div>
  )
}
