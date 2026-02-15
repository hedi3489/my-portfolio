
import { TechStackInline, TextSection, SoftList, CaptionedImage, } from './ProjectPageComponents.jsx'

function APIProjectPage() {
  return (
    <div className="flex project-page-container">
      <div className="flex flex-col full-width card">
        <div className="prose">

          <h1>2024 Paris Olympics API</h1>
          <h4>A REST-based API providing resources and remote computing</h4>
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
            paragraphs={["RESTful API providing access to some 2024 Paris Olympics resources. It reveals information about athletes, coaches, venues, and events, and provides remote computing of Body Mass Index (BMI) and Basal Metabolic Rate (BMR) based on user input."]}
            className="text-section"
          />
        </div>
      </div>
    </div>
  )
}

export default APIProjectPage