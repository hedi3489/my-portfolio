import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import APIProjectPage from './components/APIProject.jsx'
import IoTProjectPage from './components/IoTProject.jsx'

function App() {
  return (
    <div className='parallax'>
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

      </Routes>
    </div>
  )
}

export default App
