import React from "react";
import work from "../Styles/HowWeWork.module.scss";

const HowWeWork = () => {
  return (
    <div className={work.maindiv}>
      <div className={work.subdiv} style={{ paddingTop: "40px" }}>
        <div className={work.verticalline}>
          <div className={work.title}>
            <hr className={work.verticalline} />
            <h5>How We Work</h5>
          </div>
          <h1 className={work.toptext}>Our Working Process</h1>
        </div>
        <div className={work.allprocess}>
          <div className={work.process}>
            <div className={work.divone}>
              <p>01</p>
            </div>
            <h2>Fill the form</h2>
            <p>
              Repair damaged valves, bypass blocked arteries, or treat
              congenital heart conditions.
            </p>
          </div>
          <div className={work.process}>
            <div className={work.divtwo}>
              <p>02</p>
            </div>
            <h2>Book an Appointment</h2>
            <p>
              Our commitment to excellence in cardiac surgery ensures.Our
              commitment to excellence.
            </p>
          </div>
          <div className={work.process}>
            <div className={work.divthree}>
              <p>03</p>
            </div>
            <h2>Check-Ups</h2>
            <p>
              Repair damaged valves, bypass blocked arteries, or treat
              congenital heart conditions.
            </p>
          </div>
          <div className={work.process}>
            <div className={work.divfour}>
              <p>04</p>
            </div>
            <h2>Get Reports</h2>
            <p>
              Our commitment to excellence in cardiac surgery ensures.Our
              commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
