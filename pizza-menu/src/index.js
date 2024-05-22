import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    );
}

function Header() {
    // return <h1 style={{color: 'red', fontSize: '32px', textTransform: 'uppercase'}}>Fast React Pizza Co.</h1>;
    // const style = { color: 'red', fontSize: '32px', textTransform: 'uppercase' };
    // return <h1 style={style} className="header">Fast React Pizza Co.</h1>;
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <Pizza /> {/*Nesting the Pizza component into the App component*/}
            <Pizza />
            <Pizza />
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    // if (hour >= openHour && hour <= closeHour) alert("We're currently open!")
    // else alert("We're currently closed!");
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return <footer className="footer">{new Date().toLocaleTimeString()} - We're currently open!</footer>;
}

// The new Pizza component
function Pizza() {
    // return <h2>Pizza</h2>;
    return (
        <div>
            <img src={pizzaData[0].photoName} alt={pizzaData[0].name}/>
            <h3>{pizzaData[0].name}</h3>
            <p>{pizzaData[0].ingredients}</p>
        </div>
    );
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// StrictMode Search for commun bugs (it forces the app component to run twice) and outdated modules of the React framework
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);