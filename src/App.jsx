import { useState } from 'react'
import './App.css'
import Projects, {BioCard, Footer} from './Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BioCard />
      <Projects />
      <Footer />

      
    </>
  )
}

export default App
