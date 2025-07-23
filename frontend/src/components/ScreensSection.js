import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
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
import { Container, Grid, Typography, Box, Button, Card, CardContent, CardMedia } from "@mui/material";


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

const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  message: "",
};

const ScreensSection = () => {
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () =>
    Object.values(formData).every((field) => field.trim() !== "");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Please fill out all fields.");
      return;
    }

    const { name, phone, message } = formData;
    const whatsappNumber = "966571908888";
    const text = `👋 مرحبًا، لدي استفسار:\n\n📛 الاسم: ${name}\n📞 الجوال: ${phone}\n📝 الرسالة: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Image Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl" dialogClassName="modal-fullscreen"
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
        <Modal.Body
          style={{
            width: "100%",
            height: "100vh",
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            position: "relative",
          }}
        >
          <img
            src="https://i.ibb.co/JRM6pZqR/11488254-copy.webp"
            alt="Welcome"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
              px: 3,
              py: 1,
              borderRadius: "20px",
              boxShadow: "0 4px 15px rgba(0, 255, 252, 0.4)",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#00cccc",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
          >
            تخطٍّي
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
                style={{
                  objectFit: "cover",
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                }}
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
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                {icon}
              </Box>
            </a>
          ))}
        </Box>
      </Box>

        <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
                  <Link to="/Outdoor-LED" style={{ textDecoration: "none" }}>
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
                  </Link>
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
                تعتبر شاشات العرض الإلكترونية الخارجية المتخصصة في عرض الصور
                ومقاطع الفيديو من احدث طرق التسويق حاليا لأنها تعتبر الوسيلة
                الافضل في جذب ولفت انتباه العملاء . كما تتميز هذه الشاشات بأنها
                شديدة الوضوح في وقت النهار ، كما أنها موفرة للكهرباء .
              </Typography>
            </Grid>
            <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "30%", borderBottom: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", top: 0, right: 0, height: "18%", width: "18%", borderRight: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", bottom: 0, left: "30%", transform: "translateX(-22%)", height: "30px", borderLeft: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", top: "18%", right: 0, width: "1%", borderTop: "2px solid #979a9a", transform: "translateY(-1%)", display: { xs: "none", md: "block" } }} />
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
          marginBottom:'50px'
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
                <Link to="/Indoor-Screen" style={{ textDecoration: "none" }}>
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
                </Link>
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
                تعتبر الوسيلة الأفضل في زيادة معدل التواصل المباشر مع العملاء في المكان كونها تجذب الانتباه بشكل كبير. كما يمكن من خلالها عرض جميع المحتويات الإعلانية سواء كانت صور أو مقاطع فيديو لتتميزها بدقة الوضوح وتوفر أحجام ومقاسات مختلفة.
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
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", bottom: 0, right: 0, width: "30%", borderBottom: "2px solid #979a9a" }} />
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", top: 0, left: 0, height: "20%", width: "20%", borderLeft: "2px solid #979a9a" }} />
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", bottom: 0, right: "30%", transform: "translateX(-22%)", height: "22px", borderLeft: "2px solid #979a9a" }} />
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", left: 0, top: "20%", transform: "translateY(-1%)", width: "2%", borderTop: "2px solid #979a9a" }} />
        </Grid>
      </Container>
    </section>
    <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
                  <Link to="/Outdoor-LED" style={{ textDecoration: "none" }}>
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
                  </Link>
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
                سهلة التركيب ويمكنها تقديم معلومات مباشرة للعميل بطريقة مبتكرة. وعرض المحتوى بأكثر من طريقة .كما تتميز ببرنامج تشغيل سهل يحتوي على عدد كبير من تأثيرات الحركة تعرض جميع اللغات المكتوبة من جهاز الكمبيوتر مما لزيادة فرص الاتصال والتواصل مع عملاءك بشكل أفضل .
              </Typography>
            </Grid>
            <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "30%", borderBottom: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", top: 0, right: 0, height: "18%", width: "18%", borderRight: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", bottom: 0, left: "30%", transform: "translateX(-22%)", height: "30px", borderLeft: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", top: "18%", right: 0, width: "1%", borderTop: "2px solid #979a9a", transform: "translateY(-1%)", display: { xs: "none", md: "block" } }} />
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
          marginBottom:'50px'
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
                <Link to="/Indoor-Screen" style={{ textDecoration: "none" }}>
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
                </Link>
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
                تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية. والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة من الصور والفيديوهات. وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
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
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", bottom: 0, right: 0, width: "30%", borderBottom: "2px solid #979a9a" }} />
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", top: 0, left: 0, height: "20%", width: "20%", borderLeft: "2px solid #979a9a" }} />
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", bottom: 0, right: "30%", transform: "translateX(-22%)", height: "22px", borderLeft: "2px solid #979a9a" }} />
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", left: 0, top: "20%", transform: "translateY(-1%)", width: "2%", borderTop: "2px solid #979a9a" }} />
        </Grid>
      </Container>
    </section>
    <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
                  <Link to="/Outdoor-LED" style={{ textDecoration: "none" }}>
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
                  </Link>
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
                تعد أحدث وسيلة حديثة ومتطورة للدعاية المميزة وذات مقاسات وألوان مختلفة.حيث تساعد بشكل كبير ومؤثر في عملية الدعاية والإعلان للمنتجات والخدمات للجهات الحكومية والشركات والمجتمعات.
              </Typography>
            </Grid>
            <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "30%", borderBottom: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", top: 0, right: 0, height: "18%", width: "18%", borderRight: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", bottom: 0, left: "30%", transform: "translateX(-22%)", height: "30px", borderLeft: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", top: "18%", right: 0, width: "1%", borderTop: "2px solid #979a9a", transform: "translateY(-1%)", display: { xs: "none", md: "block" } }} />
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
          marginBottom:'50px'
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
                <Link to="/Indoor-Screen" style={{ textDecoration: "none" }}>
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
                </Link>
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
                مخصصة لنظام المحطات حيث تعرض أسعار الوقود بطريقه احترافية وسهلة التحكم وعداد ديجتال للعد التنازلي بعدد الايام المتبقي علي انتهاء المشروع الساعات الرقمية تعرض الوقت والتاريخ عن طريق الاتصال بالقمر الصناعي.
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
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", bottom: 0, right: 0, width: "30%", borderBottom: "2px solid #979a9a" }} />
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", top: 0, left: 0, height: "20%", width: "20%", borderLeft: "2px solid #979a9a" }} />
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", bottom: 0, right: "30%", transform: "translateX(-22%)", height: "22px", borderLeft: "2px solid #979a9a" }} />
          <Box sx={{ display: { xs: "none", sm: "block" }, position: "absolute", left: 0, top: "20%", transform: "translateY(-1%)", width: "2%", borderTop: "2px solid #979a9a" }} />
        </Grid>
      </Container>
    </section>
        <section style={{ width: "100%", display: "flex", justifyContent: "center",marginBottom:'30px' }}>
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
                  <Link to="/Outdoor-LED" style={{ textDecoration: "none" }}>
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
                  </Link>
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
               تعمل بمفردها لا تحتاج إلى كمبيوتر . 4 خدمات مختلفة حسب رغبة العميل نظام يعمل بنغمة ونداء برقم العميل والشباك. تحتفظ باخر رقم عند انقطاع التيار الكهربائي مزود بوحدة برنتر لطباعة الأرقام المسلسلة
              </Typography>
            </Grid>
            <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "30%", borderBottom: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", top: 0, right: 0, height: "18%", width: "18%", borderRight: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", bottom: 0, left: "30%", transform: "translateX(-22%)", height: "30px", borderLeft: "2px solid #979a9a", display: { xs: "none", md: "block" } }} />
            <Box sx={{ position: "absolute", top: "18%", right: 0, width: "1%", borderTop: "2px solid #979a9a", transform: "translateY(-1%)", display: { xs: "none", md: "block" } }} />
          </Grid>     
        </Container>  
      </section>

      {/* Contact Section */}
      <section
        style={{
          backgroundColor: "#000000",
          backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
          paddingBottom: "50px",
          marginTop: "-30px",
          direction: "rtl",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 }, textAlign: "center" }}>
          <Grid container spacing={4}>
            {/* Right Side - Contact Info */}
            <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "justify", direction: "ltr", pr: 5 }}>
              <Typography variant="h4" color="white">Contact Us</Typography>
              <Typography variant="h5" color="#00fffc" sx={{ textAlign: "justify", direction: "rtl" }}>
                للطلب والإستفسار /
              </Typography>
              <Grid container spacing={2} sx={{ pt: "30px", direction: "rtl", alignItems: "center" }}>
                {[
                  { label: "المدير العام للطباعة بالمملكة", value: "8888 190 057" },
                  { label: "المدير الفني للطباعة بالمملكة", value: "8888 193 057" },
                  { label: "واتساب الطباعة", value: "8888 194 057" },
                ].map(({ label, value }) => (
                  <React.Fragment key={label}>
                    <Grid item xs={4}><Typography color="white" fontSize={{ xs: 17, md: 20 }} textAlign="right">{label}</Typography></Grid>
                    <Grid item xs={1}><Typography color="white" fontSize={{ xs: 17, md: 20 }}>:</Typography></Grid>
                    <Grid item xs={7}><Typography color="white" fontSize={{ xs: 17, md: 20 }} textAlign="right">{value}</Typography></Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>

            {/* Left Side - Form */}
            <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 2 } }}>
              <h2 style={{ color: "white", fontFamily: "Tajawal", fontSize: "26px", textAlign: "right", marginBottom: "20px" }}>
                للشكاوي ..
              </h2>
              <form onSubmit={handleFormSubmit} style={{ direction: "rtl" }}>
                <Form.Group className="mb-3 d-flex align-items-center" style={{ gap: "10px" }}>
                  <Form.Label style={{ color: "white", width: "150px", fontSize: "20px", textAlign: "right" }}>الاسم</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ background: "#17202a", border: "none", color: "white" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center" style={{ gap: "10px" }}>
                  <Form.Label style={{ color: "white", width: "150px", fontSize: "20px", textAlign: "right" }}>الجوال</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ background: "#17202a", border: "none", color: "white", textAlign: "right" }}
                    pattern="[0-9]{9,12}"
                    title="الرجاء إدخال رقم جوال صالح"
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center" style={{ gap: "10px" }}>
                  <Form.Label style={{ color: "white", width: "150px", fontSize: "20px", textAlign: "right" }}>رسالتك</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ background: "#17202a", border: "none", color: "white" }}
                  />
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "15px", paddingRight: "150px" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: "#00fffc",
                      color: "#1e272e",
                      padding: { xs: "10px", sm: "15px" },
                      width: "50%",
                    }}
                  >
                    ارسال
                  </Button>
                </div>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default ScreensSection;
