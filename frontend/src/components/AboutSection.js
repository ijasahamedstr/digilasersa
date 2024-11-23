import React from "react";
import { Container } from "@mui/material";

function AboutSection() {
  return (
    <section
      style={{
        backgroundColor: '#f2f3f4', // Fallback color if image doesn't load
        backgroundImage: 'url(https://i.ibb.co/dMJPKys/New-Web-5.png)', // Path to your background image
        backgroundSize: 'cover', // Cover the entire section with the image
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent repeating the image
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center', // Horizontally center the content
        alignItems: 'center', // Vertically center the content
        height: '80vh', // Set the height to 80% of the viewport height
        paddingTop: '20px', // Padding for the top
        paddingBottom: '20px', // Padding for the bottom
        marginTop: '-30px',
        // Ensure responsiveness for smaller screens
        '@media (max-width: 600px)': {
          height: '60vh', // Adjust height for smaller screens
          marginTop: 0,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
          textAlign: 'center', // Center text for all screen sizes
          display: 'flex',
          flexDirection: 'column', // Stack content vertically
          justifyContent: 'center', // Center content vertically within Container
          alignItems: 'center', // Center content horizontally within Container
        }}
      >
      </Container>
    </section>
  );
}

export default AboutSection;
