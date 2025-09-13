import React from "react";
import "./TilakPage.css";

const TilakPage = () => {
  return (
    <div className="tilak-page">
      <div className="tilak-image-container">
        <img
          src="/images/Tilak.jpg"
          alt="Tilak Ceremony Background"
          className="tilak-background-image"
        />

        <div className="tilak-overlay-text">
          <h1 className="tilak-title">Tilak Ceremony</h1>
          <p className="tilak-date">4th December 2025</p>
          <p className="tilak-time">4:30 P.M – 5:30 P.M</p>
        </div>
      </div>
    </div>
  );
};

export default TilakPage;
