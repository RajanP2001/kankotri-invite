import React from "react";
import "./HaldiPage.css";

const HaldiPage = () => {
  return (
    <div className="haldi-page">
      <div className="haldi-image-container">
        <img
          src="/images/haldi-bg.jpg"
          alt="Haldi Ceremony Background"
          className="haldi-background-image"
        />

        <div className="haldi-overlay-text">
          <h1 className="haldi-title">Haldi Ceremony</h1>
          <p className="haldi-date">4th December 2025, 10:00 A.M.</p>
        </div>
      </div>
    </div>
  );
};

export default HaldiPage;
