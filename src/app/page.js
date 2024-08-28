import About from "@/components/About";
import ApplyForFree from "@/components/ApplyForFree";
import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import Emargency from "@/components/Emargency";
import HowWeWork from "@/components/HowWeWork";
import OurService from "@/components/OurService";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <OurService></OurService>
      <ApplyForFree></ApplyForFree>
      <HowWeWork></HowWeWork>
      <OurTeam></OurTeam>
      <Emargency></Emargency>
      <BlogSection></BlogSection>
    </div>
  );
}
