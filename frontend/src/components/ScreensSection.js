import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, Grid, Card, CardContent,TextField,Button } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const carouselItems = [
  {
    id: 1,
    img: 'https://i.ibb.co/Z2VmmWt/Top-Screen.png',
    title: 'Welcome to Our Adventure',
    content: 'Explore the beauty of nature with us.'
  },
  {
    id: 2,
    img: 'https://i.ibb.co/Z2VmmWt/Top-Screen.png',
    title: 'Unforgettable Moments',
    content: 'Create memories that last a lifetime.'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/Z2VmmWt/Top-Screen.png',
    title: 'Join Our Community',
    content: 'Be part of something special.'
  },
];

const ScreensSection = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '100px' }}>
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

      {/* Dashboard Grid Section */}
      <Container maxWidth={false} sx={{ padding: 0, marginBottom: '80px' }}>
      <Grid container spacing={2} sx={{ marginTop: '40px' }}>
        {/* Left Column - 50% width on medium and larger screens, full width on smaller screens */}
        <Grid
          item
          xs={12}  // Full width on mobile
          md={6}   // 50% width on medium and larger screens
          sx={{ order: { xs: 2, md: 1 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}  // Order switched for mobile
        >
          <Card
            sx={{
              borderRadius: '20px',
              boxShadow: 3,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',  // Ensure Card is centered within the Grid item
              width: '100%',  // Ensure Card takes full width
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Box
                component="img"
                src="https://i.ibb.co/djPgHLc/Waterproof-P6-66-Outdoor-LED-Screen-Signboard.webp"
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

        {/* Right Column - 50% width on medium and larger screens, full width on smaller screens */}
        <Grid
          item
          xs={12}  // Full width on mobile
          md={6}   // 50% width on medium and larger screens
          sx={{ direction: 'rtl', order: { xs: 1, md: 2 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}  // Order switched for mobile
        >
          <CardContent sx={{ flex: 1 }}>
            <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
              <CardContent>
                {/* Box to ensure proper alignment */}
                <Box sx={{ padding: '16px' }}>
                  <Typography variant="h3" sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    fontSize: { xs: '1.2rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
                    fontFamily: 'Tajawal',
                  }}>
                    الشاشات الإلكترونية الخارجية
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </CardContent>
        </Grid>
      </Grid>
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
            المنطقة الوسطي  : <span style={{ fontWeight: 'bold' }}>8888 091 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
            المنطقة الغربية  : <span style={{ fontWeight: 'bold' }}>8888 092 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
            المنطقة الشرقية  : <span style={{ fontWeight: 'bold' }}>8888 093 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
            المدينة المنورة   : <span style={{ fontWeight: 'bold' }}>8888 094 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
            مدير قسم الشاشات    : <span style={{ fontWeight: 'bold' }}>2222 026 057</span>
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

export default ScreensSection;
