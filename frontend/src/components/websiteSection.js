import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaSnapchat, 
  FaTiktok, 
  FaWhatsapp 
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Container, Box, Stack } from "@mui/material";

// Configuration
const HERO_IMAGE = "https://i.ibb.co/HfQ3t7qN/image.webp";
const BORDER_THICKNESS = 18;
const IMAGE_GAP = "200px";

const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

const ImageBlock = ({ src }) => (
  <Box sx={{ display: "flex", justifyContent: "center", perspective: "1600px" }}>
    <Box sx={{ position: "relative", width: "100%", transformStyle: "preserve-3d" }}>
      <Box
        component="img"
        src={src}
        sx={{
          width: "100%",
          borderRadius: "22px",
          zIndex: 10,
          boxShadow: "35px 35px 45px rgba(0,0,0,0.65)",
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
    <Box sx={{ width: "100%", m: 0, p: 0, overflowX: "hidden" }}>
      
      {/* 1. HERO SECTION - Account for 100px padding top */}
      <div 
      style={{
        width: '100%',
        margin: 0,
        padding: 0,
        paddingTop: '3.25%', // 16:9 Aspect Ratio
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#000' // Fallback color
      }}
    >
      <img
        src={HERO_IMAGE}
        alt="Lyceum Campus Hero"
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
      
      {/* Optional: Add an overlay if you want to place text over the image later */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.1)' // Very light dark tint
      }} />
    </div>

      {/* 2. FIXED SOCIAL ICONS */}
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
          <a key={idx} href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                width: 42, height: 42, borderRadius: "50%",
                backgroundColor: "#06f9f3", display: "flex",
                justifyContent: "center", alignItems: "center",
                color: "#17202a", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              {icon}
            </Box>
          </a>
        ))}
      </Box>

      {/* 3. MAIN SECTION - Content below the Hero */}
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 10
        }}
      >
        <Container maxWidth="xxl" sx={{ px: { xs: 2, md: 15 } }}>
          <Stack spacing={IMAGE_GAP}>
            <ImageBlock src="https://i.ibb.co/Y4Gt7Fjh/001-1.jpg" />
            <ImageBlock src="https://i.ibb.co/67JvCw35/002-1-1.webp" />
            <ImageBlock src="https://i.ibb.co/m5GXsqS1/003-1.jpg" />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default WebsiteSection;