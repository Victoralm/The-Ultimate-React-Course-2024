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
            <Pizza
                name={pizzaData[0].name}
                ingredients={pizzaData[0].ingredients}
                photo={pizzaData[0].photoName}
                price={pizzaData[0].price}
            /> {/*Nesting the Pizza component into the App component*/}
            <Pizza
                name={pizzaData[1].name}
                ingredients={pizzaData[1].ingredients}
                photo={pizzaData[1].photoName}
                price={pizzaData[1].price}
            />
            <Pizza
                name={pizzaData[2].name}
                ingredients={pizzaData[2].ingredients}
                photo={pizzaData[2].photoName}
                price={pizzaData[2].price}
            />
            <Pizza
                name={pizzaData[3].name}
                ingredients={pizzaData[3].ingredients}
                photo={pizzaData[3].photoName}
                price={pizzaData[3].price}
            />
        </main>
    );
}

// The new Pizza component
function Pizza(props) {
    console.log(props);
    return (
        <div className="pizza">
            <img src={props.photo} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 3}</span>
            </div>
        </div>
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


// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// StrictMode Search for commun bugs (it forces the app component to run twice) and outdated modules of the React framework
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);