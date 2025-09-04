import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
} from "@mui/material";

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

export default function Home() {
  const [loading, setLoading] = useState(true);

  // 🔹 Simulate splash screen loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s splash
    return () => clearTimeout(timer);
  }, []);

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

  // --- Splash Screen Overlay ---
  if (loading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          flexDirection: "column",
          p: 2,
        }}
      >
        <Box
          component="img"
          src="https://i.ibb.co/hRZ1bMy/78-removebg-preview.png"
          alt="Company Logo"
          sx={{
            width: { xs: "70%", sm: "50%", md: "40%", lg: "30%" },
            maxWidth: "500px",
            height: "auto",
            mb: 2,
          }}
        />
        <CircularProgress sx={{ color: "#00fffc" }} />
      </Box>
    );
  }

  // --- Main Page Content ---
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
