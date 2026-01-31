import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Cards.css'

function BioCard(){
    return <div className='card bio-card'>
        <p>welcome</p>
        <p>Hi, I'm <b>Hedi Belhassine</b>, I build backend APIs and clean web interfaces focused on correctness, clarity, and maintainability</p>
        <p>Interested in correctness, data modeling, and systems that don’t surprise users.</p>
        <h1>H1 Text</h1>
        <h2>H2 Text</h2>
        <h3>H3 Text</h3>
        <h4>H4 Text</h4>
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
      // fontSize: fontSize,
      fontWeight: 'normal',
  })
  return (
    <div className="card project-card">
      <h3 style={h3Style()}>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}


function ContactCard() {
  const headingStyle = (color = 'white', italic = false) => ({
    color,
    fontStyle: italic ? 'italic' : 'normal',
    fontWeight: 'normal',
  });

  const subHeadingStyle = (color = 'white', italic = false) => ({
    color,
    fontStyle: italic ? 'italic' : 'normal',
  });

  return (
    <div className="card contact-card">

      <h3 style={headingStyle()}><b>Let's start working together!</b></h3>
      <br />

      <h4 style={headingStyle('#6d6d6d', true)}>Contact Details</h4>
      <h4 style={subHeadingStyle('white', true)}>belhassinehedi308@gmail.com</h4>
      <h4 style={subHeadingStyle('white', true)}>Canada</h4>
      <br />

      <h4 style={headingStyle('#6d6d6d')}>Socials</h4>
      <h4 style={subHeadingStyle()}>LinkedIn</h4>
      <h4 style={subHeadingStyle()}>Github</h4>
      <h4 style={subHeadingStyle()}>Discord</h4>

    </div>
  );
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