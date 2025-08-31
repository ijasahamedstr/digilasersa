import AboutSection from "./AboutSection";
import Eventsection from "./event_section";
import Herosection from "./Herosection";
import Hr from "./hr";
import Imagesection from "./Imagesection";
import Newssection from "./news_section";
import Partner from "./Partner";
import Progress from "./progress";
import ServiceCard from "./ServiceCard";
import FadeCarousel from "./Slider";
import VisionandMission from "./vision_and_Mission";
import {useEffect } from "react";

export default function Home() {
  return (
    <>
      <FadeCarousel />
      <Herosection />
      <AboutSection />
      <VisionandMission />
      <ServiceCard />
      <Progress />
      <Newssection />
      <Imagesection />
      <Hr />
      <Partner />
      <Hr />
      <Eventsection />
      {/* <ContactUs /> */}
    </>
  );
}
