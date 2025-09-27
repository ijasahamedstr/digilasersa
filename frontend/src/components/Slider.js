import { Carousel } from "react-bootstrap";
import { useEffect } from "react";
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

const carouselItems = [
  { id: 1, video: demoVideo },
  { id: 2, video: demoVideo },
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Force one-time reload
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  return (
    <Box sx={{ mt: { xs: 5, md: "100px" } }}>
      <Carousel
        fade
        nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: "black" }} />}
        prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: "black" }} />}
      >
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <video
              className="d-block w-100"
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              style={{ objectFit: "cover", boxShadow: "inset 0 0 10px rgba(0,0,0,0.8)" }}
            />
            <Carousel.Caption>
              <Typography variant="h4" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                {item.content}
              </Typography>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Social Media Icons */}
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
