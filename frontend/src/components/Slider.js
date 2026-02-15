import { Carousel } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

import demoVideo from "./video/slider.mp4";
import demoVideo1 from "./video/Videos.mp4";
import demoVideo2 from "./video/video_new.mp4";

const carouselItems = [
  { id: 1, video: demoVideo },
  { id: 2, video: demoVideo1 },
  { id: 3, video: demoVideo2 },
];

const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

const FadeCarousel = () => {
  const videoRefs = useRef([]);
  const [videoStates, setVideoStates] = useState(
    carouselItems.map(() => ({ currentTime: 0, duration: 0, isDragging: false }))
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  const handleTimeUpdate = (index) => {
    if (!videoStates[index].isDragging) {
      const currentVideo = videoRefs.current[index];
      if (currentVideo) {
        setVideoStates((prev) => {
          const updated = [...prev];
          updated[index].currentTime = currentVideo.currentTime;
          return updated;
        });
      }
    }
  };

  const handleLoadedMetadata = (index) => {
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      setVideoStates((prev) => {
        const updated = [...prev];
        updated[index].duration = currentVideo.duration;
        return updated;
      });
    }
  };

  return (
    <Box sx={{ mt: { xs: "100px" } }}>
      <style>
        {`
          /* Big Round Indicators */
          .carousel-indicators {
            bottom: 60px; /* Moved up slightly to avoid overlapping native controls */
            z-index: 10;
          }
          .carousel-indicators [data-bs-target] {
            width: 20px !important;
            height: 20px !important;
            border-radius: 50% !important;
            background-color: #06f9f3 !important;
            border: 2px solid #17202a !important;
            margin: 0 10px !important;
            opacity: 0.6;
            transition: all 0.3s ease;
          }
          .carousel-indicators .active {
            opacity: 1 !important;
            transform: scale(1.3);
          }

          /* Custom Arrow Buttons */
          .carousel-control-prev-icon, .carousel-control-next-icon {
            background-color: rgba(0,0,0,0.7);
            border-radius: 50%;
            padding: 25px;
            background-size: 50%;
          }
        `}
      </style>

      <Carousel
        fade
        indicators={true}
        nextIcon={<span className="carousel-control-next-icon" />}
        prevIcon={<span className="carousel-control-prev-icon" />}
        interval={null} // Recommended to disable auto-slide when video controls are active
      >
        {carouselItems.map((item, index) => (
          <Carousel.Item key={item.id}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="d-block w-100"
              src={item.video}
              autoPlay
              loop
              muted
              controls // <--- RESTORED NATIVE VIDEO CONTROLS
              playsInline
              onTimeUpdate={() => handleTimeUpdate(index)}
              onLoadedMetadata={() => handleLoadedMetadata(index)}
              style={{
                height: "80vh",
                objectFit: "cover",
                backgroundColor: "black"
              }}
            />

            {/* Floating Time Display (Positioned away from native controls) */}
            <Box
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "rgba(0,0,0,0.6)",
                padding: "6px 14px",
                borderRadius: "20px",
                color: "#06f9f3",
                border: "1px solid #06f9f3",
                zIndex: 5
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: "bold", fontFamily: "monospace" }}>
                {Math.floor(videoStates[index].currentTime / 60).toString().padStart(2, "0")}:
                {Math.floor(videoStates[index].currentTime % 60).toString().padStart(2, "0")} 
                {" / "}
                {Math.floor(videoStates[index].duration / 60).toString().padStart(2, "0")}:
                {Math.floor(videoStates[index].duration % 60).toString().padStart(2, "0")}
              </Typography>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Social Media Sidebar */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: 2,
          zIndex: 1200,
          pl: 2,
        }}
      >
        {socialLinks.map(({ icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#06f9f3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#17202a",
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              {icon}
            </Box>
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default FadeCarousel;