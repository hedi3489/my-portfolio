
import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList } from './ProjectPageComponents.jsx'

function APIProjectPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col full-width card prose">
                <h1>2024 Paris Olympics API</h1>
                <h4>An API providing resources and remote computing over HTTPS</h4>
                <TechStackInline
                    items={[
                        "RESTful API",
                        "HTTPS",
                        "PHP",
                        "Validation",
                        "Pagination",
                        "Filtering",
                        "Exception handling",
                    ]}
                />
                <TextSection
                    className="text-section"
                    title="Overview"
                    paragraphs={["A REST-based API providing access to some 2024 Paris Olympics resources. It reveals information about athletes, coaches, venues, and events, and provides remote computing of Body Mass Index (BMI) and Basal Metabolic Rate (BMR) based on user input."]}
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
                    <BulletList
                        title="/coaches"
                        items={[
                            'Collection URI: localhost/olympics-api/coaches',
                            'Singleton URI: localhost/olympics-api/coaches/{id}',
                            'Methods: GET, POST, PUT, DELETE',
                            'Filtering Options: gender, sport, been_in_olympics',
                            'Sorting Options: Any (validation not implemented)',
                            'Ordering & Pagination: Implemented'
                        ]}
                    />
                    <BulletList
                        title="/venues"
                        items={[
                            'Collection URI: localhost/olympics-api/venues',
                            'Singleton URI: localhost/olympics-api/venues/{id}',
                            'Methods: GET, POST, PUT, DELETE',
                            'Filtering Options: venue_name, min_capacity, max_capacity, min_date_constructed, max_date_constructed',
                            'Sorting Options: venue_id, venue_name, location, capacity, type, date_constructed, address',
                            'Ordering & Pagination: Implemented'
                        ]}
                    />
                    <BulletList
                        title="/events"
                        items={[
                            'Collection URI: localhost/olympics-api/events',
                            'Singleton URI: localhost/olympics-api/events/{id}',
                            'Methods: GET, POST, PUT, DELETE',
                            'Filtering Options: venue_name, min_capacity, max_capacity, min_date_constructed, max_date_constructed',
                            'Sorting Options: event_id, event_name, event_sport, start_date, end_date, number_of_participants, is_paralympic, venue_id',
                            'Ordering & Pagination: Implemented'
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default APIProjectPage