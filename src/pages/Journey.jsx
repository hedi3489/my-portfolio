import { TechStackInline, TextSection, CaptionedImage, BulletList, JourneySection } from '../components/ProjectPageComponents.jsx'
import VanierLogo from '../assets/vanier.jpg'

function JourneyPage() {
    return (
        <div className="flex project-page-container " >
            <div className="flex flex-col card page-card ">
                <div className='prose '>
                    <h1>Journey</h1>
                    <br />
                    <JourneySection 
                        logo={VanierLogo}
                        place="Vanier College"
                        program="Computer Science & Technology Program"
                        date="2022 - 2025"
                        body="idk"
                    />
                </div>
            </div>
        </div>
    )
}

export default JourneyPage
