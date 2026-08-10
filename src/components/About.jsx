import { useEffect, useRef, useState } from "react";

import {
  FaCheckCircle,
  FaCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

import "./About.css";

function About() {
  const [animate, setAnimate] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const section = aboutRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`about ${animate ? "about-animate" : ""}`}
      id="about"
      ref={aboutRef}
    >

      <div className="about-container">

        {/* LEFT */}

        <div className="about-content">

          <span className="about-label">
            WHO WE ARE
          </span>

          <h2>
            Technology Built Around
            <strong> Your Business</strong>
          </h2>

          <p className="about-intro">
            BG Technology is a digital solutions company focused on
            building modern websites, custom software and technology
            solutions that help businesses move forward.
          </p>

          <p className="about-text">
            We combine thoughtful design, reliable development and
            business-focused technology to create solutions that are
            fast, scalable and easy to use.
          </p>

          <div className="about-points">

            <div>
              <FaCheckCircle />
              <span>Business-focused solutions</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Modern and scalable technology</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Long-term technical support</span>
            </div>

          </div>

          <a href="#contact" className="about-button">
            Let's Build Together →
          </a>

        </div>


        {/* RIGHT */}

        <div className="about-visual">

          <div className="about-glow"></div>

          <div className="about-orbit orbit-a"></div>
          <div className="about-orbit orbit-b"></div>

          <div className="about-center">

            <div className="about-center-icon">
              <FaCode />
            </div>

            <strong>BG</strong>

            <span>TECHNOLOGY</span>

          </div>

          <div className="about-floating about-card-one">
            <FaLightbulb />
            <span>Ideas</span>
          </div>

          <div className="about-floating about-card-two">
            <FaRocket />
            <span>Growth</span>
          </div>

        </div>

      </div>


      {/* STATS */}

      <div className="about-stats">

        <div>
          <strong>50+</strong>
          <span>Projects Delivered</span>
        </div>

        <div>
          <strong>25+</strong>
          <span>Happy Clients</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Commitment</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Support</span>
        </div>

      </div>

    </section>
  );
}

export default About;