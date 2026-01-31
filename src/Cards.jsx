import { useState, useEffect } from "react";

function BioCard() {
  return <div className='card bio-card'>
    <p>welcome</p>
    <p>Hi, I'm <b>Hedi Belhassine</b>, I build backend APIs and clean web interfaces focused on correctness, clarity, and maintainability</p>
    <p>Interested in correctness, data modeling, and systems that don’t surprise users.</p>
    <h1>H1 Text</h1>
    <h2>H2 Text</h2>
    <h3>H3 Text</h3>
    <h4>H4 Text</h4>
  </div>
}

function ContactCard() {
  const headingStyle = (color = 'white', italic = false, margin) => ({
    color,
    fontStyle: italic ? 'italic' : 'normal',
    marginTop: margin,
    marginBottom: margin,
  });

  return (
    <div className="card contact-card">

      <h3><b>Let's start working together!</b></h3>
      <br />

      <h4 style={headingStyle('#6d6d6d', true, '3px')}>Contact Details</h4>
      <h4><i>belhassinehedi308@gmail.com</i></h4>
      <h4><i>Canada</i></h4>
      <br />

      <h4 style={headingStyle('#6d6d6d', false, '3px')}>Socials</h4>
      <h4>LinkedIn</h4>
      <h4>Github</h4>
      <h4>Discord</h4>
      <h4>Cara</h4>

    </div>
  );
}

function LittleCard({ title, description }) {
  return (
    <div className="card little-card">
      <h2>{title}</h2>
      <h5>{description}</h5>
    </div>
  )
}

function ThemeCard() {
  const colors = ['#dfa19e', '#ffddba', '#a3c1bc', '#71758b', '#6a5874' ]
  
  // State for the selected color
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  
  // Update CSS variable whenever selectedColor changes
  useEffect(() => {
    document.documentElement.style.setProperty('--border-card-secondary', selectedColor);
  }, [selectedColor]);

  return (
    <div className="card little-card theme-card">
      <div className="theme-colors">
        {colors.map((color, i) => (
          <button
            key={i}
            className={`theme-dot ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            aria-label={`Select theme color ${i + 1}`}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

function AboutCard() {
  return <div className='card card about-card'>
    <h3>About me</h3>
    <p>I'm a full stack software developer (frontend-focused) from Canada. </p>
    <br />
    <p>My primary tools of choice include:</p>
    <ul>
      <li>Javascript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Python</li>
      <li>PHP</li>
      <li>Slim</li>
    </ul>

    <p>Beyond coding, I'm passionate about design, illustration, animation and 3D modelling and traveling. An unusual hobby of mine is collecting vintage passports, they're interesting pieces of history to me.</p>

  </div>
}

function LittleFooter() {
  return <div className='card little-footer'>
    <p>text... text...</p>
  </div>
}

export {
  BioCard,
  LittleCard,
  ThemeCard,
  ContactCard,
  AboutCard,
  LittleFooter,
};