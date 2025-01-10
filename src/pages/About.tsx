import React from 'react'
import image from '../assets/images/_DSC4846.jpg'
import './About.css'

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full text-gray-800 p-4 gap-10">
      <div className="order-last md:order-first flex flex-col justify-center items-center md:items-end">
        <div id="about-text-box" className="flex flex-col justify-start items-center border-2 border-gray-800 w-full md:w-2/3 h-2/3 p-8 gap-2 hover-black">
          <div id="about-text-draggable" className="flex flex-col justify-center items-center h-4 w-10 rounded-xl border shadow-md top-0 gap-1 p-3 transition-all duration-200">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex flow-row gap-1">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="bg-gray-400 w-1 h-1 rounded-full"/>
                ))}
              </div>
            ))}
          </div>
          <h2 className="text-4xl md:text-6xl text-left">About Me</h2>
          <div className="w-full h-1 bg-gray-800"/>
          <p className="text-lg font-semibold">
            I am currently an 18 year old software development student from Tartu, Estonia. 
            I like working and applying my skills on ideas that could actually help people.
          </p>
        </div>
      </div>

      <div className="order-first md:order-last flex justify-center items-center">
        <div className="flex justify-start items-center h-2/3 p-8">
          <img src={image} className="w-full md:w-1/2 shadow-xl"/>
        </div>
      </div>
    </div>
  )
}
