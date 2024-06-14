import React from "react";
import "./Footer.css";
import footerLogo from '../../assets/logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left-container">
            <img src={footerLogo} alt="" />
        </div>
        <div className="footer-right-container">
            <div className="footer-col">
                <h2>Quick Links</h2>
                <div className="navlinks">
                <p>Home</p>
                <p>Features</p>
                <p>Blog</p>
                <p>Contact</p>
                </div>
            </div>
            <div className="footer-col">
                <h2>Contact</h2>
                <div className="contact-col">
                <div className="dummy">
                <h2><FaPhoneAlt /> Mobile No. </h2>
                <p>+91 8094017212</p>
                </div>
                <div className="dummy">
                <h2><MdEmail />
                E-mail Address</h2>
                <p>ronaktanwar0508@gmail.com</p>
                </div>
                <div className="dummy">
                <h2><MdLocationOn />
                Address</h2>
                <p>Jaipur, Rajasthan, India</p>
                </div>
                
                </div>
            </div>
            <div className="footer-col">
              <h2>Subscribe for Newsletter</h2>
              <input type="text" placeholder="E-mail Address"/>
              <button>Subscribe</button>
            </div>
        </div>
      </div>
      <p>
        Designed by <b>Ronak Saini</b>
      </p>
      <p>Made with ❤️</p>
    </div>
  );
};

export default Footer;
