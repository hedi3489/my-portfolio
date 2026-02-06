function IoTProjectPage() {
  return (
    <div className="flex flex-col card">
      <div className="prose">
        <h1>Smart Home IoT Dashboard</h1>
        <h2>Smart home automation system using Raspberry Pi, sensors, user profiles, and a web dashboard.</h2>

        <TechStack
          title="Tech stack chips"
          items={[
            'Raspberry Pi',
            'Python',
            'HTML / CSS / JavaScript',
            'DHT11',
            'RFID',
            'Hardware automation',
          ]}
        />

        <PageSection
          title="Overview"
          body="A smart home automation simulation built with a Raspberry Pi 400 that integrates sensors, actuators, user identification, and a web dashboard. The project models how real-world smart home systems monitor environments, apply automation rules, and keep users in the loop."
        />
        <PageSection
          title="Hardware Setup"
          body="The system uses a Raspberry Pi 400 connected to a breadboard-based circuit. An LED simulates a light bulb, a DC motor simulates a fan, and sensors collect environmental data such as temperature, humidity, and ambient light. An RFID reader identifies household members and loads personalized settings. (Insert hardware photo here)"
        />
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
  )
}

function PageSection({ title, body }) {
    return <div>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
}

function TechStack({ title, items }) {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default IoTProjectPage;