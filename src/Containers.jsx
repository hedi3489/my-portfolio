import './Cards.css'
import './Containers.css'
import {BioCard, ContactCard, Projects, AboutCard, LittleFooter} from './Cards.jsx'

const techProjects = [
  {
    title: "Olympics API",
    // description: "A REST-based API" // with pagination, validation, and exception handling."
  },
  {
    title: "RPi Smart Home",
    // description: "An IoT smart home simulation" // simulation with remote monitoring and control."
  },
  {
    title: "Blackbox Pentest",
    // description: "A pentest report" // assessment from reconnaissance to exploitation."
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
    return <div className='flex flex-col flex-center main-content'>
        <BioCard />
        <Showcase />
    </div>
}

function Showcase(){
    console.log(funProjects);
    return <div className='flex showcase'>
          <ContactCard />
          <Projects projects={techProjects} />
          <Projects projects={funProjects} />
        </div>
}

function SideBar(){
    return <div className='flex flex-col felx-center side-bar'>
        <AboutCard />
        <LittleFooter />
    </div>
}

export { 
    MainContent,
    SideBar
}
