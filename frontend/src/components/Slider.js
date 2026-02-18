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
import demoVideo2 from "./video/V.mp4";
import demoVideo3 from "./video/video_n.mp4";

const carouselItems = [
  { id: 1, type: "video", url: demoVideo },
  { id: 2, type: "video", url: demoVideo2 },
  // { id: 3, type: "image", url: "https://i.ibb.co/Zzcf17Z6/jpg-2.webp" }, 
  { id: 4, type: "video", url: demoVideo3 },
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
    carouselItems.map(() => ({ currentTime: 0, duration: 0 }))
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleTimeUpdate = (index) => {
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      setVideoStates((prev) => {
        const updated = [...prev];
        updated[index] = { ...updated[index], currentTime: currentVideo.currentTime };
        return updated;
      });
    }
  };

  const handleLoadedMetadata = (index) => {
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      setVideoStates((prev) => {
        const updated = [...prev];
        updated[index] = { ...updated[index], duration: currentVideo.duration };
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

      <Carousel fade indicators={true} interval={6000} pause="hover">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={item.id}>
            {item.type === "video" ? (
              <Box sx={{ position: "relative", height: "80vh", bgcolor: "black" }}>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="d-block w-100"
                  src={item.url}
                  autoPlay muted loop playsInline
                  onTimeUpdate={() => handleTimeUpdate(index)}
                  onLoadedMetadata={() => handleLoadedMetadata(index)}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
                {/* Time Display Overlay */}
                <Box sx={{
                  position: "absolute", top: 20, right: 20,
                  backgroundColor: "rgba(0,0,0,0.6)", padding: "4px 12px",
                  borderRadius: "15px", color: "#06f9f3", border: "1px solid #06f9f3", zIndex: 5
                }}>
                  <Typography variant="caption" sx={{ fontWeight: "bold", fontFamily: "monospace" }}>
                    {Math.floor((videoStates[index]?.currentTime || 0) / 60).toString().padStart(2, "0")}:
                    {Math.floor((videoStates[index]?.currentTime || 0) % 60).toString().padStart(2, "0")} / 
                    {Math.floor((videoStates[index]?.duration || 0) / 60).toString().padStart(2, "0")}:
                    {Math.floor((videoStates[index]?.duration || 0) % 60).toString().padStart(2, "0")}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box
                component="img"
                className="d-block w-100"
                src={item.url}
                alt={`Slide ${index}`}
                sx={{ height: "80vh", width: "100%", objectFit: "cover", backgroundColor: "black" }}
              />
            )}
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Social Media Sidebar */}
      <Box sx={{
        position: "fixed", top: "50%", left: 0, transform: "translateY(-50%)",
        display: { xs: "none", md: "flex" }, flexDirection: "column", gap: 1.5, zIndex: 1200, pl: 2,
      }}>
        {socialLinks.map(({ icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
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