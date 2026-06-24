import { Link } from 'react-router-dom'
import Dashboard from '../assets/PC-IOT.png'
import Database from '../assets/PC-API.png'
import BBPS from '../assets/PC-BBP.png'
import IMG from '../assets/real-retired-hunter.png'

export default function ProjectPage() {

    return <main className="gap flex flex-col width-75 projects-page card">
        <h1>Projects</h1>
        <br />
        <div className="gap flex flex-wrap">
            <ProjectCard title="Olympics API" subtitle="A REST-based web service revealing resources about the 2024 Paris Olympics" img={Database} to='/projects/olympics-api' />
            <ProjectCard title="IoT Smart Home" subtitle="A Raspberry PI smart home automation with real-time monitoring and control" img={Dashboard} to='/projects/iot-home-simulation'/>
            <ProjectCard title="Black-box Pentest" subtitle="A pentest and vulnerability assessment report" img={BBPS} to='/projects/black-box-penetration'/>
            <ProjectCard title="Coming Soon" subtitle="A work in progress" img={IMG} to='/projects/olympics-api' />
        </div>
    </main>
}

function ProjectCard({ title, subtitle, img, to }) {
    return <Link to={to} className='width-315px'>
        <article className='card project-card' style={{padding: '0'}}>
            <img src={img} className='width-315px' />
            <div style={{margin: '1rem 1.5rem 1.5rem 1.5rem'}}>
                <h2>{title}</h2>
                <p style={{color: 'gray'}}>{subtitle}</p>
            </div>
        </article>
    </Link>
}