import { useState } from 'react'
import './App.css' 
// import './Containers.css'
import { MainContent, SideBar } from './Containers'

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
