import AboutSection from "./AboutSection";
import ContactUs from "./ContactUs";
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
    // 🔹 Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 🔹 Force a one-time refresh on first load
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);
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
