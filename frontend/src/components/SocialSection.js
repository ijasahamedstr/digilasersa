import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, useMediaQuery, Grid, Card, CardContent, Paper, CardMedia } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const imageUrls = [
  'https://i.ibb.co/Y2YL6Sw/3b76025704ab1da5d342fa24fb810899.png',
  'https://i.ibb.co/bmqWtns/BLG02x-feature-image-edited.png',
  'https://i.ibb.co/C8XPJNP/hands-holding-smartphone-social-media-concept-1.png',
  'https://i.ibb.co/f9Rvg8t/custom-illustrations-personalizing-web-design.png'
];

const cardTitles = [
  "تحسين محركات البحث",
  "تحليل اداء الحسابات",
  "التفاعل الجماهيرى",
  "إنشاء وتطوير الحسابات",
];

const SocialSection = () => {
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

      {/* Dashboard Grid Section */}
      <Paper sx={{ p: 2, width: '100%' }}>
        <Container maxWidth={false} sx={{ padding: 0 }}>
          <Grid container spacing={2} sx={{ marginTop: '40px' }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: '20px', boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Box
                    component="img"
                    src="https://i.ibb.co/NVpdBJQ/roi-calculation-for-saas-seo-campaigns.png"
                    alt="description"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '20px',
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <Card sx={{ borderRadius: '20px', boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
                    <CardContent>
                      <Box sx={{ padding: '16px' }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
                          التسويق الالكتروني والسوشيال ميديا
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                  <Typography variant="body1" sx={{ fontSize: '23px' }}>
                    نعمل بجد لتحقيق أقصى استفادة من وجودك الرقمي لكى نضمن لك تفاعل جمهورك، وتعزيز مكانتك في السوق
                    ونلبي احتياجاتك بفريق يتابع عن كثب أحدث التطورات في عالم السوشيال ميديا ليضمن لك البقاء في
                    الصدارة.
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
              fontSize: '50px',
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
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ maxWidth: 345, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
              <CardMedia component="img" alt={`Service ${index}`} image={url} sx={{ height: 200 }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                  {cardTitles[index]}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
    </Container>
  );
};

export default SocialSection;
