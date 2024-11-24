import React from "react";
import { Container } from "@mui/material";

function Newssection() {
  return (
    <section
      style={{
        backgroundColor: '#f2f3f4',
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center', // Horizontally center the content
        alignItems: 'center', // Vertically center the content
        height: 'auto', // Adjust height to fit the content
        paddingTop: '20px', // Padding for the top
        paddingBottom: '20px', // Padding for the bottom
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
          textAlign: 'center', // Center text for all screen sizes
        }}
      >
      </Container>
    </section>
  );
}

export default Newssection;
