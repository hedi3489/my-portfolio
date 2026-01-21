import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hedi Belhassine</h1>
      

      <div>
        <h2>What I built</h2>

        <h3>2024 Paris Olympics API</h3>
        <p>A REST-based API for the 2024 Paris Olympics resource, a tool providing
          access to various resources (athletes, coaches, venues…) with thorough 
          pagination, robust validation, & exception handling.</p>
        
        <br />

        <h3>IoT Smart-Home Simulation</h3>
        <p>A smart-home sim. that runs on a RPi. Using a breadboard & various 
          components it simulates a home environment, and using an online dashboard,
          the user can remotely monitor & the control the state of its components. </p>
      
      </div>

    </>
  )
}

export default App
