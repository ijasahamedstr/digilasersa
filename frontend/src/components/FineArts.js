import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
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
import { Container, Grid, Box, Button, CircularProgress } from "@mui/material";

const carouselItems = [
  { id: 1, img: "https://i.ibb.co/TBWgkXqD/image.webp" },
  { id: 2, img: "https://i.ibb.co/TBWgkXqD/image.webp" },
  { id: 3, img: "https://i.ibb.co/TBWgkXqD/image.webp" },
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

const FineArts = () => {
  const [showModal, setShowModal] = useState(true);

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

  // 🔹 Auto close modal after 2 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Carousel Section */}
      <Box sx={{ width: "100%", overflow: "hidden", mt: "100px", position: "relative" }}>
        <Carousel
          fade
          nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: "black" }} />}
          prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: "black" }} />}
        >
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={`slide-${item.id}`}
                style={{ objectFit: "cover", boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)" }}
              />
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
          {socialLinks.map(({ icon, link }, idx) => (
            <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
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

   <Container
    maxWidth={false}
    disableGutters
    sx={{
        padding: 0,
        margin: 0,
        width: "100%",
    }}
    >

    <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/HfdGFLhj/image.webp"
      alt="Image 01"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>

      <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/ch6Pqwc4/1.webp"
      alt="Image 01"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>

      <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/jkwLkfpX/image.jpg"
      alt="Image 01"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>
       <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/cSjLf6jg/w-2.webp"
      alt="Image 01"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>



</Container>
    </>
  );
};

export default FineArts;
