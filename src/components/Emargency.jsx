import React from "react";
import emergency from "../Styles/Emergency.module.scss";
import { FaCheck } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import img from "../../public/helpline_img.png";

const Emargency = () => {
  return (
    <div className={emergency.maindiv}>
      <div className={emergency.subdiv}>
        <div className="mt-20 md:w-1/2 w-full">
          <div className={emergency.title}>
            <hr className={emergency.verticalline} />
            <h5>Emergency helpline</h5>
          </div>
          <h1 className={emergency.toptext}>Need Emergency Contact</h1>
          <p className={emergency.lowtext}>
            Whether you are scheduling a visit with a healthcare provider,
            reserving a service, or setting up a consultation, we make it easy
            to book, manage, and track your appointments online.
          </p>
          <div className="mt-10">
            <div className="flex items-center gap-2">
              <p className="bg-[#4289cf] p-1 rounded-full text-white">
                <FaCheck className="size-2"></FaCheck>
              </p>
              <p>24/7 Contact Our Hospital.</p>
            </div>
            <div className="flex items-center gap-2 my-3">
              <p className="bg-[#4289cf] p-1 rounded-full text-white">
                <FaCheck className="size-2"></FaCheck>
              </p>
              <p>24 hours Open Our Hospital.</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="bg-[#4289cf] p-1 rounded-full text-white">
                <FaCheck className="size-2"></FaCheck>
              </p>
              <p>Emergency Contact Our Phone Number.</p>
            </div>
          </div>
          <div className={emergency.contactinfo}>
            <div className={emergency.contact}>
              <p className={emergency.iconHover}>
                <FaPhoneAlt className={emergency.icon}></FaPhoneAlt>
              </p>
              <div>
                <p>Phone Number</p>
                <p>+8801972041006</p>
              </div>
            </div>
            <div className={emergency.contact}>
              <p className={emergency.iconHover}>
                <FaEnvelope className={emergency.icon}></FaEnvelope>
              </p>
              <div>
                <p>Quick Your Email</p>
                <p>arafatjibon33@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={emergency.seconddiv}>
          <Image
            src={img}
            width={800}
            height={800}
            alt="emergency contact"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Emargency;
