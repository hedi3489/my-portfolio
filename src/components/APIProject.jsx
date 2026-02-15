
import { TechStackInline, TextSection, SoftList, CaptionedImage, } from './ProjectPageComponents.jsx'

function APIProjectPage() {
  return (
    <div className="flex project-page-container">
      <div className="flex flex-col full-width card">
        <div className="prose">

          <h1>Smart Home IoT Dashboard</h1>
          <h4>Automation system using Raspberry Pi, sensors, user profiles, and a web dashboard</h4>
          <TechStackInline
            items={[
              "Raspberry Pi",
              "ESP32",
              "HTML / CSS / JS",
              "Python",
              "DHT11",
              "RFID",
              "Hardware automation",
            ]}
          />
          <TextSection
            title="Overview"
            paragraphs={["A smart home automation simulation built with a Raspberry Pi that integrates sensors, actuators, user identification, and a web dashboard. The project models how real-world smart home systems monitor environments, apply automation rules, and keep users in the loop.",
            ]}
            className="text-section"
          />
        </div>
      </div>
    </div>
  )
}

export default APIProjectPage