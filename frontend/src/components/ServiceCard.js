import React from "react"; 
import { Container, Grid, Card, CardContent, Typography, CardMedia, Avatar, Box } from "@mui/material"; 
import { keyframes } from '@emotion/react';  // Import keyframes 
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

// Define the pumping animation
const pumpAnimation = keyframes` 
  0% { 
    transform: scale(1); 
  } 
  50% { 
    transform: scale(1.05); 
  } 
  100% { 
    transform: scale(1); 
  } 
`;

function ServiceCard() { 
  // Sample product data (you can replace this with real data)
  const products = [ 
    { id: 1, name: "قسم الهدايا الدعائية", imageUrl: "https://via.placeholder.com/300", iconUrl: "https://via.placeholder.com/50", link: "/gift-department" }, 
    { id: 2, name: "قسم الطباعة", imageUrl: "https://via.placeholder.com/300", iconUrl: "https://via.placeholder.com/50", link: "/printing-department" }, 
    { id: 3, name: "قسم الفن التشكيلي", imageUrl: "https://via.placeholder.com/300", iconUrl: "https://via.placeholder.com/50", link: "/art-department" }, 
    { id: 4, name: "قسم الشاشات", imageUrl: "https://via.placeholder.com/300", iconUrl: "https://via.placeholder.com/50", link: "/screens-department" }, 
    { id: 5, name: "قسم الخط العربي", imageUrl: "https://via.placeholder.com/300", iconUrl: "https://via.placeholder.com/50", link: "/arabic-calligraphy-department" }, 
    { id: 6, name: "قسم البرمجيات", imageUrl: "https://via.placeholder.com/300", iconUrl: "https://via.placeholder.com/50", link: "/software-department" }, 
    { id: 7, name: "قسم السوشيال ميديا", imageUrl: "https://via.placeholder.com/300", iconUrl: "https://via.placeholder.com/50", link: "/social-media-department" }, 
    { id: 8, name: "قسم الإعلام والميديا", imageUrl: "https://via.placeholder.com/300", iconUrl: "https://via.placeholder.com/50", link: "/media-department" }, 
  ];

  return ( 
    <section 
      style={{ 
        backgroundColor: '#f2f3f4', 
        width: '100%', 
        margin: '0 auto', 
        marginBottom: '30px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 'auto', 
        paddingTop: '50px', 
        paddingBottom: '50px', 
        background:'#040404' 
      }} 
    > 
      <Container 
        maxWidth="xl" 
        sx={{ 
          paddingX: { xs: 2, sm: 3, md: 5 }, 
          textAlign: 'center', 
        }} 
      > 
        <Grid container spacing={6}> {/* Increase the spacing to 6 for more gap between cards */}
          {products.map((product) => ( 
            <Grid item xs={12} sm={6} md={3} key={product.id} sx={{paddingLeft: '60px' }}> 
              {/* Wrap the card with Link component */}
              <Link to={product.link} style={{ textDecoration: 'none' }}>
                <Card 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%', 
                    borderRadius: '30px', // Add this line for the border radius
                    overflow: 'hidden', // To ensure the content stays within the rounded corners
                  }} 
                > 
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}> 
                    <CardMedia 
                      component="img" 
                      height="300"  // Set height to 300px 
                      width="300"   // Set width to 300px 
                      image={product.imageUrl} 
                      alt={product.name} 
                      sx={{ objectFit: 'cover', flexShrink: 0}}  // Match the border-radius of the image
                    /> 
                    {/* Position the Avatar icon in front of the CardContent */} 
                    <Avatar 
                      src={product.iconUrl} 
                      alt={product.name} 
                      sx={{ 
                        position: 'absolute', 
                        top: '90%',   // Adjust the top position if necessary 
                        left: '50%', 
                        transform: 'translate(-50%, -10%)', // Centers the icon 
                        width: 80, 
                        height: 80, 
                        border: '3px solid white', // Optional: add a border to the icon 
                        zIndex: 10,  // Make sure the avatar is in front of the content 
                        background:'#0a6d6a' 
                      }} 
                    /> 
                  </Box> 
                  <CardContent 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between', 
                      flexGrow: 1, 
                      background: '#0a6d6a', 
                      animation: `${pumpAnimation} 1s ease-in-out infinite`  // Apply the pumping effect 
                    }} 
                  > 
                    <Typography variant="h6" sx={{ color: 'white', marginTop: '35px' }}> 
                      {product.name} 
                    </Typography> 
                  </CardContent> 
                </Card> 
              </Link> {/* Close Link */}
            </Grid> 
          ))} 
        </Grid> 
      </Container> 
    </section> 
  ); 
} 

export default ServiceCard; 
