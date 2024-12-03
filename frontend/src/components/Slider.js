import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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

const FadeCarousel = () => {
  // Hook to detect mobile screen size
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px' }}>
      <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
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

        {/* Social Media Icons on the Left Side */}
        {!isMobile && (
          <Box
            sx={{
              position: 'fixed',
              top: '50%', // Centers vertically
              left: 0, // Positions the icons to the left
              transform: 'translateY(-50%)', // Vertically centers them by shifting up 50% of their height
              display: 'flex',
              flexDirection: 'column', // Stacks the icons vertically
              gap: '30px', // Sets the gap between icons to 50px
              zIndex: 2, // Ensures it appears in front of carousel images
              paddingLeft: 2, // Adds space to the left side of the screen
            }}
          >
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#3b5998',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease', // Adds animation on hover
                  '&:hover': {
                    transform: 'scale(1.2)', // Increases size when hovered
                  },
                }}
              >
                <FaFacebook size={25} />
              </Box>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#00acee',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease', // Adds animation on hover
                  '&:hover': {
                    transform: 'scale(1.2)', // Increases size when hovered
                  },
                }}
              >
                <FaTwitter size={25} />
              </Box>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#C13584',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease', // Adds animation on hover
                  '&:hover': {
                    transform: 'scale(1.2)', // Increases size when hovered
                  },
                }}
              >
                <FaInstagram size={25} />
              </Box>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#0077b5',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease', // Adds animation on hover
                  '&:hover': {
                    transform: 'scale(1.2)', // Increases size when hovered
                  },
                }}
              >
                <FaLinkedin size={25} />
              </Box>
            </a>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default FadeCarousel;
