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
  return (
    <div>
      <div className="full-height card">
        <h3><b>Let's start working together!</b></h3><br />

        <h4 style={{color:'#6d6d6d', marginBottom:"0.2em"}}>Contact Info</h4>
        <p>belhassinehedi308@gmail.com</p>
        <i style={{color:"#6d6d6d"}}>Based in Qc, CA</i>

        <br /><br />
        
        <h4 style={{color:'#6d6d6d', marginBottom:"0.2em"}}>Socials</h4>
        <a href="https://www.linkedin.com/in/hedi-belhassine-8399ab266/" target="_blank">LinkedIn</a><br /> 
        <a href="https://github.com/hedi3489" target="_blank">Github</a><br />
        <a href="https://cara.app/hedibelhassine" target="_blank">Cara</a>

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
    <Link to={to} className="card-link">{content}</Link>
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
        <h2 style={textStyle('1.3em')}>Currently?</h2>
        <p style={textStyle('1em', 'gray')}>{availabilityText}</p>
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
    <p>This is a work in progress. <br />Updates & fixes will be coming soon!</p>
  </div>
}

export {
  BioCard,
  ContactCard,
  Deck, LittleCard, AvailabilityCard, ThemeCard,
  AboutCard, LittleFooter,
};