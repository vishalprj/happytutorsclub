import React from "react";
import "./Footer.css"; // Import CSS file for styling

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://nationaldemo.edugorilla.org/static/media/wl_client_images/311c11e0a8ab49cd88eeef2be8d37b52.png"
              alt="Logo"
            />
            <p>Mail: youremail@example.com</p>
          </div>
          <div className="image_container">
            <img
              src="https://nationaldemo.edugorilla.org/static/images/google_play.png?v=89d70ac74ced418207a75cf493cf0b3e"
              alt=""
            />
            <img
              src="https://nationaldemo.edugorilla.org/static/images/ios_icon_image.png?v=a88ade5d815de5e964fc328c57444979"
              alt=""
            />
          </div>
        </div>
        <div className="about-content">
          <ul>About</ul>
          <ul>About Us</ul>
        </div>
        <div className="about-content">
          <ul>Help</ul>
          <ul>Contact</ul>
          <ul>Exam Calendar</ul>
        </div>
        <div className="Language">
          <label>Select Language:</label>
          <select>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="hindi">Espanol</option>
          </select>
        </div>
      </footer>
    </>
  );
};

export default Footer;
