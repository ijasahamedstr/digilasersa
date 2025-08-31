import React, { useState, useRef, useEffect } from "react";
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
  Grid,
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
import Form from "react-bootstrap/Form";
import axios from "axios";

const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  message: "",
};

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

const GiftsSection = () => {
  // Declare hooks at the top level
  const [GiftsSection, setGiftsSection] = useState([]);
  const [GiftsSection1, setGiftsSection1] = useState([]);
  const [GiftsSection2, setGiftsSection2] = useState([]);
  const [GiftsSection3, setGiftsSection3] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

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

  const sliderRef = useRef(null);

  // Fetch data once the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/Promotionalgifts`,
        );
        // Filter data where gifttype is "دروع ومجسمات"
        const filteredData = response.data.filter(
          (item) => item.gifttype === "دروع ومجسمات",
        );
        const filteredData1 = response.data.filter(
          (item) => item.gifttype === "خشـبيات",
        );
        const filteredData2 = response.data.filter(
          (item) => item.gifttype === "مكتـبيات",
        );
        const filteredData3 = response.data.filter(
          (item) => item.gifttype === "اكسسوارات",
        );
        setGiftsSection(filteredData);
        setGiftsSection1(filteredData1);
        setGiftsSection2(filteredData2);
        setGiftsSection3(filteredData3);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle loading and error states before rendering
  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ padding: 0 }}
        style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "100px" }}
      >
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
      <section style={{ width: "100%", margin: "0 auto", padding: "50px 0" }}>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          {/* Heading */}
            <Card
              sx={{
                backgroundColor: "#f5f5f5", // Background color of the card
                padding: 0, // Padding around the content
                borderRadius: 2, // Optional: rounded corners
                boxShadow: 3, // Optional: card shadow
                maxWidth: "100%", // Make sure the card is responsive
                marginBottom: "20px",
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "900",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.8rem" },
                textAlign: "center",
                background: "linear-gradient(90deg, #06f9f3, #ff6f61)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
                mb: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontFamily: "Tajawal",
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#015057" }}>دروع ومجسمات</span>
                </Typography>
              </CardContent>
            </Card>


          {/* Gifts Slider */}
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
                      height: { xs: 180, sm: 220 },
                      objectFit: "cover",
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      borderBottom: "5px solid #06f9f3",
                      transition: "0.3s",
                      "&:hover": { borderBottomColor: "#ff6f61" },
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(item.giftimagelink)}
                  />
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </section>
      <section style={{ width: "100%", margin: "0 auto", padding: "50px 0" }}>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          {/* Heading */}
            <Card
              sx={{
                backgroundColor: "#f5f5f5", // Background color of the card
                padding: 0, // Padding around the content
                borderRadius: 2, // Optional: rounded corners
                boxShadow: 3, // Optional: card shadow
                maxWidth: "100%", // Make sure the card is responsive
                marginBottom: "20px",
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "900",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.8rem" },
                textAlign: "center",
                background: "linear-gradient(90deg, #06f9f3, #ff6f61)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
                mb: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontFamily: "Tajawal",
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#015057" }}>خشـبيات</span>
                </Typography>
              </CardContent>
            </Card>
          {/* Gifts Slider */}
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
                      height: { xs: 180, sm: 220 },
                      objectFit: "cover",
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      borderBottom: "5px solid #06f9f3",
                      transition: "0.3s",
                      "&:hover": { borderBottomColor: "#ff6f61" },
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(item.giftimagelink)}
                  />
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </section>

      <section style={{ width: "100%", margin: "0 auto", padding: "50px 0" }}>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          {/* Heading */}
            <Card
              sx={{
                backgroundColor: "#f5f5f5", // Background color of the card
                padding: 0, // Padding around the content
                borderRadius: 2, // Optional: rounded corners
                boxShadow: 3, // Optional: card shadow
                maxWidth: "100%", // Make sure the card is responsive
                marginBottom: "20px",
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "900",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.8rem" },
                textAlign: "center",
                background: "linear-gradient(90deg, #06f9f3, #ff6f61)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
                mb: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontFamily: "Tajawal",
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#015057" }}>مكتـبيات</span>
                </Typography>
              </CardContent>
            </Card>


          {/* Gifts Slider */}
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
                      height: { xs: 180, sm: 220 },
                      objectFit: "cover",
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      borderBottom: "5px solid #06f9f3",
                      transition: "0.3s",
                      "&:hover": { borderBottomColor: "#ff6f61" },
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(item.giftimagelink)}
                  />
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </section>
      
      <section style={{ width: "100%", margin: "0 auto", padding: "50px 0" }}>
        <Container maxWidth="xl" sx={{ px: 3 }}>
          {/* Heading */}
            <Card
              sx={{
                backgroundColor: "#f5f5f5", // Background color of the card
                padding: 0, // Padding around the content
                borderRadius: 2, // Optional: rounded corners
                boxShadow: 3, // Optional: card shadow
                maxWidth: "100%", // Make sure the card is responsive
                marginBottom: "20px",
                fontFamily: "Tajawal, sans-serif",
                fontWeight: "900",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.8rem" },
                textAlign: "center",
                background: "linear-gradient(90deg, #06f9f3, #ff6f61)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
                mb: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontFamily: "Tajawal",
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#015057" }}>اكسسوارات</span>
                </Typography>
              </CardContent>
            </Card>


          {/* Gifts Slider */}
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
                      height: { xs: 180, sm: 220 },
                      objectFit: "cover",
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      borderBottom: "5px solid #06f9f3",
                      transition: "0.3s",
                      "&:hover": { borderBottomColor: "#ff6f61" },
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(item.giftimagelink)}
                  />
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </section>

      <Container
        maxWidth={false}
        sx={{ padding: 0 }}
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >  
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
                style={{
                  width: "100%",
                  maxHeight: "60vh",
                  objectFit: "contain",
                }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default GiftsSection;
