import React from 'react';
import { Container, Grid, CardMedia, Typography } from '@mui/material';

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
        البائعين عبر الفئات
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {images.map((image, index) => (
          <Grid item xs={2} key={index} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
            <CardMedia
              component="img"
              image={image.src}
              sx={{
                width: '150px', // Set width to control size
                height: 'auto', // Maintain aspect ratio
                objectFit: 'contain',
                transition: 'transform 0.3s ease', // Smooth transition for zoom
                '&:hover': {
                  transform: 'scale(1.1)', // Zoom effect on hover
                },
              }}
              className="zoom-image"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Partner;
