import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";

function App() {
    return (
        <div>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    );
}

function Header() {
    return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
    return (
        <div>
            <h2>Our menu</h2>
            <Pizza /> {/*Nesting the Pizza component into the App component*/}
            <Pizza />
            <Pizza />
        </div>
    );
}

function Footer() {
    return <footer>{new Date().toLocaleTimeString()} - We're currently open!</footer>;
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