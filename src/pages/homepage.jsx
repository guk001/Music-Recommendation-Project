import React from 'react';
import './homepage.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function HomePage() {
    return (
        
        <body>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet"></link>
            <div className="logoContainer">
                <img src = "Q&L-2 1.png" alt="Logo" width="476" height="378" className = "logo"></img>
            </div>
            <div className="textContainer">
                <Link className="text" to = "/questionpage">Click To Start</Link>
            </div>
        </body>
    );
}

export default HomePage;
