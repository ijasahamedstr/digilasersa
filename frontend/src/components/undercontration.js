import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSnapchat, FaTiktok, FaYoutube } from 'react-icons/fa';

const Undercontration = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 0, height: '100vh',  backgroundImage: 'url("https://i.ibb.co/8Y6ZJJk/HD-wallpaper-under-construction-humor-sayings-sign-yellow.webp")', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Main Content Box */}
      <Box sx={{ textAlign: 'center', color: '#fff', zIndex: 2 }}>
        {/* Under Construction Text */}
        <Typography variant="h3" sx={{ marginBottom: 2, fontWeight: 'bold', letterSpacing: 1 }}>
          We Are Under Construction
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Our website is getting a makeover! Stay tuned for something amazing.
        </Typography>
        
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
            zIndex: 3,
            paddingLeft: 2
          }}
        >
          {[{ icon: <FaFacebook size={30} />, link: 'https://www.facebook.com' },
          { icon: <FaTwitter size={30} />, link: 'https://www.twitter.com' },
          { icon: <FaInstagram size={30} />, link: 'https://www.instagram.com' },
          { icon: <FaLinkedin size={30} />, link: 'https://www.linkedin.com' },
          { icon: <FaYoutube size={30} />, link: 'https://www.youtube.com/' },
          { icon: <FaSnapchat size={30} />, link: 'https://www.snapchat.com/' },
          { icon: <FaTiktok size={30} />, link: 'https://www.tiktok.com/' }
          ].map((social, index) => (
            <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#06f9f3',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#17202a',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    backgroundColor: '#00c6ff',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)',
                  },
                }}
              >
                {social.icon}
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Undercontration;
