import { useEffect, useRef, useState } from "react";

import {
  FaCode,
  FaShoppingCart,
  FaLaptopCode,
  FaUsersCog,
  FaMobileAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "./ServicesPage.css";

function ServicesPage() {

  const [visibleServices, setVisibleServices] = useState({});

  const serviceRefs = useRef({});


  const services = [
    {
      id: "web-development",
      number: "01",
      icon: <FaCode />,
      title: "Web Development",
      shortTitle: "Modern Websites",

      description:
        "We build fast, responsive and modern websites designed around your business goals and your customers.",

      details:
        "From business websites and company profiles to advanced web applications, we create digital experiences that look professional, perform smoothly and work across desktop, tablet and mobile devices.",

      features: [
        "Business & Corporate Websites",
        "Responsive Web Design",
        "Custom Web Applications",
        "Landing Pages",
        "Admin Dashboards",
        "API Integration",
      ],

      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Node.js",
        "MongoDB",
      ],
    },

    {
      id: "e-commerce",
      number: "02",
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      shortTitle: "Online Stores",

      description:
        "Powerful online stores that make it easy for customers to discover products, shop and place orders.",

      details:
        "We develop complete e-commerce experiences with product management, shopping carts, checkout flows, customer accounts and business-focused administration features.",

      features: [
        "Online Store Development",
        "Product Catalogue",
        "Shopping Cart",
        "Checkout System",
        "Customer Accounts",
        "Order Management",
      ],

      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Payment Integration",
      ],
    },

    {
      id: "custom-software",
      number: "03",
      icon: <FaLaptopCode />,
      title: "Custom Software",
      shortTitle: "Business Software",

      description:
        "Software built specifically around your business processes, requirements and day-to-day operations.",

      details:
        "Instead of adapting your business to generic software, we build solutions around the way your business actually works. Every feature is planned according to your requirements.",

      features: [
        "Custom Business Applications",
        "Workflow Automation",
        "Admin Panels",
        "Internal Tools",
        "Reports & Dashboards",
        "Third-Party Integrations",
      ],

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "JavaScript",
      ],
    },

    {
      id: "crm-erp",
      number: "04",
      icon: <FaUsersCog />,
      title: "CRM & ERP",
      shortTitle: "Business Management",

      description:
        "Smart management systems that help businesses organize customers, employees, enquiries and operations.",

      details:
        "We create centralized CRM and ERP solutions that bring important business information into one place, making everyday management easier and more efficient.",

      features: [
        "Employee Management",
        "Customer Management",
        "Enquiry Management",
        "Follow-up Tracking",
        "Role-based Access",
        "Business Dashboards",
      ],

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "JWT",
      ],
    },

    {
      id: "mobile-apps",
      number: "05",
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      shortTitle: "Mobile Experiences",

      description:
        "User-friendly mobile applications designed to connect businesses with their customers anywhere.",

      details:
        "We design mobile experiences that are simple to use, visually consistent and focused on the actual needs of your users and business.",

      features: [
        "Business Mobile Apps",
        "Customer Applications",
        "API-connected Apps",
        "User Authentication",
        "Notifications",
        "Mobile-first Experiences",
      ],

      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "REST API",
        "MongoDB",
        "Cloud Services",
      ],
    },
  ];


  /* =========================
     SERVICE SCROLL ANIMATION
  ========================= */

  useEffect(() => {

    const observers = [];

    services.forEach((service) => {

      const element =
        serviceRefs.current[service.id];

      if (!element) return;

      const observer =
        new IntersectionObserver(
          ([entry]) => {

            setVisibleServices((prev) => ({
              ...prev,
              [service.id]: entry.isIntersecting,
            }));

          },
          {
            threshold: 0.15,
          }
        );

      observer.observe(element);

      observers.push(observer);

    });


    return () => {
      observers.forEach((observer) =>
        observer.disconnect()
      );
    };

  }, []);


  return (

    <main className="services-page">


      {/* =========================
          HERO
      ========================= */}

      <section className="services-page-hero">

        <div className="services-page-hero-glow"></div>

        <div className="services-page-hero-content">

          <span className="services-page-label">
            OUR SERVICES
          </span>

          <h1>
            Technology That
            <strong>
              Moves Business Forward
            </strong>
          </h1>

          <p>
            From modern websites to custom business
            software, we build digital solutions designed
            around real business needs.
          </p>

          <a
            href="#web-development"
            className="services-page-hero-button"
          >
            Explore Our Services

            <FaArrowRight />

          </a>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================= */}

      <section className="services-page-list">

        <div className="services-page-container">

          {services.map((service, index) => (

            <article
              id={service.id}
              key={service.id}

              ref={(element) => {
                serviceRefs.current[service.id] =
                  element;
              }}

              className={`service-detail
                ${
                  index % 2 === 0
                    ? "service-detail-left"
                    : "service-detail-right"
                }
                ${
                  visibleServices[service.id]
                    ? "service-visible"
                    : ""
                }
              `}
            >


              {/* =========================
                  VISUAL
              ========================= */}

              <div className="service-detail-visual">

                <div className="service-detail-number">
                  {service.number}
                </div>

                <div className="service-detail-glow"></div>

                <div className="service-detail-icon">
                  {service.icon}
                </div>

                <span>
                  BG TECHNOLOGY
                </span>

              </div>


              {/* =========================
                  CONTENT
              ========================= */}

              <div className="service-detail-content">

                <span className="service-detail-label">
                  {service.number} / {service.shortTitle}
                </span>

                <h2>
                  {service.title}
                </h2>

                <p className="service-detail-description">
                  {service.description}
                </p>

                <p className="service-detail-text">
                  {service.details}
                </p>


                {/* FEATURES */}

                <div className="service-features">

                  <h3>
                    What We Provide
                  </h3>

                  <div className="service-feature-grid">

                    {service.features.map(
                      (feature) => (

                        <div
                          className="service-feature"
                          key={feature}
                        >

                          <FaCheckCircle />

                          <span>
                            {feature}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>


                {/* TECHNOLOGIES */}

                <div className="service-technologies">

                  <span>
                    TECHNOLOGY
                  </span>

                  <div>

                    {service.technologies.map(
                      (technology) => (

                        <small key={technology}>
                          {technology}
                        </small>

                      )
                    )}

                  </div>

                </div>


                {/* BUTTON */}

                <a
                  href="/#contact"
                  className="service-detail-button"
                >
                  Start a Project

                  <FaArrowRight />

                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="services-page-cta">

        <div className="services-page-cta-content">

          <span>
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's Build Something
            <strong>
              Great Together.
            </strong>
          </h2>

          <p>
            Tell us what you want to build and
            we'll help turn your idea into a
            practical digital solution.
          </p>

          <a href="/#contact">

            Discuss Your Project

            <FaArrowRight />

          </a>

        </div>

      </section>

    </main>
  );
}

export default ServicesPage;