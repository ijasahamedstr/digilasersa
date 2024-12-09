import React, { useState, useRef } from "react";
import { Container, Box, Typography, Card, Dialog, DialogTitle, IconButton, DialogContent, DialogActions, Button, CardMedia,TextField,Grid,CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import { Carousel } from "react-bootstrap";

const sliderItems = [
  {
    img: "https://i.ibb.co/cCXf1Xt/table-with-paper-that-says-personal-care-it.png",
  },
  {
    img: "https://i.ibb.co/chQ7t5j/black-box-with-gold-bow-it-that-says-esk-it.png",
  },
  {
    img: "https://i.ibb.co/Bg7MWmJ/brochure-business-called-city-city.png",
  },
  {
    img: "https://i.ibb.co/gjDYDGD/magazine-cover-with-picture-house-words-house-bottom.png",
  },
  {
    img: "https://i.ibb.co/gjDYDGD/magazine-cover-with-picture-house-words-house-bottom.png",
  },
  {
    img: "https://i.ibb.co/chQ7t5j/black-box-with-gold-bow-it-that-says-esk-it.png",
  },
];

const sliderItems1 = [
  {
    img: "https://i.ibb.co/Jvs0hFq/image.png",
  },
  {
    img: "https://i.ibb.co/WzVJkzf/image.png",
  },
  {
    img: "https://i.ibb.co/hymkf17/premium-gym-banner-design-template.png",
  },
  {
    img: "https://i.ibb.co/c8vrRNb/Ed7b1q9-WAAAUQgb.png",
  },
  {
    img: "https://i.ibb.co/Jvs0hFq/image.png",
  },
  {
    img: "https://i.ibb.co/hymkf17/premium-gym-banner-design-template.png",
  },
];

const sliderItems2 = [
  {
    img: "https://i.ibb.co/B3mBwNq/01.png",
  },
  {
    img: "https://i.ibb.co/RgvkMxC/assortment-with-minimal-tumbler-drinks.png",
  },
  {
    img: "https://i.ibb.co/LSVgLTg/bohemian-poster-collection-with-wildflowers-botanical-illustrations-your-wall-art-gallery.png",
  },
  {
    img: "https://i.ibb.co/JR8B6pH/Screenshot-2024-08-20-135119.png",
  },
  {
    img: "https://i.ibb.co/LSVgLTg/bohemian-poster-collection-with-wildflowers-botanical-illustrations-your-wall-art-gallery.png",
  },
  {
    img: "https://i.ibb.co/JR8B6pH/Screenshot-2024-08-20-135119.png",
  },
];

const sliderItems3 = [
  {
    img: "https://i.ibb.co/dbpkVFH/interior-kids-room-decoration-with-clothes-23-2149096030.png",
  },
  {
    img: "https://i.ibb.co/PYmj4L7/light-rag-bag-with-flowers-hangs-white-wooden-wall-92795-1426.png",
  },
  {
    img: "https://i.ibb.co/BByHjvs/nike-liverpool-fc-stadium-home-21-22-t-shirt.png",
  },
  {
    img: "https://i.ibb.co/qpyjHp6/Wqe0qf-OC1-Hoyqnh-Bb-Mry-Bn-RMHj-Lw-F2-Sl-YECX4-MJx1596729580.png",
  },
  {
    img: "https://i.ibb.co/bRSwkKT/shirt-mockup-concept-with-plain-clothing.png",
  },
  {
    img: "https://i.ibb.co/qpyjHp6/Wqe0qf-OC1-Hoyqnh-Bb-Mry-Bn-RMHj-Lw-F2-Sl-YECX4-MJx1596729580.png",
  },
];

const sliderItems4 = [
  {
    img: "https://i.ibb.co/NSxkRJ9/UV-DTF-transfers-magic-film-waterbottle-e-Print-Online34.png",
  },
  {
    img: "https://i.ibb.co/QDYNR15/close-up-hand-holding-mobile-phone.png",
  },
  {
    img: "https://i.ibb.co/3YCTRz9/uv-dtf-stickers.png",
  },
  {
    img: "https://i.ibb.co/TR1zWp9/CUSTOM-DTF-UV-TRANSFER-DECAL-FOR-HARD-HAT-HELMET-2-430x430.png",
  },
  {
    img: "https://i.ibb.co/3YCTRz9/uv-dtf-stickers.png",
  },
  {
    img: "https://i.ibb.co/QDYNR15/close-up-hand-holding-mobile-phone.png",
  },
];

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/PT3HdtJ/New-Web-Print.png",
  },
  {
    id: 2,
    img: "https://i.ibb.co/PT3HdtJ/New-Web-Print.png",
  },
  {
    id: 3,
    img: "https://i.ibb.co/PT3HdtJ/New-Web-Print.png",
  },
];

const PrintingSection = () => {
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
      { breakpoint: 900, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
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
        <Box sx={{ position: "fixed", top: "50%", left: 0, transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "30px", zIndex: 2, paddingLeft: 2 }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Box sx={{ width: 50, height: 50, borderRadius: "50%", backgroundColor: "#3b5998", display: "flex", justifyContent: "center", alignItems: "center", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
              <FaFacebook size={25} />
            </Box>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Box sx={{ width: 50, height: 50, borderRadius: "50%", backgroundColor: "#00acee", display: "flex", justifyContent: "center", alignItems: "center", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
              <FaTwitter size={25} />
            </Box>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Box sx={{ width: 50, height: 50, borderRadius: "50%", backgroundColor: "#C13584", display: "flex", justifyContent: "center", alignItems: "center", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
              <FaInstagram size={25} />
            </Box>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Box sx={{ width: 50, height: 50, borderRadius: "50%", backgroundColor: "#0077b5", display: "flex", justifyContent: "center", alignItems: "center", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
              <FaLinkedin size={25} />
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
                fontFamily: 'Noto Kufi Arabic, sans-serif',
                fontWeight: 'bold',
                color: '#333',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#015057' }}>مطـبوعات ورقـية</span>
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
                fontFamily: 'Noto Kufi Arabic, sans-serif',
                fontWeight: 'bold',
                color: '#333',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                textAlign: 'center',
              }}
            >
             <span style={{ color: '#015057' }}>بنـر وسـتيكر</span>
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
               <span style={{ color: '#015057' }}>طباعه مسطحات  UV</span>
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
                fontFamily: 'Noto Kufi Arabic, sans-serif',
                fontWeight: 'bold',
                color: '#333',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                textAlign: 'center',
              }}
            >
               <span style={{ color: '#015057' }}>طباعه منسوجات dtf</span>
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
               <span style={{ color: '#015057' }}>طبــاعة dtf-uv</span>
            </Typography>
          </CardContent>
        </Card>
          <Slider ref={sliderRef} {...settings}>
            {sliderItems4.map((item, index) => (
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
        width: '100%',
        margin: '0 auto',
        marginBottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        marginTop: '-30px',
        direction: 'ltr', // Set the section to RTL direction
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
            <Typography variant="h5" color="#00fffc">
              للطلب والإستفسار /
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '50px' }}>
              المدير العام للطباعة بالمملكة : <span style={{ fontWeight: 'bold' }}>8888 190 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
              المدير الفني للطباعة بالمملكة : <span style={{ fontWeight: 'bold' }}>8888 193 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
              واتساب الطباعة : <span style={{ fontWeight: 'bold' }}>8888 194 057</span>
            </Typography>
          </Grid>

          {/* Contact Form Section on the Left */}
          <Grid
            item
            xs={12}
            sm={6}
            order={{ xs: 2, sm: 2 }} // Move this section to the bottom on mobile (order 2)
          >
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                direction: 'rtl', // Set the form to right-to-left direction
              }}
            >
              <TextField
                label="الاسم"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <TextField
                label="جوال"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <TextField
                label="بريد الكتروني"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <TextField
                label="رسالتك"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: '15px',
                  background: '#00fffc',
                  color: '#1e272e',
                  padding: { xs: '10px', sm: '15px' }, // Responsive padding
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

export default PrintingSection;
