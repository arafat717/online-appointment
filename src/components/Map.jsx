import React from "react";
import map from "../Styles/Map.module.scss";

const Map = () => {
  return (
    <div className={map.maindiv}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275301.79338701285!2d89.88791159284378!3d24.959579734090255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d67552cd9be5%3A0x5f5a1e73907e02f1!2sSherpur%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1722410846134!5m2!1sen!2sbd"
        width="100%"
        height="500"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
