import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#home" || window.location.hash === "") {
        // Animation reset
        setAnimate(false);

        // Phir dobara start
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimate(true);
          });
        });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section
      className={`hero ${animate ? "hero-animate" : ""}`}
      id="home"
    >

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/new.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        <span className="hero-badge">
          INNOVATION • TECHNOLOGY • GROWTH
        </span>

        <h1>
          Building the
          <span> Digital Future</span>
        </h1>

        <p>
          We build modern websites, powerful software and smart digital
          solutions that help businesses grow faster.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-primary">
            Start a Project
          </a>

          <a href="#services" className="hero-secondary">
            Explore Services
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>50+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>25+</strong>
            <span>Happy Clients</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Support</span>
          </div>
        </div>

      </div>

      {/* Right Visual */}
      <div className="hero-visual">

        <div className="glow"></div>

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="hero-logo">
          BG
        </div>

        <div className="floating-card card-one">
          Web Development
        </div>

        <div className="floating-card card-two">
          Software Solutions
        </div>

        <div className="floating-card card-three">
          Digital Growth
        </div>

      </div>

    </section>
  );
}

export default Hero;