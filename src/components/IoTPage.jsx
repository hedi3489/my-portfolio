import rpiImage from '../assets/rpi-top.png'
import iotSetup1 from '../assets/iot-setup1.png'
import iotSetup2 from '../assets/iot-setup2.png'
import { FaMicrochip, FaLightbulb, FaFan, FaIdCard } from 'react-icons/fa'
import { MdSensors } from 'react-icons/md'
import { BsCpu } from 'react-icons/bs'

const ICONS = {
  rpi: BsCpu,
  microcontroller: FaMicrochip,
  led: FaLightbulb,
  motor: FaFan,
  dht11: MdSensors,
  light: MdSensors,
  rfid: FaIdCard,
}
const softlist = [
  {
    icon: 'rpi',
    term: 'Raspberry Pi 400',
    description: 'Central controller for system and dashboard',
  },
  {
    icon: 'microcontroller',
    term: 'ESP32',
    description: 'Secondary microcontroller for RFID and photoresistor',
  },
  {
    icon: 'led',
    term: 'LED',
    description: 'Simulats household light bulb',
  },
  {
    icon: 'motor',
    term: 'DC Motor',
    description: 'Simulates fan ( powered via a 9V battery )',
  },
  {
    icon: 'dht11',
    term: 'DHT11',
    description: 'Temperature and humidity sensing',
  },
  {
    icon: 'light',
    term: 'Photoresistor',
    description: 'Ambient light sensing',
  },
  {
    icon: 'rfid',
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
            paragraphs={["A smart home automation simulation built with a Raspberry Pi that integrates sensors, actuators, user identification, and a web dashboard.The project models how real-world smart home systems monitor environments, apply automation rules, and keep users in the loop.",
            ]}
            className="text-section"
          />

          <TextSection
            title="Hardware Setup"
            children={
              <>
                <SoftList items={softlist} />
                <CaptionedImage 
                  title="Breadboard Layout Diagram"
                  image={iotSetup1}
                  alt="Smart home simulation setup diagram 1"
                  caption='Physical breadboard implementation of the IoT prototype showing the Raspberry Pi 4, motor driver module, sensors, LED indicator, DC motor, and 9V battery with actual wiring and component placement'
                />

                <CaptionedImage 
                  title="Circuit Schematic"
                  image={iotSetup2}
                  alt="Smart home simulation setup diagram 2"
                  caption='Simplified circuit schematic illustrating the electrical connections between the Raspberry Pi 4, motor driver, sensors, LED, DC motor, and 9V power supply in a clear and organized format'
                />
              </>
            }
            className="text-section"
          />

          <TextSection
            title="Automation & User Logic"
            paragraphs={[
              "Environmental thresholds for temperature and ambient light are defined per user and loaded dynamically through RFID identification. When sensor readings move outside a user’s thresholds, the system evaluates the appropriate response and notifies the user via email.",
              "If the temperature exceeds the defined limit, the system sends an email prompting the user to approve or reject activating the fan. The system waits for a “Yes” or “No” response and updates the fan state accordingly.",
              "For ambient light, the system applies immediate automation: when brightness falls below the threshold, the light is turned on automatically and the user is only notified. Once ambient brightness returns to acceptable levels, the light is switched off automatically.",
            ]}
            className="text-section in-section-gap"
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

const TechStackInline = ({ items = [] }) => {
  return (
    <div className="tech-stack-inline flex">
      {items.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};

export function TextSection({ title, paragraphs = [], children, className = "" }) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      <div>
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
      {children}
    </section>
  );
}

function SoftList({ items }) {
  return (
    <dl className="soft-list">
      {items.map((item, index) => {
        const Icon = item.icon ? ICONS[item.icon] : null

        return (
          <div key={index} className="soft-list-row" style={{ '--accent': '#c51a4a', }}>
            <dt>
              {Icon && <Icon className="soft-list-icon" />}
              {item.term}
            </dt>
            <dd>{item.description}</dd>
          </div>
        )
      })}
    </dl>
  )
}

function CaptionedImage({ title='', image='', alt='', caption='' }) {
  return <div>
    <h3>{title}</h3>
    <img
      src={image}
      alt={alt}
      className='section-image' />
    <h5>{caption}</h5>
  </div>
}


export default IoTProjectPage;