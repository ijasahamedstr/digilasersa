import React, { useState } from "react";
import { Container, Box, Typography, Card, CardContent, Grid, CardMedia,TextField,Button } from "@mui/material"; // Removed Pagination and other unnecessary imports
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";  // Import FaTimes for close button
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/606crgQ/Group-12.png", // Replace with your image URL
    title: "Welcome to Our Adventure",
    content: "Explore the beauty of nature with us.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/606crgQ/Group-12.png", // Replace with your image URL
    title: "Unforgettable Moments",
    content: "Create memories that last a lifetime.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/606crgQ/Group-12.png", // Replace with your image URL
    title: "Join Our Community",
    content: "Be part of something special.",
  },
];

const products = [
  {
    imageUrl: "https://i.ibb.co/QPPV99Z/perfume-creative-product-photography-04-1.png",
    title:"المنتجات"
  },
  {
    imageUrl: "https://i.ibb.co/Dbcq3r8/Whats-App-Image-2024-09-01-at-12-48-57-d84d659d.png",
    title:"الأعراس والمناسبات"
  },
  {
    imageUrl: "https://i.ibb.co/JcPSDTT/delicious-burger-nature.png",
    title:"المنيوهات الأطعمة المشروبات"
  },
  {
    imageUrl: "https://i.ibb.co/k17ncV9/0C7A1084.png",
    title:"تصوير المؤتمرات والإجتماعات"
  },
  {
    imageUrl: "https://i.ibb.co/FB6Vx3j/0-C7-A9702-2.png",
    title:"فوتوسيشن وبورتريه"
  },
  {
    imageUrl: "https://i.ibb.co/vxknqfG/living-room-with-blue-couch-white-wall-with-painting-it.png",
    title:"الديكور و السكني"
  },
  {
    imageUrl: "https://i.ibb.co/YLt4kzy/changan-cs35-plus-front-side-view-721761.png",
    title:"تصوير السيارات والمركبات"
  },
  {
    imageUrl: "https://i.ibb.co/p0CTr4g/0-C7-A9797-MP4-snapshot-00-03-389.png",
    title:"تصوير المدارس والجامعات"
  },
  {
    imageUrl: "https://i.ibb.co/CbcFwQr/NJ2A9623.png",
     title:"تغطية الأنشطه والمسابقات"
  },
  {
    imageUrl: "https://i.ibb.co/QccPMML/0C7A1302.png",
    title:"تصوير المعارض والفعاليات"
  },
  {
    imageUrl: "https://i.ibb.co/mv04ZLS/457360285-18454402690050545-1982192899392339643-n.png",
     title:"المعماري والهندسي"
  },
  {
    imageUrl: "https://i.ibb.co/vYT7Yb9/15.png",
     title:"الأنشطة التعليمية والدينية"
  },
];

const products1 = [
  { cardTitles: "أعمال فنية وإنتاج", imageUrls: "https://i.ibb.co/L98dJh3/Write-lede.png"},
  { cardTitles: "كتابة محتوي وتأليف", imageUrls: "https://i.ibb.co/PckW5CS/dfba4c19cde988c07930123097f49c78.png"},
  { cardTitles: "تصميمات إبداعية", imageUrls: "https://i.ibb.co/LRjJLJH/DALL-E-2024-09-30-00-33-16-A-giant-whimsical-fountain-pen-sitting-confidently-in-a-traditional-direc.png" },
  { cardTitles: "محتـوي حصـري", imageUrls: "https://i.ibb.co/sRHjCqx/piclumen-1727383323200.png"}
];

const WebMediaphoto = () => {
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
                  width: "1200px",  // Set the width to 1200px (or any desired width)
                  height: "800px",  // Set the height to 800px (or any desired height)
                  objectFit: "cover",  // Ensures the image maintains aspect ratio and covers the space
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",  // Keeps the shadow effect
                }}
              />
              <Carousel.Caption>
                <Typography variant="h4" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", }}>
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

      {/* Products Section */}
      <section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto',background:'#17202a',marginBottom:'30px' }}>
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
              variant="h5"
              component="h5"
              sx={{
                fontFamily: 'Tajawal',
                color: '#333',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#015057' }}>فوتوغرافيا</span>
            </Typography>
          </CardContent>
        </Card>
          <Grid container spacing={4}>  {/* Increased spacing here */}
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <Card
                  sx={{
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: 4,
                      transform: 'scale(1.02)',
                    },
                    borderRadius: 2,
                    padding: 2,  // Optional: add padding inside the Card for more space
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.imageUrl}
                    alt="Product Image"
                    sx={{
                      height: { xs: 150, sm: 200 },
                      objectFit: "cover",
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    }}
                  />
                  <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box mt={1}>
                      <Typography
                        variant="h3"
                        component="span"
                        sx={{
                          fontFamily: 'Tajawal',
                          fontSize: '1.5rem',
                          textAlign: 'center',  // Ensure text is centered
                          display: 'block', 
                          color:'#e99b19'     // Ensures the Typography component takes full width
                        }}
                      >
                        {product.title}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section
        style={{
            backgroundColor: '#eaecee', // Fallback background color
            backgroundImage: 'url("https://i.ibb.co/y6R8Ypx/image.png")', // Replace with your image URL
            backgroundSize: 'cover', // Ensure the image covers the entire section
            backgroundPosition: 'center', // Ensure the image is centered
            width: '100%',
            margin: '0 auto',
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh', // Set height to 70% of the viewport height
            paddingTop: '20px',
            paddingBottom: '20px',
            '@media (max-width: 768px)': {
                height: 'auto', // Adjust the height for medium screens
                paddingTop: '10px',
                paddingBottom: '10px',
            },
            '@media (max-width: 480px)': {
                height: 'auto', // Adjust the height for smaller screens
            },
            marginTop:'-30px'
        }}
    >
          {/* Swiper Section */}
        <Container
        maxWidth="xl"
        sx={{
            marginTop: '40px',
            marginBottom: '40px',
            backgroundSize: 'cover', // Makes sure the image covers the entire container
            backgroundPosition: 'center', // Centers the background image
            backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
        }}
        >
        <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 }
            }}
        >
            {products1.map((product, index) => (
            <SwiperSlide key={index}>
                <Link to={`/service/${index + 1}`} style={{ textDecoration: 'none' }}>
                <Card
                    sx={{
                    maxWidth: 345,
                    boxShadow: 3,
                    border: '2px solid #f05322',  // Add the outline color here
                    '&:hover': { boxShadow: 6 },
                    marginBottom: '20px',
                    }}
                >
                    <CardMedia component="img" alt={`Service ${index}`} image={product.imageUrls} sx={{ height: 200 }} />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                        {product.cardTitles}
                    </Typography>
                    </CardContent>
                </Card>
                </Link>
            </SwiperSlide>
            ))}
        </Swiper>
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
            مدير قسم الميديا  : <span style={{ fontWeight: 'bold' }}>9999 065 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
            مدير فرع الشرقية  : <span style={{ fontWeight: 'bold' }}>9999 064 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
            مدير تسويق الميديا  : <span style={{ fontWeight: 'bold' }}>8888 093 057</span>
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

export default WebMediaphoto;
