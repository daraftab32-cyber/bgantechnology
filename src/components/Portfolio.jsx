import { useEffect, useRef, useState } from "react";

import {
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaLayerGroup,
} from "react-icons/fa";

import "./Portfolio.css";

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [animate, setAnimate] = useState(false);

  const portfolioRef = useRef(null);

  const projects = [
    {
      title: "FindSpare",
      category: "Client Project • Automotive E-Commerce",
      description:
        "A complete automotive spare-parts platform designed to help customers discover products and place orders online.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "MongoDB",
      ],
      status: "Client Project",

      overview:
        "FindSpare is an automotive spare-parts platform built around the needs of customers looking for genuine and used vehicle parts.",

      features: [
        "Automotive spare-parts catalogue",
        "Vehicle and product discovery",
        "Product details and pricing",
        "Customer enquiry flow",
        "Online ordering",
        "Admin order management",
      ],
    },

    {
      title: "BGANKART",
      category: "E-Commerce Platform",
      description:
        "A modern online shopping platform with product browsing, customer accounts, wishlist, cart and checkout functionality.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],
      status: "Own Project",

      overview:
        "BGANKART is a modern e-commerce platform focused on providing a smooth shopping experience from product discovery to checkout.",

      features: [
        "Product browsing",
        "Customer accounts",
        "Wishlist",
        "Shopping cart",
        "Checkout flow",
        "Order management",
      ],
    },

    {
      title: "Employee CRM",
      category: "Business Management",
      description:
        "A CRM system designed to manage employees, enquiries, customer follow-ups and business operations.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      status: "Own Project",

      overview:
        "An internal CRM platform designed to help businesses manage employees, enquiries and customer follow-ups from one centralized system.",

      features: [
        "Employee login",
        "Role-based access",
        "Enquiry management",
        "Customer follow-ups",
        "Employee dashboards",
        "HR/Admin management",
      ],
    },

    {
      title: "Restaurant Management",
      category: "Custom Software • Concept",
      description:
        "A restaurant management solution for orders, menu management, customers, staff and daily operations.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],
      status: "Concept",

      overview:
        "A concept management platform designed to bring restaurant operations into one simple digital workspace.",

      features: [
        "Order management",
        "Menu management",
        "Customer records",
        "Staff management",
        "Daily operations",
        "Business overview",
      ],
    },

    {
      title: "Real Estate Platform",
      category: "Web Application • Concept",
      description:
        "A property platform where businesses can manage listings, enquiries, customers and property information.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],
      status: "Concept",

      overview:
        "A scalable real-estate platform concept designed for businesses that need to manage properties, customers and enquiries digitally.",

      features: [
        "Property listings",
        "Property information",
        "Customer enquiries",
        "Lead management",
        "Search and filtering",
        "Admin management",
      ],
    },

    {
      title: "School Management",
      category: "CRM / ERP • Concept",
      description:
        "A centralized management system for students, teachers, attendance, enquiries and administrative operations.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],
      status: "Concept",

      overview:
        "A centralized school management concept designed to simplify academic and administrative operations.",

      features: [
        "Student management",
        "Teacher management",
        "Attendance tracking",
        "Enquiry management",
        "Administrative dashboard",
        "Centralized records",
      ],
    },
  ];


  /* =========================
     SCROLL ANIMATION
  ========================= */

  useEffect(() => {
    const section = portfolioRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);


  /* =========================
     MODAL
  ========================= */

  const openProject = (project) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = "";
  };


  return (
    <section
      className={`portfolio ${
        animate ? "portfolio-animate" : ""
      }`}
      id="portfolio"
      ref={portfolioRef}
    >

      <div className="portfolio-container">


        {/* =========================
            HEADING
        ========================= */}

        <div className="section-heading">

          <span>
            OUR PORTFOLIO
          </span>

          <h2>
            Solutions We've
            <strong> Built</strong>
          </h2>

          <p>
            From customer-facing websites to complete business
            software, we build digital solutions around real
            business requirements.
          </p>

        </div>


        {/* =========================
            PROJECT GRID
        ========================= */}

        <div className="portfolio-grid">

          {projects.map((project, index) => (

            <article
              className="portfolio-card"
              key={project.title}
              onClick={() => openProject(project)}
            >

              {/* PROJECT VISUAL */}

              <div className="portfolio-image">

                <div className="portfolio-image-glow"></div>

                <div className="portfolio-image-content">

                  <FaLayerGroup />

                  <span>
                    BG TECHNOLOGY
                  </span>

                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>

                </div>

                <div className="portfolio-view">
                  View Project
                  <FaArrowRight />
                </div>

              </div>


              {/* CONTENT */}

              <div className="portfolio-content">

                <div className="portfolio-top">

                  <small>
                    {project.category}
                  </small>

                  <span
                    className={`project-status ${
                      project.status === "Concept"
                        ? "concept"
                        : ""
                    }`}
                  >
                    {project.status}
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                <div className="portfolio-tech">

                  {project.technologies.map(
                    (tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    )
                  )}

                </div>


                <button
                  className="portfolio-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    openProject(project);
                  }}
                >
                  Explore Project
                  <FaArrowRight />
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>


      {/* =========================
          PROJECT MODAL
      ========================= */}

      {activeProject && (

        <div
          className="portfolio-modal"
          onClick={closeProject}
        >

          <div
            className="portfolio-modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="portfolio-modal-close"
              onClick={closeProject}
              aria-label="Close"
            >
              <FaTimes />
            </button>


            {/* MODAL HEADER */}

            <div className="portfolio-modal-header">

              <span>
                {activeProject.category}
              </span>

              <h2>
                {activeProject.title}
              </h2>

              <div
                className={`modal-status ${
                  activeProject.status === "Concept"
                    ? "concept"
                    : ""
                }`}
              >
                {activeProject.status}
              </div>

            </div>


            {/* OVERVIEW */}

            <div className="portfolio-modal-section">

              <span className="modal-label">
                PROJECT OVERVIEW
              </span>

              <p>
                {activeProject.overview}
              </p>

            </div>


            {/* FEATURES */}

            <div className="portfolio-modal-section">

              <span className="modal-label">
                WHAT WE BUILT
              </span>

              <div className="modal-features">

                {activeProject.features.map(
                  (feature) => (

                    <div
                      className="modal-feature"
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

            <div className="portfolio-modal-section">

              <span className="modal-label">
                TECHNOLOGY
              </span>

              <div className="modal-tech">

                {activeProject.technologies.map(
                  (tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  )
                )}

              </div>

            </div>


            {/* CTA */}

            <a
              href="#contact"
              className="portfolio-modal-cta"
              onClick={closeProject}
            >
              Discuss a Similar Project
              <FaArrowRight />
            </a>

          </div>

        </div>

      )}

    </section>
  );
}

export default Portfolio;