import AboutSection from "./AboutSection";
import ContactUs from "./ContactUs";
import Eventsection from "./event_section";
import Herosection from "./Herosection";
import Newssection from "./news_section";
import Partner from "./Partner";
import Progress from "./progress";
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
      <Progress/>
      <Newssection/>
      <Partner/>
      <Eventsection/>
      <ContactUs/>
      </>
    );
  }
  
