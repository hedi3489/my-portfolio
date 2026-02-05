import { Routes, Route } from 'react-router-dom'
import { MainContent, SideBar } from './Containers'
import { IoTProjectPage } from './IoTProjectPage.jsx'
import './Cards.css'

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
          <div className="flex home-page-container">
            <MainContent />
            <SideBar />
          </div>
        }
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
