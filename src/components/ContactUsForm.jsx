import React from "react";
import form from "../Styles/ContactUsForm.module.scss";
import Image from "next/image";
import img1 from "../../public/contact_img.jpg";
const ContactUsForm = () => {
  return (
    <div className={form.maindiv}>
      <div className={form.firstdiv}>
        <Image src={img1} width={700} height={700} alt="contact image"></Image>
      </div>
      <div className={form.seconddiv}>
        <div className={form.formdiv}>
          <div>
            <input type="text" name="" id="" placeholder="Full Name*" />
            <input type="email" name="" id="" placeholder="Email Address*" />
            <input type="text" name="" id="" placeholder="Phone Number*" />
            <input type="text" name="" id="" placeholder="Subject*" />
          </div>
          <input
            className={form.input1}
            type="text"
            name=""
            id=""
            placeholder="Survice*"
          />
          <textarea
            className={form.input2}
            id="textArea"
            rows="4"
            cols="50"
            placeholder="Enter your message here..."
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
