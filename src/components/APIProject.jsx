
import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList } from './ProjectPageComponents.jsx'
import apiSS1 from '../assets/olympics-api-ss1.png'
function APIProjectPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col full-width card prose">
                <h1>2024 Paris Olympics API</h1>
                <h4>An API providing resources and remote computing over HTTPS</h4>
                <TechStackInline
                    items={[
                        "REST API",
                        "PHP",
                        "Slim",
                        "PDO",
                        "MySQL",
                        "Valitron",
                        "MVC",
                    ]}
                />
                <TextSection
                    className="text-section"
                    title="Overview"
                    paragraphs={["This API provides a structure way to store, retrieve, and manage Olympics-related resources such as atheletes, events, and results, and provides remote computing of Body Mass Index (BMI) and Basal Metabolic Rate (BMR) based on user input."]}
                />
                <BulletList
                    title="What it does"
                    items={[
                        'Creates, retrieves, updates, and deletes athletes and events',
                        'Returns structured JSON responses',
                        'Offers filtering and pagination',
                        'Validates incoming data before database operations',
                        'Handles errors gracefully with appropriate HTTP status codes',
                        'Provides predictable REST endpoints'
                    ]}
                />
                <CaptionedImage 
                    image={apiSS1}
                />

                
            </div>
        </div>
    )
}

export default APIProjectPage

