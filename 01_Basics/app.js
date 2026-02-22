import React from "react";
import ReactDOM from "react-dom/client";

// JSX - JavaScript XML {Transpiled before it reaches the JS engine/ directly transpiled to react.createElement()}
// babel - Transpiler (JSX to JS) converts into react.createElement() and also converts ES6 to ES5
// const heading = React.createElement("h1", { id: "heading" }, "Hello, React!");
//  const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="1">
//      Hello, JSX
//    </h1>
//  );
 
//  console.log(jsxHeading);

  
  
//   root.render(jsxHeading);

// React Components
// Class Based Component -OLD 
// function based component - NEW

// function based component

const element = <span>Hello, React Element</span>; // This is called as React Element

const Heading = (
  
     <h1 className="head" tabIndex="1">
      {element}
        Hello, React Component
    </h1>
); // This is called as React Element

const number = 1000;

const HeadingComponent = () => (
  <div id="container">
    <h2>{number}</h2>
    <h2>{250+150}</h2>
    {Heading}
    <h1 className="heading">Namaste, React Component</h1>
    </div>
); // This is also called as composition of components\
// we can also call functions inside JSX
// we can also use ternary operator and if else statements inside JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);




