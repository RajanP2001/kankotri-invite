import React from "react";
import "./SangeetPage.css";

const SangeetPage = () => {
  return (
    <div className="sangeet-page">
      <div className="sangeet-image-container">
        <img
          src={`${import.meta.env.BASE_URL}images/sangeet-bg.jpg`}
          alt="Sangeet Background"
          className="sangeet-background-image"
        />
        <div className="sangeet-overlay-text">
          <h1 className="title">Sangeet</h1>
          <p className="date">4th December 2025</p>
          <p className="time">5:30 P.M. Onwards</p>
        </div>
      </div>
    </div>
  );
};

export default SangeetPage;
