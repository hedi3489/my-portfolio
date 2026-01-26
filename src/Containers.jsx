import './App.css'
import './Containers.css'
import {BioCard, ContactCard, Projects, AboutCard, LittleFooter} from './Cards.jsx'

const techProjects = [
  {
    title: "Olympics API",
    description: "REST-based API" // with pagination, validation, and exception handling."
  },
  {
    title: "IoT Home Simulation",
    description: "Raspberry Pi smart home" // simulation with remote monitoring and control."
  },
  {
    title: "BlackBox Pentest",
    description: "Black-box security " // assessment from reconnaissance to exploitation."
  }
]

const funProjects = [
  {
    title: "Sketches",
    description: "" 
  },
  {
    title: "Artworks",
    description: ""
  },
  {
    title: "Currently",
    description: ""
  },
  {
    title: "Colors",
    description: ""
  }
]


function MainContent(){
    return <div className='main-content'>
        <BioCard />
        <Showcase />
    </div>
}

function Showcase(){
    console.log(funProjects);
    return <div className='showcase'>
          <ContactCard />
          <Projects projects={techProjects} />
          <Projects projects={funProjects} />
        </div>
}

function SideBar(){
    return <div className='side-bar'>
        <AboutCard />
        <LittleFooter />
    </div>
}

export { 
    MainContent,
    SideBar
}
