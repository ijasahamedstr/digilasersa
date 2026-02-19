import { Carousel } from "react-bootstrap";
import { useEffect, useRef, React, useState } from "react";
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

// Assuming these paths remain the same
import demoVideo from "./video/slider.mp4";
import demoVideo2 from "./video/V.mp4";
import demoVideo3 from "./video/video_n.mp4";

const carouselItems = [
  { id: 1, type: "video", url: demoVideo, fit: "cover" },
  { id: 2, type: "video", url: demoVideo2, fit: "cover" },
  { id: 3, type: "video", url: demoVideo3, fit: "none" },
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
  const [index, setIndex] = useState(0);
  const [videoStates, setVideoStates] = useState(
    carouselItems.map(() => ({ currentTime: 0, duration: 0 }))
  );

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Sync Video Playback with Slide Index
  useEffect(() => {
    // Pause all videos first
    videoRefs.current.forEach((video, i) => {
      if (video) {
        video.pause();
        if (i !== index) video.currentTime = 0; // Reset inactive videos
      }
    });

    // Play the current video
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch((err) => console.warn("Autoplay prevented:", err));
    }
  }, [index]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const goToNextSlide = () => {
    const nextIndex = (index + 1) % carouselItems.length;
    setIndex(nextIndex);
  };

  const handleTimeUpdate = (idx) => {
    const currentVideo = videoRefs.current[idx];
    if (currentVideo && idx === index) {
      const time = currentVideo.currentTime;

      // Update UI Timer
      setVideoStates((prev) => {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], currentTime: time };
        return updated;
      });

      // KEY LOGIC: If video reaches 5 seconds, move to next
      if (time >= 5) {
        goToNextSlide();
      }
    }
  };

  const handleLoadedMetadata = (idx) => {
    const currentVideo = videoRefs.current[idx];
    if (currentVideo) {
      setVideoStates((prev) => {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], duration: currentVideo.duration };
        return updated;
      });
    }
  };

  return (
    <Box sx={{ mt: { xs: "100px" }, position: "relative", overflow: "hidden" }}>
      <style>
        {`
          .carousel-indicators { bottom: 60px; z-index: 10; }
          .carousel-indicators [data-bs-target] {
            width: 18px !important; height: 18px !important;
            border-radius: 50% !important; background-color: #06f9f3 !important;
            border: 2px solid #17202a !important; margin: 0 8px !important;
            opacity: 0.5; transition: all 0.3s ease;
          }
          .carousel-indicators .active { opacity: 1 !important; transform: scale(1.2); }
          .carousel-control-prev-icon, .carousel-control-next-icon {
            background-color: rgba(0,0,0,0.5); border-radius: 50%;
            padding: 20px; background-size: 50%;
          }
        `}
      </style>

      <Carousel 
        fade 
        indicators={true} 
        activeIndex={index} 
        onSelect={handleSelect} 
        interval={null} // We control the timing manually
        pause={false}
      >
        {carouselItems.map((item, idx) => (
          <Carousel.Item key={item.id}>
            <Box sx={{ 
              position: "relative", 
              height: "80vh", 
              bgcolor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center" 
            }}>
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                className="d-block w-100"
                src={item.url}
                muted 
                playsInline
                onEnded={goToNextSlide} // Fallback if video is shorter than 5s
                onTimeUpdate={() => handleTimeUpdate(idx)}
                onLoadedMetadata={() => handleLoadedMetadata(idx)}
                style={{ 
                  height: "100%", 
                  width: "100%", 
                  objectFit: item.fit || "cover" 
                }}
              />
              
              {/* Progress Overlay (5s Limit) */}
              <Box sx={{
                position: "absolute", top: 20, right: 20,
                backgroundColor: "rgba(0,0,0,0.6)", padding: "4px 12px",
                borderRadius: "15px", color: "#06f9f3", border: "1px solid #06f9f3", zIndex: 5
              }}>
                <Typography variant="caption" sx={{ fontWeight: "bold", fontFamily: "monospace" }}>
                  {/* Showing current time vs the 5s limit */}
                  00:{Math.floor(videoStates[idx]?.currentTime || 0).toString().padStart(2, "0")} / 00:05
                </Typography>
              </Box>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Social Media Sidebar */}
      <Box sx={{
        position: "fixed", top: "50%", left: 0, transform: "translateY(-50%)",
        display: { xs: "none", md: "flex" }, flexDirection: "column", gap: 1.5, zIndex: 1200, pl: 2,
      }}>
        {socialLinks.map(({ icon, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Box sx={{
              width: 38, height: 38, borderRadius: "50%", backgroundColor: "#06f9f3",
              display: "flex", justifyContent: "center", alignItems: "center",
              color: "#17202a", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", transition: "0.3s",
              "&:hover": { transform: "translateX(5px)", backgroundColor: "#fff" },
            }}>
              {icon}
            </Box>
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default FadeCarousel;