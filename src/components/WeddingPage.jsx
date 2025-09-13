import React from "react";
import "./WeddingPage.css";

const WeddingPage = () => {
  return (
    <div className="wedding-page">
      <div className="wedding-image-container">
        <img
          src={`${import.meta.env.BASE_URL}images/wedding.jpg`}
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
