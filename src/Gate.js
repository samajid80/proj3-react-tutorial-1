import React from "react";

const Gate = ({ isOpen }) => (
  <div>
    Component Render: <strong>{isOpen ? "Open" : "Closed"}!</strong>
  </div>
);

export default Gate;
