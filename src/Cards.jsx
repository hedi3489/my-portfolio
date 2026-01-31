import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Cards.css'


/* =============== MAIN-CONTENT =============== */
function BioCard(){
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
  const headingStyle = (color = 'white', italic = false) => ({
    color,
    fontStyle: italic ? 'italic' : 'normal',
    fontWeight: 'normal',
  });

  const subHeadingStyle = (color = 'white', italic = false) => ({
    color,
    fontStyle: italic ? 'italic' : 'normal',
  });

  return (
    <div className="card contact-card">

      <h3 style={headingStyle()}><b>Let's start working together!</b></h3>
      <br />

      <h4 style={headingStyle('#6d6d6d', true)}>Contact Details</h4>
      <h4 style={subHeadingStyle('white', true)}>belhassinehedi308@gmail.com</h4>
      <h4 style={subHeadingStyle('white', true)}>Canada</h4>
      <br />

      <h4 style={headingStyle('#6d6d6d')}>Socials</h4>
      <h4 style={subHeadingStyle()}>LinkedIn</h4>
      <h4 style={subHeadingStyle()}>Github</h4>
      <h4 style={subHeadingStyle()}>Discord</h4>

    </div>
  );
}

function LittleCard({ title }) {
  return (
    <div className="card little-card">
      <h3>{title}</h3>
    </div>
  )
}

function ThemeCard() {
  const colors = [
    '#ce318f',
    '#4c3ccb',
    '#24a297',
    '#a3f500',
    '#f6d322'
  ]

  return (
    <div className="card little-card theme-card">
      {/* <h3>Theme</h3> */}

      <div className="theme-colors">
        {colors.map((color, i) => (
          <button
            key={i}
            className="theme-dot"
            style={{ backgroundColor: color }}
            aria-label={`Select theme color ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
/* =============== SIDE-BAR =============== */
function AboutCard(){
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

function LittleFooter(){
    return <div className='card little-footer'>
        <p>text... text...</p>
    </div>
}

// export default Deck;
export {
    BioCard, 
    LittleCard,
    ThemeCard, 
    ContactCard, 
    AboutCard, 
    LittleFooter,
    

};