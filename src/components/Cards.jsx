import { CaptionedImage } from "./ProjectPageComponents";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import HeroRed from "../assets/hero-red.png";
import HeroPeach from "../assets/hero-peach.png";
import HeroTeal from "../assets/hero-teal.png";
import HeroBlue from "../assets/hero-blue.png";
import HeroPurple from "../assets/hero-purple.png";

import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithub as Github } from "react-icons/fa";
import CaraPNG from "../assets/cara-logo.png"

function BioCard() {
  return <div className='flex flex-5 width-100 height-100 card position-relative'>
    <div className="bio-text width-65 height-50">
      <p>Welcome</p>
      <p>I'm <b>Hedi Belhassine</b>, software developer who builds full-stack applications, from clean & interactive frontends to well-structured backends.</p>
      <p>Feel free to reach out to me if you have any project in mind, want to collaborate, or just want to say hello. </p>
    </div>

    <CaptionedImage
      controlsAccent
      imageSizeClass="image-width-85"
      colorList={[
        { primary: "#e6475f" },
        { primary: '#e99c75' },
        { primary: "#3ed297" },
        { primary: '#02838a' },
        { primary: '#7724c4' }
      ]}
      imageList={[
        { src: HeroRed },
        { src: HeroPeach },
        { src: HeroTeal },
        { src: HeroBlue },
        { src: HeroPurple }]
      }
      imageDetails={{
        position: "absolute",
        bottom: "0",
        right: "2em",
        maxWidth: "60%",
        maxHeight: "100%",
        width: "auto"
      }}
      buttonStyle={{
        gap: "0.3em",
        padding: "0.8em",
        fontSize: "0.5rem",
        position: "absolute",
        // top: "0.8rem",
        bottom: "0.8rem",
        right: "0.8rem",
        // left: "1rem",
        flexDirection: "row",
      }}
      dotSize={"0.35rem"}
    />
  </div>
}

function ContactCard() {
  return (
    <div>
      <div className="height-100 card contact-card">

        <h3><b>Let's start working together!</b></h3>
        <br />

        <h4 style={{ color: '#6d6d6d', marginBottom: "0.2em" }}>Contact Info</h4>
        <p><FaDiscord className="tiny-socials-icon" /> hedi8276</p>
        <p><SiGmail className="tiny-socials-icon" /> belhassinehedi308@gmail.com</p>
        <p style={{ color: "#6d6d6d" }}>Based in Qc, CA</p>
        <br />
        
        <h4 style={{ color: '#6d6d6d', marginBottom: "0.2em" }}>Socials</h4>
        <div className="width-100 flex justify-content-space-evenly">
          <a href="https://www.linkedin.com/in/hedi-belhassine-8399ab266/" target="_blank" className="socials-icon"><Linkedin /></a>
          <a href="https://github.com/hedi3489" target="_blank" className="socials-icon"><Github /></a>
          <a href="https://cara.app/hedibelhassine" target="_blank" className="socials-icon"><img src={CaraPNG} /></a>
        </div>

      </div>
    </div>
  );
}

function Deck({ cards = [], availability = false }) {
    return (
        <div className="gap flex flex-col height-100 deck">
            {cards.map((item, i) => (
                <LittleCard key={i} {...item} />
            ))}
            {availability && <AvailabilityCard />}
        </div>
    );
}

function ProjectsDeck({ cards = [] }) {
    return (
        <div className="gap flex flex-col height-100 projects-deck">
            {cards.map((item, i) => (
                <LittleCard key={i} {...item} />
            ))}
        </div>
    );
}

function LittleCard({ title, description, to }) {
  const content = (
    <div className="flex flex-col height-100 align-content-center justify-content-center card little-card">
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
    fontSize,
    color
  });

  if (available == true) {
    availabilityText = "Open to collaborate";
  } else {
    availabilityText = "Currently working full-time";
  }

  return (
    <div className="flex align-items-center card height-100 little-card position-relative">
      <span className="position-absolute status-dot" aria-hidden="true" />
      <div>
        <h2>Currently?</h2>
        <p style={textStyle('1em', 'gray')}>{availabilityText}</p>
      </div>
    </div>
  );
}

function AboutCard() {
  return <div className='width-100 height-100 card about-card'>
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
  return <div className='width-100 height-100 card little-footer'>
    <h3><b>WIP</b></h3>
    <p>This is a work in progress. <br />Updates & fixes will be coming soon!</p>
  </div>
}

export {
  BioCard,
  ContactCard,
  Deck, ProjectsDeck, LittleCard, AvailabilityCard,
  AboutCard, LittleFooter,
};