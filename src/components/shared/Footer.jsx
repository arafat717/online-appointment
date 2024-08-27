import React from "react";
import variable from "../../Styles/Footer.module.scss";
import img from "../../../public/footer_logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={variable.foo}>
      <div className={variable.firstdiv}>
        <Image src={img} width={150} height={150} alt="footer image"></Image>
        <p>There are to popular belie Lorem is Ipsum is not simply random.</p>
        <p>
          <span>Follow to:</span> support@gmail.com
        </p>
        <div>
          <p>
            <FaFacebookF className={variable.icon}></FaFacebookF>
          </p>
          <p>
            <FaTwitter className={variable.icon}></FaTwitter>
          </p>
          <p>
            <FaLinkedinIn className={variable.icon}></FaLinkedinIn>
          </p>
        </div>
      </div>
      <div className={variable.treediv}>
        <h3>Company</h3>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Our Service</li>
          <li>Our Team</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={variable.treediv}>
        <h3>Important</h3>
        <ul>
          <li>Our Process</li>
          <li>Appointment</li>
          <li>Faq</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className={variable.treediv}>
        <h3>Quick Link</h3>
        <ul>
          <li>Why Chosse us</li>
          <li>Pricing Plan</li>
          <li>News and Article</li>
          <li>Login</li>
          <li>Subscribe</li>
        </ul>
      </div>
      <div className={variable.locdiv}>
        <h3>Official Info</h3>
        <div>
          <div>
            <FaLocationDot className={variable.locicon}></FaLocationDot>
            <p>2767 Sunrise Street, NY 1002, USA</p>
          </div>
          <div>
            <IoMdMail className={variable.locicon}></IoMdMail>
            <p>arafatjibon33@gmail.com</p>
          </div>
          <div>
            <FaPhoneAlt className={variable.locicon}></FaPhoneAlt>
            <p>+8801972041006</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
