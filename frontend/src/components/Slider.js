import { Carousel } from "react-bootstrap";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
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
    img: "https://i.ibb.co/dJ33jYt/New-Web-5-copy.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/jgLXMzx/New-Web-Final-2.webp",
  },
];

const FadeCarousel = () => {
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
                alt={`slide-${item.id}`}
                style={{
                  height: "80vh",
                  objectFit: "cover",
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

 <Box
  sx={{
    position: "fixed",
    top: "50%",
    left: 0,
    transform: "translateY(-50%)",
    display: {
      xs: "none", // Hide on extra-small and small screens
      md: "flex", // Show on medium screens and up
    },
    flexDirection: "column",
    gap: "15px",
    zIndex: 2,
    paddingLeft: 2,
  }}
>
  {[
    { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
    { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
    { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
    { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
    { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
    { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
    { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
  ].map((social, index) => (
    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "rgba(15, 245, 236, 0.3)", // Transparent version of #0ff5ec // 30% transparency
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff", // Make icons bright
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
      </Box>
    </Container>
  );
};

export default FadeCarousel;
