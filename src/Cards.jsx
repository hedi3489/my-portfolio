import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './Containers.css'

function BioCard(){
    return <div className='bio-card'>
        <p>welcome</p>
        <p>Hi, I'm <b>Hedi Belhassine</b>, I build backend APIs and clean web interfaces focused on correctness, clarity, and maintainability</p>
        <p>Interested in correctness, data modeling, and systems that don’t surprise users.</p>
      </div>
}

function Projects(){

    return <div className='projects'>
        {/* <h2>What I built</h2> */}
        <ProjectCard
            title="Olympics API"
            // description="REST-based API with thorough pagination validation, and exception handling."
        />
        <ProjectCard
            title="IoT Home Simulation"
            // description="Raspberry Pi project simulating a smart home, controllable and monitorable remotely via an online dashboard."
        />
        <ProjectCard
            title="BlackBox Pentest"
            // description="Conducted a full black-box security assessment using Kali Linux, from recon to exploitation, with documented findings and recommendations."
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

function ContactCard(){
    const h3Style = (fontSize = '12px', italic = false) => ({
        fontSize,
        color: 'white',
        fontStyle: italic ? 'italic' : 'normal'
    })

    return <div className='contact-card'>
        <p>Contact Details</p>
        <h3 style={h3Style('9px', true)}>belhassinehedi308@gmail.com</h3>
        <h3 style={h3Style('12px', true)}>Canada</h3>
        <br />
        <p>Socials</p>
        <h3 style={h3Style()}>LinkedIn</h3>
        <h3 style={h3Style()}>Github</h3>
        <h3 style={h3Style()}>Discord</h3>
      </div>
}

function AboutCard(){
    return <div className='about-card'>
        <h3>About me</h3>
        <ul>tool</ul>
        <ul>tool</ul>
        <ul>tool</ul>
        <ul>tool</ul>
    </div>
}

function LittleFooter(){
    return <div className='little-footer'>
        <p>text... text...</p>
    </div>
}

export default Projects;
export {
    Projects,
    BioCard, 
    ProjectCard, 
    ContactCard, 
    AboutCard, 
    LittleFooter,
    

};