import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  useMediaQuery, // Import useMediaQuery
  useTheme,      // Import useTheme
} from "@mui/material";
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
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { Grid } from "@mui/material"; // Import Grid

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/rR1CHjzN/New-Web-Sound.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/rR1CHjzN/New-Web-Sound.webp", // Consider using different images if intended
  },
  {
    id: 3,
    img: "https://i.ibb.co/rR1CHjzN/New-Web-Sound.webp", // Consider using different images if intended
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

const SoundSection = () => {
  const [loading, setLoading] = useState(true); // Splash screen
  const [error, setError] = useState(null);
  const theme = useTheme(); // Get the theme
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect mobile view

  // 🔹 Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 🔹 Fetch data (dummy call, since no state uses it now)
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API_HOST}/Promotionalgifts`);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to fetch data");
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

  // --- Splash Screen ---
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
      <Container
        maxWidth={false}
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
                  alt={`Slide ${item.id}`}
                  style={{
                    objectFit: "cover",
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                  }}
                />
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

      {/* Consultation Section */}
      <Box
        component="section"
        sx={{
          width: "100%",
          mt: "0px",
          mb: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          minHeight: { xs: "auto", md: "70vh" },
          py: 0,
          backgroundColor: "#eaecee",
          backgroundImage: 'url("https://i.ibb.co/3gckqfJ/New-Web-Sound01.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(234, 236, 238, 0.7)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 0 }, zIndex: 2 }}>
          <Grid
            container
            spacing={isMobile ? 2 : 4}
            sx={{
              height: "100%",
              flexDirection: { xs: 'column-reverse', md: 'row' },
              alignItems: 'center',
            }}
          >
            {/* Left Side Text */}
            <Grid item xs={12} md={6} sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: { xs: 'center', md: 'right' },
              order: { xs: 2, md: 1 } // Text appears below image on mobile
            }}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.common.black, // Use theme color
                  fontWeight: 'bold',
                }}
              >
                استشارات مجانية
              </Typography>
            </Grid>

            {/* Right Side Image */}
            <Grid item xs={12} md={6} sx={{
              display: "flex",
              justifyContent: 'center',
              height: "100%",
              minHeight: { xs: '200px', md: 'auto' },
              // Apply negative margin right and transparency for desktop
              marginRight: { xs: 0, md: '-200px' },
              opacity: { xs: 1, md: 0.5 }, // Adjust opacity for desktop
              zIndex: 3, // Ensure it's above the overlay if desired
              order: { xs: 1, md: 2 } // Image appears above text on mobile
            }}>
              <Box
                component="img"
                src="https://i.ibb.co/7tGdc5pR/180.webp"
                alt="Sound"
                sx={{
                  width: "100%", // The image itself still takes 100% of its (now offset) grid item
                  height: "auto",
                  objectFit: "cover",
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SoundSection;