import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './Containers.css'

function BioCard(){
    return <div className='card bio-card'>
        <p>welcome</p>
        <p>Hi, I'm <b>Hedi Belhassine</b>, I build backend APIs and clean web interfaces focused on correctness, clarity, and maintainability</p>
        <p>Interested in correctness, data modeling, and systems that don’t surprise users.</p>
      </div>
}

function Projects({ projects = [] }) {
  return (
    <div className="flex flex-col projects">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  )
}



function ProjectCard({ title, description }) {
  return (
    <div className="card project-card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}


function ContactCard(){
    const h3Style = (fontSize = '12px', italic = false) => ({
        fontSize,
        color: 'white',
        fontStyle: italic ? 'italic' : 'normal'
    })

    return <div className='card contact-card'>
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
    return <div className='card card about-card'>
        <h3>About me</h3>
        <ul>
          <li>Tool</li>
          <li>Tool</li>
          <li>Tool</li>
          <li>Tool</li>
        </ul>
        
    </div>
}

function LittleFooter(){
    return <div className='card little-footer'>
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