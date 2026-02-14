import { useEffect } from "react";
import { Link } from "react-router-dom"; // 🔹 Import Link for internal routing
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
import { Container, Box, Stack, Button } from "@mui/material";

const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

const BORDER_THICKNESS = 18;
const IMAGE_GAP = "200px";

const FineArts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("hasReloaded")) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  const ImageBlock = ({ src, altText, to = "/", btnText = "انتقل إلى القسم" }) => (
    <Box
      component={Link} // 🔹 Changed from "a" to Link
      to={to}          // 🔹 Changed from "href" to "to"
      sx={{
        display: "flex",
        justifyContent: "center",
        perspective: "1600px",
        position: "relative",
        textDecoration: "none",
        cursor: "pointer",
        "&:hover img": {
          transform: "scale(1.02)",
          transition: "0.3s ease",
        },
      }}
    >
      <Box sx={{ position: "relative", width: "100%", transformStyle: "preserve-3d" }}>
        
        {/* MAIN IMAGE */}
        <Box
          component="img"
          src={src}
          alt={altText}
          sx={{
            width: "100%",
            borderRadius: "22px",
            zIndex: 10,
            boxShadow: "35px 35px 45px rgba(0,0,0,0.65)",
            transition: "0.3s ease",
          }}
        />

        {/* 🔘 STYLIZED BUTTON */}
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            zIndex: 25,
            backgroundColor: "#121212", 
            color: "#06f9f3", 
            fontWeight: "bold",
            borderRadius: "50px", 
            border: "2px solid #06f9f3", 
            px: 6, 
            py: 1.5, 
            textTransform: "none",
            fontSize: "1.4rem", 
            boxShadow: "0px 0px 15px rgba(6, 249, 243, 0.5)",
            pointerEvents: "none", // Ensures click goes to the Link component
          }}
        >
          {btnText}
        </Button>

        {/* 3D EFFECTS */}
        <Box sx={{ position: "absolute", inset: "-6px", borderRadius: "28px", background: "linear-gradient(135deg,#06f9f3,#00b3ff,#06f9f3)", filter: "blur(14px)", transform: `translateZ(-${BORDER_THICKNESS}px)`, zIndex: 6 }} />
        <Box sx={{ position: "absolute", inset: 0, borderRadius: "22px", background: "#031d1d", transform: `translateZ(-${BORDER_THICKNESS * 2.5}px)`, zIndex: 4 }} />
        <Box sx={{ position: "absolute", inset: "-25px", borderRadius: "36px", background: "rgba(0,0,0,0.9)", filter: "blur(35px)", transform: `translateZ(-${BORDER_THICKNESS * 4}px)`, zIndex: 1 }} />
      </Box>
    </Box>
  );

  return (
    <>
      {/* SOCIAL ICONS */}
      <Box sx={{ position: "fixed", top: "50%", left: 0, transform: "translateY(-50%)", display: { xs: "none", md: "flex" }, flexDirection: "column", gap: 2, zIndex: 1200, pl: 2 }}>
        {socialLinks.map(({ icon, link }, idx) => (
          <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
            <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", transition: "0.3s", "&:hover": { transform: "scale(1.2)" } }}>
              {icon}
            </Box>
          </a>
        ))}
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ width: "100%", mt: "100px", backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
        <Container maxWidth="xxl" disableGutters sx={{ mt: 10, p: { xs: 5, md: 30 } }}>
          <Stack spacing={IMAGE_GAP}>
            <ImageBlock 
              src="https://i.ibb.co/ch6Pqwc4/1.webp" 
              to="/FineArts1" 
              altText="Fine Arts 1" 
            />
            <ImageBlock 
              src="https://i.ibb.co/HfdGFLhj/image.webp" 
              to="/FineArts2" 
              altText="Fine Arts 2" 
            />
            <ImageBlock 
              src="https://i.ibb.co/TBWgkXqD/image.webp" 
              to="/FineArts3" 
              altText="Fine Arts 3" 
            />
            <ImageBlock 
              src="https://i.ibb.co/ZRhj4MH7/image.webp" 
              to="/FineArts4" 
              altText="Fine Arts 4" 
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FineArts;