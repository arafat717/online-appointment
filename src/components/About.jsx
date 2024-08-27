import React from "react";
import img1 from "../../public/about-img1.jpg";
import img2 from "../../public/about_img2.jpg";
import Image from "next/image";
import about from "../Styles/About.module.scss";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-10 md:px-[100px] px-[20px] mb-32 flex flex-col justify-between items-center gap-16 max-w-[1450px] mx-auto md:flex-row lg:px-32px">
      <div className="relative md:w-1/2 w-full">
        <Image
          src={img1}
          width={400}
          height={400}
          alt="about image one"
          className="md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
        ></Image>
        <Image
          className="absolute md:top-48 md:left-52 top-32 left-24"
          src={img2}
          width={250}
          height={250}
          alt="about image one"
        ></Image>
      </div>
      <div className="mt-20 md:w-1/2 w-full">
        <div className={about.title}>
          <hr className={about.verticalline} />
          <h5>about us</h5>
        </div>
        <h1 className={about.toptext}>
          The Great Place of Medical Hospital Center.
        </h1>
        <p className={about.lowtext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          susp endisse ultrices gravida tempor incididu ut labore et dolore
          magna aliqua. Quis ipsum susp endisse ultrices gravida.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="flex items-center gap-2">
            <p className="bg-[#4289cf] p-1 rounded-full text-white">
              <FaCheck className="size-2"></FaCheck>
            </p>
            <p>Ambulance Services</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="bg-[#4289cf] p-1 rounded-full text-white">
              <FaCheck className="size-2"></FaCheck>
            </p>
            <p>Pharmacy on Clinic</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="bg-[#4289cf] p-1 rounded-full text-white">
              <FaCheck className="size-2"></FaCheck>
            </p>
            <p>24/7 Medical Emergency</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="bg-[#4289cf] p-1 rounded-full text-white">
              <FaCheck className="size-2"></FaCheck>
            </p>
            <p>Oxizen on Wheel</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="bg-[#4289cf] p-1 rounded-full text-white">
              <FaCheck className="size-2"></FaCheck>
            </p>
            <p>On duty Doctors</p>
          </div>
        </div>
        <div className={about.lastdiv}>
          <button>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
