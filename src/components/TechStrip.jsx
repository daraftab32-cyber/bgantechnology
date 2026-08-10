import "./TechStrip.css";

function TechStrip() {
  const items = [
    "WEB DEVELOPMENT",
    "E-COMMERCE",
    "CUSTOM SOFTWARE",
    "CRM & ERP",
    "MOBILE APPS",
    "CLOUD & API",
    "AI & AUTOMATION",
    "UI / UX DESIGN",
  ];

  return (
    <div className="tech-strip">
      <div className="tech-track">
        {[...items, ...items].map((item, index) => (
          <div className="tech-item" key={index}>
            <span>{item}</span>
            <b>✦</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStrip;