import React from "react";
import ReactDOM from "react-dom";

import "./HelloWorld.css";
import MediaCard from "./MediaCard";
import SimpleFunction from "./SimpleFunction";

const Hi = ({ firstName, lastName, operand1, operand2, lazy }) => {
  return (
    <div>
      <h1 className="myStyle">React Tutorial Assignment 1 & 2:</h1>
      <h2>Part 1:</h2>

      <SimpleFunction firstName="Shaikh" lastName="Abdul Majid" />
      <section>
        <p>
          This section is rendered directly in index.js and i am using arrow
          function. I passed properties as attributes in the function. I have
          also implemented destructuring on the function parameter. I used
          external css file and apply styles.
        </p>
        <h4>My Interests!</h4>
        <div>
          <ul>
            <li>Programming is my passion.</li>
            <li>I am fond of playing Cricket.</li>
            <li>I feel, reading books are good for my personal development.</li>
          </ul>
        </div>
        <br />I can do the simple Maths: {operand1} + {operand2} ={" "}
        <strong className="myStyle">{operand1 + operand2}</strong>
        <div>Am I SUPER LAZY!: {lazy.toString()}</div>
      </section>
      <h2>Part 2:</h2>
      <MediaCard
        title="This is my Media Card."
        body={20 * 10}
        imageUrl="./rocky-mountains-200.jpg"
      />
    </div>
  );
};
ReactDOM.render(
  <Hi
    firstname="Abdul"
    lastName="Majid"
    operand1={2}
    operand2={3}
    lazy={false}
  />,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
