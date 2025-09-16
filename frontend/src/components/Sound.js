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
import Hrsound from "./hrsound";

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
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // full height on larger screens
          paddingTop: "0px",
          paddingBottom: "60px",
          backgroundImage: 'url("https://i.ibb.co/3gckqfJ/New-Web-Sound01.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // stack on mobile, row on desktop
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            px: { xs: 2, sm: 3, md: 5 },
            textAlign: { xs: "center", md: "left" },
            gap: { xs: 4, md: 6 }, // spacing between text and image
          }}
        >
          {/* Left Side Text */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.4,
                mt: { xs: 4, md: 8 },
                mb: { xs: 3, md: 4 },
                color: "#008488",
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
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
                lineHeight: 1.8,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" },
                maxWidth: { xs: "100%", md: "90%" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              تجهز المساجد وقاعات الاجتماعات والمحاضرات بأحدث الأنظمة الصوتية 
              مع ضمان صوت نقي وواضح
            </Typography>
          </Box>

          {/* Right Side Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch", // makes child take full height
              mt: { xs: 3, md: 0 },
              height: { xs: "auto", md: "100%" }, // full height only on desktop
            }}
          >
            <Box
              component="img"
              src="https://i.ibb.co/7tGdc5pR/180.webp"
              alt="Sound Systems"
              sx={{
                width: { xs: "85%", sm: "70%", md: "100%" },
                height: { xs: "auto", md: "100%" }, // fills top-to-bottom on desktop
                maxHeight: "100vh", // prevents overflow
                objectFit: "cover", // crops to fill area
                boxShadow: 5,
              }}
            />
          </Box>
        </Container>
      </section>
      <section
        style={{
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#ffffff",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 1, md: 0 }, // minimal gap between image & text
            textAlign: { xs: "center", md: "left" },
            minHeight: "100%",
          }}
        >
          {/* Left Side - Image */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "50%" },
            }}
          >
            <Box
              component="img"
              src="https://i.ibb.co/RGNfbJfD/New-1.webp"
              alt="Left Side"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "12px 0 0 12px", // rounded only on left
                objectFit: "cover",
              }}
            />
          </Box>

         {/* Right Side - Text */}
         <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "50%" },
            backgroundColor: "#b0b0b0",
            px: { xs: 6, md: 12 },  // smaller horizontal padding
            py: { xs: 8, md: 24 },  // smaller vertical padding
            borderRadius: "0 12px 12px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            direction: "rtl",
            textAlign: "right",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "#008488",
              mb: 2,
              mt: 2,
              fontSize: { xs: "1.7rem", sm: "2rem", md: "2.6rem", lg: "2.7rem" }, // responsive font size
            }}
          >
            أنظمة صوتية للمناسبات الكبرى :
          </Typography>

          {/* Horizontal line under heading */}
          <Box
            sx={{
              width: { xs: "60%", sm: "70%", md: "480px" }, // responsive width
              maxWidth: "100%",
              height: "3px",
              backgroundColor: "#ffffff",
              mb: 3,
              borderRadius: "2px",
              alignSelf: "flex-start", // right-aligned in RTL
            }}
          />

        <Typography
          variant="h3"
          sx={{
            color: "hsla(0, 0%, 100%, 1.00)",
            lineHeight: 1.8,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: "1.6rem", xl: "1.5rem" },
            textAlign: "justify", // justified text
            direction: "rtl",      // keep proper RTL flow
          }}
        >
          نقدم خدمات توريد وتركيب وتشغيل الأنظمة الصوتية للمعارض والمؤتمرات والفعاليات الرسمية والخاصة
          بالإضافة إلى قاعات المحاضرات والاجتماعات
        </Typography>
        </Box>

        </Container>
      </section>
    </>
  );
};

export default SoundSection;
