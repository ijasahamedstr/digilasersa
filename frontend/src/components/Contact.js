import { useState, useEffect } from "react";
import { Container, Box, CircularProgress } from "@mui/material";
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

const ContactusForm = () => {
  const [loading, setLoading] = useState(true);

  // Show splash screen for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
    { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
    { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
    { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
    { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
    { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
    { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
  ];

  // --- Splash Screen Overlay ---
  if (loading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "10vh",
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

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ padding: 0 }}
        style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "100px" }}
      >
        {/* Single High-Quality Image Section */}
        <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
          <img
            src="https://i.ibb.co/3ycMw6Df/ejas-2.webp" // High-quality image URL
            alt="Main Visual"
            style={{
              width: "100%",
              maxHeight: "60vh",
              objectFit: "cover",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
            }}
          />
        </Box>

        {/* Social Media Icons on the Left Side */}
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
      </Container>

      {/* Rest of your Contact Section remains unchanged */}
      <Container
        maxWidth={false}
        sx={{ padding: 0 }}
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        <section
          style={{
            backgroundColor: "#000000",
            backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
            width: "100%",
            margin: "0 auto",
            marginBottom: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px",
            paddingBottom: "50px",
            marginTop: "-30px",
            direction: "rtl",
          }}
        >
          {/* ...Your existing Grid/Form content stays exactly the same... */}
        </section>
      </Container>
    </>
  );
};

export default ContactusForm;
