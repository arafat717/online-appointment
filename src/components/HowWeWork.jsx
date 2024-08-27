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
            <h2>fill the form</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem
              quia
            </p>
          </div>
          <div className={work.process}>
            <div className={work.divtwo}>
              <p>01</p>
            </div>
            <h2>fill the form</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem
              quia
            </p>
          </div>
          <div className={work.process}>
            <div className={work.divthree}>
              <p>01</p>
            </div>
            <h2>fill the form</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem
              quia
            </p>
          </div>
          <div className={work.process}>
            <div className={work.divfour}>
              <p>01</p>
            </div>
            <h2>fill the form</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem
              quia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
