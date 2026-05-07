import { TechStackInline, TextSection, CaptionedImage, BulletList, JourneySection } from '../components/ProjectPageComponents.jsx'
import VanierLogo from '../assets/vanier.jpg'

function JourneyPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col card page-card ">
                <div className='prose flex flex-col gap'>
                    <h1>Journey</h1>
                    <br /><br />
                    <JourneySection
                        logo={VanierLogo}
                        place="Vanier College"
                        program="Computer Science & Technology Program"
                        date="01/2022 - 01/2025"
                        body="During my three-year technical program, I built a robust foundation in software development, covering programming fundamentals, databases, operating systems, networks, and data security. The program balances theory with hands-on project work, preparing graduates for the workforce."
                    />

                    <div className='flex flex-col' style={{marginLeft: "3rem"}}>
                        <JourneySection
                            logo={VanierLogo}
                            // place="Vanier College"
                            program="Year 1 — Building the Foundation"
                            date="01/2022 - 01/2023"
                            body="The first year established the pillars of computer science — OOP principles in Java, algorithms, discrete mathematics, databases, and an understanding of hardware and operating systems. By the end of the year I could think algorithmically and write structured, functional code."
                        />
                        <JourneySection
                            logo={VanierLogo}
                            // place="Vanier College"
                            program="Year 2 — Expanding the Toolkit"
                            date="01/2023 - 01/2024"
                            body="The second year broadened the scope, introducing data structures, networks, Linux OS, and both application and web development. Working across C#, Flutter, and HTML/CSS/JS/PHP, I began building more substantial projects that demanded teamwork and creative problem solving."
                        />
                        <JourneySection
                            logo={VanierLogo}
                            // place="Vanier College"
                            program="Year 3 — Thinking Like a Developer"
                            date="01/2024 - 01/2025"
                            body="The final year was the most exciting. Spanning web services, game programming, IoT, and ethical hacking, and wrapped up with an internship. The focus shifted toward building meaningful, deployable applications and thinking with the standards and expectations of the industry in mind."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JourneyPage
