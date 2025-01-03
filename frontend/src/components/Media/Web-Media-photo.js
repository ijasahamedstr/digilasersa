import React from "react";
import { Container, Box, Typography, Card, CardContent, Grid, CardMedia,TextField,Button } from "@mui/material"; // Removed Pagination and other unnecessary imports
import { FaFacebook, FaInstagram, FaLinkedin,FaYoutube,FaSnapchat,FaTiktok,FaWhatsapp  } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/MNxWNW1/Group-12.webp", // Replace with your image URL
  },
  {
    id: 2,
    img: "https://i.ibb.co/MNxWNW1/Group-12.webp", // Replace with your image URL
  },
  {
    id: 3,
    img: "https://i.ibb.co/MNxWNW1/Group-12.webp", // Replace with your image URL
  },
];

const products = [
  {
    imageUrl: "https://i.ibb.co/KyyGLjT/perfume-creative-product-photography-04-1.webp",
    title:"المنتجات"
  },
  {
    imageUrl: "https://i.ibb.co/nCLwpf3/Whats-App-Image-2024-09-01-at-12-48-57-d84d659d.webp",
    title:"الأعراس والمناسبات"
  },
  {
    imageUrl: "https://i.ibb.co/Hz3M5LK/delicious-burger-nature.webp",
    title:"المنيوهات الأطعمة المشروبات"
  },
  {
    imageUrl: "https://i.ibb.co/FzfZsXc/0C7A1084.webp",
    title:"تصوير المؤتمرات والإجتماعات"
  },
  {
    imageUrl: "https://i.ibb.co/Mg0txLm/0-C7-A9702-2.webp",
    title:"فوتوسيشن وبورتريه"
  },
  {
    imageUrl: "https://i.ibb.co/1bq4LjL/living-room-with-blue-couch-white-wall-with-painting-it.webp",
    title:"الديكور و السكني"
  },
  {
    imageUrl: "https://i.ibb.co/DtNPTd2/changan-cs35-plus-front-side-view-721761.webp",
    title:"تصوير السيارات والمركبات"
  },
  {
    imageUrl: "https://i.ibb.co/ZKbJ3Zk/0-C7-A9797-MP4-snapshot-00-03-389.webp",
    title:"تصوير المدارس والجامعات"
  },
  {
    imageUrl: "https://i.ibb.co/cgxWWwY/NJ2A9623.webp",
     title:"تغطية الأنشطه والمسابقات"
  },
  {
    imageUrl: "https://i.ibb.co/NZ8GGgb/0C7A1302.webp",
    title:"تصوير المعارض والفعاليات"
  },
  {
    imageUrl: "https://i.ibb.co/n1W62X1/457360285-18454402690050545-1982192899392339643-n.webp",
     title:"المعماري والهندسي"
  },
  {
    imageUrl: "https://i.ibb.co/3yzqh1D/15.webp",
     title:"الأنشطة التعليمية والدينية"
  },
];

const products1 = [
  { cardTitles: "أعمال فنية وإنتاج", imageUrls: "https://i.ibb.co/w0c1Yzr/Write-lede.webp"},
  { cardTitles: "كتابة محتوي وتأليف", imageUrls: "https://i.ibb.co/48mQr3n/dfba4c19cde988c07930123097f49c78.webp"},
  { cardTitles: "تصميمات إبداعية", imageUrls: "https://i.ibb.co/85pqszg/DALL-E-2024-09-30-00-33-16-A-giant-whimsical-fountain-pen-sitting-confidently-in-a-traditional-direc.webp" },
  { cardTitles: "محتـوي حصـري", imageUrls: "https://i.ibb.co/J7Gp115/piclumen-1727383323200.webp"}
];



const WebMediaphoto = () => {
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

{/* Products Section */}
<section style={{ backgroundColor: '#f2f3f4', width: '100%', margin: '0 auto', background: '#17202a', marginBottom: '30px' }}>
  <Container maxWidth="xl" sx={{ padding: 3 }}>
    <Box
      sx={{
        backgroundColor: '#f5f5f5', // Background color
        padding: 0, // Padding around the content
        borderRadius: 2, // Optional: rounded corners
        boxShadow: 3, // Optional: card shadow
        maxWidth: '100%', // Make sure it's responsive
        textAlign: 'center', // Center align content
        marginBottom: '20px',
      }}
    >
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
    </Box>

    <Grid container spacing={4}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
          <Box
            sx={{
              maxWidth: '100%',
              boxShadow: 3,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}> {/* Align image to the right */}
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt="Product Image"
                sx={{
                  height: { xs: 120, sm: 150, md: 180 }, // Reduced size of the image
                  objectFit: "cover",
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  // Adding 3D outline effect
                  border: '4px solid transparent',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // shadow for 3D effect
                  transition: 'all 0.3s ease-in-out', // Smooth transition for hover effect
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Hover effect to enhance the 3D look
                    border: '4px solid #e99b19', // Border highlight on hover
                  }
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1 }}>
              <Typography
                variant="h3"
                component="span"
                sx={{
                  fontFamily: 'Tajawal',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  display: 'block',
                  color: '#e99b19', // Ensures the Typography component takes full width
                }}
              >
                {product.title}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</section>



      <section
                  style={{
                      backgroundColor: '#eaecee', // Fallback background color
                      backgroundImage: 'url("https://i.ibb.co/w0p131X/image.webp")', // Replace with your image URL
                      backgroundSize: 'cover', // Ensure the image covers the entire section
                      backgroundPosition: 'center', // Ensure the image is centered
                      width: '100%',
                      margin: '0 auto',
                      marginBottom: '30px',
                      height: '67vh',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
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
                              border: '2px solid #f05322',
                              '&:hover': { boxShadow: 6 },
                              marginBottom: '20px',
                              position: 'relative', // Required for absolute positioning of the text
                          }}
                          >
                          <CardMedia
                              component="img"
                              alt={`Service ${index}`}
                              image={product.imageUrls}
                              sx={{
                              height: 300,
                              objectFit: 'cover', // Ensures image covers the area without stretching
                              }}
                          />
                          
                          {/* Text overlay on top of the image */}
                          <Typography
                          variant="h6"
                          sx={{
                              position: 'absolute',
                              bottom: '20px',
                              left: '50%',
                              transform: 'translateX(-50%)', // This centers the text horizontally
                              color: 'white',
                              // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a background to the text for better visibility
                              backgroundColor: '#000000',
                              padding: '10px',
                              borderRadius: '4px',
                              textAlign: 'center', // Ensures the text inside is centered
                              width:'100%',
                              border: '2px solid #f05322'
                          }}
                      >
                          {product.cardTitles}
                      </Typography>
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
