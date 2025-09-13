import React from "react";
import "./SecondPage.css";

const SecondPage = () => {
  return (
    <div className="second-page">
      <div className="second-image-container">
        <img
          src="/images/wedding-bg.jpg"
          alt="Wedding Invitation Background"
          className="second-background-image"
        />

        <div className="second-overlay-text">
          <h1 className="title">Wedding Invitation</h1>
          <p className="name">Roshni</p>
          <p className="subtitle">D/o Dipika &amp; Nikhil Patel</p>

          <p className="name">Rishabh</p>
          <p className="subtitle">S/o Neelam &amp; Santosh Khandelwal</p>

          <p className="at">At</p>
          <p className="venue">
            Praveg's Grand Eulogia,
            <br />
            Ahmedabad
          </p>

          <p className="date">4th - 5th December 2025</p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
