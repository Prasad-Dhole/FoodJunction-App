import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { ThemeProvider } from "./components/ThemeContext";



const AppComponent = () => {
    return (
        <div className="App">
            <ThemeProvider>
                <Header></Header>
                <Body/>
                <Footer/>
            </ThemeProvider>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);