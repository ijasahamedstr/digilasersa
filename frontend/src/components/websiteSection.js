import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaInstagram, FaLinkedin, FaYoutube, FaSnapchat, FaTiktok, FaWhatsapp 
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Container, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

// Configuration
const HERO_IMAGE = "https://i.ibb.co/6JRwt37p/02-jpg-1.webp";
const BORDER_THICKNESS = 18;
const SECTION_SPACING = "120px"; 

const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

// Optimized Image Component
const ImageBlock = ({ src }) => (
  <Box sx={{ display: "flex", justifyContent: "center", perspective: "1600px" }}>
    <Box sx={{ position: "relative", width: "100%", transformStyle: "preserve-3d" }}>
      <Box
        component="img"
        src={src}
        loading="lazy" // Native Lazy Loading
        decoding="async" // Non-blocking image decoding
        alt="Project Preview"
        sx={{
          width: "100%",
          borderRadius: "22px",
          zIndex: 10,
          boxShadow: "35px 35px 45px rgba(0,0,0,0.65)",
          display: "block",
          minHeight: "200px", // Prevents layout shift
          backgroundColor: "#1a1a1a" // Placeholder color while loading
        }}
      />
      <Box sx={{
          position: "absolute", inset: "-6px", borderRadius: "28px",
          background: "linear-gradient(135deg,#06f9f3,#00b3ff,#06f9f3)",
          filter: "blur(14px)", transform: `translateZ(-${BORDER_THICKNESS}px)`, zIndex: 6,
      }} />
      <Box sx={{
          position: "absolute", inset: 0, borderRadius: "22px", background: "#031d1d",
          transform: `translateZ(-${BORDER_THICKNESS * 2.5}px)`, zIndex: 4,
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
      
        <Box sx={{ width: '100%', position: 'relative', aspectRatio: { xs: "16/9", md: "21/9" }, backgroundColor: "#111" }}>
          <img
            src={HERO_IMAGE}
            alt="Printing Hero"
            fetchpriority="high"
            loading="eager"
            decoding="sync"
            style={{ width: '100%', display: 'block',marginTop:'60px' }}
          />
        </Box>

      {/* 2. FIXED SOCIAL ICONS */}
      <Box sx={{
          position: "fixed", top: "50%", left: 0, transform: "translateY(-50%)",
          display: { xs: "none", md: "flex" }, flexDirection: "column", gap: 2, zIndex: 1200, pl: 2,
        }}>
        {socialLinks.map(({ icon, link }, idx) => (
          <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
            <Box sx={{
                width: 42, height: 42, borderRadius: "50%", backgroundColor: "#06f9f3", 
                display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", 
                transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" },
              }}>
              {icon}
            </Box>
          </a>
        ))}
      </Box>

      {/* 3. MAIN CONTENT SECTION */}
      <Box sx={{
          width: "100%", 
          backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`,
          backgroundSize: "cover", backgroundPosition: "center", pt: SECTION_SPACING, pb: SECTION_SPACING 
        }}>
        <Container maxWidth="xxl" sx={{ px: { xs: 2, md: 30 } }}>
          <Stack spacing={SECTION_SPACING}>
            <Link to="/project01" style={{ textDecoration: 'none' }}>
                <ImageBlock src="https://i.ibb.co/mCSvD9zV/002-1-1-optimized.webp" />
            </Link>
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