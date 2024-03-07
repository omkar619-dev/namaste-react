
  import React from "react";
  import ReactDOM from "react-dom/client";

  // React Element
  //React.createElement 
  const heading = React.createElement("h1",{id:"heading"},"Namaste React");
  const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading)
  
  //JSX we can write React without the need of jsx but it makes our lives easier
  const jsxheading = (<h1 id="heading">
    Namaste React using JSX</h1>);
  root.render(jsxheading)
  console.log(jsxheading)