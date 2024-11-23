import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';

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
  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px',paddingTop:'0px' }}>
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
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)', // Adds shadow to the image inside
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
      </Box>
    </Container>
  );
};

export default FadeCarousel;
