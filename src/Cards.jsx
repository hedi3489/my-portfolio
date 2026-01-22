import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

function BioCard(){
    return <div className='bio-card'>
        <h1>Hedi Belhassine</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      </div>
}


function Projects(){

    return <div className='projects-card'>
        <h2>What I built</h2>

        <ProjectCard
            title="2024 Paris Olympics API"
            description="REST-based API with thorough pagination validation, and exception handling."
        />

        <ProjectCard
            title="IoT Smart-Home Simulation"
            description="Raspberry Pi project simulating a smart home, controllable and monitorable remotely via an online dashboard."
        />

        <ProjectCard
            title="Black-box Pen-test"
            description="Conducted a full black-box security assessment using Kali Linux, from recon to exploitation, with documented findings and recommendations."
        />
    </div>;

}

function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Projects;
export { BioCard, ProjectCard };