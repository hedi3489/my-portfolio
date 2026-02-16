
import { TechStackInline, TextSection, SoftList, CaptionedImage, BulletList } from './ProjectPageComponents.jsx'

function APIProjectPage() {
    return (
        <div className="flex project-page-container">
            <div className="flex flex-col full-width card">
                <div className="prose">

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

                    <TextSection
                        className="text-section"
                        title="Available Resources"
                        children={[
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
                            />,
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
                            />,
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
                            />,
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
                            />,
                        ]}
                    />
                    <TextSection
                        className='text-section'
                        title="GET Example: /venues"
                        children={[
                            <BulletList
                                title={null}
                                items={[
                                    'Fetches all venues.',
                                    'Supports filtering by name, capacity range, and construction date.'
                                ]}
                            />,
                            <BulletList
                                title='Query Parameters'
                                items={[
                                    'venue_name: Filter venues by name. Use partial or full names (e.g., venue_name=Stadium)',
                                    'min_capacity: Specify the minimum seating capacity for venues (e.g., min_capacity=1000)',
                                    'max_capacity: Specify the maximum seating capacity (e.g., max_capacity=50000)',
                                    'min_date_constructed: Filter venues built after a specific date. Format: YYYY-MM-DD',
                                    'max_date_constructed: Filter venues built before a specific date. Format: YYYY-MM-DD',
                                    'Example: https://localhost/olympics-api/venues?venue_name=Stade&min_capacity=80000'
                                ]}
                            />
                        ]}
                    />


                    {/* 
                    GET Example: /venues

                    Fetches all venues.
                    Supports filtering by name, capacity range, and construction date.

                    Query Parameters:

                    venue_name: Filter venues by name. Use partial or full names (e.g., venue_name=Stadium).
                    min_capacity: Specify the minimum seating capacity for venues (e.g., min_capacity=1000).
                    max_capacity: Specify the maximum seating capacity (e.g., max_capacity=50000).
                    min_date_constructed: Filter venues built after a specific date. Format: YYYY-MM-DD (e.g., min_date_constructed=2000-01-01).
                    max_date_constructed: Filter venues built before a specific date. Format: YYYY-MM-DD (e.g., max_date_constructed=2020-12-31). Example: https://localhost/olympics-api/venues?venue_name=Stade&min_capacity=80000

                    Path Parameters:

                    GET /venues/{venue_id}: Fetches a specific venue by venue_id provided in the path (e.g, https://localhost/olympics-api/venues/18)
                    */}


                </div>
            </div>
        </div>
    )
}

export default APIProjectPage