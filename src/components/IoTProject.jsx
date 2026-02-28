import iotDiagram1 from '../assets/iotDiagram1.png'
import iotDiagram2 from '../assets/iotDiagram2.png'
import iotFlowchart_Basic from '../assets/iotFlowchartBasic.png'
import iotFlowchart_Colored from '../assets/iotFlowchartColoured.png'
import { FaMicrochip, FaLightbulb, FaFan, FaIdCard } from 'react-icons/fa'
import { MdSensors, MdMemory } from 'react-icons/md'
import { BsCpu } from 'react-icons/bs'
import { TechStackInline, TextSection, SoftList, CaptionedImage, CaptionedImages } from './ProjectPageComponents.jsx'

const softlist = [
  {
    icon: BsCpu,
    term: 'Raspberry Pi 400',
    description: 'Central controller for system and dashboard',
  },
  {
    icon: FaMicrochip,
    term: 'ESP32',
    description: 'Secondary microcontroller for RFID and photoresistor',
  },
  {
    icon: MdMemory,
    term: 'Driver Module',
    description: 'Interface to control DC motor',
  },
  {
    icon: FaLightbulb,
    term: 'LED',
    description: 'Simulates household light bulb',
  },
  {
    icon: FaFan,
    term: 'DC Motor',
    description: 'Simulates fan (powered via a 9V battery)',
  },
  {
    icon: MdSensors,
    term: 'DHT11',
    description: 'Temperature and humidity sensing',
  },
  {
    icon: MdSensors,
    term: 'Photoresistor',
    description: 'Ambient light sensing',
  },
  {
    icon: FaIdCard,
    term: 'RFID Reader',
    description: 'Household member identification',
  }
]

function IoTProjectPage() {
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
          <TextSection
            title="Hardware Setup"
            children={<SoftList items={softlist} />}
          />

          <TextSection
            title="Breadboard Layout Diagram"
            children={
              <CaptionedImage
                image={iotDiagram1}
                alt="Smart home simulation setup diagram 1"
                caption='Physical breadboard implementation of the smart home prototype showing the RPi 4, motor driver module, sensors, LED indicator, DC motor, and 9V battery with actual wiring and component placement.'
              />
            }
          />

          <TextSection
            title="Circuit Schematic"
            children={
              <CaptionedImage
                image={iotDiagram2}
                alt="Smart home simulation setup diagram 2"
                caption='Simplified circuit schematic illustrating the connections between the RPi, LED, DHT11, motor driver, DC motor, and 9V battery, and the ESP32, photoresistor, and RFID, in a clear and organized format.'
              />
            }
          />

          <TextSection
            title="Automation & User Logic"
            paragraphs={[
              "Each user has pre-defined thresholds for temperature and ambient light, and upon scanning his or her RFID card, the user-defined preferences are loaded in the main process.",
              "When temperature readings exceed the loaded limit, the system notifies the user via email and asks if the fan should be turned on. It the awaits a response from the user, either a Yes or No, and adjusts the fan state accordingly.",
              "As for ambient light, when it falls below the threshold, the LED is turned on automatically and the user is simply notified. When brightness rises again, the LED is turned off the user is again notified.",
            ]}
            className="text-section in-section-gap"
          />

          <TextSection
            title=""
            children={
              <CaptionedImages
                imageList={[
                  {
                    src: iotFlowchart_Basic,
                    alt: "Smart home simulation flowchart",
                    caption: 'Flowchart illustrating the algorithm and the communication between Raspberry Pi and ESP32. (The dotted lines representing wireless communication)'
                  },
                  {
                    src: iotFlowchart_Colored,
                    alt: "Smart home simulation flowchart",
                    caption: 'Flowchart illustrating the algorithm and the communication between Raspberry Pi and ESP32. (The dotted lines representing wireless communication)'
                  }
                ]}
              />
            }
          />

          <TextSection
            title="Dashboard Interface"
            paragraphs={[
              "A web-based dashboard displays live sensor readings and the current state of devices. It allows users to manually control the system and monitor environmental conditions in real time. (Insert dashboard screenshots or short GIF)",
            ]}
            className="text-section"
          />
          <TextSection
            title="Key Takeaways"
            paragraphs={[
              "This project demonstrates end-to-end system design, hardware–software integration, and user-focused automation. It highlights experience with IoT concepts, backend logic, asynchronous events, and building interfaces that control physical systems.",
            ]}
            className="text-section"
          />
        </div>
      </div>
    </div>
  )
}

export default IoTProjectPage;