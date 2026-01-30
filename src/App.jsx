import { useState } from 'react'
import { MainContent, SideBar } from './Containers'
import './Cards.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex container'>
        <MainContent />
        <SideBar />
      </div>
    </>
  )
}

export default App
