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
import { Container, Box, Stack } from "@mui/material";

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
const IMAGE_GAP = "200px"; // 🔥 CONTROL ALL IMAGE SPACING HERE

const FineArts = () => {
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

  const ImageBlock = ({ src, altText }) => (
    <Box sx={{ display: "flex", justifyContent: "center", perspective: "1600px" }}>
      <Box sx={{ position: "relative", width: "100%", transformStyle: "preserve-3d" }}>
        <Box
          component="img"
          src={src}
          alt={altText}
          sx={{
            width: "100%",
            borderRadius: "22px",
            zIndex: 10,
            boxShadow: "35px 35px 45px rgba(0,0,0,0.65)",
          }}
        />

        {/* GLOW */}
        <Box
          sx={{
            position: "absolute",
            inset: "-6px",
            borderRadius: "28px",
            background: "linear-gradient(135deg,#06f9f3,#00b3ff,#06f9f3)",
            filter: "blur(14px)",
            transform: `translateZ(-${BORDER_THICKNESS}px)`,
            zIndex: 6,
          }}
        />

        {/* DEPTH PLATE */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "22px",
            background: "#031d1d",
            transform: `translateZ(-${BORDER_THICKNESS * 2.5}px)`,
            zIndex: 4,
          }}
        />

        {/* SHADOW */}
        <Box
          sx={{
            position: "absolute",
            inset: "-25px",
            borderRadius: "36px",
            background: "rgba(0,0,0,0.9)",
            filter: "blur(35px)",
            transform: `translateZ(-${BORDER_THICKNESS * 4}px)`,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );

  return (
    <>
      {/* SOCIAL ICONS */}
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

      {/* MAIN SECTION */}
      <Box
        sx={{
          width: "100%",
          mt: "100px",
          backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xxl" disableGutters sx={{ mt: 10, p: 15 }}>
          <Stack spacing={IMAGE_GAP}>
            <ImageBlock src="https://i.ibb.co/ch6Pqwc4/1.webp" altText="Fine Arts Portfolio Item 1" />
            <ImageBlock src="https://i.ibb.co/HfdGFLhj/image.webp" altText="Fine Arts Portfolio Item 2" />
            <ImageBlock src="https://i.ibb.co/TBWgkXqD/image.webp" altText="Fine Arts Portfolio Item 3" />
            <ImageBlock src="https://i.ibb.co/ZRhj4MH7/image.webp" altText="Fine Arts Portfolio Item 4" />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FineArts;