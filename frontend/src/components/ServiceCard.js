import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import { keyframes } from "@emotion/react"; // Import keyframes
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
    {
      id: 1,
      name: "قسم الهدايا الدعائية",
      imageUrl: "https://i.ibb.co/JRj0pBd/Background-copy.webp",
      iconUrl: "https://i.ibb.co/HdgVtF5/image.webp",
      link: "/gift-department",
    },
    {
      id: 2,
      name: "قسم الطباعة",
      imageUrl: "https://i.ibb.co/27jQ6C2/Layer-34.webp",
      iconUrl: "https://i.ibb.co/dmvyMMn/image-1.webp",
      link: "/printing-department",
    },
    {
      id: 3,
      name: "منصة صيانة الشاشات",
      imageUrl: "https://i.ibb.co/RTng2Yvs/banner-construction-13-bbbbbb-1.webp",
      iconUrl: "https://i.ibb.co/LP17MwP/image-6.webp",
      link: "/art-department",
    },
    {
      id: 4,
      name: "قسم الشاشات",
      imageUrl: "https://i.ibb.co/K7RGQ4C/Layer-32.webp",
      iconUrl: "https://i.ibb.co/dmvyMMn/image-1.webp",
      link: "/screens-department",
    },
    {
      id: 5,
      name: "قسم الصوتيات",
      imageUrl: "https://i.ibb.co/S4NzsZC6/07.webp",
      iconUrl: "https://i.ibb.co/5vHKmx1/image-2.webp",
      link: "/قسم الصوتيات",
    },
    {
      id: 6,
      name: "قسم البرمجيات",
      imageUrl: "https://i.ibb.co/d72GNR5/Layer-39.webp",
      iconUrl: "https://i.ibb.co/DDCFSm4/image-3.webp",
      link: "/software-department",
    },
    {
      id: 7,
      name: "قسم السوشيال ميديا",
      imageUrl: "https://i.ibb.co/NN7tRFD/Background-copy-3.webp",
      iconUrl: "https://i.ibb.co/K5khVnQ/image-4.webp",
      link: "/social-media-department",
    },
    {
      id: 8,
      name: "قسم الإعلام والميديا",
      imageUrl: "https://i.ibb.co/QvQvkKQ/Background-copy-2.webp",
      iconUrl: "https://i.ibb.co/8BD4CKD/image-5.webp",
      link: "/media-department",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f2f3f4",
        width: "100%",
        marginTop: { xs: "-30px", sm: "-30px" },
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        paddingTop: "50px",
        paddingBottom: "50px",
        background: "#040404",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <Button
          variant="outlined" // Change variant to outlined for a transparent background
          sx={{
            background: "transparent", // Transparent background
            color: "White", // Text color (red)
            padding: "10px 20px", // Padding
            fontFamily: "Tajawal", // Same font family as Typography
            fontWeight: 600, // Same font weight as Typography
            borderRadius: "50px", // Rounded corners
            fontSize: { xs: "18px", sm: "30px", md: "40px" },
            marginBottom: "30px",
            width: "50%", // Full width
            border: "2px solid #00fefc", // Red border for the outlined button
          }}
        >
          أقســــامنـــــا
        </Button>

        <Grid container spacing={6}>
          {" "}
          {/* Increase the spacing to 6 for more gap between cards */}
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={product.id}
              sx={{ paddingLeft: "60px" }}
            >
              {/* Wrap the card with Link component */}
              <Link to={product.link} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: "20px", // Add this line for the border radius
                    overflow: "hidden", // To ensure the content stays within the rounded corners
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300" // Set height to 300px
                      width="300" // Set width to 300px
                      image={product.imageUrl}
                      alt={product.name}
                      sx={{ objectFit: "cover", flexShrink: 0 }} // Match the border-radius of the image
                    />
                    {/* Position the Avatar icon in front of the CardContent */}
                    <Avatar
                      src={product.iconUrl}
                      alt={product.name}
                      sx={{
                        position: "absolute",
                        top: "90%", // Adjust the top position if necessary
                        left: "50%",
                        transform: "translate(-50%, -10%)", // Centers the icon
                        width: 70,
                        height: 70,
                        border: "3px solid white", // Optional: add a border to the icon
                        zIndex: 10, // Make sure the avatar is in front of the content
                        background: "#0a6d6a",
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flexGrow: 1,
                      background: "#0a6d6a",
                      animation: `${pumpAnimation} 1s ease-in-out infinite`,
                      padding: "1px", // General padding
                      "&:last-child": {
                        paddingBottom: "10px", // Remove bottom padding for the last child
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        marginTop: "32px", // Reduce the top margin
                        fontSize: "1.2rem", // Reduce the font size
                        fontWeight: 500, // Slightly lighter font weight
                        fontFamily: "Tajawal",
                      }}
                    >
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>{" "}
              {/* Close Link */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default ServiceCard;
