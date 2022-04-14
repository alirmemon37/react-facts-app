import React from "react";
import reactLogo from "../images/react-logo.png"

export default function Navbar() {
    return (
        <div>
            <nav className="nav">
                <div className="logo">
                    <img src={reactLogo} className="logo-img" alt="React logo"  />
                    <h3 className="logo-name">ReactFacts</h3>
                </div>
                <h4 className="nav-text">React - Project 1</h4>
            </nav>
        </div>
    )
}