import { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 0);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader">

      <div className="loader-content">

        <div className="loader-logo">
          <img
            src="/images/bglogo.png"
            alt="BG Technology"
          />
        </div>

        <div className="loader-number">
          {progress}
          <small>%</small>
        </div>

        <div className="loader-progress">
          <div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="loader-bottom">
          <span>LOADING EXPERIENCE</span>
          <span>BG TECHNOLOGY</span>
        </div>

      </div>

    </div>
  );
}

export default Loader;