import OurService from "@/components/OurService";
import ServiceCard from "@/components/ServiceCard";
import SmallBanner from "@/components/SmallBanner";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <SmallBanner page="Our Service"></SmallBanner>
      <ServiceCard></ServiceCard>
    </div>
  );
};

export default ServicePage;
