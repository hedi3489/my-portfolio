
import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList } from './ProjectPageComponents.jsx'
import apiSS1 from '../assets/olympics-api-ss1.png'

function APIProjectPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col card page-card">
                <div className='prose'>
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
                        paragraphs={[
                        <>
                        The Olympics API is a RESTful web service built around the 2024 Paris Olympics (roughly...) providing structured access to access data on athletes, coaches, venues, events, countries, and results. The goal was to design and deliver a production level API with all the expected features: authentication, pagination, filtering, sorting, and proper error handling.
                        </>,
                        <>
                        The API was written using <b>PHP</b> and the <b>Slim Framework</b>, backed by a (dummy-filled) MySQL database, and following the REST conventions throughout - each resource has its own collection and singleton endpoints supporting full CRUD operations. All inputs go through Valitron validation with custom HTTP exceptions for clean, descriptive error responses.
                        </>,
                        <>
                        I personally owned the venues and events endpoints, including their filtering logic — venues can be filtered by <b>name</b>, <b>capacity range</b>, and <b>construction date</b>, while events support sorting by fields like <b>sport</b>, <b>date</b>, and <b>participant count</b>.
                        </>
                        ]}
                    />
                    <CaptionedImage
                        caption='Screenshot of the root resource of the Olympics API'
                        image={apiSS1}
                    />

                </div>
            </div>
        </div>
    )
}

export default APIProjectPage

