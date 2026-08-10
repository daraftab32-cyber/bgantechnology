import { useEffect, useRef, useState } from "react";

import {
  FaSearch,
  FaClipboardList,
  FaPalette,
  FaCode,
  FaVial,
  FaRocket,
} from "react-icons/fa";

import "./HowWeWork.css";

function HowWeWork() {
  const [animate, setAnimate] = useState(false);

  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      icon: <FaSearch />,
      title: "Discover",
      text: "We understand your business, goals, audience and exact project requirements.",
    },
    {
      number: "02",
      icon: <FaClipboardList />,
      title: "Plan",
      text: "We define the features, technology, timeline and development strategy.",
    },
    {
      number: "03",
      icon: <FaPalette />,
      title: "Design",
      text: "We create a modern, intuitive experience designed around your users.",
    },
    {
      number: "04",
      icon: <FaCode />,
      title: "Build",
      text: "Our team develops the solution with clean code, performance and scalability in mind.",
    },
    {
      number: "05",
      icon: <FaVial />,
      title: "Test",
      text: "We test functionality, responsiveness, performance and reliability before launch.",
    },
    {
      number: "06",
      icon: <FaRocket />,
      title: "Launch",
      text: "We launch your project and continue providing support as your business grows.",
    },
  ];


  /* =========================
     SCROLL ANIMATION
  ========================= */

  useEffect(() => {
    const section = sectionRef.current;

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


  return (
    <section
      className={`how-work ${animate ? "how-work-animate" : ""}`}
      id="process"
      ref={sectionRef}
    >

      <div className="how-work-container">


        {/* HEADING */}

        <div className="how-work-heading">

          <span>
            OUR PROCESS
          </span>

          <h2>
            From Idea to
            <strong> Digital Success</strong>
          </h2>

          <p>
            A simple and transparent process that turns your ideas into
            reliable digital solutions.
          </p>

        </div>


        {/* PROCESS */}

        <div className="process-list">

          {steps.map((step, index) => (

            <div
              className={`process-item ${
                index % 2 === 0
                  ? "process-left"
                  : "process-right"
              }`}
              key={step.number}
            >

              <div className="process-number">
                {step.number}
              </div>


              <div className="process-line"></div>


              <div className="process-card">

                <div className="process-icon">
                  {step.icon}
                </div>


                <div className="process-content">

                  <span>
                    STEP {step.number}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                </div>


                <div className="process-arrow">
                  →
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowWeWork;