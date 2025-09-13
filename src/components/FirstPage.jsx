import React from "react";
import "./FirstPage.css";

const FirstPage = () => {
  return (
    <div className="first-page">
      <div className="first-image-container">
        <img
          src="/images/ganapati.jpg"
          alt="Ganapati"
          className="first-background-image"
        />
        <div className="first-overlay-text">|| श्री गणेशाय नमः ||</div>
      </div>
    </div>
  );
};

export default FirstPage;
