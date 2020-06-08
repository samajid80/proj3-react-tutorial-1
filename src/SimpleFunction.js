import React from "react";
//import ReactDOM from "react-dom";

function SimpleFunction({ firstName, lastName }) {
  return (
    <section>
      <p>
        This Section is rendered by SimpleFunction.js component and using
        javascript classic function syntax. I passed properties as attributes in
        the function. I have also implemented destructuring on the function
        parameter. I used external css file and apply className property to
        style my name.
      </p>
      <h3>Simple Function:</h3>
      <div>
        Hello, my name is{" "}
        <strong className="myStyle">{firstName + " " + lastName}</strong>
      </div>
    </section>
  );
}

export default SimpleFunction;
