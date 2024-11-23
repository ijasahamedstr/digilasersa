import AboutSection from "./AboutSection";
import Herosection from "./Herosection";
import ServiceCard from "./ServiceCard";
import FadeCarousel from "./Slider";
import VisionandMission from "./vision_and_Mission";

export default function Home() {
    return (
      <>
      <FadeCarousel/>
      <Herosection/>
      <AboutSection/>
      <VisionandMission/>
      <ServiceCard/>
      </>
    );
  }
  
