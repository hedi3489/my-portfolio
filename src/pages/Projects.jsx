import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList, CodeSnippet } from '../components/ProjectPageComponents.jsx'
import * as Cards from '../components/Cards.jsx'

function Projects() {
    return (<div className="flex home-page-container" style={{ "--page-accent-color": "#99a4f1" }}>
        <div className="flex flex-col card page-card">
            <div className='prose'>
                <h1>Projects</h1>
                <br />
                <div className="flex gap">
                    <Cards.ProjectsDeck
                        cards={[
                            { title: "Olympics API", description: "Description", to: "/projects/olympics-api"},
                        ]}
                    />
                    <Cards.ProjectsDeck
                        cards={[
                            { title: "IoT Smart Home", description: "Description", to: "/projects/iot-home-simulation"},
                        ]}
                    />
                    <Cards.ProjectsDeck
                        cards={[
                            { title: "Blackbox Pentest", description: "Description", to: "/projects/black-box-penetration"},
                        ]}
                    />
                </div>
            </div>
        </div>
    </div>)
}

export default Projects