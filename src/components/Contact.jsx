import { useEffect, useRef, useState } from "react";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheck,
  FaExclamationCircle,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const [animate, setAnimate] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const contactRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });


  /* =========================
     SCROLL ANIMATION
  ========================= */

  useEffect(() => {
    const section = contactRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);


  /* =========================
     FORM CHANGE
  ========================= */

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSuccess(false);
    setError("");
  };


  /* =========================
     FORM SUBMIT
  ========================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("https://bgantechnology.onrender.com/api/contact", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send enquiry."
        );
      }


      /* SUCCESS */

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });


      setTimeout(() => {
        setSuccess(false);
      }, 5000);


    } catch (error) {

      console.error(
        "Contact form error:",
        error
      );

      setError(
        error.message ||
        "Something went wrong. Please try again."
      );

    } finally {

      setSending(false);

    }
  };


  return (
    <section
      className={`contact ${
        animate ? "contact-animate" : ""
      }`}
      id="contact"
      ref={contactRef}
    >

      <div className="contact-container">


        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="contact-info">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Build Your
            <strong> Next Project</strong>
          </h2>

          <p>
            Have an idea, website requirement or custom
            software project? Tell us what you need and
            let's discuss it.
          </p>


          <div className="contact-details">


            {/* EMAIL */}

            <div className="contact-detail">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>

                <span>
                  Email
                </span>

                <a href="mailto:hello@bgantechnology.com">
  hello@bgantechnology.com
</a>

              </div>

            </div>


            {/* PHONE */}

            <div className="contact-detail">

              <div className="contact-icon">
                <FaPhone />
              </div>

              <div>

                <span>
                  Phone
                </span>

                <p>
                  +91 XXXXX XXXXX
                </p>

              </div>

            </div>


            {/* LOCATION */}

            <div className="contact-detail">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>

                <span>
                  Location
                </span>

                <p>
                  India
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            FORM
        ========================= */}

        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >


            {/* NAME + EMAIL */}

            <div className="contact-row">

              <div className="contact-field">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="contact-field">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* PHONE + SERVICE */}

            <div className="contact-row">

              <div className="contact-field">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+919149592265"
                  value={form.phone}
                  onChange={handleChange}
                />

              </div>


              <div className="contact-field">

                <label>
                  Service
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="E-Commerce">
                    E-Commerce
                  </option>

                  <option value="Custom Software">
                    Custom Software
                  </option>

                  <option value="CRM & ERP">
                    CRM & ERP
                  </option>

                  <option value="Mobile App">
                    Mobile App
                  </option>

                  <option value="Cloud & API">
                    Cloud & API
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            {/* MESSAGE */}

            <div className="contact-field">

              <label>
                Tell us about your project
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us what you want to build..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className={`contact-submit ${
                success ? "success-button" : ""
              }`}
              disabled={sending}
            >

              {sending ? (
                <>
                  <span className="contact-spinner"></span>
                  <span>
                    Sending...
                  </span>
                </>
              ) : success ? (
                <>
                  <FaCheck />
                  <span>
                    Enquiry Sent Successfully
                  </span>
                </>
              ) : (
                <>
                  <span>
                    Send Enquiry
                  </span>

                  <FaArrowRight />
                </>
              )}

            </button>


            {/* SUCCESS */}

            {success && (
              <div className="contact-success">

                <FaCheck />

                <span>
                  Thank you! We have received your
                  enquiry.
                </span>

              </div>
            )}


            {/* ERROR */}

            {error && (
              <div className="contact-error">

                <FaExclamationCircle />

                <span>
                  {error}
                </span>

              </div>
            )}


            {/* NOTE */}

            {!success && !error && (
              <p className="contact-note">
                Fill in the details and send us your
                project enquiry.
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;