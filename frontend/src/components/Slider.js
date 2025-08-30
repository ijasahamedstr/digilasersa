import { Carousel } from "react-bootstrap";
import { Box } from "@mui/material";
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

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/jgLXMzx/New-Web-Final-2.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/jgLXMzx/New-Web-Final-2.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/jgLXMzx/New-Web-Final-2.webp",
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

const FadeCarousel = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        marginTop: "100px",
      }}
    >
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
              alt={`slide-${item.id}`}
              style={{
                objectFit: "cover",
                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Social Media Icons Sidebar */}
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
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              {icon}
            </Box>
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default FadeCarousel;
