import React, { useState } from "react";  // Import useState hook
import { Container, Box, Typography, Card, Dialog, DialogTitle, IconButton, DialogContent, DialogActions, CardContent,Grid,TextField,Button } from "@mui/material"; // Import missing MUI components
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
    img: "https://i.ibb.co/PT3HdtJ/New-Web-Print.png",
    title: "Welcome to Our Adventure",
    content: "Explore the beauty of nature with us.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/PT3HdtJ/New-Web-Print.png",
    title: "Unforgettable Moments",
    content: "Create memories that last a lifetime.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/PT3HdtJ/New-Web-Print.png",
    title: "Join Our Community",
    content: "Be part of something special.",
  },
];

const products = [
  {
    imageUrl: "https://i.ibb.co/cCXf1Xt/table-with-paper-that-says-personal-care-it.png",
  },
  {
    imageUrl: "https://i.ibb.co/chQ7t5j/black-box-with-gold-bow-it-that-says-esk-it.png",
  },
  {
    imageUrl: "https://i.ibb.co/Bg7MWmJ/brochure-business-called-city-city.png",
  },
  {
    imageUrl: "https://i.ibb.co/gjDYDGD/magazine-cover-with-picture-house-words-house-bottom.png",
  },
  {
    imageUrl: "https://i.ibb.co/gjDYDGD/magazine-cover-with-picture-house-words-house-bottom.png",
  },
  {
    imageUrl: "https://i.ibb.co/chQ7t5j/black-box-with-gold-bow-it-that-says-esk-it.png",
  },
];

const products1 = [
    {
      imageUrl: "https://i.ibb.co/Jvs0hFq/image.png",
    },
    {
      imageUrl: "https://i.ibb.co/WzVJkzf/image.png",
    },
    {
      imageUrl: "https://i.ibb.co/hymkf17/premium-gym-banner-design-template.png",
    },
    {
      imageUrl: "https://i.ibb.co/c8vrRNb/Ed7b1q9-WAAAUQgb.png",
    },
    {
      imageUrl: "https://i.ibb.co/Jvs0hFq/image.png",
    },
    {
      imageUrl: "https://i.ibb.co/hymkf17/premium-gym-banner-design-template.png",
    },
  ];

  const products2 = [
    {
      imageUrl: "https://i.ibb.co/B3mBwNq/01.png",
    },
    {
      imageUrl: "https://i.ibb.co/RgvkMxC/assortment-with-minimal-tumbler-drinks.png",
    },
    {
      imageUrl: "https://i.ibb.co/LSVgLTg/bohemian-poster-collection-with-wildflowers-botanical-illustrations-your-wall-art-gallery.png",
    },
    {
      imageUrl: "https://i.ibb.co/JR8B6pH/Screenshot-2024-08-20-135119.png",
    },
    {
      imageUrl: "https://i.ibb.co/LSVgLTg/bohemian-poster-collection-with-wildflowers-botanical-illustrations-your-wall-art-gallery.png",
    },
    {
      imageUrl: "https://i.ibb.co/JR8B6pH/Screenshot-2024-08-20-135119.png",
    },
  ];

  
  const products3 = [
    {
      imageUrl: "https://i.ibb.co/dbpkVFH/interior-kids-room-decoration-with-clothes-23-2149096030.png",
    },
    {
      imageUrl: "https://i.ibb.co/PYmj4L7/light-rag-bag-with-flowers-hangs-white-wooden-wall-92795-1426.png",
    },
    {
      imageUrl: "https://i.ibb.co/BByHjvs/nike-liverpool-fc-stadium-home-21-22-t-shirt.png",
    },
    {
      imageUrl: "https://i.ibb.co/qpyjHp6/Wqe0qf-OC1-Hoyqnh-Bb-Mry-Bn-RMHj-Lw-F2-Sl-YECX4-MJx1596729580.png",
    },
    {
      imageUrl: "https://i.ibb.co/bRSwkKT/shirt-mockup-concept-with-plain-clothing.png",
    },
    {
      imageUrl: "https://i.ibb.co/qpyjHp6/Wqe0qf-OC1-Hoyqnh-Bb-Mry-Bn-RMHj-Lw-F2-Sl-YECX4-MJx1596729580.png",
    },
  ];

  const products4 = [
    {
      imageUrl: "https://i.ibb.co/NSxkRJ9/UV-DTF-transfers-magic-film-waterbottle-e-Print-Online34.png",
    },
    {
      imageUrl: "https://i.ibb.co/QDYNR15/close-up-hand-holding-mobile-phone.png",
    },
    {
      imageUrl: "https://i.ibb.co/3YCTRz9/uv-dtf-stickers.png",
    },
    {
      imageUrl: "https://i.ibb.co/TR1zWp9/CUSTOM-DTF-UV-TRANSFER-DECAL-FOR-HARD-HAT-HELMET-2-430x430.png",
    },
    {
      imageUrl: "https://i.ibb.co/3YCTRz9/uv-dtf-stickers.png",
    },
    {
      imageUrl: "https://i.ibb.co/QDYNR15/close-up-hand-holding-mobile-phone.png",
    },
  ];




const PrintingSection = () => {
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
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#015057' }}>مطـبوعات ورقـية</span>
            </Typography>
          </CardContent>
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
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#015057' }}>بنـر وسـتيكر</span>
            </Typography>
          </CardContent>
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
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#015057' }}>طباعه مسطحات  UV</span>
            </Typography>
          </CardContent>
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
      <Box sx={{ paddingTop: '50px', px: { xs: '16px', sm: '32px', md: '50px' }, paddingBottom: '40px' }}>
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
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#015057' }}>طباعه منسوجات dtf</span>
          </Typography>
        </CardContent>
      </Card>
        <hr
          style={{
            border: 'none',
            height: '4px',
            backgroundColor: '#015057',
            width: '5%',
            alignSelf: 'center',
            margin: '20px auto',
          }}
        />
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
      <Box sx={{ paddingTop: '50px', px: { xs: '16px', sm: '32px', md: '50px' }, paddingBottom: '40px',marginBottom:'40px'}}>
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
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#015057' }}>طبــاعة dtf-uv</span>
            </Typography>
          </CardContent>
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
          {products4.map((product1, index) => (
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

export default PrintingSection;
