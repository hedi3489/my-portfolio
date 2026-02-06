import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import IoTProjectPage from './components/IoTPage.jsx'

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/projects/IoT-Smart-Home"
        element={<IoTProjectPage />}
      />

    </Routes>
  )
}

export default App
