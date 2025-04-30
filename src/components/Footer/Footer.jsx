import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="Footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            reprehenderit, sequi consequuntur facilis sed minima quia eos sunt
            voluptas laborum rerum itaque! Quod soluta voluptas sunt? Nisi
            pariatur, magnam ipsum quia esse facilis vero error optio libero
            
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-centre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>ABout us</li>

            <li>Delivery</li>
            <li>Private policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch</h2>

          <ul>
            <li> Phone number - 098XXXXXXX</li>
            <li> E-mail - Tomato095@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        Copyright 2025 ⓒ Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
