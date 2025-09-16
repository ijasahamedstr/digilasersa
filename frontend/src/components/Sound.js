import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
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

const SoundSection = () => {
  const [loading, setLoading] = useState(true); // Splash screen
  const [error, setError] = useState(null);

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
     {/* Split Section: Text Left, Image Right */}
      <section
        style={{
            width: "100%",
            margin: "0 auto",
            marginBottom: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // full viewport height
            paddingTop: "20px",
            paddingBottom: "20px",
            marginTop: "0px",
            backgroundImage: 'url("https://i.ibb.co/3gckqfJ/New-Web-Sound01.webp")',
            backgroundSize: "cover",        // makes the image cover the section
            backgroundPosition: "center",   // centers the image
            backgroundRepeat: "no-repeat",  // prevents tiling
          }}
        >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            px: { xs: 2, sm: 3, md: 5 },
          }}
        >
          {/* Left Side Text */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.4,
                mt: { xs: 6, md: 12 }, // significantly more top space
                mb: { xs: 4, md: 5 },
                color: "#008488",
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
              }}
            >
              أنظـمة صــوتيـة للمـساجد
              <br />
              وقـــاعــات الاجــتماعـات
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#6c2632",
                lineHeight: 1.6,
                fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem" },
              }}
            >
              تجهز المساعد وشاعات الاجتماعات والمحاضرات بأحدث الأنظمة الصوتية الاشرافية الضمان صوت نقي وواضح
            </Typography>
          </Box>

          {/* Right Side Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%", // full height of the container
            }}
          >
            <Box
              component="img"
              src="https://i.ibb.co/7tGdc5pR/180.webp"
              alt="Sound Systems"
              sx={{
                width: "100%",
                height: "100%",        // stretch to fit full height
                objectFit: "cover",    // maintain aspect ratio, crop if needed
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>
        </Container>
      </section>
    </>
  );
};

export default SoundSection;
