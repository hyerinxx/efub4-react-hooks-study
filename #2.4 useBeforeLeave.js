import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

const App = () => {
    const begForLife = () => console.log("Please Don't Leave.");
    useBeforeLeave(begForLife);
    return (
        <div className="App">
            <h1>Dream your dream</h1>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);