import {
  FaArrowUp,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* TOP CTA */}

      <div className="footer-cta">
        <div>
          <span>READY TO BUILD?</span>

          <h2>
            Let's create something
            <strong> powerful.</strong>
          </h2>

          <p>
            Have an idea, business requirement or project in mind?
            Let's turn it into a digital solution.
          </p>
        </div>

        <a href="#contact" className="footer-cta-button">
          Start a Project
          <span>→</span>
        </a>
      </div>


      {/* MAIN FOOTER */}

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <img
              src="/images/bglogo.png"
              alt="BG Technology"
            />
          </a>

          <p>
            Modern websites, custom software and digital solutions
            built to help businesses grow faster.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Email">
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* EXPLORE */}

        <div className="footer-column">

          <h4>Explore</h4>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#process">Our Process</a>
          <a href="#about">About Us</a>
          <a href="#portfolio">Portfolio</a>

        </div>


        {/* SERVICES */}

        {/* SERVICES */}

<div className="footer-column">

  <h4>Solutions</h4>

  <a href="/services#web-development">
    Web Development
  </a>

  <a href="/services#e-commerce">
    E-Commerce
  </a>

  <a href="/services#custom-software">
    Custom Software
  </a>

  <a href="/services#crm-erp">
    CRM & ERP
  </a>

  <a href="/services#mobile-apps">
    Mobile Apps
  </a>

</div>

        {/* CONTACT */}

        <div className="footer-column footer-talk">

          <h4>Let's Talk</h4>

          <p>
            Have a project in mind?
            We'd love to hear about it.
          </p>

          <a
            href="mailto:hello@bgtechnology.com"
            className="footer-email"
          >
            <FaEnvelope />
            hello@bgtechnology.com
          </a>

          <a
            href="#contact"
            className="footer-contact-link"
          >
            Tell us about your project →
          </a>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} BG Technology.
          All rights reserved.
        </p>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>


      {/* WHATSAPP */}

      <a
        href="https://wa.me/9149592265"
        className="footer-whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>


      {/* BACK TO TOP */}

      <button
        className="footer-top"
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;