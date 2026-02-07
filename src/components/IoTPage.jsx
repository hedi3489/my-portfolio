import rpiImage from '../assets/rpi-top.png'

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
          <PageSection title="Hardware Setup" image={{ src: rpiImage, alt: 'Raspberry Pi 400' }}>
            {/* <ul> */}
              <p>- Raspberry Pi 400 as the central controller</p>
              <p>- ESP32 as a secondary microcontroller for peripheral sensing and input</p>
              <p>- LED simulating a household light bulb</p>
              <p>- DC motor simulating a fan, powered by a 9V battery</p>
              <p>- DHT11 sensor connected to the RPi for temperature and humidity sensing</p>
              <p>- Photoresistor connected to an ESP32 for ambient light sensing</p>
              <p>- RFID reader connected to the ESP32 for household member identification</p>
            {/* </ul> */}
            <br />
          </PageSection>

          <PageSection
            title="Automation & User Logic"
            body="Environmental thresholds are defined per user and loaded through RFID identification. When sensor readings fall outside acceptable ranges, the system automatically evaluates whether to activate devices and notifies the user via email. Users can approve or reject actions by responding directly to the email."
          />
          <PageSection
            title="Dashboard Interface"
            body="A web-based dashboard displays live sensor readings and the current state of devices. It allows users to manually control the system and monitor environmental conditions in real time. (Insert dashboard screenshots or short GIF)"
          />
          <PageSection
            title="Key Takeaways"
            body="This project demonstrates end-to-end system design, hardware–software integration, and user-focused automation. It highlights experience with IoT concepts, backend logic, asynchronous events, and building interfaces that control physical systems."
          />
        </div>
      </div>
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


export default IoTProjectPage;