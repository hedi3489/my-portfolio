
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
                        title="Overview"
                        paragraphs={["A REST-based API providing access to some 2024 Paris Olympics resources. It reveals information about athletes, coaches, venues, and events, and provides remote computing of Body Mass Index (BMI) and Basal Metabolic Rate (BMR) based on user input."]}
                        className="text-section"
                    />
                    <TextSection
                        title="Root Resource"
                        paragraphs={["The root endpoint (\"/\") provides a summary of the available resources, with detailed information on each resource, including URIs, available operations, filtering, sorting, and pagination options. The API is structured to offer endpoints for both querying and manipulating data."]}
                        className="text-section"
                    />
                    <TextSection
                        title="Global Options"
                        children={<BulletList
                            title={null}
                            items={[
                                "Pagination: current_page, page_size",
                                "Ordering: asc, desc"
                            ]}
                        />}
                        className="text-section"
                    />
                </div>
            </div>
        </div>
    )
}

export default APIProjectPage