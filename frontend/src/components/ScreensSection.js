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
import { Container, Grid, Typography, Box, Button, Card, CircularProgress } from "@mui/material";

const carouselItems = [
  { id: 1, img: "https://i.ibb.co/LX7hG42y/image.webp" },
  { id: 2, img: "https://i.ibb.co/LX7hG42y/image.webp" },
  { id: 3, img: "https://i.ibb.co/LX7hG42y/image.webp" },
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

      <Container maxWidth="xl">
        <Box mt={6} sx={{ position: "relative", textAlign: "center" }}>
          <img
            src="https://i.ibb.co/0pn0zFPx/Screen-services-Bar-new-k.webp"
            alt="Banner"
            loading="lazy"
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "20px",
              paddingBottom: "30px",
            }}
          />
          <Button
            component="a"
            href="https://sssplatform.com"
            target="_blank" // opens in new tab
            rel="noopener noreferrer"
            variant="contained"
            size="small"
            sx={{
              position: "absolute",
              top: { xs: "40%", sm: "52%" },
              left: "30%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#da9030",
              color: "white",
              fontFamily: "Tajawal",
              fontWeight: 700,
              fontSize: { xs: "4px", sm: "11px", md: "20px" },
              px: { xs: 1, sm: 2 },
              py: { xs: 0.25, sm: 0.5 },
              borderRadius: "25px",
              boxShadow: 2,
              lineHeight: 1.5,
              whiteSpace: "normal",
              textAlign: "center",
              border: "2px solid black",
              animation: "blink 1s infinite",
              "&:hover": {
                backgroundColor: "#e9830f",
              },
              "@keyframes blink": {
                "0%": { opacity: 1 },
                "50%": { opacity: 0.5 },
                "100%": { opacity: 1 },
              },
            }}
          >
            لصيانة الشاشات اضغط هنا
          </Button>
        </Box>
      </Container>

        <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "60px", // ✅ extra space at bottom
        }}
      >
        <Container
          maxWidth="xl" // ✅ narrower container with left/right space
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              flexDirection: "column", // ✅ stacked layout
              alignItems: "stretch",   // ✅ full width instead of centered
            }}
          >
            {/* Image Section */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://i.ibb.co/0VdG8x9X/S1.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%", // ✅ fill horizontally within container
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "20px",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#b0b0b0",
                    p: 2,
                    borderRadius: "8px",
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Tajawal",
                      direction: "rtl",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية.
                والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء
                والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة
                من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "60px", // ✅ extra space at bottom
        }}
      >
        <Container
          maxWidth="xl" // ✅ narrower container with left/right space
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              flexDirection: "column", // ✅ stacked layout
              alignItems: "stretch",   // ✅ full width instead of centered
            }}
          >
            {/* Image Section */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://i.ibb.co/MyGgm2Gt/S2.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%", // ✅ fill horizontally within container
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "20px",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#b0b0b0",
                    p: 2,
                    borderRadius: "8px",
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Tajawal",
                      direction: "rtl",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية.
                والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء
                والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة
                من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>


      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "60px", // ✅ extra space at bottom
        }}
      >
        <Container
          maxWidth="xl" // ✅ narrower container with left/right space
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              flexDirection: "column", // ✅ stacked layout
              alignItems: "stretch",   // ✅ full width instead of centered
            }}
          >
            {/* Image Section */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://i.ibb.co/FqNPk4Wg/S3.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%", // ✅ fill horizontally within container
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "20px",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#b0b0b0",
                    p: 2,
                    borderRadius: "8px",
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Tajawal",
                      direction: "rtl",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية.
                والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء
                والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة
                من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>


      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "60px", // ✅ extra space at bottom
        }}
      >
        <Container
          maxWidth="xl" // ✅ narrower container with left/right space
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              flexDirection: "column", // ✅ stacked layout
              alignItems: "stretch",   // ✅ full width instead of centered
            }}
          >
            {/* Image Section */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://i.ibb.co/Fb6xZfJ1/S4.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%", // ✅ fill horizontally within container
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "20px",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#b0b0b0",
                    p: 2,
                    borderRadius: "8px",
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Tajawal",
                      direction: "rtl",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية.
                والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء
                والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة
                من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>


       <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "60px", // ✅ extra space at bottom
        }}
      >
        <Container
          maxWidth="xl" // ✅ narrower container with left/right space
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              flexDirection: "column", // ✅ stacked layout
              alignItems: "stretch",   // ✅ full width instead of centered
            }}
          >
            {/* Image Section */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://i.ibb.co/RGLf0CYC/S5.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%", // ✅ fill horizontally within container
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "20px",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#b0b0b0",
                    p: 2,
                    borderRadius: "8px",
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Tajawal",
                      direction: "rtl",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية.
                والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء
                والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة
                من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>


      
       <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "60px", // ✅ extra space at bottom
        }}
      >
        <Container
          maxWidth="xl" // ✅ narrower container with left/right space
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              flexDirection: "column", // ✅ stacked layout
              alignItems: "stretch",   // ✅ full width instead of centered
            }}
          >
            {/* Image Section */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://i.ibb.co/nNRK64R6/S6.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%", // ✅ fill horizontally within container
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "20px",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#b0b0b0",
                    p: 2,
                    borderRadius: "8px",
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Tajawal",
                      direction: "rtl",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية.
                والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء
                والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة
                من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>


       <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "60px", // ✅ extra space at bottom
        }}
      >
        <Container
          maxWidth="xl" // ✅ narrower container with left/right space
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              flexDirection: "column", // ✅ stacked layout
              alignItems: "stretch",   // ✅ full width instead of centered
            }}
          >
            {/* Image Section */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://i.ibb.co/BHjVnLb3/S7.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%", // ✅ fill horizontally within container
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "20px",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#b0b0b0",
                    p: 2,
                    borderRadius: "8px",
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Tajawal",
                      direction: "rtl",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية.
                والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء
                والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة
                من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>


          <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "60px", // ✅ extra space at bottom
        }}
      >
        <Container
          maxWidth="xl" // ✅ narrower container with left/right space
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              flexDirection: "column", // ✅ stacked layout
              alignItems: "stretch",   // ✅ full width instead of centered
            }}
          >
            {/* Image Section */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://i.ibb.co/CKzPjyH1/S8.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%", // ✅ fill horizontally within container
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "20px",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#b0b0b0",
                    p: 2,
                    borderRadius: "8px",
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Tajawal",
                      direction: "rtl",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية.
                والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء
                والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة
                من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>


         <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "60px", // ✅ extra space at bottom
        }}
      >
        <Container
          maxWidth="xl" // ✅ narrower container with left/right space
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              flexDirection: "column", // ✅ stacked layout
              alignItems: "stretch",   // ✅ full width instead of centered
            }}
          >
            {/* Image Section */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://i.ibb.co/XZhxzxRR/S9.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%", // ✅ fill horizontally within container
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "20px",
                  borderRadius: "8px",
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: "#b0b0b0",
                    p: 2,
                    borderRadius: "8px",
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Tajawal",
                      direction: "rtl",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية.
                والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء
                والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة
                من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>




    </>
  );
};

export default ScreensSection;
