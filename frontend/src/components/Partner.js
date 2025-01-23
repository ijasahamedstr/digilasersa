import React from 'react';
import { Container, CardMedia, Typography } from '@mui/material';
import Slider from 'react-slick';

// Slick carousel settings with Autoplay
const settings = {
  infinite: true, // Enable infinite looping
  speed: 500, // Transition speed
  slidesToShow: 5, // Number of items to show at a time
  slidesToScroll: 1, // Number of items to scroll at a time
  autoplay: true, // Enable autoplay
  autoplaySpeed: 3000, // Time (in ms) between automatic slides
  responsive: [
    {
      breakpoint: 1024, // for tablets and large screens
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600, // for small screens (mobile)
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // for very small screens (extra small mobile)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const images = [
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/HRSD.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOE.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOH.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOF.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOI.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/NC.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/DGA.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/sdaia.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/PSS.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOMRA.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOJ.svg" },
];

const Partner = () => {
  return (
    <Container maxWidth="xl" style={{ marginBottom: '60px', marginTop: '60px' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{
          fontFamily: 'Noto Kufi Arabic, sans-serif',
          fontSize: '2rem',
          marginBottom: '30px',
        }}
      >
        شركاء النجاح
      </Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
            <CardMedia
              component="img"
              image={image.src}
              sx={{
                width: '100%', // Ensure the image width is responsive
                maxWidth: '200px', // Adjust max width for mobile screens
                height: 'auto', // Maintain aspect ratio
                objectFit: 'contain',
                transition: 'transform 0.3s ease', // Smooth transition for zoom
                '&:hover': {
                  transform: 'scale(1.1)', // Zoom effect on hover
                },
              }}
              className="zoom-image"
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Partner;
