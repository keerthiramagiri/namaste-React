import React from "react";
import ReactDOM from "react-dom/client";

// React Element 

const title = (
<h1 className="head" tabIndex="5">
    Namaste React Using JSX
    </h1>
);

// Functional component 

const HeadingComponent = () => (
    <div id="container"> 
    <h1 className ="heading"> Namaste React Functional Component</h1>
    </div> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);