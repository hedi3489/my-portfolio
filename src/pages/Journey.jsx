import { TechStackInline, TextSection, CaptionedImage, BulletList, JourneySection } from '../components/ProjectPageComponents.jsx'
import VanierLogo from '../assets/vanier.jpg'

function JourneyPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col card page-card ">
                <div className='prose '>
                    <h1>Journey</h1>
                    <br /><br />
                    <JourneySection 
                        logo={VanierLogo}
                        place="Vanier College"
                        program="Computer Science & Technology Program"
                        date="01/2022 - 01/2025"
                        body="During my three-year technical program, I built a robust foundation in software development, covering programming fundamentals, databases, operating systems, networks, and data security. The program balances theory with hands-on project work, preparing graduates for the workforce."
                    />
                </div>
            </div>
        </div>
    )
}

export default JourneyPage
