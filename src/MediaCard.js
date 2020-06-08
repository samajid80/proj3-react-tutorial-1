import React from "react";
//import ReactDOM from "react-dom";

import Gate from "./Gate";

const MediaCard = ({ title, body, imageUrl }) => {
  return (
    <section>
      <p>
        This Section is rendered by using MediaCard.js component and using
        javascript arrow function syntax.
      </p>
      <h3>{title}</h3>
      <p style={{ color: "black", fontSize: "small" }}>
        Image dimensions are {body}*{body}.
      </p>
      <img src={imageUrl} alt="Rocky Mountains"></img>
      <p>
        I called below Gate.js component from within the MediaCard.js component
      </p>
      <Gate isOpen={true} />
    </section>
  );
};

export default MediaCard;
