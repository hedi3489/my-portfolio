import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import APIProjectPage from './pages/APIProject.jsx'
import IoTProjectPage from './pages/IoTProject.jsx'
import BlackBoxPenPage from './pages/BlackBoxPenProject.jsx'
import JourneyPage from './pages/Journey.jsx'


function App() {
  return (
    <div className='parallax flex justify-content-center align-items-center'>
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
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

export default App
