import { useState } from 'react'
import './App.css'
import Projects from './Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hedi Belhassine</h1>
      <Projects />

      
    </>
  )
}

export default App
