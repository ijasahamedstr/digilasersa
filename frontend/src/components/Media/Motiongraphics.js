import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import {
  Box,
  Typography,
  Grid,
  Pagination,
  CardMedia,
  Container,
  IconButton,
  Card,
} from "@mui/material";
import ReactPlayer from "react-player"; // Ensure to import ReactPlayer
import PlayCircleIcon from "@mui/icons-material/PlayCircle"; // Importing the play icon
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, TextField } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/tz5KpcW/Motion-Graphics-Banner.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/tz5KpcW/Motion-Graphics-Banner.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/tz5KpcW/Motion-Graphics-Banner.webp",
  },
];

const Motiongraphics = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

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

  const products = [
    {
      img: "https://i.ibb.co/KyyGLjT/perfume-creative-product-photography-04-1.webp",
      title: "المنتجات",
      videoUrl: "https://youtu.be/C-KyHvm521c", // New video URL
    },
    {
      img: "https://i.ibb.co/nCLwpf3/Whats-App-Image-2024-09-01-at-12-48-57-d84d659d.webp",
      title: "الأعراس والمناسبات",
      videoUrl: "https://youtu.be/BhX6dU3tH3s", // New video URL
    },
    {
      img: "https://i.ibb.co/Hz3M5LK/delicious-burger-nature.webp",
      title: "المنيوهات الأطعمة المشروبات",
      videoUrl: "https://youtu.be/lN1V_g1RhvQ", // New video URL
    },
    {
      img: "https://i.ibb.co/KyyGLjT/perfume-creative-product-photography-04-1.webp",
      title: "المنتجات",
      videoUrl: "https://youtu.be/C-KyHvm521c", // New video URL
    },
    {
      img: "https://i.ibb.co/nCLwpf3/Whats-App-Image-2024-09-01-at-12-48-57-d84d659d.webp",
      title: "الأعراس والمناسبات",
      videoUrl: "https://youtu.be/BhX6dU3tH3s", // New video URL
    },
    {
      img: "https://i.ibb.co/Hz3M5LK/delicious-burger-nature.webp",
      title: "المنيوهات الأطعمة المشروبات",
      videoUrl: "https://youtu.be/lN1V_g1RhvQ", // New video URL
    },
    {
      img: "https://i.ibb.co/nCLwpf3/Whats-App-Image-2024-09-01-at-12-48-57-d84d659d.webp",
      title: "الأعراس والمناسبات",
      videoUrl: "https://youtu.be/BhX6dU3tH3s", // New video URL
    },
    {
      img: "https://i.ibb.co/Hz3M5LK/delicious-burger-nature.webp",
      title: "المنيوهات الأطعمة المشروبات",
      videoUrl: "https://youtu.be/lN1V_g1RhvQ", // New video URL
    },
    // Add more products as needed...
  ];

  const products1 = [
    {
      cardTitles: "أعمال فنية وإنتاج",
      imageUrls: "https://i.ibb.co/w0c1Yzr/Write-lede.webp",
    },
    {
      cardTitles: "كتابة محتوي وتأليف",
      imageUrls:
        "https://i.ibb.co/48mQr3n/dfba4c19cde988c07930123097f49c78.webp",
    },
    {
      cardTitles: "تصميمات إبداعية",
      imageUrls:
        "https://i.ibb.co/85pqszg/DALL-E-2024-09-30-00-33-16-A-giant-whimsical-fountain-pen-sitting-confidently-in-a-traditional-direc.webp",
    },
    {
      cardTitles: "محتـوي حصـري",
      imageUrls: "https://i.ibb.co/J7Gp115/piclumen-1727383323200.webp",
    },
  ];

  // Video player state
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  // Pagination states
  const [page, setPage] = useState(1);
  const itemsPerPage = 16; // Number of items per page

  const indexOfLastProduct = page * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Handle card click to play video
  const handleVideoClick = (videoUrl) => {
    setCurrentVideoUrl(videoUrl); // Update the current video URL to play
  };

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
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

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
        <Box
          sx={{
            position: "fixed",
            top: "10%",
            right: 0,
            zIndex: 2,
            backgroundColor: "#06f9f3",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <Button
              variant="contained"
              component={Link} // Use Link component here
              to="/Web-Media-Video" // Correct route path
              sx={{ backgroundColor: "#17202a", color: "#fff" }}
            >
              فيديو
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/vr-videos"
              sx={{ backgroundColor: "#17202a", color: "#fff" }}
            >
              VR Videos
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/Web-Media-photo"
              sx={{ backgroundColor: "#17202a", color: "#fff" }}
            >
              فـوتـو
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/Motion-graphics"
              sx={{ backgroundColor: "#17202a", color: "#fff" }}
            >
              Motion graphics
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/AIVideos"
              sx={{ backgroundColor: "#17202a", color: "#fff" }}
            >
              Ai Videos
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/3D-Animation"
              sx={{ backgroundColor: "#17202a", color: "#fff" }}
            >
              3D Animation
            </Button>
          </Box>
        </Box>
        {/* Video Player */}
        <section
          style={{
            backgroundColor: "#f2f3f4",
            background: "#17202a",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Container maxWidth="xl" sx={{ padding: 3 }}>
            {currentVideoUrl && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 3,
                  border: "4px solid #f05322",
                  borderRadius: 2,
                }}
              >
                <ReactPlayer
                  url={currentVideoUrl}
                  playing={true} // Auto play the video
                  controls
                  width="100%"
                  height="60vh" // Responsive height
                />
              </Box>
            )}

            <Box
              sx={{
                padding: 0,
                borderRadius: 2,
                boxShadow: 3,
                maxWidth: "100%",
                textAlign: "center",
                marginBottom: "20px",
                border: "2px solid white", // Add this line to create a white border
                marginTop: "30px",
              }}
            >
              <Typography
                variant="h2"
                component="h3"
                sx={{
                  fontFamily: "Tajawal",
                  color: "#333",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#FFFFFF" }}>فوتوغرافيا</span>
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {currentProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      alt={`Service ${index}`}
                      image={product.img}
                      sx={{
                        height: { xs: 120, sm: 150, md: 180 },
                        objectFit: "cover",
                        cursor: "pointer",
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                        border: "4px solid transparent",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                          border: "4px solid #e99b19",
                        },
                      }}
                      onClick={() => handleVideoClick(product.videoUrl)}
                    />
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                        },
                      }}
                      onClick={() => handleVideoClick(product.videoUrl)}
                    >
                      <PlayCircleIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 1,
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="span"
                      sx={{
                        fontFamily: "Tajawal",
                        fontSize: "1.5rem",
                        textAlign: "center",
                        display: "block",
                        color: "#e99b19",
                      }}
                    >
                      {product.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

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
      </Box>
      <section
        style={{
          backgroundColor: "#030909",
          backgroundImage:
            'url("https://i.ibb.co/1rmQDz3/Final-Web-Media-VR-line-bk-1.webp")', // Background image URL
          backgroundSize: "cover", // Ensures the image covers the entire section
          backgroundPosition: "center", // Centers the background image
          width: "100%",
          display: "flex",
          justifyContent: "center", // Horizontally center the content
          alignItems: "center", // Vertically center the content
          height: "450px", // Increased height of the section
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: "center", // Center text for all screen sizes
          }}
        >
          {/* Grid for Icon Cards */}
          <Grid container spacing={4}>
            {/* Icon Card 1 */}
            <Grid item xs={6} sm={3}>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <img
                  src="https://i.ibb.co/HtjnCTB/8888.webp" // Replace with your actual image URL
                  alt="Content Creation"
                  style={{
                    width: "50%", // Adjusted size for mobile responsiveness
                    height: "auto", // Maintain aspect ratio
                    borderRadius: "8px",
                    marginBottom: "10px", // Add space between image and title
                    display: "block", // Makes the image block-level for centering
                    marginLeft: "auto", // Centers image horizontally
                    marginRight: "auto", // Centers image horizontally
                  }}
                />
              </div>
              <Typography
                variant="h6"
                sx={{
                  color: "#000000",
                  fontWeight: "700",
                  fontFamily: "Tajawal",
                  fontSize: { xs: "12px", sm: "13px", md: "20px" },
                }}
              >
                الإعداد وصناعة المحتوي
              </Typography>
            </Grid>

            {/* Icon Card 2 */}
            <Grid item xs={6} sm={3}>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <img
                  src="https://i.ibb.co/w04Sjqp/999.webp" // Replace with your actual image URL
                  alt="Content Creation"
                  style={{
                    width: "50%", // Adjusted size for mobile responsiveness
                    height: "auto", // Maintain aspect ratio
                    borderRadius: "8px",
                    marginBottom: "10px", // Add space between image and title
                    display: "block", // Makes the image block-level for centering
                    marginLeft: "auto", // Centers image horizontally
                    marginRight: "auto", // Centers image horizontally
                  }}
                />
              </div>
              <Typography
                variant="h6"
                sx={{
                  color: "#000000",
                  fontWeight: "700",
                  fontFamily: "Tajawal",
                  fontSize: { xs: "12px", sm: "13px", md: "20px" },
                }}
              >
                المونتاج والجرافيك
              </Typography>
            </Grid>

            {/* Icon Card 3 */}
            <Grid item xs={6} sm={3}>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <img
                  src="https://i.ibb.co/C7nsTj6/5251.webp" // Replace with your actual image URL
                  alt="Content Creation"
                  style={{
                    width: "50%", // Adjusted size for mobile responsiveness
                    height: "auto", // Maintain aspect ratio
                    borderRadius: "8px",
                    marginBottom: "10px", // Add space between image and title
                    display: "block", // Makes the image block-level for centering
                    marginLeft: "auto", // Centers image horizontally
                    marginRight: "auto", // Centers image horizontally
                  }}
                />
              </div>
              <Typography
                variant="h6"
                sx={{
                  color: "#000000",
                  fontWeight: "700",
                  fontFamily: "Tajawal",
                  fontSize: { xs: "12px", sm: "13px", md: "20px" },
                }}
              >
                التصوير والإخراج
              </Typography>
            </Grid>

            {/* Icon Card 4 */}
            <Grid item xs={6} sm={3}>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <img
                  src="https://i.ibb.co/4J3ZdPT/Screenshot-2024-08-13-171715.webp" // Replace with your actual image URL
                  alt="Content Creation"
                  style={{
                    width: "50%", // Adjusted size for mobile responsiveness
                    height: "auto", // Maintain aspect ratio
                    borderRadius: "8px",
                    marginBottom: "10px", // Add space between image and title
                    display: "block", // Makes the image block-level for centering
                    marginLeft: "auto", // Centers image horizontally
                    marginRight: "auto", // Centers image horizontally
                  }}
                />
              </div>
              <Typography
                variant="h6"
                sx={{
                  color: "#000000",
                  fontWeight: "700",
                  fontFamily: "Tajawal",
                  fontSize: { xs: "12px", sm: "13px", md: "20px" },
                }}
              >
                الإنتاج الصوتي والبودكاست
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
      <br />
      <section
        style={{
          backgroundColor: "#eaecee", // Fallback background color
          backgroundImage: 'url("https://i.ibb.co/w0p131X/image.webp")', // Replace with your image URL
          backgroundSize: "cover", // Ensure the image covers the entire section
          backgroundPosition: "center", // Ensure the image is centered
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          height: "67vh",
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
        {/* Swiper Section */}
        <Container
          maxWidth="xl"
          sx={{
            marginTop: "40px",
            marginBottom: "40px",
            backgroundSize: "cover", // Makes sure the image covers the entire container
            backgroundPosition: "center", // Centers the background image
            backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
          }}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {products1.map((product, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={`/service/${index + 1}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      boxShadow: 3,
                      border: "2px solid #f05322",
                      "&:hover": { boxShadow: 6 },
                      marginBottom: "20px",
                      position: "relative", // Required for absolute positioning of the text
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={`Service ${index}`}
                      image={product.imageUrls}
                      sx={{
                        height: 300,
                        objectFit: "cover", // Ensures image covers the area without stretching
                      }}
                    />

                    {/* Text overlay on top of the image */}
                    <Typography
                      variant="h6"
                      sx={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)", // This centers the text horizontally
                        color: "white",
                        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a background to the text for better visibility
                        backgroundColor: "#000000",
                        padding: "10px",
                        borderRadius: "4px",
                        textAlign: "center", // Ensures the text inside is centered
                        width: "100%",
                        border: "2px solid #f05322",
                      }}
                    >
                      {product.cardTitles}
                    </Typography>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
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

export default Motiongraphics;
