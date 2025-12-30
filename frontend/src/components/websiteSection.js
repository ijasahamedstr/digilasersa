import { Carousel } from "react-bootstrap";
import {
  Box,
  Typography,
  CircularProgress
} from "@mui/material";
import Container from "@mui/material/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
import { useState, useEffect } from "react";





const WebsiteSection = () => {
  const [loading, setLoading] = useState(true); // 🔹 Splash screen state


   // 🔹 Show splash for 2s then remove
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
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


  return (
    <>
    <Container
      maxWidth={false}
      sx={{ padding: 0 }}
      style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "100px" }}
    >
      <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
        {/* Social Media Icons - Hidden on Mobile */}
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            display: {
              xs: "none", // Hide on extra-small and small screens
              md: "flex", // Show on medium screens and up
            },
            flexDirection: "column",
            gap: "15px",
            zIndex: 2,
            paddingLeft: 2,
          }}
        >
          {[
            {
              icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
              link: "https://x.com/digilasersa",
            },
            {
              icon: <FaInstagram size={25} />,
              link: "https://www.instagram.com/digilasersa",
            },
            {
              icon: <FaLinkedin size={25} />,
              link: "https://www.linkedin.com/company/digilasersa",
            },
            {
              icon: <FaYoutube size={25} />,
              link: "https://youtube.com/@digilaserSa",
            },
            {
              icon: <FaSnapchat size={25} />,
              link: "https://www.snapchat.com/add/digilasersa",
            },
            {
              icon: <FaTiktok size={25} />,
              link: "https://www.tiktok.com/@digilasersa",
            },
            {
              icon: <FaWhatsapp size={25} />,
              link: "http://wa.me/966571978888",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
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
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                {social.icon}
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </Container>
    
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 8,   // 👈 MORE TOP SPACE (64px)
            mb: 8,   // 👈 MORE BOTTOM SPACE (64px)
          }}
        >
          <img
            src="https://i.ibb.co/cKdNcSTQ/001-1.jpg"
            alt="Image 01"
            style={{
              width: "100%",
              maxWidth: "1400px",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
          <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 8,   // 👈 MORE TOP SPACE (64px)
            mb: 8,   // 👈 MORE BOTTOM SPACE (64px)
          }}
        >
          <img
            src="https://i.ibb.co/vxQNxvFf/002-1.jpg"
            alt="Image 01"
            style={{
              width: "100%",
              maxWidth: "1400px",
              height: "auto",
              display: "block",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 8,
            mb: 8,
          }}
        >
          <img
            src="https://i.ibb.co/m5GXsqS1/003-1.jpg"
            alt="Image 02"
            style={{
              width: "100%",
              maxWidth: "1400px",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      </Container>
      </Box>
    </>
  );
};

export default WebsiteSection;
