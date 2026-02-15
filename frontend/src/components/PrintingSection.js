import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram, FaLinkedin, FaYoutube, FaSnapchat, FaTiktok, FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Container, Box } from "@mui/material";

const HERO_IMAGE = "https://i.ibb.co/5rsMjx9/New-Web-Print.webp";
const BORDER_THICKNESS = 18;
const SECTION_SPACING = { xs: 10, md: 20 };

const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

const LazyImageBlock = ({ src, alt }) => (
  <Box sx={{ perspective: "1600px", cursor: "pointer" }}>
    <Box sx={{ 
      position: "relative", 
      width: "100%", 
      transformStyle: "preserve-3d", 
      transition: "transform 0.5s ease", 
      "&:hover": { transform: "translateZ(10px)" } 
    }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        sx={{
          width: "100%",
          borderRadius: "22px",
          zIndex: 10,
          display: "block",
          boxShadow: { xs: "15px 15px 25px rgba(0,0,0,0.5)", md: "35px 35px 45px rgba(0,0,0,0.65)" },
          backgroundColor: "#111",
          minHeight: { xs: "200px", md: "400px" } 
        }}
      />
      <Box sx={{
          position: "absolute", 
          inset: "-4px", 
          borderRadius: "26px",
          background: "linear-gradient(135deg,#06f9f3,#00b3ff,#06f9f3)",
          filter: "blur(12px)", 
          transform: `translateZ(-${BORDER_THICKNESS}px)`, 
          zIndex: 6,
      }} />
    </Box>
  </Box>
);

const PrintingSection = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* HERO SECTION - Height reduced to 50% of viewport */}
      <Box sx={{ 
        width: "100%",          // Sets the section height to 50% of the screen
        overflow: "hidden", 
        position: "relative", 
        backgroundColor: '#000',
        pt: '60px'                // Padding to accommodate your navbar height
      }}>
        <img
          src={HERO_IMAGE}
          alt="Printing Hero"
          fetchpriority="high"
          loading="eager"
          decoding="sync"
          style={{ 
            width: '100%', 
            height: '100%',       // Force image to fill the 50vh container
            objectFit: 'cover',   // Prevents stretching/distortion
            display: 'block'
          }}
        />

        {/* Floating Social Icons */}
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
                width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3",
                display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a",
                boxShadow: 3, transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" },
              }}>
                {icon}
              </Box>
            </a>
          ))}
        </Box>
      </Box>

      {/* MAIN CONTENT AREA */}
      <Box sx={{
        width: "100%",
        backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        pt: SECTION_SPACING, 
        pb: SECTION_SPACING,
      }}>
        <Container maxWidth="xl" sx={{ 
          px: { xs: 3, md: 6 }, 
          display: "flex", 
          flexDirection: "column", 
          gap: SECTION_SPACING 
        }}>
          
          {/* LINKED IMAGE 1 */}
          <Link to="/project01" style={{ textDecoration: 'none' }}>
            <LazyImageBlock src="https://i.ibb.co/XZYQG598/004-1.webp" alt="Arabic Calligraphy" />
          </Link>

          {/* LINKED IMAGE 2 */}
          <Link to="/project01" style={{ textDecoration: 'none' }}>
            <LazyImageBlock src="https://i.ibb.co/ksrBBTCj/005-1.jpg" alt="Fine Arts" />
          </Link>

        </Container>
      </Box>
    </>
  );
};

export default PrintingSection;