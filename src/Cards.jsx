import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

function MainContent(){
    return <div className='main-content'>
        <BioCard />
        <Showcase />
    </div>
}

function Showcase(){
    return <div className='showcase'>
          <ContactCard />
          <Projects />
          <Projects />
        </div>
}

function SideBar(){
    return <div className='side-bar'>
        <AboutCard />
        <LittleFooter />
    </div>
}

function BioCard(){
    return <div className='bio-card'>
        <p>welcome</p>
        <p>Hi, I'm <b>Hedi Belhassine</b>, I build backend APIs and clean web interfaces focused on correctness, clarity, and maintainability</p>
        <p>Interested in correctness, data modeling, and systems that don’t surprise users.</p>
      </div>
}

function Projects(){

    return <div className='projects'>
        <h2>What I built</h2>
        <ProjectCard
            title="2024 Paris Olympics API"
            // description="REST-based API with thorough pagination validation, and exception handling."
        />
        <ProjectCard
            title="IoT Smart-Home Simulation"
            // description="Raspberry Pi project simulating a smart home, controllable and monitorable remotely via an online dashboard."
        />
        <ProjectCard
            title="Black-box Pen-test"
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
    return <div className='contact-card'>
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
    MainContent,
    SideBar,

    BioCard, 
    ProjectCard, 
    ContactCard, 
    AboutCard, 
    LittleFooter,
    

};