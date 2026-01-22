import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

function Projects(){

    return <div className='projects'>
        <h2>What I built</h2>

        <div>
            <h3>2024 Paris Olympics API</h3>
            <p>A REST-based API with thorough pagination, validation, & exception handling.</p>
        </div>

        <div>
            <h3>IoT Smart-Home Simulation</h3>
            <p>Raspberry Pi project simulating a smart home, controllable and monitorable remotely via an online dashboard.</p>
        </div>

        <div>
            <h3>Black-box Pen-test</h3>
            <p>Conducted a full black-box security assessment using Kali Linux, from recon to exploitation, with documented findings and recommendations.</p>
        </div>

    </div>;

}

export default Projects;