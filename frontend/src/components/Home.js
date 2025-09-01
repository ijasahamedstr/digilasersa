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
import React, { useEffect } from "react";

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

  // 🔹 Page Speed Optimizer Script (lazy load images & videos)
  useEffect(() => {
    const lazyElements = document.querySelectorAll("img[data-src], video[data-src]");

    if (!("IntersectionObserver" in window)) {
      // Fallback: Load immediately if IntersectionObserver not supported
      lazyElements.forEach((el) => {
        if (el.dataset.src) {
          el.src = el.dataset.src;
          el.removeAttribute("data-src");
        }
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.src) {
            el.src = el.dataset.src;
            el.removeAttribute("data-src");
          }
          obs.unobserve(el);
        }
      });
    });

    lazyElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
    </>
  );
}
