import React from "react";
import { FiMapPin, FiMail, FiPhone, FiGlobe, FiMap } from "react-icons/fi";
import card from "../Styles/ContactCard.module.scss";

const ContactCard = () => {
  return (
    <div className={card.maindiv}>
      <div className={card.contactdiv}>
        <p>
          <FiMap className={card.icons1}></FiMap>
        </p>
        <h3>Office Address</h3>
        <p>16/A, Romadan House City,Tower New York, United States</p>
      </div>
      <div className={card.contactdiv}>
        <p>
          <FiPhone className={card.icons2}></FiPhone>
        </p>
        <h3>Phone Number</h3>
        <p>+8801972041006</p>
        <p>+8801737747452</p>
      </div>
      <div className={card.contactdiv}>
        <p>
          <FiMail className={card.icons3}></FiMail>
        </p>
        <h3>Office Address</h3>
        <p>arafatjibon33@gmail.com</p>
        <p>arafatjibon38@gmail.com</p>
      </div>
      <div className={card.contactdiv}>
        <p>
          <FiGlobe className={card.icons4}></FiGlobe>
        </p>
        <h3>Office Address</h3>
        <p>16/A, Romadan House City,Tower New York, United States</p>
      </div>
    </div>
  );
};

export default ContactCard;
