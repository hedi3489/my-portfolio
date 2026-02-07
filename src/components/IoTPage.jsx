import rpiImage from '../assets/rpi-top.png'
import {
  FaMicrochip,
  FaLightbulb,
  FaFan,
  FaIdCard,
} from 'react-icons/fa'
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
          <h3>Automation system using Raspberry Pi, sensors, user profiles, and a web dashboard</h3>

          <TechStack
            title="Tech stack chips"
            items={[
              'Raspberry Pi',
              'Python',
              'HTML / CSS / JavaScript',
              'DHT11 / RFID',
              'Hardware automation',
            ]}
          />

          <PageSection title="Overview">
            <p>A smart home automation simulation built with a <b>Raspberry Pi</b> that integrates sensors, actuators, user identification, and a web dashboard. The project models how real-world smart home systems monitor environments, apply automation rules, and keep users in the loop."</p>
          </PageSection>

          {/*image={{ src: rpiImage, alt: 'Raspberry Pi 400' }}*/}
          <PageSection title="Hardware Setup">
            <SoftList items={softlist} />
          </PageSection>

          <PageSection title="Automation & User Logic">
            <p>Environmental thresholds are defined per user and loaded through RFID identification. When sensor readings fall outside acceptable ranges, the system automatically evaluates whether to activate devices and notifies the user via email. Users can approve or reject actions by responding directly to the email.</p>
          </PageSection>
          <PageSection title="Dashboard Interface">
            <p>A web-based dashboard displays live sensor readings and the current state of devices. It allows users to manually control the system and monitor environmental conditions in real time. (Insert dashboard screenshots or short GIF)</p>
          </PageSection>

          <PageSection title="Key Takeaways">
            <p>This project demonstrates end-to-end system design, hardware–software integration, and user-focused automation. It highlights experience with IoT concepts, backend logic, asynchronous events, and building interfaces that control physical systems."</p>
          </PageSection>
        </div>
      </div>
    </div>
  )
}

function TechStack({ title, items }) {
  return (
    <div className="fit-content ">
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function PageSection({ title, children, image }) {
  return (
    <div className="page-section">
      <h2>{title}</h2>
      {children}

      {image && (
        <img
          src={image.src}
          alt={image.alt || ''}
          className="section-image"
        />
      )}
    </div>
  )
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


export default IoTProjectPage;