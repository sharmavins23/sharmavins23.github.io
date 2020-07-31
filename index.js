// Imports
import React from "react";
import ReactDOM from "react-dom";

// Main container
function App() {
    // Contains all individual components and layout

    // Render
    return (
        <div>
            <h1>Currenty in progress. Check back later!</h1>
            <a href="https://github.com/sharmavins23/sharmavins23.github.io/">
                <h3>Check out the status of this project.</h3>
            </a>
        </div>
    );
}

// Render with the DOM
ReactDOM.render(<App />, document.getElementById("app"));
