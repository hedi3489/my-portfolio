import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

function BioCard(){
    return <div className='bio-card'>
        <p>Hedi Belhassine Building backend APIs and clean web interfaces Focused on correctness, clarity, and maintainability</p>
        <p>Interested in correctness, data modeling, and systems that don’t surprise users.</p>
      </div>
}


function Projects(){

    return <div className='projects'>
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

function Footer(){
    return <div className='bio-card'>
        <p>Contact Details</p>
        <h3><i>belhassinehedi308@gmail.com</i></h3>
        <h3><i>Canada</i></h3>
        <br />
        <p>Socials</p>
        <h3>LinkedIn</h3>
        <h3>Github</h3>
        <h3>Discord</h3>
      </div>
}

export default Projects;
export { BioCard, ProjectCard, Footer };