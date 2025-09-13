import React from "react";
import "./MameruPage.css";

const MameruPage = () => {
  return (
    <div className="mameru-page">
      <div className="mameru-image-container">
        <img
          src={`${import.meta.env.BASE_URL}images/mameru.jpg`}
          alt="Mameru Ceremony Background"
          className="mameru-background-image"
        />
        <div className="mameru-overlay-text">
          <h1 className="mameru-title">Mameru</h1>
          <p className="mameru-date">5th December 2025</p>
          <p className="mameru-time">10:00 A.M – 11:30 A.M</p>
        </div>
      </div>
    </div>
  );
};

export default MameruPage;
