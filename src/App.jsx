import { Routes, Route } from 'react-router-dom'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import HomePage from './pages/HomePage.jsx'
import ProjectPage from './pages/ProjectsPage.jsx'
import APIProjectPage from './pages/APIProject.jsx'
import IoTProjectPage from './pages/IoTProject.jsx'
import BlackBoxPenPage from './pages/BlackBoxPenProject.jsx'
import JourneyPage from './pages/Journey.jsx'

const COLS = 40;
const ROWS = 28;

function MosaicCurtain() {
  const gridRef = useRef();

  useGSAP(() => {
    const tiles = gridRef.current.querySelectorAll('.tile');

    gsap.set(tiles, { scaleY: 1, opacity: 1, transformOrigin: 'top center' });

    gsap.to(tiles, {
      opacity: 0,
      duration: 1,
      ease: 'steps(1)',
      stagger: {
        amount: 0.8,
        from: 'end',
        grid: [ROWS, COLS],
        axis: 'y',
      },
      delay: () => Math.random() * 0.3,
    });
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}>
      <div
        ref={gridRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gap: 0,
        }}
      >

        {Array.from({ length: COLS * ROWS }).map((_, i) => (
          <div key={i} className='tile' style={{
            background: '#fa325b',
            margin: 0,
            border: 'none',
            marginBottom: '-1px',
            height: 'calc(100% + 1px)'
          }} />
        ))}

      </div>
    </div>
  )

}

export default function App() {
  return (
    <div className='parallax flex justify-content-center align-items-center overflow-hidden'>
      <MosaicCurtain />
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route 
          path='/projects'
          element={<ProjectPage />}
        />

        <Route
          path="/projects/olympics-api"
          element={<APIProjectPage />}
        />

        <Route
          path="/projects/iot-home-simulation"
          element={<IoTProjectPage />}
        />

        <Route
          path="/projects/black-box-penetration"
          element={<BlackBoxPenPage />}
        />

        <Route
          path="/journey"
          element={<JourneyPage />}
        />

        <Route
          path="/artworks"
          element={<BlackBoxPenPage />}
        />

      </Routes>
    </div>
  )
}