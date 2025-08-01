import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import {
  Box,
  Typography,
  CardMedia,
  Card,
  Grid,
  Button,
  Avatar,
  CardContent,
} from "@mui/material";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
import Slider from "react-slick"; // Import Slider from react-slick
import { keyframes } from "@emotion/react"; // Import keyframes

const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  message: "",
};

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/3MyT3fq/Untitled-1.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/3MyT3fq/Untitled-1.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/3MyT3fq/Untitled-1.webp",
  },
];

const products = [
  {
    cardTitles: "أعمال فنية وإنتاج",
    imageUrls: "https://i.ibb.co/L98dJh3/Write-lede.png",
  },
  {
    cardTitles: "كتابة محتوي وتأليف",
    imageUrls: "https://i.ibb.co/PckW5CS/dfba4c19cde988c07930123097f49c78.png",
  },
  {
    cardTitles: "تصميمات إبداعية",
    imageUrls:
      "https://i.ibb.co/LRjJLJH/DALL-E-2024-09-30-00-33-16-A-giant-whimsical-fountain-pen-sitting-confidently-in-a-traditional-direc.png",
  },
  {
    cardTitles: "محتـوي حصـري",
    imageUrls: "https://i.ibb.co/sRHjCqx/piclumen-1727383323200.png",
  },
];

const images = [
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/HRSD.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/mci.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOE.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOH.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/SAMA.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOF.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOI.svg" },
];

const products1 = [
  {
    id: 1,
    name: "فيديو",
    imageUrl: "https://i.ibb.co/39qz0wjz/Video-B-copy.webp",
    iconUrl: "https://i.ibb.co/20xv3tc3/Video-xx.webp",
    link: "/Web-Media-Video",
  },
  {
    id: 2,
    name: "فيديوهات الواقع الافتراضي",
    imageUrl: "https://i.ibb.co/KjR1JTNR/VR-B.webp",
    iconUrl: "https://i.ibb.co/GvDQHkWm/VR-xx.webp",
    link: "/vr-videos",
  },
  {
    id: 3,
    name: "فـوتـو",
    imageUrl: "https://i.ibb.co/9H4J5gHp/Photo-B.webp",
    iconUrl: "https://i.ibb.co/fdFK4DjK/Photo-xx.webp",
    link: "/Web-Media-photo",
  },
  {
    id: 4,
    name: "Motion graphics",
    imageUrl: "https://i.ibb.co/ynx6Gj25/Motion-B.webp",
    iconUrl: "https://i.ibb.co/4n9shw4H/Motion-xx.webp",
    link: "/Motion-graphics",
  },
  {
    id: 5,
    name: "Ai Videos",
    imageUrl: "https://i.ibb.co/3xTqzVH/Ai-B.webp",
    iconUrl: "https://i.ibb.co/RTcrh3Y3/Ai-xx.webp",
    link: "/AIVideos",
  },
  {
    id: 6,
    name: "3D Animation",
    imageUrl: "https://i.ibb.co/TM9bK9Nx/3d-B-1.webp",
    iconUrl: "https://i.ibb.co/3YjBYxgq/3d-xx.webp",
    link: "/3D-Animation",
  },
];

const VRSection = () => {
 const [formData, setFormData] = useState(INITIAL_FORM_STATE);

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
    const whatsappNumber = "966570649999";
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


  const pumpAnimation = keyframes` 
          0% { 
            transform: scale(1); 
          } 
          50% { 
            transform: scale(1.05); 
          } 
          100% { 
            transform: scale(1); 
          } 
        `;

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

      <section
        style={{
          backgroundColor: "#040404",
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          paddingTop: "80px",
          paddingBottom: "150px",
          direction: "rtl",
        }}
      >
  <Container
    maxWidth="lg"
    sx={{
      paddingX: { xs: 2, sm: 3, md: 5 },
      textAlign: "center",
    }}
  >
    <Grid container spacing={3} justifyContent="center">
      {products1.slice(0, 6).map((product) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4} // 3 per row on medium and above (12/4 = 3)
          key={product.id}
        >
          <Link to={product.link} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                width: "300px",
                margin: "0 auto", // Center the card
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={product.imageUrl}
                  alt={product.name}
                  sx={{ objectFit: "cover", flexShrink: 0 }}
                />
                <Avatar
                  src={product.iconUrl}
                  alt={product.name}
                  sx={{
                    position: "absolute",
                    top: "90%",
                    left: "50%",
                    transform: "translate(-50%, -10%)",
                    width: 70,
                    height: 70,
                    border: "3px solid white",
                    zIndex: 10,
                    background: "#0a6d6a",
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  background: "#0a6d6a",
                  padding: "1px",
                  "&:last-child": {
                    paddingBottom: "10px",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    marginTop: "32px",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    fontFamily: "Tajawal",
                  }}
                >
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Container>
</section>



      <style jsx>
        {`
          /* Mobile responsiveness: Adjust font size for smaller screens */
          @media (max-width: 768px) {
            .MuiButton-root {
              font-size: 14px !important; /* Reduce font size for mobile */
            }
          }
        `}
      </style>

      <section
        style={{
          backgroundColor: "#030909",
          backgroundImage:
            'url("https://i.ibb.co/HG81yrP/1900-VR-line-bk.webp")', // Background image URL
          backgroundSize: "cover", // Ensures the image covers the entire section
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center", // Horizontally center the content
          alignItems: "center", // Vertically center the content
          height: "350px", // Increased height of the section
          marginTop: "-80px",
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
          backgroundImage: 'url("https://i.ibb.co/0Md0CvR/image.webp")', // Replace with your image URL
          backgroundSize: "cover", // Ensure the image covers the entire section
          backgroundPosition: "center", // Ensure the image is centered
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh", // Set height to 70% of the viewport height
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
          marginTop: "-60px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: "center",
            "@media (max-width: 768px)": {
              paddingX: "2rem", // Adjust padding for medium screens
            },
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start", // Align the text to the left
              alignItems: "center",
              width: "100%",
              height: "100%", // Take full height of the section
              textAlign: "left", // Align text to the left inside the div
              padding: "0 20px", // Add padding to avoid text sticking to the edges
              "@media (max-width: 768px)": {
                justifyContent: "center", // Center text on smaller screens
                padding: "0 10px", // Adjust padding for smaller screens
              },
            }}
          >
            <h2
              style={{
                color: "#fdfefe",
                fontFamily: "Tajawal",
                padding: "10px 20px", // Add padding inside the box
                backgroundColor: "#333", // Box background color
                border: "2px solid #f05322", // Border color and thickness
                borderRadius: "8px", // Rounded corners for the box
                display: "inline-block", // Ensure the box only wraps the text
                "@media (max-width: 768px)": {
                  fontSize: "1.5rem", // Font size for medium screens
                },
                "@media (max-width: 600px)": {
                  fontSize: "1rem", // Font size for smaller screens (smaller devices)
                },
                "@media (max-width: 400px)": {
                  fontSize: "1rem", // Further reduction for very small screens
                },
              }}
            >
              استشارات مجانية
            </h2>
          </div>

          {/* Unordered List */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start", // Align the list to the left side
              alignItems: "flex-start", // Align items to the top
              width: "100%",
              marginTop: "20px", // Space between the heading and the list
              padding: "0 20px", // Add padding for proper spacing
              "@media (max-width: 768px)": {
                justifyContent: "center", // Center the list on smaller screens
                padding: "0 10px", // Adjust padding for smaller screens
              },
            }}
          >
            <ul
              style={{
                color: "#fdfefe",
                fontFamily: "Tajawal",
                listStyleType: "disc", // Add disc bullet points
                paddingLeft: "20px", // Indent the list items
                lineHeight: "2.5", // Spacing between list items
                direction: "ltr", // Left-to-right for list items (English style)
                fontSize: "1.5rem", // Adjust font size for better readability
                width: "100%", // Ensure the list spans the entire width
                textAlign: "left", // Align list items to the left
                "@media (max-width: 768px)": {
                  fontSize: "1.5rem", // Slightly smaller font size for medium screens
                },
                "@media (max-width: 480px)": {
                  fontSize: "1.5rem", // Further adjustment for very small screens
                },
              }}
            >
              <li>كيف تصور منتجك</li>
              <li>كيف تختار المصور</li>
              <li>كيف اقيم التصوير</li>
              <li>كيف احـصل فكرة</li>
            </ul>
          </div>
        </Container>
      </section>
      <section
      style={{
        backgroundColor: "#eaecee",
        backgroundImage: 'url("https://i.ibb.co/54vjNym/imageh-1.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "90vh",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "-30px",
        position: "relative",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 5 },
          textAlign: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            px: { xs: 2, sm: 3 },
            mb: "100px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent background
              border: "2px solid #f05322",
              borderRadius: "8px",
              px: 3,
              py: 2,
              display: "inline-block",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: "#fdfefe",
                fontFamily: "Tajawal",
                lineHeight: 1.6,
                fontSize: {
                  xs: "1rem",
                  sm: "1.3rem",
                  md: "1.5rem",
                  lg: "1.8rem",
                  xl: "2rem",
                },
              }}
            >
              نبني أفكارك.. .. ونجسد أحلامك ... لنشيّد بها واقعًا خلابًا ومُبهر.
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
    <section
      style={{
        backgroundColor: "white",
        backgroundImage: 'url("https://i.ibb.co/zmVWw4Y/image.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "-30px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* White overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          zIndex: 0,
        }}
      ></div>

      {/* Main Content */}
      <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Container maxWidth="xl" sx={{ my: { xs: 4, md: 8 } }}>
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              px: 2,
              mb: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Tajawal",
                color: "#fdfefe",
                backgroundColor: "#333",
                border: "2px solid #f05322",
                borderRadius: "8px",
                px: 3,
                py: 1,
                fontSize: { xs: "28px", md: "40px" },
              }}
            >
              استشارات مجانية
            </Typography>
          </Box>

          {/* Carousel */}
          <Slider
            slidesToShow={5}
            slidesToScroll={1}
            infinite
            autoplay
            autoplaySpeed={2500}
            pauseOnHover={false}
            centerMode={false}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  pt: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: 2,
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image.src}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
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
            
              <Typography variant="h5" color="#00fffc" sx={{ textAlign: "justify", direction: "rtl" }}>
                للطلب والإستفسار /
              </Typography>
            
              <Grid container spacing={2} sx={{ pt: "30px", direction: "rtl", alignItems: "center" }}>
                {[
                  { label: "مدير قسم الميديا", value: "9999 065 057" },{ label: "مدير فرع الشرقية", value: "9999 064 057" }
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
                 للشكاوي ..
              </h2>

            <form onSubmit={handleFormSubmit} style={{ direction: "rtl" }}>
            <Form.Group className="mb-3 d-flex align-items-center" style={{ gap: "10px" }}>
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
                style={{ background: "#17202a", border: "none", color: "white" }}
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" style={{ gap: "10px" }}>
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

            <Form.Group className="mb-3 d-flex align-items-center" style={{ gap: "10px" }}>
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
                style={{ background: "#17202a", border: "none", color: "white" }}
              />
            </Form.Group>

            {/* Centered Button */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "15px",paddingRight:'150px' }}>
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
    </Container>
  );
};

export default VRSection;
