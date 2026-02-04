import { Routes, Route } from 'react-router-dom'
import { MainContent, SideBar } from './Containers'
import './Cards.css'

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
          <div className="flex container">
            <MainContent />
            <SideBar />
          </div>
        }
      />

      {/* Dummy project route */}
      <Route
        path="/projects/test"
        element={
          <div className="flex container">
            <h1>Test Project Page</h1>
          </div>
        }
      />
    </Routes>
  )
}

export default App
