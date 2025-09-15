import { useState, useRef, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-bootstrap";
import axios from "axios";

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/rR1CHjzN/New-Web-Sound.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/rR1CHjzN/New-Web-Sound.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/rR1CHjzN/New-Web-Sound.webp",
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

const SoundSection = () => {
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
    </>
  );
};

export default SoundSection;
