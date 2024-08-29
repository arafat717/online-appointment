import Image from "next/image";
import React from "react";
import img from "../../public/banner_img.png";
import banner from "../Styles/Banner.module.scss";

const Banner = () => {
  return (
    <div className={banner.mainbanner}>
      <div className={banner.subbanner}>
        <div className={banner.firstdiv}>
          <div className={banner.title}>
            <hr className={banner.verticalline} />
            <h5>Welcome to MadiFax</h5>
          </div>
          <h1>
            We Are Committed <br /> To Your Health
          </h1>
          <p>
            Book Your Appointments Anytime, Anywhere. Hassle-Free Online Booking
            for Your Convenience .Your One-Stop Solution for Easy Appointment
            Scheduling.
          </p>
          <button>Meet A Doctor</button>
          <div className={banner.views}>
            <div className={banner.viewdiv}>
              <h1>355k+</h1>
              <p>Recovered Patients</p>
            </div>
            <div className={banner.viewdiv}>
              <h1>98%</h1>
              <p>Good Review</p>
            </div>
            <div className={banner.viewdiv}>
              <h1>120+</h1>
              <p>Popular Doctor</p>
            </div>
          </div>
        </div>
        <div className={banner.seconddiv}>
          <Image src={img} width={900} height={900} alt="banner image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
