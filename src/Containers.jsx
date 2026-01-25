import './App.css'
import './Containers.css'
import {BioCard, ContactCard, Projects, AboutCard, LittleFooter} from './Cards.jsx'

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

export { 
    MainContent,
    SideBar
}
