import React from "react";
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
    img: "https://i.ibb.co/5rsMjx9/New-Web-Print.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/5rsMjx9/New-Web-Print.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/5rsMjx9/New-Web-Print.webp",
  },
];

const PrintingSection = () => {
  const [PrintingSection, setPrintingSection] = useState([]);
  const [PrintingSection1, setPrintingSection1] = useState([]);
  const [PrintingSection2, setPrintingSection2] = useState([]);
  const [PrintingSection3, setPrintingSection3] = useState([]);
  const [PrintingSection4, setPrintingSection4] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);
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

  // Fetch data once the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/Printingdepartment`,
        );
        // Filter data where gifttype is "دروع ومجسمات"
        const filteredData = response.data.filter(
          (item) => item.Printingtype === "مطـبوعات ورقـية",
        );
        const filteredData1 = response.data.filter(
          (item) => item.Printingtype === "بنـر وسـتيكر",
        );
        const filteredData2 = response.data.filter(
          (item) => item.Printingtype === "طباعه مسطحات UV",
        );
        const filteredData3 = response.data.filter(
          (item) => item.Printingtype === "طباعه منسوجات dtf",
        );
        const filteredData4 = response.data.filter(
          (item) => item.Printingtype === "طبــاعة dtf-uv",
        );
        setPrintingSection(filteredData);
        setPrintingSection1(filteredData1);
        setPrintingSection2(filteredData2);
        setPrintingSection3(filteredData3);
        setPrintingSection4(filteredData4);
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
    {
      icon: <FaTiktok size={25} />,
      link: "https://www.tiktok.com/@digilasersa",
    },
    { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
  ];

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
      <Container
        maxWidth={false}
        sx={{ padding: 0 }}
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        {/* Carousel Section */}
        <section
          style={{
            width: "100%",
            margin: "0 auto",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <Container maxWidth="xl" sx={{ padding: 3 }}>
            <Card
              sx={{
                backgroundColor: "#f5f5f5", // Background color of the card
                padding: 0, // Padding around the content
                borderRadius: 2, // Optional: rounded corners
                boxShadow: 3, // Optional: card shadow
                maxWidth: "100%", // Make sure the card is responsive
                textAlign: "center", // Center align content
                marginBottom: "20px",
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
                  <span style={{ color: "#015057" }}>مطـبوعات ورقـية</span>
                </Typography>
              </CardContent>
            </Card>
            <Slider ref={sliderRef} {...settings}>
              {PrintingSection.map((item, index) => (
                <div key={index}>
                  <Card
                    sx={{
                      transition: "0.3s",
                      "&:hover": { boxShadow: 4, transform: "scale(1.02)" },
                      borderRadius: 2,
                      marginRight: "16px", // Gap between the cards
                      marginLeft: index === 0 ? "0" : "16px", // Avoid extra margin for the first card
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={`${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`}
                      alt={`Slide ${index + 1}`}
                      sx={{
                        height: { xs: 150, sm: 200 },
                        objectFit: "cover",
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      }}
                      onClick={() =>
                        handleImageClick(
                          `${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`,
                        )
                      }
                    />
                  </Card>
                </div>
              ))}
            </Slider>
          </Container>

          <Container maxWidth="xl" sx={{ padding: 3 }}>
            <Card
              sx={{
                backgroundColor: "#f5f5f5", // Background color of the card
                padding: 0, // Padding around the content
                borderRadius: 2, // Optional: rounded corners
                boxShadow: 3, // Optional: card shadow
                maxWidth: "100%", // Make sure the card is responsive
                textAlign: "center", // Center align content
                marginBottom: "20px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    textAlign: "center",
                    fontFamily: "Tajawal",
                  }}
                >
                  <span style={{ color: "#015057" }}>بنـر وسـتيكر</span>
                </Typography>
              </CardContent>
            </Card>
            <Slider ref={sliderRef} {...settings}>
              {PrintingSection1.map((item, index) => (
                <div key={index}>
                  <Card
                    sx={{
                      transition: "0.3s",
                      "&:hover": { boxShadow: 4, transform: "scale(1.02)" },
                      borderRadius: 2,
                      marginRight: "16px", // Gap between the cards
                      marginLeft: index === 0 ? "0" : "16px", // Avoid extra margin for the first card
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={`${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`}
                      alt={`Slide ${index + 1}`}
                      sx={{
                        height: { xs: 150, sm: 200 },
                        objectFit: "cover",
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      }}
                      onClick={() =>
                        handleImageClick(
                          `${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`,
                        )
                      }
                    />
                  </Card>
                </div>
              ))}
            </Slider>
          </Container>

          <Container maxWidth="xl" sx={{ padding: 3 }}>
            <Card
              sx={{
                backgroundColor: "#f5f5f5", // Background color of the card
                padding: 0, // Padding around the content
                borderRadius: 2, // Optional: rounded corners
                boxShadow: 3, // Optional: card shadow
                maxWidth: "100%", // Make sure the card is responsive
                textAlign: "center", // Center align content
                marginBottom: "20px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    textAlign: "center",
                    fontFamily: "Tajawal",
                  }}
                >
                  <span style={{ color: "#015057" }}>طباعه مسطحات UV</span>
                </Typography>
              </CardContent>
            </Card>
            <Slider ref={sliderRef} {...settings}>
              {PrintingSection2.map((item, index) => (
                <div key={index}>
                  <Card
                    sx={{
                      transition: "0.3s",
                      "&:hover": { boxShadow: 4, transform: "scale(1.02)" },
                      borderRadius: 2,
                      marginRight: "16px", // Gap between the cards
                      marginLeft: index === 0 ? "0" : "16px", // Avoid extra margin for the first card
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={`${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`}
                      alt={`Slide ${index + 1}`}
                      sx={{
                        height: { xs: 150, sm: 200 },
                        objectFit: "cover",
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      }}
                      onClick={() =>
                        handleImageClick(
                          `${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`,
                        )
                      }
                    />
                  </Card>
                </div>
              ))}
            </Slider>
          </Container>

          <Container maxWidth="xl" sx={{ padding: 3 }}>
            <Card
              sx={{
                backgroundColor: "#f5f5f5", // Background color of the card
                padding: 0, // Padding around the content
                borderRadius: 2, // Optional: rounded corners
                boxShadow: 3, // Optional: card shadow
                maxWidth: "100%", // Make sure the card is responsive
                textAlign: "center", // Center align content
                marginBottom: "20px",
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
                  <span style={{ color: "#015057" }}>طباعه منسوجات dtf</span>
                </Typography>
              </CardContent>
            </Card>
            <Slider ref={sliderRef} {...settings}>
              {PrintingSection3.map((item, index) => (
                <div key={index}>
                  <Card
                    sx={{
                      transition: "0.3s",
                      "&:hover": { boxShadow: 4, transform: "scale(1.02)" },
                      borderRadius: 2,
                      marginRight: "16px", // Gap between the cards
                      marginLeft: index === 0 ? "0" : "16px", // Avoid extra margin for the first card
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={`${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`}
                      alt={`Slide ${index + 1}`}
                      sx={{
                        height: { xs: 150, sm: 200 },
                        objectFit: "cover",
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      }}
                      onClick={() =>
                        handleImageClick(
                          `${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`,
                        )
                      }
                    />
                  </Card>
                </div>
              ))}
            </Slider>
          </Container>

          <Container maxWidth="xl" sx={{ padding: 3 }}>
            <Card
              sx={{
                backgroundColor: "#f5f5f5", // Background color of the card
                padding: 0, // Padding around the content
                borderRadius: 2, // Optional: rounded corners
                boxShadow: 3, // Optional: card shadow
                maxWidth: "100%", // Make sure the card is responsive
                textAlign: "center", // Center align content
                marginBottom: "20px",
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
                  <span style={{ color: "#015057" }}>طبــاعة dtf-uv</span>
                </Typography>
              </CardContent>
            </Card>
            <Slider ref={sliderRef} {...settings}>
              {PrintingSection4.map((item, index) => (
                <div key={index}>
                  <Card
                    sx={{
                      transition: "0.3s",
                      "&:hover": { boxShadow: 4, transform: "scale(1.02)" },
                      borderRadius: 2,
                      marginRight: "16px", // Gap between the cards
                      marginLeft: index === 0 ? "0" : "16px", // Avoid extra margin for the first card
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={`${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`}
                      alt={`Slide ${index + 1}`}
                      sx={{
                        height: { xs: 150, sm: 200 },
                        objectFit: "cover",
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      }}
                      onClick={() =>
                        handleImageClick(
                          `${process.env.REACT_APP_API_HOST}/uploads/Printingdepartment/${item.Printingimage}`,
                        )
                      }
                    />
                  </Card>
                </div>
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

export default PrintingSection;
