import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
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
import { Container, Grid, Box, Button, CircularProgress } from "@mui/material";
import Hr from "./hr";

const carouselItems = [
  { id: 1, img: "https://i.ibb.co/TD4r1DbM/image.webp" },
  { id: 2, img: "https://i.ibb.co/TD4r1DbM/image.webp" },
  { id: 3, img: "https://i.ibb.co/TD4r1DbM/image.webp" },
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

const ScreensSection = () => {
  const [showModal, setShowModal] = useState(true);
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

  // 🔹 Auto close modal after 2 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
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
      {/* Image Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl"
        dialogClassName="modal-fullscreen"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <Modal.Body
          style={{
            height: "100vh",
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            position: "relative",
            marginTop: "100px",
          }}
        >
          <img
            src="https://i.ibb.co/JRM6pZqR/11488254-copy.webp"
            alt="Welcome"
            style={{ width: "100%", height: "100%", objectFit: "fit" }}
          />
          <Button
            onClick={() => setShowModal(false)}
            sx={{
              position: "absolute",
              bottom: 30,
              right: 30,
              backgroundColor: "#00fffc",
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Changa, sans-serif",
              px: 3,
              py: 1,
              borderRadius: "20px",
              boxShadow: "0 4px 15px rgba(0, 255, 252, 0.4)",
              fontSize: "1.8rem",
              animation: "pulseBlink 1.2s infinite",
              "&:hover": {
                transform: "scale(1.3)",
                boxShadow: "0 6px 20px rgba(0,255,252,0.8)",
              },
              transition: "all 0.3s ease",
              "@keyframes pulseBlink": {
                "0%": { backgroundColor: "#00fffc", transform: "scale(1)" },
                "25%": { backgroundColor: "#00cccc", transform: "scale(1.05)" },
                "50%": { backgroundColor: "#00fffc", transform: "scale(1.1)" },
                "75%": { backgroundColor: "#00cccc", transform: "scale(1.05)" },
                "100%": { backgroundColor: "#00fffc", transform: "scale(1)" },
              },
            }}
          >
            تخطي
          </Button>
        </Modal.Body>
      </Modal>

      {/* Carousel Section */}
      <Box sx={{ width: "100%", overflow: "hidden", mt: "100px", position: "relative" }}>
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
              py: 3,
              backgroundImage: `url("https://i.ibb.co/mFyqzbng/grey-textured-background-1.jpg")`, // ✅ Your background image here
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              paddingTop:'0px'
            }}
          >
        <Container maxWidth="xl">
        <Box mt={6} sx={{ position: "relative", textAlign: "center" }}>
          <Grid item xs={12}>
             <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
              <img
                src="https://i.ibb.co/JW96kTbM/1.webp"
                alt="Image 01"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  display: "block",
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                  marginBottom:'30px'
                }}
              />
            </Box>
          </Grid>

          {/* Image Section */}
            <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
              <a href="https://sssplatform.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.ibb.co/YFmVDcNp/Whats-App-Image-2025-11-25-at-1-17-10-PM.jpg"
                alt="Image 01"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  display: "block",
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                }}
              />
              </a>
            </Box>

        </Box>
      </Container>
      </Box>

   <Container
  maxWidth={false}
  disableGutters
  sx={{
    padding: 0,
    margin: 0,
    width: "100%",
  }}
>

    <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/hJd60qFJ/Whats-App-Image-2025-11-20-at-11-09-42-AM.webp"
      alt="Image 01"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>

  {/* IMAGE 01 */}
  <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/DPP7FB7Q/01-copy.webp"
      alt="Image 01"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>

  {/* IMAGE 02 */}
  <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/2HYxrqw/02-copy.webp"
      alt="Image 02"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>

  {/* IMAGE 03 */}
  <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/DHpw8CQ4/03.webp"
      alt="Image 03"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>
  <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/FqX9JpSF/0004.webp"
      alt="Image 03"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>



<Box
  sx={{
    display: "flex",
    gap: 2,
    width: "100%",
    overflow: "hidden",
  }}
>
  {/* Image 1 - GIF */}
  <Box
    sx={{
      flex: "0 0 30%",
      position: "relative",
      mb: 0,
      pb: 0,
    }}
  >
    <img
      src="https://i.ibb.co/p7gDtSH/scrren.gif"
      alt="GIF Image"
      style={{
        objectFit: "fill",
        width: "100%",
        height: "95%",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
        marginBottom: "0",   // ⬅️ Force no bottom space
        paddingBottom: "0",
      }}
    />
  </Box>

  {/* Image 2 - WebP */}
  <Box
    sx={{
      flex: "0 0 70%",
      position: "relative",
      mb: 0,
      pb: 0,
    }}
  >
    <img
      src="https://i.ibb.co/4gVbPdHj/5.webp"
      alt="WebP Image"
      style={{
        objectFit: "fill",
        width: "100%",
        height: "95%",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
        marginBottom: "0",  // ⬅️ Remove bottom space
        paddingBottom: "0",
      }}
    />
  </Box>
</Box>
  <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
    <img
      src="https://i.ibb.co/Y7twRGkm/copy-1.jpg"
      alt="Image 03"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "auto",
        display: "block",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>
</Container>
      <Hr />
    </>
  );
};

export default ScreensSection;
