import React, { useState, useRef } from "react";
import { Container, Box, Typography, Card, Dialog, DialogTitle, IconButton, DialogContent, DialogActions, Button, CardMedia,TextField,Grid,CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaInstagram, FaLinkedin,FaYoutube,FaSnapchat,FaTiktok,FaWhatsapp,FaTimes} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { Carousel } from "react-bootstrap";
import Form from 'react-bootstrap/Form'; 

const sliderItems = [
  {
    img: "https://i.ibb.co/NNbtzLK/0-2.webp",
  },
  {
    img: "https://i.ibb.co/d58zzNQ/0-3.webp",
  },
  {
    img: "https://i.ibb.co/ymz535H/0-6.webp",
  },
  {
    img: "https://i.ibb.co/DGFRCSM/0-7.webp",
  },
  {
    img: "https://i.ibb.co/gV03fTt/slaa.webp",
  },
  {
    img: "https://i.ibb.co/ymz535H/0-6.webpg",
  },
];

const sliderItems1 = [
  {
    img: "https://i.ibb.co/gyBPMhf/e1gkqvdo-3.webp",
  },
  {
    img: "https://i.ibb.co/FK2vZg2/3.webp",
  },
  {
    img: "https://i.ibb.co/dr7vp5M/eo4qvyg7.webp",
  },
  {
    img: "https://i.ibb.co/tw6VNHM/ro6yeq67.webp",
  },
  {
    img: "https://i.ibb.co/1Xjtg5P/ro6yj437.webp",
  },
  {
    img: "https://i.ibb.co/dr7vp5M/eo4qvyg7.webp",
  },
];

const sliderItems2 = [
  {
    img: "https://i.ibb.co/NjcYQk5/67wl6jw1-9.webp",
  },
  {
    img: "https://i.ibb.co/WvH91Lm/67wlnr21.webp",
  },
  {
    img: "https://i.ibb.co/Rj7x3J5/d1lvkppo.webp",
  },
  {
    img: "https://i.ibb.co/CW2pKBc/dd42c39f2100f63d4aa0db8a5caea525.webp",
  },
  {
    img: "https://i.ibb.co/XX8fzpV/eo4q9k97.webp",
  },
  {
    img: "https://i.ibb.co/WvH91Lm/67wlnr21.webp",
  },
];

const sliderItems3 = [
  {
    img: "https://i.ibb.co/Fhq3VjP/990eafa78d79c2d97811410906550cd2.webp",
  },
  {
    img: "https://i.ibb.co/09RwMxX/545e0f0591014b7f2e88f416847c77b8.webp",
  },
  {
    img: "https://i.ibb.co/ky37NtP/536847fa695a85df451f56e990827e59.webp",
  },
  {
    img: "https://i.ibb.co/GMMvBW7/ebd5fdbe0018b0e60353db78816cd75b.webp",
  },
  {
    img: "https://i.ibb.co/NjmdgZz/fb877ef59b3e4019e937b63ba74e7632.webp",
  },
  {
    img: "https://i.ibb.co/ky37NtP/536847fa695a85df451f56e990827e59.webp",
  },
];

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/C50rPX0/New-Web-Gifts.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/C50rPX0/New-Web-Gifts.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/C50rPX0/New-Web-Gifts.webp",
  },
];

const GiftsSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    
     
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleFormSubmit = (event) => {
          event.preventDefault();
      
          // Add simple validation
          if (!formData.name || !formData.phone || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
          }
      
          // Redirect to another site (Example: External site)
          window.location.href = 'https://another-site.com/contact';
        };

  return (
    <>
      <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "100px" }}>
      {/* Carousel Section */}
      <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <Carousel
          fade
          nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: "black" }} />}
          prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: "black" }} />}
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
                <Typography variant="h4" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                  {item.content}
                </Typography>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* Social Media Icons on the Left Side */}
       <Box sx={{ position: "fixed", top: "50%", left: 0, transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "15px", zIndex: 2, paddingLeft: 2 }}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                        <FaFacebook size={25} />
                      </Box>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <Box sx={{ width: 40, height: 40, borderRadius
                        : "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                        <FontAwesomeIcon icon={faXTwitter} size={25} />
                      </Box>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                        <FaInstagram size={25} />
                      </Box>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                        <FaLinkedin size={25} />
                      </Box>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                      <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                        <FaYoutube  size={25} />
                      </Box>
                    </a>
                    <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer">
                      <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                        <FaSnapchat size={25} />
                      </Box>
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                      <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                        <FaTiktok size={25} />
                      </Box>
                    </a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                      <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                        <FaWhatsapp size={25} />
                      </Box>
                    </a>
                  </Box>
      </Box>
    </Container>
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
      {/* Carousel Section */}
      <section style={{ width: "100%", margin: "0 auto", paddingTop: "50px", paddingBottom: "50px" }}>
        <Container maxWidth="xl" sx={{ padding: 3 }}>
        <Card
          sx={{
            backgroundColor: '#f5f5f5', // Background color of the card
            padding: 0, // Padding around the content
            borderRadius: 2, // Optional: rounded corners
            boxShadow: 3, // Optional: card shadow
            maxWidth: '100%', // Make sure the card is responsive
            textAlign: 'center', // Center align content
            marginBottom:'20px'
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: 'Tajawal',
                fontWeight: 'bold',
                color: '#333',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#015057' }}>دروع ومجسمات</span>
            </Typography>
          </CardContent>
        </Card>
          <Slider ref={sliderRef} {...settings}>
            {sliderItems.map((item, index) => (
              <div key={index}>
                <Card sx={{ 
                  transition: "0.3s", 
                  "&:hover": { boxShadow: 4, transform: "scale(1.02)" }, 
                  borderRadius: 2,
                  marginRight: "16px",  // Gap between the cards
                  marginLeft: index === 0 ? "0" : "16px", // Avoid extra margin for the first card
                }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      height: { xs: 150, sm: 200 },
                      objectFit: "cover",
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    }}
                    onClick={() => handleImageClick(item.img)}
                  />
                </Card>
              </div>
            ))}
          </Slider>
        </Container>

        <Container maxWidth="xl" sx={{ padding: 3 }}>
        <Card
          sx={{
            backgroundColor: '#f5f5f5', // Background color of the card
            padding: 0, // Padding around the content
            borderRadius: 2, // Optional: rounded corners
            boxShadow: 3, // Optional: card shadow
            maxWidth: '100%', // Make sure the card is responsive
            textAlign: 'center', // Center align content
            marginBottom:'20px'
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: 'Tajawal',
                fontWeight: 'bold',
                color: '#333',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                textAlign: 'center',
              }}
            >
             <span style={{ color: '#015057' }}>خشـبيات</span>
            </Typography>
          </CardContent>
        </Card>
          <Slider ref={sliderRef} {...settings}>
            {sliderItems1.map((item, index) => (
              <div key={index}>
                <Card sx={{ 
                  transition: "0.3s", 
                  "&:hover": { boxShadow: 4, transform: "scale(1.02)" }, 
                  borderRadius: 2,
                  marginRight: "16px",  // Gap between the cards
                  marginLeft: index === 0 ? "0" : "16px", // Avoid extra margin for the first card
                }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      height: { xs: 150, sm: 200 },
                      objectFit: "cover",
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    }}
                    onClick={() => handleImageClick(item.img)}
                  />
                </Card>
              </div>
            ))}
          </Slider>
        </Container>

        <Container maxWidth="xl" sx={{ padding: 3 }}>
        <Card
          sx={{
            backgroundColor: '#f5f5f5', // Background color of the card
            padding: 0, // Padding around the content
            borderRadius: 2, // Optional: rounded corners
            boxShadow: 3, // Optional: card shadow
            maxWidth: '100%', // Make sure the card is responsive
            textAlign: 'center', // Center align content
            marginBottom:'20px'
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: 'Noto Kufi Arabic, sans-serif',
                fontWeight: 'bold',
                color: '#333',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                textAlign: 'center',
              }}
            >
                <span style={{ color: '#015057' }}>مكتـبيات</span>
            </Typography>
          </CardContent>
        </Card>
          <Slider ref={sliderRef} {...settings}>
            {sliderItems2.map((item, index) => (
              <div key={index}>
                <Card sx={{ 
                  transition: "0.3s", 
                  "&:hover": { boxShadow: 4, transform: "scale(1.02)" }, 
                  borderRadius: 2,
                  marginRight: "16px",  // Gap between the cards
                  marginLeft: index === 0 ? "0" : "16px", // Avoid extra margin for the first card
                }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      height: { xs: 150, sm: 200 },
                      objectFit: "cover",
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    }}
                    onClick={() => handleImageClick(item.img)}
                  />
                </Card>
              </div>
            ))}
          </Slider>
        </Container>

      <Container maxWidth="xl" sx={{ padding: 3 }}>
        <Card
          sx={{
            backgroundColor: '#f5f5f5', // Background color of the card
            padding: 0, // Padding around the content
            borderRadius: 2, // Optional: rounded corners
            boxShadow: 3, // Optional: card shadow
            maxWidth: '100%', // Make sure the card is responsive
            textAlign: 'center', // Center align content
            marginBottom:'20px'
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: 'Tajawal',
                fontWeight: 'bold',
                color: '#333',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                textAlign: 'center',
              }}
            >
                <span style={{ color: '#015057' }}>اكسسوارات</span>
            </Typography>
          </CardContent>
        </Card>
          <Slider ref={sliderRef} {...settings}>
            {sliderItems3.map((item, index) => (
              <div key={index}>
                <Card sx={{ 
                  transition: "0.3s", 
                  "&:hover": { boxShadow: 4, transform: "scale(1.02)" }, 
                  borderRadius: 2,
                  marginRight: "16px",  // Gap between the cards
                  marginLeft: index === 0 ? "0" : "16px", // Avoid extra margin for the first card
                }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      height: { xs: 150, sm: 200 },
                      objectFit: "cover",
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    }}
                    onClick={() => handleImageClick(item.img)}
                  />
                </Card>
              </div>
            ))}
          </Slider>
        </Container>                                 
      </section>
      <section
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
        width: '100%',
        margin: '0 auto',
        marginBottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        marginTop: '-30px',
        direction: 'rtl',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: 'center',
        }}
      >
        <Grid container spacing={4}>
          {/* Text Section on the Right */}
          <Grid
            item
            xs={12}
            sm={6}
            order={{ xs: 1, sm: 1 }} // Keep this section first on all screen sizes
            sx={{ direction: 'rtl' }}
          >
            <Typography variant="h4" color="white" paragraph>
              Contact Us
            </Typography>
            <Typography variant="h5" color="#00fffc" style={{fontFamily: 'Tajawal'}}>
              للطلب والإستفسار /
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '50px',fontFamily: 'Tajawal' }}>
            المدير العام للطباعة بالمملكة : <span style={{ fontWeight: 'bold' }}>8888 190 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px',fontFamily: 'Tajawal' }}>
            المدير الفني للطباعة بالمملكة : <span style={{ fontWeight: 'bold' }}>8888 193 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px',fontFamily: 'Tajawal'}}>
            واتساب الطباعة : <span style={{ fontWeight: 'bold' }}>8888 194 057</span>
            </Typography>
          </Grid>


          {/* Contact Form Section on the Left */}
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
            <h2
              style={{
                color: 'white',
                fontFamily: 'Tajawal',
                fontSize: '26px',
                textAlign: 'right',
                marginBottom: '20px',
                direction: 'rtl',
              }}
            >
              للإستفسارات العامة ..
            </h2>

            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                direction: 'rtl',
              }}
              onSubmit={handleFormSubmit}
            >
              <Form.Group
                controlId="name"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
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
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="phone"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  جـوال
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="email"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  بريد الكتروني
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="message"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  رسالتك
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: '15px',
                  background: '#00fffc',
                  color: '#1e272e',
                  padding: { xs: '10px', sm: '15px' },
                }}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
      {/* Dialog for Image View */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6"></Typography>
            <IconButton onClick={handleClose}>
              <FaTimes />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: "center" }}>
            <img src={selectedImage} alt="Selected" style={{ width: "100%", maxHeight: "60vh", objectFit: "contain" }} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </>
  );
};

export default GiftsSection;
