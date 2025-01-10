import { useState, useEffect, useRef } from 'react'

import './App.css'

import { Landing } from './pages/Landing'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Footer } from './pages/Footer'

function App() {
  
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [currentOverlayProject, setCurrentOverlayProject] = useState<(() => JSX.Element) | undefined>(undefined);

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
      {[Landing, Projects, About, Experience, Footer].map((Component, index) => (
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
              <Component setCurrentOverlayProject={setCurrentOverlayProject} key={index}/>
          </section>
      ))}

      { 
        currentOverlayProject &&
        <div className="absolute flex w-full h-min-screen bg-white bg-opacity-0.2">
          <div className="m-10 w-full bg-white">
            <currentOverlayProject/>
          </div>
        </div>
      }
    </div>
  )
}

export default App
