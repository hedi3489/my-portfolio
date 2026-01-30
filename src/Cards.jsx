import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Cards.css'

function BioCard(){
    return <div className='card bio-card'>
        <p>welcome</p>
        <p>Hi, I'm <b>Hedi Belhassine</b>, I build backend APIs and clean web interfaces focused on correctness, clarity, and maintainability</p>
        <p>Interested in correctness, data modeling, and systems that don’t surprise users.</p>
      </div>
}

function Projects({ projects = [] }) {
  return (
    <div className="flex flex-col">
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
  const h3Style = (fontSize = '20px') => ({
      fontSize: fontSize,
      fontWeight: 'normal',
  })
  
  return (
    <div className="card project-card">
      <h3 style={h3Style()}>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}


function ContactCard(){
  const h2Style = (color = 'white', fontSize = '20px', italic = false) => ({
    color: color,
    fontSize: fontSize,
    fontWeight: 'normal',
    fontStyle: italic ? 'italic' : 'normal',
  })

  const h3Style = (fontSize = '16px', italic = false) => ({
      color: 'white',
      fontSize: fontSize,
      fontStyle: italic ? 'italic' : 'normal'
  })

  return <div className='card contact-card'>
    <h2 style={h2Style()}>Let's start working together! </h2>
    <br />
    <h2 style={h2Style('#6d6d6d', '16px', true)}>Contact Details</h2>
    <h3 style={h3Style('14px', true)}>belhassinehedi308@gmail.com</h3>
    <h3 style={h3Style('14px', true)}>Canada</h3>
    <br />
    <h2 style={h2Style('#6d6d6d', '16px',)}>Socials</h2>
    <h3 style={h3Style()}>LinkedIn</h3>
    <h3 style={h3Style()}>Github</h3>
    <h3 style={h3Style()}>Discord</h3>
  </div>
}

function AboutCard(){
    return <div className='card card about-card'>
        <h3>About me</h3>
        <p>I'm a full stack software developer (frontend-focused) from Canada. </p>
        <br />
        <p>My primary tools of choice include:</p>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Slim</li>
        </ul>

        <p>Beyond coding, I'm passionate about design, illustration, animation and 3D modelling and traveling. An unusual hobby of mine is collecting vintage passports, they're interesting pieces of history to me.</p>
        
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