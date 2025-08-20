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
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

// Animation
const pumpAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const products = [
  {
    id: 1,
    name: "قسم الهدايا الدعائية",
    imageUrl: "https://i.ibb.co/JRj0pBd/Background-copy.webp",
    iconUrl: "https://i.ibb.co/HdgVtF5/image.webp",
    link: "/قسم الهدايا الدعائية",
  },
  {
    id: 2,
    name: "قسم الطباعة",
    imageUrl: "https://i.ibb.co/27jQ6C2/Layer-34.webp",
    iconUrl: "https://i.ibb.co/dmvyMMn/image-1.webp",
    link: "/قسم الطباعة",
  },
  {
    id: 3,
    name: "قسم الفن التشكيلي",
    imageUrl: "https://i.ibb.co/NpYW2Jx/8.webp",
    iconUrl: "https://i.ibb.co/LP17MwP/image-6.webp",
    link: "/art-department",
  },
  {
    id: 4,
    name: "قسم الشاشات",
    imageUrl: "https://i.ibb.co/K7RGQ4C/Layer-32.webp",
    iconUrl: "https://i.ibb.co/qL6f4q7j/Screen-xx.webp",
    link: "/قسم الشاشات",
  },
  {
    id: 5,
    name: "قسم الصوتيات",
    imageUrl: "https://i.ibb.co/S4NzsZC6/07.webp",
    iconUrl: "https://i.ibb.co/8BD4CKD/image-5.webp",
    link: "/قسم الصوتيات",
  },
  {
    id: 6,
    name: "قسم البرمجيات",
    imageUrl: "https://i.ibb.co/d72GNR5/Layer-39.webp",
    iconUrl: "https://i.ibb.co/DDCFSm4/image-3.webp",
    link: "/قسم البرمجيات",
  },
  {
    id: 7,
    name: "قسم السوشيال ميديا",
    imageUrl: "https://i.ibb.co/NN7tRFD/Background-copy-3.webp",
    iconUrl: "https://i.ibb.co/K5khVnQ/image-4.webp",
    link: "/قسم السوشيال ميديا",
  },
  {
    id: 8,
    name: "قسم الإعلام والميديا",
    imageUrl: "https://i.ibb.co/QvQvkKQ/Background-copy-2.webp",
    iconUrl: "https://i.ibb.co/20xv3tc3/Video-xx.webp",
    link: "/قسم الإعلام والميديا",
  },
];

function ServiceCard() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 6,
        backgroundImage: `url("https://i.ibb.co/wrgMv3k5/grey-textured-background-1.jpg")`, // ✅ Your background image here
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        {/* Heading */}
        <Button
          variant="outlined"
          sx={{
            color: "white",
            px: 4,
            py: 1.5,
            fontFamily: "Tajawal",
            fontWeight: 600,
            fontSize: { xs: 18, sm: 30, md: 40 },
            mb: 5,
            width: { xs: "100%", sm: "70%", md: "50%" },
            borderRadius: "50px",
            border: "2px solid #00fefc",
          }}
        >
          أقســــامنـــــا
        </Button>

        {/* Grid Cards */}
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Link to={product.link} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={product.imageUrl}
                      alt={product.name}
                      loading="lazy"
                      sx={{ objectFit: "cover" }}
                    />
                    <Avatar
                      src={product.iconUrl}
                      alt={product.name}
                      sx={{
                        position: "absolute",
                        top: "90%",
                        left: "50%",
                        transform: "translate(-50%, -10%)",
                        width: 70,
                        height: 70,
                        border: "3px solid white",
                        zIndex: 2,
                        backgroundColor: "#0a6d6a",
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      backgroundColor: "#0a6d6a",
                      animation: `${pumpAnimation} 1.5s ease-in-out infinite`,
                      textAlign: "center",
                      pt: 5,
                      pb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontFamily: "Tajawal",
                        fontSize: "1.2rem",
                        fontWeight: 500,
                      }}
                    >
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* Banner Images and Button */}
        <Box mt={6} sx={{ position: "relative", textAlign: "center" }}>

          <img
            src="https://i.ibb.co/0pn0zFPx/Screen-services-Bar-new-k.webp"
            alt="Banner"
            loading="lazy"
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "20px",
              paddingBottom: "30px",
            }}
          />

          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: { xs: "10%", sm: "75%" },
              left: "30%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              color: "#096e69",
              fontFamily: "Tajawal",
              fontWeight: 700,
              fontSize: { xs: "14px", sm: "18px", md: "22px" },
              px: { xs: 2, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              borderRadius: "30px",
              boxShadow: 3,
              "&:hover": {
                backgroundColor: "#e6e6e6",
              },
            }}
          >
            المزيد من الخدمات
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ServiceCard;
