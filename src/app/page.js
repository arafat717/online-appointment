import About from "@/components/About";
import ApplyForFree from "@/components/ApplyForFree";
import Banner from "@/components/Banner";
import HowWeWork from "@/components/HowWeWork";
import OurService from "@/components/OurService";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <OurService></OurService>
      <HowWeWork></HowWeWork>
      <ApplyForFree></ApplyForFree>
    </div>
  );
}
