import React from "react";
import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import Form from "react-bootstrap/Form";

const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  message: "",
};

const sectionStyles = {
  backgroundColor: "#030303",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  minHeight: "30vh",
  paddingTop: "20px",
  marginTop: "-30px",
  position: "relative",
  flexDirection: "column",
  textAlign: "right",
  "@media (max-width: 600px)": {
    minHeight: "30vh",
    marginTop: "0",
    padding: "10px",
  },
  fontFamily: "Tajawal",
};

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/rGmqh5wG/Final-Web-Contact.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/rGmqh5wG/Final-Web-Contact.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/rGmqh5wG/Final-Web-Contact.webp",
  },
];

const ContactusForm = () => {
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
    const whatsappNumber = "966571908888";
    const text = `👋 مرحبًا، لدي استفسار:\n\n📛 الاسم: ${name}\n📞 الجوال: ${phone}\n📝 الرسالة: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };


  // Fetch data once the component mounts
  
  const socialLinks = [
    { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
    { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
    { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
    { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
    { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
    { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
    { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
  ];
    

  return (
    <>
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
            {carouselItems.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt={item.title}
                  style={{
                    height: "80vh",
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
      </Container>
       <section style={sectionStyles}></section>;
      <Container
        maxWidth={false}
        sx={{ padding: 0 }}
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
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
                 { label: "المدير العام للطباعة بالمملكة", value: "8888 190 057" },{ label: "المدير الفني للطباعة بالمملكة", value: "8888 193 057" },{ label: "واتساب الطباعة", value: "8888 194 057" }
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
    </>
  );
};

export default ContactusForm;
