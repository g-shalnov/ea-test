import './App.module.css';
import React from 'react'
import Footer from "./Componets/Footer/Footer";
import Logo from "./Componets/Logo/Logo";
import Timer from "./Componets/Timer/Timer";
import Event from "./Componets/Event/Event";

function App() {

    return (
            <div className="App">
                <Logo/>
                <Timer/>
                <Event/>
                <Footer/>
            </div>
    );
}

export default App;








