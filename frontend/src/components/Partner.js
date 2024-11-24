import React from 'react';
import { Container, Grid, Card, CardMedia, Typography } from '@mui/material';

const images = [
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/HRSD.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/mci.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOE.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOH.svg" },
  { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/SAMA.svg" },
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
          fontSize: '1.5rem',
          marginBottom: '30px',
        }}
      >
        البائعين عبر الفئات
      </Typography>
      <Grid container spacing={4} justifyContent="center"> {/* Increased spacing to 4 */}
        {images.map((image, index) => (
          <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
            <Card
              sx={{
                width: 145,
                height: 90,
                position: 'relative',
                overflow: 'hidden',
                '&:hover .zoom-image': {
                  transform: 'scale(1.1)', // Apply zoom effect on hover
                },
              }}
            >
              <CardMedia
                component="img"
                image={image.src}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease', // Smooth transition for zoom
                }}
                className="zoom-image"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Partner;
