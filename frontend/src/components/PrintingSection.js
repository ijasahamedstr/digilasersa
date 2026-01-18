import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
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

const BORDER_THICKNESS = 18;

const carouselItems = [
  { id: 1, img: "https://i.ibb.co/5rsMjx9/New-Web-Print.webp" },
  { id: 2, img: "https://i.ibb.co/5rsMjx9/New-Web-Print.webp" },
  { id: 3, img: "https://i.ibb.co/5rsMjx9/New-Web-Print.webp" },
];

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

  return (
    <>
      {/* Carousel Section */}
      <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
        <Carousel
          fade
          nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: "black" }} />}
          prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: "black" }} />}
        >
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={`slide-${item.id}`}
                style={{ objectFit: "cover", boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

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
      </Box>

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xxl" disableGutters sx={{ mt: 10, padding: 15 }}>
          {/* IMAGE BLOCK 1 */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: "200px", perspective: "1600px" }}>
            <Box sx={{ position: "relative", width: "100%", transformStyle: "preserve-3d" }}>
              <Box
                component="img"
                src="https://i.ibb.co/r2xFBdXD/004-1.jpg"
                alt="Fine Arts 1"
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

              {/* DARK SHADOW */}
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

          {/* IMAGE BLOCK 2 */}
          <Box sx={{ display: "flex", justifyContent: "center", perspective: "1600px" }}>
            <Box sx={{ position: "relative", width: "100%", transformStyle: "preserve-3d" }}>
              <Box
                component="img"
                src="https://i.ibb.co/ksrBBTCj/005-1.jpg"
                alt="Fine Arts 2"
                sx={{
                  width: "100%",
                  borderRadius: "22px",
                  zIndex: 10,
                  boxShadow: "35px 35px 45px rgba(0,0,0,0.65)",
                }}
              />

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
        </Container>
      </Box>
    </>
  );
};

export default PrintingSection;