import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          {/* Your logo element */}
          <img
            src="https://nationaldemo.edugorilla.org/static/media/wl_client_images/311c11e0a8ab49cd88eeef2be8d37b52.png"
            alt="Logo"
          />
        </div>
        <div className="search-bar">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
        <div className="other-section">
          <p>Exams</p>
          <p>Activation Key</p>
          <button className="btn_1">Log In</button>
          <button className="btn_2">Sign Up</button>
          <div className="phone-section">
            <FontAwesomeIcon className="phone-icon" icon={faPhone} />
            <p>+910000000000</p>
          </div>
        </div>
      </nav>
    </>
  );
};
