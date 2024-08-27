import React from "react";
import About from "@/components/About";
import SmallBanner from "@/components/SmallBanner";
import HowWeWork from "@/components/HowWeWork";

const AboutPage = () => {
  return (
    <div>
      <SmallBanner page="About Us"></SmallBanner>
      <About></About>
      <HowWeWork></HowWeWork>
    </div>
  );
};

export default AboutPage;
