import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import IoTProjectPage from './pages/IoTProjectPage.jsx'

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={<HomePage />}
      />

      {/* Dummy project route */}
      <Route
        path="/projects/IoT-Smart-Home"
        element={
          <div className="flex project-page-container">
            <IoTProjectPage />
          </div>
        }
      />
    </Routes>
  )
}

export default App
