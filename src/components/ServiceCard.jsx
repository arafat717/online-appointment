import React from "react";
import service from "../Styles/OurService.module.scss";
import img1 from "../../public/service-1.jpg";
import img2 from "../../public/service-2.jpg";
import img3 from "../../public/service-3.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";

const ServiceCard = () => {
  return (
    <div className={service.mainservice}>
      <div className={service.subdiv}>
        <div className={service.verticalline}>
          <div className={service.title}>
            <hr className={service.verticalline} />
            <h5>Our Service</h5>
          </div>
          <h1 className={service.toptext}>Our madical service</h1>
        </div>
        <div className={service.cardContainer}>
          <div className={service.card}>
            <Image src={img1} width={300} height={300} alt="card image"></Image>
            <p className={service.iconstyle}>
              <FaHeartPulse className={service.icon}></FaHeartPulse>
            </p>
            <div className={service.cardbody}>
              <h1>Hotler Heart Surgery</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                aliquam.
              </p>
            </div>
            <button>
              Read More{" "}
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
          <div className={service.card}>
            <Image src={img2} width={300} height={300} alt="card image"></Image>
            <p className={service.iconstyle}>
              <FaEye className={service.icon}></FaEye>
            </p>
            <div className={service.cardbody}>
              <h1>Hotler Heart Surgery</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                aliquam.
              </p>
            </div>
            <button>
              Read More{" "}
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
          <div className={service.card}>
            <Image src={img3} width={300} height={300} alt="card image"></Image>
            <p className={service.iconstyle}>
              <GiMedicines className={service.icon}></GiMedicines>
            </p>
            <div className={service.cardbody}>
              <h1>Hotler Heart Surgery</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                aliquam.
              </p>
            </div>
            <button>
              Read More{" "}
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
          <div className={service.card}>
            <Image src={img1} width={300} height={300} alt="card image"></Image>
            <p className={service.iconstyle}>
              <FaHeartPulse className={service.icon}></FaHeartPulse>
            </p>
            <div className={service.cardbody}>
              <h1>Hotler Heart Surgery</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                aliquam.
              </p>
            </div>
            <button>
              Read More{" "}
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
          <div className={service.card}>
            <Image src={img2} width={300} height={300} alt="card image"></Image>
            <p className={service.iconstyle}>
              <FaEye className={service.icon}></FaEye>
            </p>
            <div className={service.cardbody}>
              <h1>Hotler Heart Surgery</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                aliquam.
              </p>
            </div>
            <button>
              Read More{" "}
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
          <div className={service.card}>
            <Image src={img3} width={300} height={300} alt="card image"></Image>
            <p className={service.iconstyle}>
              <GiMedicines className={service.icon}></GiMedicines>
            </p>
            <div className={service.cardbody}>
              <h1>Hotler Heart Surgery</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                aliquam.
              </p>
            </div>
            <button>
              Read More{" "}
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
          <div className={service.card}>
            <Image src={img1} width={300} height={300} alt="card image"></Image>
            <p className={service.iconstyle}>
              <FaHeartPulse className={service.icon}></FaHeartPulse>
            </p>
            <div className={service.cardbody}>
              <h1>Hotler Heart Surgery</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                aliquam.
              </p>
            </div>
            <button>
              Read More{" "}
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
          <div className={service.card}>
            <Image src={img2} width={300} height={300} alt="card image"></Image>
            <p className={service.iconstyle}>
              <FaEye className={service.icon}></FaEye>
            </p>
            <div className={service.cardbody}>
              <h1>Hotler Heart Surgery</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                aliquam.
              </p>
            </div>
            <button>
              Read More{" "}
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
          <div className={service.card}>
            <Image src={img3} width={300} height={300} alt="card image"></Image>
            <p className={service.iconstyle}>
              <GiMedicines className={service.icon}></GiMedicines>
            </p>
            <div className={service.cardbody}>
              <h1>Hotler Heart Surgery</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                aliquam.
              </p>
            </div>
            <button>
              Read More{" "}
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
