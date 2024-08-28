import React from "react";
import About from "@/components/About";
import SmallBanner from "@/components/SmallBanner";
import HowWeWork from "@/components/HowWeWork";
import ApplyForFree from "@/components/ApplyForFree";
import OurTeam from "@/components/OurTeam";

const AboutPage = () => {
  return (
    <div>
      <SmallBanner page="About Us"></SmallBanner>
      <About></About>
      <ApplyForFree></ApplyForFree>
      <HowWeWork></HowWeWork>
      <OurTeam></OurTeam>
    </div>
  );
};

export default AboutPage;
