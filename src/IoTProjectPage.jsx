function IoTProjectPage() {
    return <div className="flex flex-col card ">
        <h1>Smart Home IoT Dashboard</h1>
        <h2>Smart home automation system using Raspberry Pi, sensors, user profiles, and a web dashboard.</h2>

        <h3>Tech stack chips</h3>
        <ul>
            <li>Raspberry Pi</li>
            <li>Python</li>
            <li>HTML / CSS / JavaScript</li>
            <li>DHT11</li>
            <li>RFID</li>
            <li>Hardware automation</li>
        </ul>

        <h3>Overview</h3>
        <p>A smart home automation simulation built with a Raspberry Pi 400 that integrates sensors, actuators, user identification, and a web dashboard. The project models how real-world smart home systems monitor environments, apply automation rules, and keep users in the loop.</p>

        <h3>Hardware Setup</h3>
        <p>The system uses a Raspberry Pi 400 connected to a breadboard-based circuit. An LED simulates a light bulb, a DC motor simulates a fan, and sensors collect environmental data such as temperature, humidity, and ambient light. An RFID reader identifies household members and loads personalized settings. (Insert hardware photo here)</p>

        <h3>Automation & User Logic</h3>
        <p>Environmental thresholds are defined per user and loaded through RFID identification. When sensor readings fall outside acceptable ranges, the system automatically evaluates whether to activate devices and notifies the user via email. Users can approve or reject actions by responding directly to the email.</p>

        <h3>Dashboard Interface</h3>
        <p>A web-based dashboard displays live sensor readings and the current state of devices. It allows users to manually control the system and monitor environmental conditions in real time. (Insert dashboard screenshots or short GIF)</p>

        <h3>Key Takeaways</h3>
        <p>This project demonstrates end-to-end system design, hardware–software integration, and user-focused automation. It highlights experience with IoT concepts, backend logic, asynchronous events, and building interfaces that control physical systems.</p>
    </div>
}

export { IoTProjectPage };