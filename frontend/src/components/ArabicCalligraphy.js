import { Carousel } from "react-bootstrap";
import {
  Box,
  Typography,
  Grid,
  Button,
  CardMedia,
  Card,
  Pagination,
  CircularProgress,
} from "@mui/material";
import Container from "@mui/material/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Form from "react-bootstrap/Form";
import axios from "axios";
import React, { useState, useEffect } from "react";

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/cTSJFMK/Group-25.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/cTSJFMK/Group-25.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cTSJFMK/Group-25.webp",
  },
];

const ArabicCalligraphy = () => {
  const [ArabicCalligraphy, setArabicCalligraphy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [page, setPage] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/ArabicCalligraphy`,
        );
        setArabicCalligraphy(response.data); // Set the fetched Arabic calligraphy data
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const itemsPerPage = 12; // Number of items per page
  const indexOfLastProduct = page * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = ArabicCalligraphy.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(ArabicCalligraphy.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add simple validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill out all fields.");
      return;
    }

    // Redirect to another site (Example: External site)
    window.location.href = "https://another-site.com/contact";
  };

  // Handle the zoom on image click
  const handleImageClick = (src) => {
    setIsZoomed(true);
    setZoomedImageSrc(src);
  };

  // Close zoomed image when clicked outside
  const handleCloseZoom = () => {
    setIsZoomed(false);
    setZoomedImageSrc("");
  };

  // Handle loading and error states
  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  return (
    <Container
      maxWidth={false}
      sx={{ padding: 0 }}
      style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "100px" }}
    >
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
                  height: "80vh",
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
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            zIndex: 2,
            paddingLeft: 2,
          }}
        >
          <a
            href="https://www.facebook.com"
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <FaFacebook size={25} />
            </Box>
          </a>
          <a
            href="https://www.twitter.com"
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <FontAwesomeIcon icon={faXTwitter} size={25} />
            </Box>
          </a>
          <a
            href="https://www.instagram.com"
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <FaInstagram size={25} />
            </Box>
          </a>
          <a
            href="https://www.linkedin.com"
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <FaLinkedin size={25} />
            </Box>
          </a>
          <a
            href="https://www.youtube.com/"
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <FaYoutube size={25} />
            </Box>
          </a>
          <a
            href="https://www.snapchat.com/"
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <FaSnapchat size={25} />
            </Box>
          </a>
          <a
            href="https://www.tiktok.com/"
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <FaTiktok size={25} />
            </Box>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <FaWhatsapp size={25} />
            </Box>
          </a>
        </Box>
      </Box>

      <section
        style={{
          backgroundColor: "#eaecee", // Fallback background color
          backgroundImage:
            'url("https://i.ibb.co/FKQ2rWm/Background-copy.webp")', // Replace with your image URL
          backgroundSize: "cover", // Ensure the image covers the entire section
          backgroundPosition: "center", // Ensure the image is centered
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          "@media (max-width: 768px)": {
            height: "auto", // Adjust the height for medium screens
            paddingTop: "10px",
            paddingBottom: "10px",
          },
          "@media (max-width: 480px)": {
            height: "auto", // Adjust the height for smaller screens
          },
          marginTop: "-30px",
        }}
      >
        <Container maxWidth="xl" sx={{ padding: 3 }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginY: "20px" }}
          >
            <img
              src="https://i.ibb.co/jwV97WY/Group-11.webp"
              alt="وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ"
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                marginBottom: "15px",
              }}
            />
          </Box>
          <Grid container spacing={2}>
            {currentProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: 3,
                    border: "2px solid #634335",
                    "&:hover": { boxShadow: 6 },
                    marginBottom: "20px",
                    position: "relative",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`Service ${index}`}
                    src={`${process.env.REACT_APP_API_HOST}/uploads/ArabicCalligraphy/${product.arabicCalligraphyimage}`}
                    sx={{
                      height: 300,
                      objectFit: "cover",
                      cursor: "zoom-in", // Change cursor to indicate zoom
                    }}
                    onClick={() =>
                      handleImageClick(
                        `${process.env.REACT_APP_API_HOST}/uploads/ArabicCalligraphy/${product.arabicCalligraphyimage}`,
                      )
                    }
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      position: "absolute",
                      bottom: "0px",
                      left: "50%",
                      transform: "translateX(-50%)", // This centers the text horizontally
                      color: "white",
                      backgroundColor: "#634335",
                      padding: "10px",
                      textAlign: "center",
                      width: "100%",
                      border: "2px solid #634335",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                  >
                    {product.arabicCalligraphyname}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Zoomed image view (modal style) */}
          {isZoomed && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
              onClick={handleCloseZoom}
            >
              <img
                src={zoomedImageSrc}
                alt="Zoomed"
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain",
                  cursor: "zoom-out", // Change cursor to indicate it can be closed
                }}
              />
            </Box>
          )}

          <Box display="flex" justifyContent="center" sx={{ marginTop: 3 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </Container>
      </section>

      <section
        style={{
          backgroundColor: "#eaecee", // Fallback background color
          backgroundImage: 'url("https://i.ibb.co/cg2zMGj/Group-18.webp")', // Replace with your image URL
          backgroundSize: "cover", // Ensure the image covers the entire section
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "flex-end", // Align content to the bottom of the section
          alignItems: "center",
          height: "60vh", // Set height to 100% of the viewport height
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "-30px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: "center",
            paddingTop: "150px",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)", // Responsive font size using clamp
              color: "#261d22",
              fontFamily: "Tajawal",
              marginBottom: "20px", // Space between heading and buttons
            }}
          >
            أسماء مزخرفة
          </h2>

          <h3
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)", // Responsive font size using clamp
              color: "#065956",
              fontFamily: "Tajawal",
              marginBottom: "20px", // Space between heading and buttons
            }}
          >
            شخصيات - عائلية - عروسين - مناسبات
          </h3>
        </Container>
      </section>
      <section
        style={{
          backgroundColor: "#eaecee", // Fallback background color
          backgroundImage: 'url("https://i.ibb.co/99bpscJ/Group-20.webp")', // Background image URL
          backgroundSize: "cover", // Ensure the image covers the entire section
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "flex-end", // Align content to the bottom of the section
          alignItems: "center",
          height: "60vh", // Set height to 60% of the viewport height
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "-30px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
            <Box
              component="img"
              src="https://i.ibb.co/nP2GcpB/Group-19.webp" // Updated image URL to 300x300
              alt="Sample"
              sx={{
                width: "200px", // Set image width to 300px
                height: "200px", // Set image height to 300px
                objectFit: "cover", // Ensure the image fits the container without distortion
              }}
            />
          </Box>
        </Container>
      </section>

      <section
        style={{
          backgroundColor: "#eaecee", // Fallback background color
          backgroundImage: 'url("https://i.ibb.co/SwV1VVZ/Group-21.webp")', // Background image URL
          backgroundSize: "cover", // Ensure the image covers the entire section
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "flex-end", // Align content to the bottom of the section
          alignItems: "center",
          height: "60vh", // Set height to 60% of the viewport height
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "-30px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
            <Box
              component="img"
              src="https://i.ibb.co/c3vV7tD/Untitled-2-Photoroom.webp" // Updated image URL to 300x300
              alt="Sample"
              sx={{
                width: "100%", // Set image width to 300px
                height: "Auto", // Set image height to 300px
                objectFit: "cover", // Ensure the image fits the container without distortion
              }}
            />
          </Box>
        </Container>
      </section>

      <section
        style={{
          backgroundColor: "#eaecee", // Fallback background color
          backgroundImage: 'url("https://i.ibb.co/xLfQrQw/Group-22.webp")', // Background image URL
          backgroundSize: "cover", // Ensure the image covers the entire section
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "flex-end", // Align content to the bottom of the section
          alignItems: "center",
          height: "60vh", // Set height to 60% of the viewport height
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "-30px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
            <Box
              component="img"
              src="https://i.ibb.co/qjBBQnt/Group-23.webp" // Updated image URL to 300x300
              alt="Sample"
              sx={{
                width: "100%", // Set image width to 300px
                height: "Auto", // Set image height to 300px
                objectFit: "cover", // Ensure the image fits the container without distortion
              }}
            />
          </Box>
        </Container>
      </section>

      <section
        style={{
          backgroundColor: "#eaecee", // Fallback background color
          backgroundImage: 'url("https://i.ibb.co/3MbMM2q/Group-23.webp")', // Background image URL
          backgroundSize: "cover", // Ensure the image covers the entire section
          backgroundPosition: "center", // Ensure background is centered
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center", // Center content horizontally
          alignItems: "center",
          height: "60vh", // Set height to 60% of the viewport height
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "-30px",
          boxSizing: "border-box", // Ensure padding doesn't mess with the layout
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
            <Box
              component="img"
              src="https://i.ibb.co/Ry65kQZ/Color-Fill-1.webp" // Updated image URL to 300x300
              alt="Sample"
              sx={{
                width: "100%", // Ensure image scales with the container width
                maxWidth: "500px", // Maximum width of image
                height: "auto", // Maintain aspect ratio
                objectFit: "cover", // Ensure the image fits the container without distortion
                margin: "0 auto", // Center the image horizontally
              }}
            />
          </Box>
        </Container>
      </section>

      <section
        style={{
          backgroundColor: "#eaecee", // Fallback background color
          backgroundImage: 'url("https://i.ibb.co/PFj9WTv/Group-24.webp")', // Background image URL
          backgroundSize: "cover", // Ensure the image covers the entire section
          backgroundPosition: "center", // Ensure background is centered
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center", // Center content horizontally
          alignItems: "center",
          height: "60vh", // Set height to 60% of the viewport height
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "-30px",
          boxSizing: "border-box", // Ensure padding doesn't mess with the layout
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
            <Box
              component="img"
              src="https://i.ibb.co/fFRBB61/Group-24f.webp" // Updated image URL to 300x300
              alt="Sample"
              sx={{
                width: "100%", // Ensure image scales with the container width
                maxWidth: "500px", // Maximum width of image
                height: "auto", // Maintain aspect ratio
                objectFit: "cover", // Ensure the image fits the container without distortion
                margin: "0 auto", // Center the image horizontally
              }}
            />
          </Box>
        </Container>
      </section>
      <section
        style={{
          backgroundColor: "#000000",
          backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
          width: "100%",
          margin: "0 auto",
          marginBottom: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
          paddingBottom: "50px",
          marginTop: "-30px",
          direction: "rtl",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 },
            textAlign: "center",
          }}
        >
          <Grid container spacing={4}>
            {/* Text Section on the Right */}
            <Grid
              item
              xs={12}
              sm={6}
              order={{ xs: 1, sm: 1 }} // Keep this section first on all screen sizes
              sx={{ direction: "rtl" }}
            >
              <Typography variant="h4" color="white" paragraph>
                Contact Us
              </Typography>
              <Typography variant="h5" color="#00fffc">
                للطلب والإستفسار /
              </Typography>
              <Typography variant="h6" color="white" sx={{ marginTop: "50px" }}>
                مدير قسم الميديا :{" "}
                <span style={{ fontWeight: "bold" }}>9999 065 057</span>
              </Typography>
              <Typography variant="h6" color="white" sx={{ marginTop: "10px" }}>
                مدير فرع الشرقية :{" "}
                <span style={{ fontWeight: "bold" }}>9999 064 057</span>
              </Typography>
              <Typography variant="h6" color="white" sx={{ marginTop: "10px" }}>
                مدير تسويق الميديا :{" "}
                <span style={{ fontWeight: "bold" }}>8888 093 057</span>
              </Typography>
            </Grid>

            {/* Contact Form Section on the Left */}
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
              <h2
                style={{
                  color: "white",
                  fontFamily: "Tajawal",
                  fontSize: "26px",
                  textAlign: "right",
                  marginBottom: "20px",
                  direction: "rtl",
                }}
              >
                للإستفسارات العامة ..
              </h2>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  direction: "rtl",
                }}
                onSubmit={handleFormSubmit}
              >
                <Form.Group
                  controlId="name"
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <Form.Label
                    style={{
                      color: "white",
                      fontFamily: "Tajawal",
                      fontSize: "22px",
                      width: "150px",
                      textAlign: "right",
                    }}
                  >
                    الاسم
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      background: "#17202a",
                      border: "none",
                      outline: "none",
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="phone"
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <Form.Label
                    style={{
                      color: "white",
                      fontFamily: "Tajawal",
                      fontSize: "22px",
                      width: "150px",
                      textAlign: "right",
                    }}
                  >
                    جـوال
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      background: "#17202a",
                      border: "none",
                      outline: "none",
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="email"
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <Form.Label
                    style={{
                      color: "white",
                      fontFamily: "Tajawal",
                      fontSize: "22px",
                      width: "150px",
                      textAlign: "right",
                    }}
                  >
                    بريد الكتروني
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      background: "#17202a",
                      border: "none",
                      outline: "none",
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="message"
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <Form.Label
                    style={{
                      color: "white",
                      fontFamily: "Tajawal",
                      fontSize: "22px",
                      width: "150px",
                      textAlign: "right",
                    }}
                  >
                    رسالتك
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      background: "#17202a",
                      border: "none",
                      outline: "none",
                    }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: "15px",
                    background: "#00fffc",
                    color: "#1e272e",
                    padding: { xs: "10px", sm: "15px" },
                  }}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Container>
  );
};

export default ArabicCalligraphy;
