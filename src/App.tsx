import { useEffect, useRef } from 'react'

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import './App.css'

import { Landing } from './pages/Landing'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Footer } from './pages/Footer'

function App() {
  
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionNames = [
    'landing',
    'about',
    'experience',
    'projects',
    'footer'
  ];

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
    <DndProvider backend={HTML5Backend}>
      <div className="m-2 md:m-0">
        {[Landing, About].map((Component, index) => (
            <section
              id={`${sectionNames[index]}`}
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
        <section id={`${sectionNames[2]}`}>
          <Projects/>
        </section>
        {[Experience, Footer].map((Component, index) => (
            <section
              id={`${sectionNames[index]}`}
              key={index}
              ref={el => sectionsRef.current[index + 3] = el}
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
    </DndProvider>
  )
}

export default App
