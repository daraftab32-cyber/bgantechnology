import { useEffect, useRef, useState } from "react";
import "./Services.css";

import {
  FaCode,
  FaShoppingCart,
  FaLaptopCode,
  FaUsersCog,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

function Services() {
  const [animate, setAnimate] = useState(false);
  const servicesRef = useRef(null);

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      text: "Modern, fast and responsive websites designed to help your business grow online.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      text: "Powerful online stores with secure checkout, product management and smooth user experience.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Custom Software",
      text: "Business-specific software solutions built around your exact requirements.",
    },
    {
      icon: <FaUsersCog />,
      title: "CRM & ERP",
      text: "Smart business management systems to manage customers, employees, sales and operations.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      text: "User-friendly mobile applications designed for modern businesses and customers.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud & API",
      text: "Reliable backend, API integration and cloud solutions for scalable applications.",
    },
  ];

  useEffect(() => {
    const section = servicesRef.current;

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
      className={`services ${animate ? "services-animate" : ""}`}
      id="services"
      ref={servicesRef}
    >
      <div className="services-container">

        <div className="section-heading">
          <span>WHAT WE DO</span>

          <h2>
            Digital Solutions That
            <strong> Drive Growth</strong>
          </h2>

          <p>
            From websites to custom software, we create technology solutions
            that make businesses smarter, faster and more efficient.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#contact">
                Learn More →
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;