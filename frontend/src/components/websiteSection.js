import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaInstagram, FaLinkedin, FaYoutube, FaSnapchat, FaTiktok, FaWhatsapp 
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Container, Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Configuration Constants
const HERO_IMAGE = "https://i.ibb.co/6JRwt37p/02-jpg-1.webp";
const BORDER_THICKNESS = 18;
const SECTION_SPACING = { xs: "60px", md: "120px" }; 

const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

/**
 * Reusable Image Block Component
 * Features a 3D glow effect and a bottom-right "Move to Section" button.
 */
const ImageBlock = ({ src }) => (
  <Box sx={{ display: "flex", justifyContent: "center", perspective: "1600px" }}>
    <Box sx={{ 
      position: "relative", 
      width: "100%", 
      transformStyle: "preserve-3d",
      transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "&:hover": {
        transform: "scale(1.02) translateY(-5px)",
      }
    }}>
      {/* 1. Main Content Image */}
      <Box
        component="img"
        src={src}
        loading="lazy"
        decoding="async"
        alt="Project Preview"
        sx={{
          width: "100%",
          borderRadius: "22px",
          zIndex: 10,
          boxShadow: "35px 35px 45px rgba(0,0,0,0.65)",
          display: "block",
          minHeight: "200px",
          backgroundColor: "#1a1a1a",
          position: "relative"
        }}
      />

      {/* 2. Floating Action Button (Bottom Right) */}
      <Box sx={{
        position: "absolute",
        bottom: { xs: "15px", md: "30px" },
        right: { xs: "15px", md: "40px" },
        zIndex: 20,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        border: "2px solid #06f9f3", 
        borderRadius: "50px", 
        padding: { xs: "6px 16px", md: "10px 32px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 15px rgba(6, 249, 243, 0.3)",
        transition: "all 0.3s ease",
        backdropFilter: "blur(4px)",
        "&:hover": {
          backgroundColor: "#06f9f3",
          boxShadow: "0 0 25px rgba(6, 249, 243, 0.7)",
          transform: "translateY(-2px)",
          "& .btn-text": { color: "#000" }
        }
      }}>
        <Typography 
          className="btn-text"
          sx={{ 
            color: "#06f9f3", 
            fontWeight: "800", 
            fontSize: { xs: "14px", md: "18px" },
            whiteSpace: "nowrap",
            direction: "rtl",
            fontFamily: "inherit"
          }}
        >
          انتقل إلى القسم
        </Typography>
      </Box>

      {/* 3. Glowing Border (Layer Behind) */}
      <Box sx={{
          position: "absolute", 
          inset: "-6px", 
          borderRadius: "28px",
          background: "linear-gradient(135deg,#06f9f3,#00b3ff,#06f9f3)",
          filter: "blur(14px)", 
          transform: `translateZ(-${BORDER_THICKNESS}px)`, 
          zIndex: 6,
      }} />
      
      {/* 4. Depth Layer (Dark Shadow Background) */}
      <Box sx={{
          position: "absolute", 
          inset: 0, 
          borderRadius: "22px", 
          background: "#031d1d",
          transform: `translateZ(-${BORDER_THICKNESS * 2.5}px)`, 
          zIndex: 4,
      }} />
    </Box>
  </Box>
);

function WebsiteSection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ width: "100%", m: 0, p: 0, overflowX: "hidden", backgroundColor: "#000" }}>
      
      {/* HERO SECTION */}
      <Box sx={{ width: '100%', position: 'relative', backgroundColor: "#000" }}>
        <img
          src={HERO_IMAGE}
          alt="Printing Hero"
          fetchpriority="high"
          loading="eager"
          decoding="sync"
          style={{ 
            width: '100%', 
            marginTop: '60px', 
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center' 
          }}
        />
      </Box>

      {/* FIXED SOCIAL SIDEBAR */}
      <Box sx={{
          position: "fixed", 
          top: "50%", 
          left: 0, 
          transform: "translateY(-50%)",
          display: { xs: "none", md: "flex" }, 
          flexDirection: "column", 
          gap: 2, 
          zIndex: 1200, 
          pl: 2,
        }}>
        {socialLinks.map(({ icon, link }, idx) => (
          <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
            <Box sx={{
                width: 42, 
                height: 42, 
                borderRadius: "50%", 
                backgroundColor: "#06f9f3", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                color: "#17202a", 
                boxShadow: "0px 4px 10px rgba(6, 249, 243, 0.4)",
                transition: "all 0.3s ease", 
                "&:hover": { 
                    transform: "scale(1.2) translateX(5px)", 
                    backgroundColor: "#fff" 
                },
              }}>
              {icon}
            </Box>
          </a>
        ))}
      </Box>

      {/* MAIN CONTENT AREA */}
      <Box sx={{
          width: "100%", 
          backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundAttachment: "fixed", // Parallax effect
          pt: SECTION_SPACING, 
          pb: SECTION_SPACING 
        }}>
        <Container maxWidth="xxl" sx={{ px: { xs: 2, md: 30 } }}>
          <Stack spacing={SECTION_SPACING}>
            
            {/* Project 01 */}
            <Link to="/project01" style={{ textDecoration: 'none' }}>
                <ImageBlock src="https://i.ibb.co/mCSvD9zV/002-1-1-optimized.webp" />
            </Link>
            
            {/* Project 02 */}
            <Link to="/project02" style={{ textDecoration: 'none' }}>
                <ImageBlock src="https://i.ibb.co/s9zfwQ9h/003-1.webp" />
            </Link>

          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default WebsiteSection;