import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  Pagination,
  CircularProgress,
  Container,
} from "@mui/material";
import { Carousel, Form } from "react-bootstrap";
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

// Constants
const ITEMS_PER_PAGE = 12;
const API_HOST = process.env.REACT_APP_API_HOST;

// Social media links
const SOCIAL_MEDIA = [
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

// Carousel items
const CAROUSEL_ITEMS = [
  { id: 1, img: "https://i.ibb.co/cTSJFMK/Group-25.webp" },
  { id: 2, img: "https://i.ibb.co/cTSJFMK/Group-25.webp" },
  { id: 3, img: "https://i.ibb.co/cTSJFMK/Group-25.webp" },
];

// Component for social media sidebar
const SocialMediaSidebar = () => (
  <Box
    sx={{
      position: "fixed",
      top: "50%",
      left: 0,
      transform: "translateY(-50%)",
      display: { xs: "none", md: "flex" },
      flexDirection: "column",
      gap: "15px",
      zIndex: 2,
      paddingLeft: 2,
    }}
  >
    {SOCIAL_MEDIA.map((social, index) => (
      <a
        key={index}
        href={social.link}
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
          {social.icon}
        </Box>
      </a>
    ))}
  </Box>
);

// Component for image gallery with zoom functionality
const ImageGallery = ({ products, handleImageClick }) => (
  <Grid container spacing={2}>
    {products.map((product, index) => (
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
            src={`${API_HOST}/uploads/ArabicCalligraphy/${product.arabicCalligraphyimage}`}
            sx={{
              height: 300,
              objectFit: "cover",
              cursor: "zoom-in",
            }}
            onClick={() =>
              handleImageClick(
                `${API_HOST}/uploads/ArabicCalligraphy/${product.arabicCalligraphyimage}`,
              )
            }
          />
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              bottom: "0px",
              left: "50%",
              transform: "translateX(-50%)",
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
);

// Component for the image zoom modal
const ZoomedImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
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
      onClick={onClose}
    >
      <img
        src={imageSrc}
        alt="Zoomed"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          objectFit: "contain",
          cursor: "zoom-out",
        }}
      />
    </Box>
  );
};

// Component for the contact form
const ContactForm = ({ formData, handleChange, handleSubmit }) => (
  <>
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
      للشكاوي ..
    </h2>

    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        direction: "rtl",
      }}
      onSubmit={handleSubmit}
    >
      {[
        { id: "name", label: "الاسم", type: "text" },
        { id: "phone", label: "جـوال", type: "text" },
        { id: "message", label: "رسالتك", type: "textarea", rows: 3 },
      ].map((field) => (
        <Form.Group
          key={field.id}
          controlId={field.id}
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
            {field.label}
          </Form.Label>
          {field.type === "textarea" ? (
            <Form.Control
              as="textarea"
              rows={field.rows}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              style={{
                background: "#17202a",
                border: "none",
                outline: "none",
              }}
            />
          ) : (
            <Form.Control
              type={field.type}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              style={{
                background: "#17202a",
                border: "none",
                outline: "none",
              }}
            />
          )}
        </Form.Group>
      ))}
      {/* Centered Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
          paddingRight: "150px",
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
  </>
);

// Component for background section with image
const BackgroundSection = ({ backgroundImage, height = "60vh", children }) => (
  <section
    style={{
      backgroundColor: "#eaecee",
      backgroundImage: `url("${backgroundImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      margin: "0 auto",
      marginBottom: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height,
      paddingTop: "20px",
      paddingBottom: "20px",
      marginTop: "-30px",
      boxSizing: "border-box",
    }}
  >
    <Container
      maxWidth="xl"
      sx={{
        paddingX: { xs: 2, sm: 3, md: 5 },
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      {children}
    </Container>
  </section>
);

// Main component
const ArabicCalligraphy = () => {
  const [calligraphyData, setCalligraphyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Fetch calligraphy data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_HOST}/ArabicCalligraphy`);
        setCalligraphyData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate pagination
  const indexOfLastProduct = page * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = calligraphyData.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(calligraphyData.length / ITEMS_PER_PAGE);

  // Event handlers
  const handlePageChange = (event, value) => {
    setPage(value);
    // Scroll to top of products section
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill out all fields.");
      return;
    }

    // Redirect to external site
    window.location.href = "https://another-site.com/contact";
  };

  const handleImageClick = (src) => {
    setIsZoomed(true);
    setZoomedImageSrc(src);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
    setZoomedImageSrc("");
  };

  // Loading and error handling
  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );

  return (
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
          {CAROUSEL_ITEMS.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={`Slide ${item.id}`}
                style={{
                  objectFit: "cover",
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Social Media Sidebar */}
        <SocialMediaSidebar />
      </Box>

      {/* Products Gallery Section */}
      <section
        style={{
          backgroundColor: "#eaecee",
          backgroundImage:
            'url("https://i.ibb.co/FKQ2rWm/Background-copy.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
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

          {/* Image Gallery */}
          <ImageGallery
            products={currentProducts}
            handleImageClick={handleImageClick}
          />

          {/* Zoom Modal */}
          <ZoomedImageModal
            isOpen={isZoomed}
            imageSrc={zoomedImageSrc}
            onClose={handleCloseZoom}
          />

          {/* Pagination */}
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

      {/* Content Sections */}
      <BackgroundSection backgroundImage="https://i.ibb.co/cg2zMGj/Group-18.webp">
        <h2
          style={{
            fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
            color: "#261d22",
            fontFamily: "Tajawal",
            marginBottom: "20px",
          }}
        >
          أسماء مزخرفة
        </h2>

        <h3
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            color: "#065956",
            fontFamily: "Tajawal",
            marginBottom: "20px",
          }}
        >
          شخصيات - عائلية - عروسين - مناسبات
        </h3>
      </BackgroundSection>

      <BackgroundSection backgroundImage="https://i.ibb.co/99bpscJ/Group-20.webp">
        <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
          <Box
            component="img"
            src="https://i.ibb.co/nP2GcpB/Group-19.webp"
            alt="Sample"
            sx={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </Box>
      </BackgroundSection>

      <BackgroundSection backgroundImage="https://i.ibb.co/SwV1VVZ/Group-21.webp">
        <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
          <Box
            component="img"
            src="https://i.ibb.co/c3vV7tD/Untitled-2-Photoroom.webp"
            alt="Sample"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>
      </BackgroundSection>

      <BackgroundSection backgroundImage="https://i.ibb.co/xLfQrQw/Group-22.webp">
        <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
          <Box
            component="img"
            src="https://i.ibb.co/qjBBQnt/Group-23.webp"
            alt="Sample"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>
      </BackgroundSection>

      <BackgroundSection backgroundImage="https://i.ibb.co/3MbMM2q/Group-23.webp">
        <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
          <Box
            component="img"
            src="https://i.ibb.co/Ry65kQZ/Color-Fill-1.webp"
            alt="Sample"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "cover",
              margin: "0 auto",
            }}
          />
        </Box>
      </BackgroundSection>

      <BackgroundSection backgroundImage="https://i.ibb.co/PFj9WTv/Group-24.webp">
        <Box sx={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
          <Box
            component="img"
            src="https://i.ibb.co/fFRBB61/Group-24f.webp"
            alt="Sample"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "cover",
              margin: "0 auto",
            }}
          />
        </Box>
      </BackgroundSection>

      {/* Contact Section */}
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
            {/* Contact Info */}
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
                  { label: "مدير قسم الميديا", value: "8888 093 057" },
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

            {/* Contact Form */}
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
              <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleFormSubmit}
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </Container>
  );
};

export default ArabicCalligraphy;
