import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, useMediaQuery, Grid, Card, CardContent, Paper, CardMedia,TextField,Button } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const carouselItems = [
  {
    id: 1,
    img: 'https://i.ibb.co/P4Z5Z41/New-Web-Final-2.png',
    title: 'Welcome to Our Adventure',
    content: 'Explore the beauty of nature with us.'
  },
  {
    id: 2,
    img: 'https://i.ibb.co/P4Z5Z41/New-Web-Final-2.png',
    title: 'Unforgettable Moments',
    content: 'Create memories that last a lifetime.'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/P4Z5Z41/New-Web-Final-2.png',
    title: 'Join Our Community',
    content: 'Be part of something special.'
  },
];

const products = [
  { cardTitles: "تحسين محركات البحث", imageUrls: "https://i.ibb.co/Y2YL6Sw/3b76025704ab1da5d342fa24fb810899.png"},
  { cardTitles: "تحليل اداء الحسابات", imageUrls: "https://i.ibb.co/bmqWtns/BLG02x-feature-image-edited.png"},
  { cardTitles: "التفاعل الجماهيرى", imageUrls: "https://i.ibb.co/C8XPJNP/hands-holding-smartphone-social-media-concept-1.png" },
  { cardTitles: "إنشاء وتطوير الحسابات", imageUrls: "https://i.ibb.co/f9Rvg8t/custom-illustrations-personalizing-web-design.png"}
];

const VRSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px' }}>
      <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        
        {/* Carousel Section */}
        <Carousel
          fade
          nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: 'black' }} />}
          prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: 'black' }} />}
        >
          {carouselItems.map(item => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={item.title}
                style={{
                  height: '80vh',
                  objectFit: 'cover',
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)',
                }}
              />
              <Carousel.Caption>
                <Typography variant="h4" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                  {item.content}
                </Typography>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Social Media Icons */}
        {!isMobile && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              zIndex: 2,
              paddingLeft: 2,
            }}
          >
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform, idx) => {
              const icons = {
                facebook: <FaFacebook size={25} />,
                twitter: <FaTwitter size={25} />,
                instagram: <FaInstagram size={25} />,
                linkedin: <FaLinkedin size={25} />
              };
              const colors = {
                facebook: '#3b5998',
                twitter: '#00acee',
                instagram: '#C13584',
                linkedin: '#0077b5',
              };
              return (
                <a key={platform} href={`https://www.${platform}.com`} target="_blank" rel="noopener noreferrer">
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: colors[platform],
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  >
                    {icons[platform]}
                  </Box>
                </a>
              );
            })}
          </Box>
        )}
      </Box>

      <Paper sx={{ p: 2, width: '100%' }}>
      <Container maxWidth={false} sx={{ padding: 0 }}>
        <Grid container spacing={2} sx={{ marginTop: '40px' }}>
          {/* Left Column - 30% width on medium and larger screens, full width on smaller screens */}
          <Grid
            item
            xs={12}  // Full width on mobile
            md={4}   // 30% width on medium and larger screens
            sx={{ order: { xs: 1, md: 1 } }}  // Left column is first on all screens
          >
            <Card
              sx={{
                borderRadius: '20px',  // Rounded corners for the card
                boxShadow: 3,          // Subtle shadow
                overflow: 'hidden',    // Prevents image overflow
                display: 'flex',       // Flex container
                flexDirection: 'column',  // Stacks content vertically
                height: '100%',        // Full height
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="https://i.ibb.co/NVpdBJQ/roi-calculation-for-saas-seo-campaigns.png"
                  alt="description"
                  sx={{
                    width: '100%',      // Responsive image
                    height: 'auto',     // Maintain aspect ratio
                    objectFit: 'cover', // Covers container without distortion
                    borderRadius: '20px',  // Rounded corners for the image
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - 70% width on medium and larger screens, full width on smaller screens */}
          <Grid
            item
            xs={12}  // Full width on mobile
            md={8}   // 70% width on medium and larger screens
            sx={{ direction: 'rtl', order: { xs: 2, md: 2 } }}  // Right column is second on all screens
          >
            <Card sx={{
              borderRadius: '20px',
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}>
              <CardContent sx={{ flex: 1 }}>
                <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
                  <CardContent>
                    {/* Box to ensure proper alignment */}
                    <Box sx={{ padding: '16px' }}>
                      <Typography variant="h3" sx={{
                        fontWeight: 'bold',
                        color: '#333',
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
                      }}>
                        التسويق الالكتروني والسوشيال ميديا
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                <Typography variant="body1" sx={{
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }, // Adjust font size for different screen sizes
                }}>
                  نعمل بجد لتحقيق أقصى استفادة من وجودك الرقمي لكى نضمن لك تفاعل جمهورك، وتعزيز مكانتك في السوق ونلبي احتياجاتك بفريق يتابع عن كثب أحدث التطورات في عالم السوشيال ميديا ليضمن لك البقاء في الصدارة.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>


      {/* Service Section */}
      <section
        style={{
          backgroundColor: '#000000',
          width: '100%',
          margin: '0 auto',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Container maxWidth="xl" sx={{ paddingX: { xs: 2, sm: 3, md: 5 }, textAlign: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Changa, sans-serif',
              color: 'white',
              fontSize: { xs: '30px', sm: '40px', md: '50px' },  // Responsive font size for typography
            }}
          >
            خدمـات التسويق الالكتروني والسوشيال ميديا
          </Typography>
        </Container>
      </section>

      {/* Swiper Section */}
      <Container maxWidth="xl" sx={{ marginTop: '40px', marginBottom: '40px' }}>
        <Box sx={{ backgroundColor: '#f4f4f4', borderRadius: '16px', padding: '20px', boxShadow: 2, textAlign: 'center', marginBottom: '20px' }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#333', fontSize: { xs: '1rem', sm: '1.5rem', md: '1.8rem' } }}
          >
            <span style={{ color: '#015057' }}>إدارة حسابات السوشيال ميديا</span>
          </Typography>
        </Box>

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
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Link to={`/service/${index + 1}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 345, boxShadow: 3, '&:hover': { boxShadow: 6 }, marginBottom: '20px' }}>
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
            مدير السوشيال ميديا  : <span style={{ fontWeight: 'bold' }}>9999 084 057</span>
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

export default VRSection;
