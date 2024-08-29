import ContactCard from "@/components/ContactCard";
import ContactUsForm from "@/components/ContactUsForm";
import Map from "@/components/Map";
import SmallBanner from "@/components/SmallBanner";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <SmallBanner page="Contact Us"></SmallBanner>
      <ContactCard></ContactCard>
      <ContactUsForm></ContactUsForm>
      <Map></Map>
    </div>
  );
};

export default ContactPage;
