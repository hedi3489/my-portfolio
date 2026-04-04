import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function BioCard() {
  return <div className='flex full-width full-height card bio-card'>
    <div className="bio-text">
      <p>Welcome</p>
      <p>
        I'm <b>Hedi</b>, software developer who builds full-stack applications, from clean & interactive frontends to well-structured backends.
      </p>
      <p>
        I enjoy turning ideas into working products, whether that means designing intuitive user interfaces or building APIs and databases behind the scenes.
      </p>
    </div>
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
    <div>
      <div className="full-height card">
        <h3><b>Let's start working together!</b></h3><br />
        <h4 style={headingStyle('#6d6d6d', true, '3px')}>Contact Details</h4>
        <p><i>belhassinehedi308@gmail.com</i></p>
        <p><i>Canada</i></p>
        <br />
        <h4 style={headingStyle('#6d6d6d', false, '3px')}>Socials</h4>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Discord</p>
        <p>Cara</p>
      </div>
    </div>
  );
}

const CARD_MAP = {
  project: LittleCard,
  sketches: LittleCard,
  artworks: LittleCard,
  availability: AvailabilityCard,
  theme: ThemeCard,
}

function Deck({ cards = [] }) {
  return (
    <div className="gap flex flex-col full-height deck">
      {cards.map((item, i) => {
        const Card = CARD_MAP[item.type] || LittleCard
        return <Card key={i} {...item} />
      })}
    </div>
  )
}

function LittleCard({ title, description, to }) {
  const content = (
    <div className="full-height card little-card">
      <h2>{title}</h2>
      <h5>{description}</h5>
    </div>
  )
  if (!to) return content
  return (
    <Link to={to} className="card-link">
      {content}
    </Link>
  )
}

function AvailabilityCard() {
  const available = true;
  var availabilityText = "";
  const textStyle = (fontSize, color = 'white') => ({
    margin : "1px 0px",
    fontSize,
    color
  });

  if(available==true){
    availabilityText = "Open to collaborate";
  }else{
    availabilityText = "Currently working full-time";
  }
  
  return (
    <div className="flex flex-center card full-height little-card relative-pos">
      <span className="status-dot" aria-hidden="true" />
      <div>
        <h2 style={textStyle('1.35em')}>Now</h2>
        <p style={textStyle('0.9em', 'gray')}>{availabilityText}</p>
      </div>
    </div>
  );
}

function ThemeCard() {
  const colors = [
    '#e6627c', 
    '#efd1c2', 
    '#70d3c4', 
    '#0d8d84', 
    '#8e59c0' 
  ]
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  useEffect(() => {
    document.documentElement.style.setProperty('--border-card-secondary', selectedColor);
  }, [selectedColor]);

  return (
    <div className="flex flex-center full-height card theme-card">
      <div className="full-width flex flex-center theme-colors">
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
  return <div className='full-width full-height card about-card'>
    <h3>About me</h3>
    <p>Junior dev interested in frontend & backend, Internet of Things, & passion projects.</p>
    <p>My primary tools of choice include:</p>
    <ul>
      <li>Javascript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>PHP</li>
      <li>Slim</li>
    </ul>
    <p>Beyond coding, I'm passionate about design, illustration, and animation (hence my inclination to frontend).</p>
  </div>
}

function LittleFooter() {
  return <div className='full-width full-height  card little-footer'>
    <h3><b>WIP</b></h3>
    <p>This is a work in progress. <br />Updates will be coming soon!</p>
  </div>
}

export {
  BioCard,
  ContactCard,
  Deck, LittleCard, AvailabilityCard, ThemeCard,
  AboutCard, LittleFooter,
};