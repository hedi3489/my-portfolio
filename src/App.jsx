import { useState } from 'react'
import './App.css'
import Projects, {BioCard} from './Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BioCard />
      <Projects />

      
    </>
  )
}

export default App
