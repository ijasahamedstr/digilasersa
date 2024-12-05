import React, { useState } from "react";  // Import useState hook
import { Container, Box, Typography, Card, Dialog, DialogTitle, IconButton, DialogContent, DialogActions,Grid,TextField,Button } from "@mui/material"; // Import missing MUI components
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";  // Import FaTimes for close button
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css"; // Swiper default styles
import "swiper/css/pagination"; // Pagination styles (if used)
import "swiper/css/navigation"; // Navigation styles (if used)

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/M1DpWzb/New-Web-Gifts.png",
    title: "Welcome to Our Adventure",
    content: "Explore the beauty of nature with us.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/M1DpWzb/New-Web-Gifts.png",
    title: "Unforgettable Moments",
    content: "Create memories that last a lifetime.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/M1DpWzb/New-Web-Gifts.png",
    title: "Join Our Community",
    content: "Be part of something special.",
  },
];

const products = [
  {
    imageUrl: "https://i.ibb.co/Nm5Zf5D/0-3.png",
  },
  {
    imageUrl: "https://i.ibb.co/njsKXd4/0-2.png",
  },
  {
    imageUrl: "https://i.ibb.co/Yf7FtMf/0-7.png",
  },
  {
    imageUrl: "https://i.ibb.co/mzDYKJj/0-6.png",
  },
  {
    imageUrl: "https://i.ibb.co/ZHFPLck/slaa.png",
  },
  {
    imageUrl: "https://i.ibb.co/mzDYKJj/0-6.png",
  },
];

const products1 = [
    {
      imageUrl: "https://i.ibb.co/BT8K4QR/ro6yeq67.png",
    },
    {
      imageUrl: "https://i.ibb.co/xCsDXWY/ro6yj437.png",
    },
    {
      imageUrl: "https://i.ibb.co/zG7y4Fr/eo4qvyg7.png",
    },
    {
      imageUrl: "https://i.ibb.co/8Dgfc3H/3.png",
    },
    {
      imageUrl: "https://i.ibb.co/Bt6bLw3/e1gkqvdo-3.png",
    },
    {
      imageUrl: "https://i.ibb.co/8Dgfc3H/3.png",
    },
  ];

  const products2 = [
    {
      imageUrl: "https://i.ibb.co/NSVfNb2/67wlnr21.png",
    },
    {
      imageUrl: "https://i.ibb.co/DkQfbQm/67wl6jw1-9.png",
    },
    {
      imageUrl: "https://i.ibb.co/bXK3xkn/dd42c39f2100f63d4aa0db8a5caea525.png",
    },
    {
      imageUrl: "https://i.ibb.co/2tKjfDp/d1lvkppo.png",
    },
    {
      imageUrl: "https://i.ibb.co/g4TFhVH/eo4q9k97.png",
    },
    {
      imageUrl: "https://i.ibb.co/2tKjfDp/d1lvkppo.png",
    },
  ];

  
  const products3 = [
    {
      imageUrl: "https://i.ibb.co/q03NpJW/990eafa78d79c2d97811410906550cd2.png",
    },
    {
      imageUrl: "https://i.ibb.co/xM4qqLf/545e0f0591014b7f2e88f416847c77b8.png",
    },
    {
      imageUrl: "https://i.ibb.co/VLQ4PS8/536847fa695a85df451f56e990827e59.png",
    },
    {
      imageUrl: "https://i.ibb.co/q0SLDBv/ebd5fdbe0018b0e60353db78816cd75b.png",
    },
    {
      imageUrl: "https://i.ibb.co/wB7TYWR/fb877ef59b3e4019e937b63ba74e7632.png",
    },
    {
      imageUrl: "https://i.ibb.co/q0SLDBv/ebd5fdbe0018b0e60353db78816cd75b.png",
    },
  ];




const GiftsSection = () => {
  const [open, setOpen] = useState(false);  // useState hook for dialog
  const [selectedImage, setSelectedImage] = useState(null);  // useState hook for selected image

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px" }}>
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

      <Box sx={{ paddingTop: '50px', px: { xs: '16px', sm: '32px', md: '50px' }, paddingBottom: '40px' }}>
      <Card
        sx={{
          backgroundColor: '#f5f5f5', // Background color of the card
          borderRadius: '16px', // Apply border radius to the card
          padding: '20px', // Add padding inside the card
          boxShadow: 3, // Optional: Add a shadow for a card-like effect
          marginBottom:'20px'
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: 'Noto Kufi Arabic, sans-serif',
            fontWeight: 'bold',
            color: '#333',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#015057' }}>دروع ومجسمات</span>
        </Typography>
      </Card>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
             <Card
              sx={{
                maxWidth: 345,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '20px',
                overflow: 'hidden', // Ensure images don't overflow the corners
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Hover shadow
                  transform: 'scale(1.05)', // Zoom effect
                },
                transition: 'transform 0.3s ease', // Smooth transition for zoom effect
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                style={{
                  height: '300px',
                  width: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer', // Cursor style to indicate clickable images
                  transition: 'transform 0.3s ease', // Smooth transition for zoom effect
                }}
                onClick={() => handleImageClick(product.imageUrl)} // Click to preview image
              />
            </Card>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dialog for image preview */}
        <Dialog open={open} onClose={handleClose} maxWidth="xl">
          <DialogTitle>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ position: 'absolute', right: '8px', top: '8px' }}
            >
              <FaTimes />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
            />
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
      </Box>
      <Box sx={{ paddingTop: '50px', px: { xs: '16px', sm: '32px', md: '50px' }, paddingBottom: '40px' }}>
      <Card
        sx={{
          backgroundColor: '#f5f5f5', // Background color of the card
          borderRadius: '16px', // Apply border radius to the card
          padding: '20px', // Add padding inside the card
          boxShadow: 3, // Optional: Add a shadow for a card-like effect
          marginBottom:'20px'
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: 'Noto Kufi Arabic, sans-serif',
            fontWeight: 'bold',
            color: '#333',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#015057' }}>خشـبيات</span>
        </Typography>
      </Card>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {products1.map((product1, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: '20px',
                  overflow: 'hidden', // Ensure images don't overflow the corners
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Hover shadow
                    transform: 'scale(1.05)', // Zoom effect
                  },
                  transition: 'transform 0.3s ease', // Smooth transition for zoom effect
                }}
              >
                <img
                  src={product1.imageUrl}
                  style={{
                    height: '300px',
                    width: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer', // Cursor style to indicate clickable images
                    transition: 'transform 0.3s ease', // Smooth transition for zoom effect
                  }}
                  onClick={() => handleImageClick(product1.imageUrl)} // Click to preview image
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ paddingTop: '50px', px: { xs: '16px', sm: '32px', md: '50px' }, paddingBottom: '40px' }}>
      <Card
        sx={{
          backgroundColor: '#f5f5f5', // Background color of the card
          borderRadius: '16px', // Apply border radius to the card
          padding: '20px', // Add padding inside the card
          boxShadow: 3, // Optional: Add a shadow for a card-like effect
          marginBottom:'20px'
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: 'Noto Kufi Arabic, sans-serif',
            fontWeight: 'bold',
            color: '#333',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#015057' }}>مكتـبيات</span>
        </Typography>
      </Card>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {products2.map((product1, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: '20px',
                  overflow: 'hidden', // Ensure images don't overflow the corners
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Hover shadow
                    transform: 'scale(1.05)', // Zoom effect
                  },
                  transition: 'transform 0.3s ease', // Smooth transition for zoom effect
                }}
              >
                <img
                  src={product1.imageUrl}
                  style={{
                    height: '300px',
                    width: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer', // Cursor style to indicate clickable images
                    transition: 'transform 0.3s ease', // Smooth transition for zoom effect
                  }}
                  onClick={() => handleImageClick(product1.imageUrl)} // Click to preview image
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ paddingTop: '50px', px: { xs: '16px', sm: '32px', md: '50px' }, paddingBottom: '40px',marginBottom:'40px' }}>
      <Card
        sx={{
          backgroundColor: '#f5f5f5', // Background color of the card
          borderRadius: '16px', // Apply border radius to the card
          padding: '20px', // Add padding inside the card
          boxShadow: 3, // Optional: Add a shadow for a card-like effect
          marginBottom:'20px'
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: 'Noto Kufi Arabic, sans-serif',
            fontWeight: 'bold',
            color: '#333',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#015057' }}>اكسسوارات</span>
        </Typography>
      </Card>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {products3.map((product1, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: '20px',
                  overflow: 'hidden', // Ensure images don't overflow the corners
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Hover shadow
                    transform: 'scale(1.05)', // Zoom effect
                  },
                  transition: 'transform 0.3s ease', // Smooth transition for zoom effect
                }}
              >
                <img
                  src={product1.imageUrl}
                  style={{
                    height: '300px',
                    width: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer', // Cursor style to indicate clickable images
                    transition: 'transform 0.3s ease', // Smooth transition for zoom effect
                  }}
                  onClick={() => handleImageClick(product1.imageUrl)} // Click to preview image
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
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
    </Container>
  );
};

export default GiftsSection;
