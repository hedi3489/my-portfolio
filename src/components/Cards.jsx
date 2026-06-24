import { CaptionedImage, TechStack } from "./ProjectPageComponents";
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
  const pStyle = { margin: '0.3em 0', padding: '0.2em 0', fontSize: '1.09rem' }
  const bStyle = { fontWeight: '600', color: 'var(--page-accent-color)' }

  return <div className='flex flex-5 width-100 height-100 card position-relative'>
    <div className="flex flex-col">
      <div className="bio-text width-65">
        <h1>Welcome</h1>
        <p style={pStyle}>I'm <b style={bStyle}>Hedi Belhassine</b>, software developer who builds full-stack applications, from clean & interactive frontends to well-structured backends.</p>
        <p style={pStyle}>You're welcome to look around and check the links.<br /> If have ideas to share, or just want to connect, <br />don't hesitate to reach out.</p>
        <br /><br /><br />
      </div>

      <h2>Socials</h2>
      <div className="flex justify-content-space-evenly"
        style={{ zIndex: "10", width: "43%" }}>
        <a href="https://github.com/hedi3489" target="_blank" className="socials-icon"><SiGmail /></a>
        <a href="https://www.linkedin.com/in/hedi-belhassine-8399ab266/" target="_blank" className="socials-icon"><Linkedin /></a>
        <a href="https://github.com/hedi3489" target="_blank" className="socials-icon"><Github /></a>

        <a href="https://github.com/hedi3489" target="_blank" className="socials-icon" style={{ fontSize: "1.8rem" }}><FaDiscord /></a>
      </div>
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
        bottom: "0.8rem",
        right: "0.8rem",
        flexDirection: "row",
      }}
      dotSize={"0.35rem"}
    />
  </div>
}

function Deck({ cards = [] }) {
  return (
    <div className="gap flex flex-col height-100 deck">
      {cards.map((item, i) =>
        item.type === "availability"
          ? <AvailabilityCard key={i} {...item} />
          : <LittleCard key={i} {...item} />
      )}
    </div>
  );
}

function LittleCard({ title, description, to }) {

  return (
    <Link to={to}>
      <div className="flex flex-col height-100 card">
        <h1>{title}</h1>
        {description ? <h4>{description}</h4> : null}
      </div>
    </Link>
  )
}

function AvailabilityCard({ state = true }) {
  const available = state;
  var availabilityText = "";

  if (available == true) {
    availabilityText = "Open to collaborate";
  } else {
    availabilityText = "Currently working full-time";
  }

  return (
    <Link>
      <div className="flex flex-col height-100 card position-relative">
        <span className="position-absolute status-dot" aria-hidden="true" />
        <h1>Currently?</h1>
        <h4>{availabilityText}</h4>
      </div>
    </Link>
  );
}

function AboutCard() {
  return <>
    <div className='width-100 height-100 card about-card'>
      <h1>About me</h1>
      <div style={{ height: "80%" }}>
        <p>
          I'm passionate about arts and games as mediums of communication and

          Thanks to my passion for illustration and design, building frontends feels akin to drawing manga panels.</p><br />
      {/* </div> */}
    </div>

    {/* <div className='width-100 card little-footer '> */}
      <h2><b className="accented">WIP</b></h2>
      <p>This is a work in progress. <br />Updates & fixes will be coming soon!</p>
    </div>
  </>
}



export {
  BioCard,
  Deck, LittleCard, AvailabilityCard,
  AboutCard,
};