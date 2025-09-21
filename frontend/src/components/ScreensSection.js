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
  { id: 1, img: "https://i.ibb.co/Kx2gxHcg/Top-Screen.webp" },
  { id: 2, img: "https://i.ibb.co/Kx2gxHcg/Top-Screen.webp" },
  { id: 3, img: "https://i.ibb.co/Kx2gxHcg/Top-Screen.webp" },
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
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="small"
            sx={{
              // keyframes for border size + color blink
              "@keyframes borderBlink": {
                "0%": { borderColor: "#096e69", borderWidth: "2px" },
                "25%": { borderColor: "#ff9800", borderWidth: "4px" },
                "50%": { borderColor: "#e91e63", borderWidth: "6px" },
                "75%": { borderColor: "#2196f3", borderWidth: "4px" },
                "100%": { borderColor: "#096e69", borderWidth: "2px" },
              },

              animation: "borderBlink 1.5s ease-in-out infinite",

              position: "absolute",
              top: { xs: "43%", sm: "55%" },
              left: "30%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              color: "#096e69",
              fontFamily: "Tajawal",
              fontWeight: 700,
              fontSize: { xs: "5px", sm: "14px", md: "14px" },
              px: { xs: 1, sm: 2 },
              py: { xs: 0.25, sm: 0.5 },
              borderRadius: "25px",
              border: "2px solid #096e69",
              lineHeight: 1.5,
              whiteSpace: "normal",
              textAlign: "center",
              "&:hover": {
                backgroundColor: "#e6e6e6",
                transform: "translate(-50%, -50%) scale(1.05)",
              },

              "@media (prefers-reduced-motion: reduce)": {
                animation: "none",
              },
            }}
          >
            للانتقال إلى منصة الصيانة
            <br />
            الرجاء الضغط هنا
          </Button>
        </Box>
      </Container>


      <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Container maxWidth="xxl" sx={{ mb: "30px", px: { xs: "20px", sm: "100px" } }}>
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              borderTop: { xs: "none", md: "2px solid #979a9a" },
              borderLeft: { xs: "none", md: "2px solid #979a9a" },
              position: "relative",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Image Section */}
            <Grid item xs={12} md={7}>
              <Box
                component="img"
                src="https://i.ibb.co/6tj2L8K/Waterproof-P6-66-Outdoor-LED-Screen-Signboard.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "30px",
                  pr: { xs: 0, sm: "300px" },
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12} md={5} sx={{ pl: { sm: "150px", xs: 0 } }}>
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
                    الشاشات الإلكترونية الخارجية
                  </Typography>
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تعتبر شاشات العرض الإلكترونية الخارجية المتخصصة في عرض الصور ومقاطع الفيديو من احدث طرق التسويق حاليا لأنها تعتبر الوسيلة الافضل في جذب ولفت انتباه العملاء . كما تتميز هذه الشاشات بأنها شديدة الوضوح في وقت النهار ، كما أنها موفرة للكهرباء .
              </Typography>
            </Grid>

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "30%",
                borderBottom: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "18%",
                width: "18%",
                borderRight: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "30%",
                transform: "translateX(-22%)",
                height: "30px",
                borderLeft: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "18%",
                right: 0,
                width: "1%",
                borderTop: "2px solid #979a9a",
                transform: "translateY(-1%)",
                display: { xs: "none", md: "block" },
              }}
            />
          </Grid>
        </Container>
      </section>
       <section
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#d5d8dc",
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            mb: "15px",
            px: { xs: "20px", sm: "100px" },
            marginBottom: "50px",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              borderTop: { xs: "none", sm: "2px solid #979a9a" },
              borderRight: { xs: "none", sm: "2px solid #979a9a" },
              position: "relative",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            {/* Text Section */}
            <Grid item xs={12} sm={5}>
              <Box p={2}>
                <Card
                  sx={{
                    bgcolor: "#b0b0b0",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: "100%",
                  }}
                >
                  {/* <Link to="/Indoor-Screen" style={{ textDecoration: "none" }}> */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      textAlign: "center",
                      direction: "rtl",
                      fontFamily: "Tajawal",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                  {/* </Link> */}
                </Card>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    textAlign: "justify",
                    direction: "rtl",
                    px: "20px",
                    mt: 2,
                    fontFamily: "Tajawal",
                  }}
                >
                  تعتبر الوسيلة الأفضل في زيادة معدل التواصل المباشر مع العملاء
                  في المكان كونها تجذب الانتباه بشكل كبير. كما يمكن من خلالها
                  عرض جميع المحتويات الإعلانية سواء كانت صور أو مقاطع فيديو
                  لتتميزها بدقة الوضوح وتوفر أحجام ومقاسات مختلفة.
                </Typography>
              </Box>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} sm={7}>
              <Box
                component="img"
                src="https://i.ibb.co/hJws9svz/2f6d9352-2357-4039-827f-3563fc0a24c4.webp"
                alt="Indoor LED Screen"
                sx={{
                  width: "100%",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  objectFit: "cover",
                  pb: "30px",
                  pr: "30px",
                  pl: { xs: 0, sm: "300px" },
                }}
              />
            </Grid>

            {/* Decorative Borders (hidden on mobile) */}
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "30%",
                borderBottom: "2px solid #979a9a",
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                top: 0,
                left: 0,
                height: "20%",
                width: "20%",
                borderLeft: "2px solid #979a9a",
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                bottom: 0,
                right: "30%",
                transform: "translateX(-22%)",
                height: "22px",
                borderLeft: "2px solid #979a9a",
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                left: 0,
                top: "20%",
                transform: "translateY(-1%)",
                width: "2%",
                borderTop: "2px solid #979a9a",
              }}
            />
          </Grid>
        </Container>
      </section>
      <section
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            mb: "30px",
            px: { xs: "20px", sm: "100px" },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              borderTop: {
                xs: "none", // hide on mobile
                md: "2px solid #979a9a", // show on desktop and larger
              },
              borderLeft: {
                xs: "none",
                md: "2px solid #979a9a",
              },
              position: "relative",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Image Section */}
            <Grid item xs={12} md={7}>
              <Box
                component="img"
                src="https://i.ibb.co/ThHxYZj/images-1-1.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "30px",
                  pr: { xs: 0, sm: "300px" },
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12} md={5} sx={{ pl: { sm: "150px", xs: 0 } }}>
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
                  {/* <Link to="/Outdoor-LED" style={{ textDecoration: "none" }}> */}
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
                    شــاشة العـــرض النصـــية
                  </Typography>
                  {/* </Link> */}
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                التركيب ويمكنها تقديم معلومات مباشرة للعميل بطريقسهلةة مبتكرة.
                وعرض المحتوى بأكثر من طريقة .كما تتميز ببرنامج تشغيل سهل يحتوي
                على عدد كبير من تأثيرات الحركة تعرض جميع اللغات المكتوبة من جهاز
                الكمبيوتر مما يزيد فرص الاتصال والتواصل مع عملائك بشكل أفضل .
              </Typography>
            </Grid>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "30%",
                borderBottom: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "18%",
                width: "18%",
                borderRight: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "30%",
                transform: "translateX(-22%)",
                height: "30px",
                borderLeft: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "18%",
                right: 0,
                width: "1%",
                borderTop: "2px solid #979a9a",
                transform: "translateY(-1%)",
                display: { xs: "none", md: "block" },
              }}
            />
          </Grid>
        </Container>
      </section>
      <section
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#d5d8dc",
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            mb: "15px",
            px: { xs: "20px", sm: "100px" },
            marginBottom: "50px",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              borderTop: { xs: "none", sm: "2px solid #979a9a" },
              borderRight: { xs: "none", sm: "2px solid #979a9a" },
              position: "relative",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            {/* Text Section */}
            <Grid item xs={12} sm={5}>
              <Box p={2}>
                <Card
                  sx={{
                    bgcolor: "#b0b0b0",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: "100%",
                  }}
                >
                  {/* <Link to="/Indoor-Screen" style={{ textDecoration: "none" }}> */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      textAlign: "center",
                      direction: "rtl",
                      fontFamily: "Tajawal",
                    }}
                  >
                    الشاشات الإلكترونية الداخلية
                  </Typography>
                  {/* </Link> */}
                </Card>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    textAlign: "justify",
                    direction: "rtl",
                    px: "20px",
                    mt: 2,
                    fontFamily: "Tajawal",
                  }}
                >
                  تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض
                  التجارية. والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة
                  لجذب انتباه العملاء والجمهور ونشر الرسائل التسويقية بشكل عصري
                  و جذاب. ويدعم الصيغ المتنوعة من الصور والفيديوهات. وجُهزت
                  برقاقة تحكم ذكية للتقليل من التكلفة.
                </Typography>
              </Box>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} sm={7}>
              <Box
                component="img"
                src="https://i.ibb.co/C5YsPnf7/12-Indoor-led-screen-display-billboards-mockup.webp"
                alt="Indoor LED Screen"
                sx={{
                  width: "100%",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  objectFit: "cover",
                  pb: "30px",
                  pr: "30px",
                  pl: { xs: 0, sm: "300px" },
                }}
              />
            </Grid>

            {/* Decorative Borders (hidden on mobile) */}
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "30%",
                borderBottom: "2px solid #979a9a",
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                top: 0,
                left: 0,
                height: "20%",
                width: "20%",
                borderLeft: "2px solid #979a9a",
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                bottom: 0,
                right: "30%",
                transform: "translateX(-22%)",
                height: "22px",
                borderLeft: "2px solid #979a9a",
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                left: 0,
                top: "20%",
                transform: "translateY(-1%)",
                width: "2%",
                borderTop: "2px solid #979a9a",
              }}
            />
          </Grid>
        </Container>
      </section>
      <section
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            mb: "30px",
            px: { xs: "20px", sm: "100px" },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              borderTop: {
                xs: "none", // hide on mobile
                md: "2px solid #979a9a", // show on desktop and larger
              },
              borderLeft: {
                xs: "none",
                md: "2px solid #979a9a",
              },
              position: "relative",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Image Section */}
            <Grid item xs={12} md={7}>
              <Box
                component="img"
                src="https://i.ibb.co/q3RJqF1G/interactive-kiosk-Faisalabad.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "30px",
                  pr: { xs: 0, sm: "300px" },
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12} md={5} sx={{ pl: { sm: "150px", xs: 0 } }}>
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
                  {/* <Link to="/Outdoor-LED" style={{ textDecoration: "none" }}> */}
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
                    الشـــــاشات التفــــاعلـية
                  </Typography>
                  {/* </Link> */}
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تعد أحدث وسيلة حديثة ومتطورة للدعاية المميزة وذات مقاسات وألوان
                مختلفة.حيث تساعد بشكل كبير ومؤثر في عملية الدعاية والإعلان
                للمنتجات والخدمات للجهات الحكومية والشركات والمجتمعات.
              </Typography>
            </Grid>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "30%",
                borderBottom: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "18%",
                width: "18%",
                borderRight: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "30%",
                transform: "translateX(-22%)",
                height: "30px",
                borderLeft: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "18%",
                right: 0,
                width: "1%",
                borderTop: "2px solid #979a9a",
                transform: "translateY(-1%)",
                display: { xs: "none", md: "block" },
              }}
            />
          </Grid>
        </Container>
      </section>
      <section
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#d5d8dc",
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            mb: "15px",
            px: { xs: "20px", sm: "100px" },
            marginBottom: "50px",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              borderTop: { xs: "none", sm: "2px solid #979a9a" },
              borderRight: { xs: "none", sm: "2px solid #979a9a" },
              position: "relative",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            {/* Text Section */}
            <Grid item xs={12} sm={5}>
              <Box p={2}>
                <Card
                  sx={{
                    bgcolor: "#b0b0b0",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: "100%",
                  }}
                >
                  {/* <Link to="/Indoor-Screen" style={{ textDecoration: "none" }}> */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: { xs: "1rem", sm: "2rem" },
                      textAlign: "center",
                      direction: "rtl",
                      fontFamily: "Tajawal",
                    }}
                  >
                    شـــاشات العـــدادات والساعات الرقمية
                  </Typography>
                  {/* </Link> */}
                </Card>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    textAlign: "justify",
                    direction: "rtl",
                    px: "20px",
                    mt: 2,
                    fontFamily: "Tajawal",
                  }}
                >
                  مخصصة لنظام المحطات حيث تعرض أسعار الوقود بطريقه احترافية
                  وسهلة التحكم وعداد ديجتال للعد التنازلي بعدد الايام المتبقي
                  علي انتهاء المشروع الساعات الرقمية تعرض الوقت والتاريخ عن طريق
                  الاتصال بالقمر الصناعي.
                </Typography>
              </Box>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} sm={7}>
              <Box
                component="img"
                src="https://i.ibb.co/C3TL6s5Y/Ha830c6b132ba4daa87daa57571a5b4c7u.webp"
                alt="Indoor LED Screen"
                sx={{
                  width: "100%",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  objectFit: "cover",
                  pb: "30px",
                  pr: "30px",
                  pl: { xs: 0, sm: "300px" },
                }}
              />
            </Grid>

            {/* Decorative Borders (hidden on mobile) */}
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "30%",
                borderBottom: "2px solid #979a9a",
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                top: 0,
                left: 0,
                height: "20%",
                width: "20%",
                borderLeft: "2px solid #979a9a",
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                bottom: 0,
                right: "30%",
                transform: "translateX(-22%)",
                height: "22px",
                borderLeft: "2px solid #979a9a",
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                left: 0,
                top: "20%",
                transform: "translateY(-1%)",
                width: "2%",
                borderTop: "2px solid #979a9a",
              }}
            />
          </Grid>
        </Container>
      </section>
      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            mb: "30px",
            px: { xs: "20px", sm: "100px" },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              borderTop: {
                xs: "none", // hide on mobile
                md: "2px solid #979a9a", // show on desktop and larger
              },
              borderLeft: {
                xs: "none",
                md: "2px solid #979a9a",
              },
              position: "relative",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Image Section */}
            <Grid item xs={12} md={7}>
              <Box
                component="img"
                src="https://i.ibb.co/pBDwQmRq/IC-3-displays-s.webp"
                alt="Outdoor LED Screen"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: { xs: 250, sm: 350, md: 500 },
                  pb: "30px",
                  pr: { xs: 0, sm: "300px" },
                }}
              />
            </Grid>

            {/* Text Content */}
            <Grid item xs={12} md={5} sx={{ pl: { sm: "150px", xs: 0 } }}>
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
                  {/* <Link to="/Outdoor-LED" style={{ textDecoration: "none" }}> */}
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
                    جهاز ارقام الانتظار
                  </Typography>
                  {/* </Link> */}
                </Card>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textAlign: "justify",
                  direction: "rtl",
                  px: "20px",
                  mt: 2,
                  fontFamily: "Tajawal",
                }}
              >
                تعمل بمفردها لا تحتاج إلى كمبيوتر . 4 خدمات مختلفة حسب رغبة
                العميل نظام يعمل بنغمة ونداء برقم العميل والشباك. تحتفظ باخر رقم
                عند انقطاع التيار الكهربائي مزود بوحدة برنتر لطباعة الأرقام
                المسلسلة
              </Typography>
            </Grid>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "30%",
                borderBottom: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "18%",
                width: "18%",
                borderRight: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "30%",
                transform: "translateX(-22%)",
                height: "30px",
                borderLeft: "2px solid #979a9a",
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "18%",
                right: 0,
                width: "1%",
                borderTop: "2px solid #979a9a",
                transform: "translateY(-1%)",
                display: { xs: "none", md: "block" },
              }}
            />
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default ScreensSection;
