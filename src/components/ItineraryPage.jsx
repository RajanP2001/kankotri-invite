import React from "react";
import "./ItineraryPage.css";

const ItineraryPage = () => {
  return (
    <div className="itinerary-page">
      <div className="itinerary-image-container">
        <img
          src="/images/itinerary.jpg"
          alt="Wedding Itinerary Background"
          className="itinerary-background-image"
        />

        <div className="itinerary-overlay-text">
          <h1 className="itinerary-title">WEDDING ITINERARY</h1>
          <h2 className="itinerary-subtitle">VENUE</h2>
          <p className="itinerary-venue">Praveg's Grand Eulogia, Ahmedabad.</p>

          <div className="itinerary-section">
            <h3 className="itinerary-date">— 4th December 2025 —</h3>
            <p>
              Haldi — <span>10:00 A.M.</span>
            </p>
            <p>
              Tilak — <span>4:30 P.M. to 5:30 P.M.</span>
            </p>
            <p>
              Sangeet — <span>6:30 P.M. onwards</span>
            </p>
          </div>

          <div className="itinerary-section">
            <h3 className="itinerary-date">— 5th December 2025 —</h3>
            <p>
              Mameru — <span>10:00 A.M. to 11:30 A.M.</span>
            </p>
            <p>
              Wedding — <span>5:00 P.M. onwards</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;
