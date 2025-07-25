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
  Button,
  Drawer,
  AppBar,
  Toolbar,
} from "@mui/material";
import ReactPlayer from "react-player";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
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
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/GpC6cmy/Group-12.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/GpC6cmy/Group-12.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/GpC6cmy/Group-12.webp",
  },
];

const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  message: "",
};

const WebMediaVideo = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;

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
    const whatsappNumber = "966570948888";
    const text = `👋 مرحبًا، لدي استفسار:\n\n📛 الاسم: ${name}\n📞 الجوال: ${phone}\n📝 الرسالة: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  const socialLinks = [
    { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
    { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
    { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
    { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
    { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
    { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
    { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
  ];

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


  const indexOfLastProduct = page * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (event, value) => setPage(value);
  const handleVideoClick = (url) => setCurrentVideoUrl(url);

  const mediaLinks = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {[
        { label: "قسم الإعلام والميديا", path: "/قسم الإعلام والميديا" },
        { label: "فيديو", path: "/Web-Media-Video" },
        { label: "VR Videos", path: "/vr-videos" },
        { label: "فـوتـو", path: "/Web-Media-photo" },
        { label: "Motion graphics", path: "/Motion-graphics" },
        { label: "Ai Videos", path: "/AIVideos" },
        { label: "3D Animation", path: "/3D-Animation" },
      ].map((btn, index) => (
        <Button
          key={index}
          variant="contained"
          component={Link}
          to={btn.path}
          sx={{ backgroundColor: "#17202a", color: "#fff" }}
          onClick={() => setDrawerOpen(false)}
        >
          {btn.label}
        </Button>
      ))}
    </Box>
  );

  return (
    <>
      {/* Mobile Media Drawer Toggle */}
      <AppBar position="fixed" sx={{ display: { xs: "flex", md: "none" }, backgroundColor: "#06f9f3", top: "94px" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#17202a", fontWeight: "bold" }}>
            ميديا
          </Typography>
          <IconButton edge="end" onClick={() => setDrawerOpen(true)} sx={{ color: "#17202a" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Media Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#06f9f3",
            padding: 2,
            width: 250,
          },
        }}
      >
        {mediaLinks}
      </Drawer>

      {/* Media Sidebar (Desktop) */}
      <Box
        sx={{
          position: "fixed",
          top: "20%",
          right: 0,
          zIndex: 1200,
          backgroundColor: "#06f9f3",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          display: { xs: "none", md: "block" },
        }}
      >
        {mediaLinks}
      </Box>

      {/* Carousel Section */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          mt: { xs: "150px", md: "0px" },
        }}
      >
        <Carousel fade>
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt="Slide"
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
          {socialLinks.map(({ icon, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer">
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
                playing={true}
                controls
                width="100%"
                height="60vh"
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
            }}
          >
            <Box
              sx={{
                padding: 0,
                borderRadius: 2,
                boxShadow: 3,
                maxWidth: "100%",
                textAlign: "center",
                marginBottom: "20px",
                border: "2px solid white",
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
            {/* Text Section */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                textAlign: "justify",
                direction: "ltr",
                pr: 5,
              }}
            >
              <Typography variant="h4" color="white">
                Contact Us
              </Typography>

              <Typography
                variant="h5"
                color="#00fffc"
                sx={{ textAlign: "justify", direction: "rtl" }}
              >
                للطلب والإستفسار /
              </Typography>

              <Grid
                container
                spacing={2}
                sx={{ pt: "30px", direction: "rtl", alignItems: "center" }}
              >
                {[
                  { label: "مدير قسم الميديا", value: "9999 065 057" },
                  { label: "مدير فرع الشرقية", value: "9999 064 057" },
                  { label: "مدير تسويق الميديا", value: "8888 093 057" },
                ].map(({ label, value }) => (
                  <React.Fragment key={label}>
                    <Grid item xs={4}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "white",
                          fontSize: { xs: "17px", sm: "18px", md: "20px" },
                          textAlign: "right",
                        }}
                      >
                        {label}
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "white",
                          fontSize: { xs: "17px", sm: "18px", md: "20px" },
                          textAlign: "right",
                        }}
                      >
                        :
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "white",
                          fontSize: { xs: "17px", sm: "18px", md: "20px" },
                          textAlign: "right",
                        }}
                      >
                        {value}
                      </Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>

            {/* Form Section */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontFamily: "Tajawal",
                  fontSize: "26px",
                  textAlign: "right",
                  marginBottom: "20px",
                  direction: "rtl",
                }}
              >
                للشكاوي ..
              </Typography>

              <form onSubmit={handleFormSubmit} style={{ direction: "rtl" }}>
                <Form.Group
                  className="mb-3 d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <Form.Label
                    style={{
                      color: "white",
                      width: "150px",
                      fontSize: "20px",
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
                      color: "white",
                      textAlign: "right",
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <Form.Label
                    style={{
                      color: "white",
                      width: "150px",
                      fontSize: "20px",
                      textAlign: "right",
                    }}
                  >
                    الجوال
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      background: "#17202a",
                      border: "none",
                      color: "white",
                      textAlign: "right",
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <Form.Label
                    style={{
                      color: "white",
                      width: "150px",
                      fontSize: "20px",
                      textAlign: "right",
                    }}
                  >
                    رسالتك
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      background: "#17202a",
                      border: "none",
                      color: "white",
                      textAlign: "right",
                    }}
                  />
                </Form.Group>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "15px",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
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

export default WebMediaVideo;
