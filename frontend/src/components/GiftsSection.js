import { useState, useRef, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-bootstrap";
import axios from "axios";

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/C50rPX0/New-Web-Gifts.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/C50rPX0/New-Web-Gifts.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/C50rPX0/New-Web-Gifts.webp",
  },
];

const socialLinks = [
  {
    icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
    link: "https://x.com/digilasersa",
  },
  {
    icon: <FaInstagram size={25} />,
    link: "https://www.instagram.com/digilasersa",
  },
  {
    icon: <FaLinkedin size={25} />,
    link: "https://www.linkedin.com/company/digilasersa",
  },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  {
    icon: <FaSnapchat size={25} />,
    link: "https://www.snapchat.com/add/digilasersa",
  },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];


// --- Keep all your constants (carouselItems, socialLinks, INITIAL_FORM_STATE) ---

const GiftsSection = () => {
  const [GiftsSection, setGiftsSection] = useState([]);
  const [GiftsSection1, setGiftsSection1] = useState([]);
  const [GiftsSection2, setGiftsSection2] = useState([]);
  const [GiftsSection3, setGiftsSection3] = useState([]);
  const [loading, setLoading] = useState(true); // Used for splash screen
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const sliderRef = useRef(null);

  // 🔹 Page Speed Optimizer Script (lazy load images & videos)
  useEffect(() => {
    const lazyImages = document.querySelectorAll("img[data-src], video[data-src]");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.tagName === "IMG" || el.tagName === "VIDEO") {
            el.src = el.dataset.src;
            el.removeAttribute("data-src");
          }
          obs.unobserve(el);
        }
      });
    });
    lazyImages.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  // 🔹 Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // --- Fetch data ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/Promotionalgifts`
        );
        setGiftsSection(response.data.filter((item) => item.gifttype === "دروع ومجسمات"));
        setGiftsSection1(response.data.filter((item) => item.gifttype === "خشـبيات"));
        setGiftsSection2(response.data.filter((item) => item.gifttype === "مكتـبيات"));
        setGiftsSection3(response.data.filter((item) => item.gifttype === "اكسسوارات"));
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to fetch data");
      } finally {
        // Delay to show splash screen a little (optional)
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

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
        p: 2, // padding for smaller screens
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
      {/* --- Main Content --- */}
      <Container maxWidth={false} style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "100px" }}>
        {/* Carousel Section */}
         <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
          <Carousel
            fade
            nextIcon={
              <span
                className="carousel-control-next-icon"
                style={{ backgroundColor: "black" }}
              />
            }
            prevIcon={
              <span
                className="carousel-control-prev-icon"
                style={{ backgroundColor: "black" }}
              />
            }
          >
            {carouselItems.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt={item.title}
                  style={{
                    objectFit: "cover",
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                  }}
                />
                <Carousel.Caption>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {item.content}
                  </Typography>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          {/* Social Media Icons on the Left Side */}
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
            {socialLinks.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
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
      </Container>

      <section style={{ width: "100%", margin: "0 auto", padding: "50px 0", marginBottom: '30px' }}>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #06f9f3, #4b4a49ff)",
              borderRadius: 1,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              maxWidth: "100%",
              mb: 4,
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Tajawal",
                  fontWeight: "bold",
                  fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" },
                  color: "#fff",
                  textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
                }}
              >
                دروع ومجسمات
              </Typography>
            </CardContent>
          </Card>

          <Slider ref={sliderRef} {...settings}>
            {GiftsSection.map((item, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Card
                  sx={{
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "scale(1.05)", borderColor: "#06f9f3" },
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "3px solid transparent",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.giftimagelink}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      height: { xs: 180, sm: 350 },
                      objectFit: "cover",
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      borderBottom: "5px solid #06f9f3",
                      transition: "0.3s",
                      cursor: "pointer",
                      "&:hover": { borderBottomColor: "#ff6f61" },
                    }}
                    onClick={() => handleImageClick(item.giftimagelink)}
                  />
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </section>
      <section style={{ width: "100%", margin: "0 auto", padding: "50px 0", marginBottom: '30px' }}>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #06f9f3, #4b4a49ff)",
              borderRadius: 1,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              maxWidth: "100%",
              mb: 4,
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Tajawal",
                  fontWeight: "bold",
                  fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" },
                  color: "#fff",
                  textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
                }}
              >
                 خشـبيات
              </Typography>
            </CardContent>
          </Card>

          <Slider ref={sliderRef} {...settings}>
            {GiftsSection1.map((item, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Card
                  sx={{
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "scale(1.05)", borderColor: "#06f9f3" },
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "3px solid transparent",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.giftimagelink}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      height: { xs: 180, sm: 350 },
                      objectFit: "cover",
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      borderBottom: "5px solid #06f9f3",
                      transition: "0.3s",
                      cursor: "pointer",
                      "&:hover": { borderBottomColor: "#ff6f61" },
                    }}
                    onClick={() => handleImageClick(item.giftimagelink)}
                  />
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </section>
        <section style={{ width: "100%", margin: "0 auto", padding: "50px 0", marginBottom: '30px' }}>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #06f9f3, #4b4a49ff)",
              borderRadius: 1,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              maxWidth: "100%",
              mb: 4,
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Tajawal",
                  fontWeight: "bold",
                  fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" },
                  color: "#fff",
                  textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
                }}
              >
                 مكتـبيات
              </Typography>
            </CardContent>
          </Card>

          <Slider ref={sliderRef} {...settings}>
            {GiftsSection2.map((item, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Card
                  sx={{
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "scale(1.05)", borderColor: "#06f9f3" },
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "3px solid transparent",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.giftimagelink}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      height: { xs: 180, sm: 350 },
                      objectFit: "cover",
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      borderBottom: "5px solid #06f9f3",
                      transition: "0.3s",
                      cursor: "pointer",
                      "&:hover": { borderBottomColor: "#ff6f61" },
                    }}
                    onClick={() => handleImageClick(item.giftimagelink)}
                  />
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </section>
       <section style={{ width: "100%", margin: "0 auto", padding: "50px 0", marginBottom: '30px' }}>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #06f9f3, #4b4a49ff)",
              borderRadius: 1,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              maxWidth: "100%",
              mb: 4,
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Tajawal",
                  fontWeight: "bold",
                  fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" },
                  color: "#fff",
                  textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
                }}
              >
                 اكسسوارات
              </Typography>
            </CardContent>
          </Card>

          <Slider ref={sliderRef} {...settings}>
            {GiftsSection3.map((item, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Card
                  sx={{
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "scale(1.05)", borderColor: "#06f9f3" },
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "3px solid transparent",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.giftimagelink}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      height: { xs: 180, sm: 350 },
                      objectFit: "cover",
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      borderBottom: "5px solid #06f9f3",
                      transition: "0.3s",
                      cursor: "pointer",
                      "&:hover": { borderBottomColor: "#ff6f61" },
                    }}
                    onClick={() => handleImageClick(item.giftimagelink)}
                  />
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </section>

      {/* Dialog for Image View */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6"></Typography>
            <IconButton onClick={handleClose}>
              <FaTimes />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: "100%", maxHeight: "60vh", objectFit: "contain" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GiftsSection;
