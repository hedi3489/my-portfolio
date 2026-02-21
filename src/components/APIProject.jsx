
import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList } from './ProjectPageComponents.jsx'

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
                <TextSection
                    className="text-section"
                    title="Root Resource"
                    paragraphs={["The root endpoint (\"/\") provides a summary of the available resources, with detailed information on each resource, including URIs, available operations, filtering, sorting, and pagination options. The API is structured to offer endpoints for both querying and manipulating data."]}
                />
                <TextSection
                    className="text-section"
                    title="Global Options"
                    children={<BulletList
                        title={null}
                        items={[
                            "Pagination: current_page, page_size",
                            "Ordering: asc, desc"
                        ]}
                    />}
                />

                <div className="text-section">
                    <TextSection
                        className="text-section"
                        title="Available Resources"
                    />
                    <BulletList
                        title="/athletees"
                        items={[
                            'Collection URI: localhost/olympics-api/athletes',
                            'Singleton URI: localhost/olympics-api/athletes/{id}',
                            'Methods: GET, POST, PUT, DELETE',
                            'Filtering Options: country_id, gender, ethnicity',
                            'Sorting Options: Any (validation not implemented)',
                            'Ordering & Pagination: Implemented'
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default APIProjectPage