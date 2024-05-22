import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return <h1>Hello React...</h1>;
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// StrictMode Search for commun bugs and outdated modules of the React framework
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);