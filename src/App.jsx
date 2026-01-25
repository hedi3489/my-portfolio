import { useState } from 'react'
import './App.css'
import Projects, {MainContent, SideBar, BioCard} from './Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <MainContent />
        <SideBar />
      </div>
    </>
  )
}

export default App
