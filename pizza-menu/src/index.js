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
            {pizzaData.length > 0 && (
                <ul className="pizzas">
                    {pizzaData.map(pizza =>
                        <Pizza pizzaObj={pizza}
                            key={pizzaData.name} // React needs an individual key for each item on a list
                        />
                    )}
                </ul>
            )} {/* Shortcircuiting example */}
        </main>
    );
}

// The new Pizza component
///NOTE: Props are supposed to be immutable. If we need to change data, then use States.
/// React uses the ONE-WAY data flow: the data are only passed from the parrent
/// componet to its child component. Never the other way around... (Like in Angular)
function Pizza(props) {
    console.log(props);
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 3}</span>
            </div>
        </li>
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

    return (
        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>We're open until {closeHour}:00. Come visit us or order online!</p>
                    <button className="btn">Order</button>
                </div>
            )} {/* Shortcircuiting example */}
        </footer>
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