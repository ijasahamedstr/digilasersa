import { useEffect } from "react";
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
const HERO_IMAGE = "https://i.ibb.co/5rsMjx9/New-Web-Print.webp";

const BORDER_THICKNESS = 18;
// Use a constant for spacing to keep it "Same" everywhere
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

const PrintingSection = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  return (
    <>
      {/* Carousel Section */}
      <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
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
                  display: 'block'
                }}
              />
              
              {/* Optional: Add an overlay if you want to place text over the image later */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                background: 'rgba(0,0,0,0.1)' // Very light dark tint
              }} />
            </div>

        {/* Floating Social Icons */}
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

      {/* Main Content Area */}
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          // 🔹 Uniform Top and Bottom Padding
          pt: SECTION_SPACING, 
          pb: SECTION_SPACING,
        }}
      >
        <Container 
          maxWidth="xl" 
          sx={{ 
            px: { xs: 3, md: 6 }, 
            display: "flex",
            flexDirection: "column",
            // 🔹 Uniform Space BETWEEN items
            gap: SECTION_SPACING, 
          }}
        >
          {/* IMAGE BLOCK 1 */}
          <Box sx={{ perspective: "1600px" }}>
            <Box sx={{ position: "relative", width: "100%", transformStyle: "preserve-3d" }}>
              <Box
                component="img"
                src="https://i.ibb.co/XZYQG598/004-1.webp"
                alt="Fine Arts 1"
                sx={{
                  width: "100%",
                  borderRadius: "22px",
                  zIndex: 10,
                  boxShadow: { xs: "15px 15px 25px rgba(0,0,0,0.5)", md: "35px 35px 45px rgba(0,0,0,0.65)" },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: "-4px",
                  borderRadius: "26px",
                  background: "linear-gradient(135deg,#06f9f3,#00b3ff,#06f9f3)",
                  filter: "blur(12px)",
                  transform: `translateZ(-${BORDER_THICKNESS}px)`,
                  zIndex: 6,
                }}
              />
            </Box>
          </Box>

          {/* IMAGE BLOCK 2 */}
          <Box sx={{ perspective: "1600px" }}>
            <Box sx={{ position: "relative", width: "100%", transformStyle: "preserve-3d" }}>
              <Box
                component="img"
                src="https://i.ibb.co/ksrBBTCj/005-1.jpg"
                alt="Fine Arts 2"
                sx={{
                  width: "100%",
                  borderRadius: "22px",
                  zIndex: 10,
                  boxShadow: { xs: "15px 15px 25px rgba(0,0,0,0.5)", md: "35px 35px 45px rgba(0,0,0,0.65)" },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: "-4px",
                  borderRadius: "26px",
                  background: "linear-gradient(135deg,#06f9f3,#00b3ff,#06f9f3)",
                  filter: "blur(12px)",
                  transform: `translateZ(-${BORDER_THICKNESS}px)`,
                  zIndex: 6,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PrintingSection;