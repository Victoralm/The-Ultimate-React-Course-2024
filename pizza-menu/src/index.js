import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";

function App() {
    return (
        <div>
            <h1>Hello React...</h1>
            <Pizza /> {/*Nesting the Pizza component into the App component*/}
            <Pizza />
            <Pizza />
        </div>
    );
}

// The new Pizza component
function Pizza() {
    // return <h2>Pizza</h2>;
    return (
        <div>
            <img src={pizzaData[0].photoName} alt={pizzaData[0].name}/>
            <h2>{pizzaData[0].name}</h2>
            <p>{pizzaData[0].ingredients}</p>
        </div>
    );
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// StrictMode Search for commun bugs and outdated modules of the React framework
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);