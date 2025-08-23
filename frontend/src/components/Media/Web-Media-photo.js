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
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Box,
  Typography,
  Grid,
  Pagination,
  CardMedia,
  Container,
  Button,
  CircularProgress,
  Skeleton,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  ClickAwayListener,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "@mui/material";



// Carousel and card data
const carouselItems = [
  { id: 1, img: "https://i.ibb.co/spnGyFpf/AI-in-Banner-5.webp" },
  { id: 2, img: "https://i.ibb.co/spnGyFpf/AI-in-Banner-5.webp" },
  { id: 3, img: "https://i.ibb.co/spnGyFpf/AI-in-Banner-5.webp" },
];

const products1 = [
  {
    cardTitles: "أعمال فنية وإنتاج",
    imageUrls: "https://i.ibb.co/w0c1Yzr/Write-lede.webp",
  },
  {
    cardTitles: "كتابة محتوي وتأليف",
    imageUrls: "https://i.ibb.co/48mQr3n/dfba4c19cde988c07930123097f49c78.webp",
  },
  {
    cardTitles: "تصميمات إبداعية",
    imageUrls: "https://i.ibb.co/85pqszg/DALL-E-2024-09-30-00-33-16-A-giant-whimsical-fountain-pen-sitting-confidently-in-a-traditional-direc.webp",
  },
  {
    cardTitles: "محتـوي حصـري",
    imageUrls: "https://i.ibb.co/J7Gp115/piclumen-1727383323200.webp",
  },
];

// Initial form state
const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  message: "",
};

// Categories (static)
const categories = [
  "All",
  "Weddings",
  "Sports",
  "Products",
  "Foods",
  "Factory",
  "Conference",
];

const WebMediaphoto = () => {
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState("All");
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 16;
  const [sidebarOpenDesktop, setSidebarOpenDesktop] = useState(false);

  // Fetch Media Photos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/MediaCommunicationsphoto`
        );
        setPhotos(response.data);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

    // Form Handlers
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


  // Zoom handlers
  const handleImageClick = useCallback((src) => {
    setIsZoomed(true);
    setZoomedImageSrc(src);
  }, []);

  const handleCloseZoom = useCallback(() => {
    setIsZoomed(false);
    setZoomedImageSrc("");
  }, []);

  const handlePageChange = (event, value) => setPage(value);

  // Filter photos by category (memoized)
  const filteredPhotos = useMemo(() => {
    if (category === "All") return photos;
    return photos.filter(
      (p) =>
        p.MediaCommunicationsphototype?.toLowerCase().trim() ===
        category.toLowerCase().trim()
    );
  }, [photos, category]);

  const indexOfLastProduct = page * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredPhotos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);

    const socialLinks = [
    { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
    { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
    { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
    { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
    { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
    { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
    { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
  ];

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

  if (loading) return <Box sx={{ textAlign: "center", mt: 5 }}><CircularProgress /></Box>;
  if (error) return <Box sx={{ textAlign: "center", mt: 5 }}>{error}</Box>;

  return (
    <>
    {/* Mobile AppBar */}
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

      {/* Mobile Drawer */}
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

      {/* Desktop Sidebar Toggle Button */}
      {!sidebarOpenDesktop && (
        <IconButton
          onClick={() => setSidebarOpenDesktop(true)}
          sx={{
            position: "fixed",
            top: "20%",
            right: 0,
            zIndex: 1100,
            backgroundColor: "#06f9f3",
            color: "#17202a",
            borderRadius: "5px 0 0 5px",
            display: { xs: "none", md: "flex" },
            boxShadow: 3,
            "&:hover": { backgroundColor: "#00e0dc" },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Desktop Sidebar with ClickAwayListener */}
      {sidebarOpenDesktop && (
        <ClickAwayListener onClickAway={() => setSidebarOpenDesktop(false)}>
          <Box
            sx={{
              position: "fixed",
              top: "20%",
              right: 0,
              zIndex: 1200,
              backgroundColor: "#06f9f3",
              padding: "20px",
              borderRadius: "5px 0 0 5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              display: { xs: "none", md: "block" },
              minWidth: "250px",
            }}
          >
            <IconButton
              onClick={() => setSidebarOpenDesktop(false)}
              sx={{
                position: "absolute",
                top: 5,
                left: 5,
                color: "#17202a",
                fontSize: "20px",
              }}
            >
              ✕
            </IconButton>
            {mediaLinks}
          </Box>
        </ClickAwayListener>
      )}

      {/* Carousel Section */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          mt: { xs: "150px", md: "100px" },
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
     <Box sx={{ backgroundColor: "#17202a", py: 5 }}>
      {/* Header */}
      {/* <Box
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
            color: "#fff",
            paddingTop: "15px",
            paddingBottom: "15px",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
          }}
        >
          فوتوغرافيا
        </Typography>
      </Box> */}

      {/* Category Filter Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mt: { xs: 5, md: 3 },
          mb: 3,
        }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setPage(1);
            }}
            sx={{
              backgroundColor: category === cat ? "#e99b19" : "#34495e",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "50px",
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#e99b19",
                color: "#fff",
              },
            }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      {/* Gallery Section */}
      <Container maxWidth="xl" sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          {/* Loading skeleton */}
          {loading &&
            Array.from(new Array(itemsPerPage)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Skeleton variant="rectangular" height={180} />
              </Grid>
            ))}

          {/* No photos found */}
          {!loading && currentProducts.length === 0 && (
            <Typography
              textAlign="center"
              sx={{ mt: 5, width: "100%", color: "#fff" }}
            >
              No photos found for "{category}" category.
            </Typography>
          )}

          {/* Photo grid */}
          {!loading &&
            currentProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CardMedia
                  component="img"
                  loading="lazy"
                  alt={`Photo ${index}`}
                  src={`${process.env.REACT_APP_API_HOST}/uploads/MediaCommunications/Photo/${product.MediaCommunicationsphotoimage}`}
                  sx={{
                    height: { xs: 120, sm: 150, md: 180 },
                    objectFit: "cover",
                    cursor: "zoom-in",
                    border: "4px solid transparent",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      border: "4px solid #e99b19",
                    },
                  }}
                  onClick={() =>
                    handleImageClick(
                      `${process.env.REACT_APP_API_HOST}/uploads/MediaCommunications/Photo/${product.MediaCommunicationsphotoimage}`
                    )
                  }
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Typography
                    variant="h3"
                    component="span"
                    sx={{
                      fontFamily: "Tajawal",
                      fontSize: "1.2rem",
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

        {/* Zoom View */}
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
                cursor: "zoom-out",
              }}
            />
          </Box>
        )}

        {/* Pagination */}
        <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
          {!loading && totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#fff",          // Numbers color
                  borderColor: "#fff",    // Border color for outlined variant
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "#06f9f3", // Selected page background
                  color: "#fff",               // Selected page text color
                },
                "& .MuiPaginationItem-root:hover": {
                  backgroundColor: "#06f9f3",
                  color: "#fff",
                },
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
     <Box
      sx={{
        backgroundColor: "#eaecee",
        backgroundImage: 'url("https://i.ibb.co/w0p131X/image.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        margin: "0 auto",
        mt: "-30px",
        mb: "30px",
        height: { xs: "auto", md: "67vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: "10px", md: "20px" },
        pb: { xs: "10px", md: "20px" },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          mt: "40px",
          mb: "40px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
              <Link to={`/service/${index + 1}`} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: 3,
                    border: "2px solid #f05322",
                    "&:hover": { boxShadow: 6 },
                    mb: "20px",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`Service ${index}`}
                    image={product.imageUrls}
                    sx={{ height: 300, objectFit: "cover" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      position: "absolute",
                      bottom: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "white",
                      backgroundColor: "#000",
                      padding: "10px",
                      borderRadius: "4px",
                      textAlign: "center",
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
    </Box>
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

export default WebMediaphoto;
