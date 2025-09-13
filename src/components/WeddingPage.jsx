import React from "react";
import "./WeddingPage.css";

const WeddingPage = () => {
  return (
    <div className="wedding-page">
      <div className="wedding-image-container">
        <img
          src="/images/wedding.jpg" // make sure the file exists in public/images/
          alt="Wedding Ceremony Background"
          className="wedding-background-image"
        />

        <div className="wedding-overlay-text">
          <h1 className="wedding-title">Wedding Vows</h1>
          <p className="wedding-date">5th December 2025</p>
          <p className="wedding-time">5:00 P.M. Onwards</p>
        </div>
      </div>
    </div>
  );
};

export default WeddingPage;
