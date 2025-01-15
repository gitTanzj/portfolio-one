import { useState, useEffect, useRef } from 'react'

import './App.css'

import { Landing } from './pages/Landing'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Footer } from './pages/Footer'

function App() {
  
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          const elem = entry.target as HTMLElement;
          elem.style.opacity = '1';
          elem.style.transition = '0.5s';
          elem.style.transform = 'translateY(0)';
        }
      })
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });
  }, [])

  return (
    <div>
      {[Landing, About, Projects, Experience, Footer].map((Component, index) => (
          <section
            id={`${Component.name.toLowerCase()}`}
            key={index}
            ref={el => sectionsRef.current[index] = el}
            style={{
              transition: '0.5s',
              opacity: 0,
              transform: 'translateY(10px)'
            }}
          >
              <Component/>
          </section>
      ))}
    </div>
  )
}

export default App
