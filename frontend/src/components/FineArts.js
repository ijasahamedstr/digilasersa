import { useState, useEffect } from "react";
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
import { Container, Box } from "@mui/material";

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
    if (!sessionStorage.getItem("hasReloaded")) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  // 🔹 Auto close modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
  

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

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          mt: "100px",
          position: "relative",
          backgroundImage: `url("https://i.ibb.co/mFyqzbng/grey-textured-background-1.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >

         <Container maxWidth="xl" disableGutters>
        {/* Images */}
        {[
          "https://i.ibb.co/ch6Pqwc4/1.webp",
          "https://i.ibb.co/HfdGFLhj/image.webp",
          "https://i.ibb.co/TBWgkXqD/image.webp",
          "https://i.ibb.co/jkwLkfpX/image.jpg",
        ].map((src, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: 8,
              mb: 8,
              position: index === 3 ? "relative" : "static",
            }}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                maxWidth: "1400px",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Container>

      </Box>

     
    </>
  );
};

export default FineArts;
