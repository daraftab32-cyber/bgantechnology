import "./WhyUs.css";

function WhyUs() {
  const reasons = [
    {
      number: "01",
      title: "Business-Focused",
      text: "We understand the business problem first and then build the right technology solution.",
    },
    {
      number: "02",
      title: "Modern Technology",
      text: "We use modern development technologies to create fast, scalable and maintainable solutions.",
    },
    {
      number: "03",
      title: "Transparent Process",
      text: "Clear communication, project updates and straightforward development from start to finish.",
    },
    {
      number: "04",
      title: "Long-Term Support",
      text: "Our relationship does not end after delivery. We provide ongoing support and improvements.",
    },
  ];

  return (
    <section className="why-us" id="why-us">
      <div className="why-us-container">

        <div className="section-heading">
          <span>WHY BG TECHNOLOGY</span>

          <h2>
            Technology Built
            <strong> Around You</strong>
          </h2>

          <p>
            We combine technology, creativity and business understanding
            to deliver solutions that actually solve problems.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>

              <span className="why-number">
                {reason.number}
              </span>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyUs;