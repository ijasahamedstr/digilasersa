import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaSnapchat, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const carouselItems = [
  {
    id: 1,
    videoSrc: 'https://www.w3schools.com/html/movie.mp4', // Replace with your video URL
  },
  {
    id: 2,
    videoSrc: 'https://www.w3schools.com/html/movie.mp4', // Replace with your video URL
  },
  {
    id: 3,
    videoSrc: 'https://www.w3schools.com/html/movie.mp4', // Replace with your video URL
  },
];

const FadeCarousel = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '100px' }}>
      <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        <Carousel
          fade
          nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: 'black' }} />}
          prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: 'black' }} />}
        >
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              {/* Check if it's a YouTube video or a regular video and render accordingly */}
              {item.videoSrc.includes('youtube.com') ? (
                <iframe
                  className="d-block w-100"
                  src={`${item.videoSrc}?autoplay=1&mute=1`} // Adding autoplay and mute parameters
                  title={`Slide ${item.id}`}
                  style={{
                    height: '80vh',
                    objectFit: 'cover',
                    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)',
                  }}
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                ></iframe>
              ) : (
                <video
                  className="d-block w-100"
                  src={item.videoSrc}
                  alt={`Slide ${item.id}`}
                  style={{
                    height: '80vh',
                    objectFit: 'cover',
                    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)',
                  }}
                  autoPlay
                  muted
                  loop
                />
              )}
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Social Media Icons on the Left Side */}
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            zIndex: 2,
            paddingLeft: 2,
          }}
        >
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#06f9f3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#17202a',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <FaFacebook size={25} />
            </Box>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#06f9f3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#17202a',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <FontAwesomeIcon icon={faXTwitter} size={25} />
            </Box>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#06f9f3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#17202a',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <FaInstagram size={25} />
            </Box>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#06f9f3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#17202a',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <FaLinkedin size={25} />
            </Box>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#06f9f3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#17202a',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <FaYoutube size={25} />
            </Box>
          </a>
          <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#06f9f3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#17202a',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <FaSnapchat size={25} />
            </Box>
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#06f9f3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#17202a',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <FaTiktok size={25} />
            </Box>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#06f9f3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#17202a',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <FaWhatsapp size={25} />
            </Box>
          </a>
        </Box>
      </Box>
    </Container>
  );
};

export default FadeCarousel;
