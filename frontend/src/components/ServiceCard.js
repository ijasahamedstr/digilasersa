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
    imageUrl: "https://i.ibb.co/TM6dzrDZ/Background-copy.webp",
    iconUrl: "https://i.ibb.co/HdgVtF5/image.webp",
    link: "/قسم الهدايا الدعائية",
  },
  {
    id: 2,
    name: "قسم الطباعة",
    imageUrl: "https://i.ibb.co/pj5RFzgv/Layer-34.webp",
    iconUrl: "https://i.ibb.co/dmvyMMn/image-1.webp",
    link: "/قسم الطباعة",
  },
  {
    id: 3,
    name: "قسم الفن التشكيلي",
    imageUrl: "https://i.ibb.co/f5zQqjV/8.webp",
    iconUrl: "https://i.ibb.co/LP17MwP/image-6.webp",
    link: "/قسم الفن التشكيلي",
  },
  {
    id: 4,
    name: "قسم الشاشات",
    imageUrl: "https://i.ibb.co/mrSJqykX/2.webp",
    iconUrl: "https://i.ibb.co/qL6f4q7j/Screen-xx.webp",
    link: "/قسم الشاشات",
  },
  {
    id: 5,
    name: "قسم الصوتيات",
    imageUrl: "https://i.ibb.co/23j2gsFb/07.webp",
    iconUrl: "https://i.ibb.co/8BD4CKD/image-5.webp",
    link: "/قسم الصوتيات",
  },
  {
    id: 6,
    name: "قسم البرمجيات",
    imageUrl: "https://i.ibb.co/Wv1sZYWm/Layer-39.webp",
    iconUrl: "https://i.ibb.co/DDCFSm4/image-3.webp",
    link: "/قسم البرمجيات",
  },
  {
    id: 7,
    name: "قسم السوشيال ميديا",
    imageUrl: "https://i.ibb.co/d072WTZg/Background-copy-3.webp",
    iconUrl: "https://i.ibb.co/K5khVnQ/image-4.webp",
    link: "/قسم السوشيال ميديا",
  },
  {
    id: 8,
    name: "قسم الإعلام والميديا",
    imageUrl: "https://i.ibb.co/0p4wRLFn/Background-copy-2.webp",
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
        backgroundImage: `url("https://i.ibb.co/mFyqzbng/grey-textured-background-1.jpg")`, // ✅ Your background image here
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
        <Grid container spacing={3} justifyContent="center">
          {products.slice(0, 8).map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3} // 3 per row on medium and above (12/4 = 3)
              key={product.id}
            >
              <Link to={product.link} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: "20px",
                    overflow: "hidden",
                    width: "300px",
                    margin: "0 auto", // Center the card
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
                      height="300"
                      image={product.imageUrl}
                      alt={product.name}
                      sx={{ objectFit: "cover", flexShrink: 0 }}
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
                        zIndex: 10,
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
                      padding: "1px",
                      "&:last-child": {
                        paddingBottom: "10px",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        marginTop: "32px",
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        fontFamily: "Tajawal",
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
        {/* <a href="https://sssplatform.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.ibb.co/YBgThJg7/01.webp"
            alt="Banner"
            loading="lazy"
            style={{
              width: "100%",
              maxHeight: "700px",
              objectFit: "cover",
              borderRadius: "20px",
              paddingBottom: "50px",
              cursor: "pointer", // makes it look clickable
            }}
          />
        </a> */}

        {/* Button (currently commented out) */}
        {/* ... */}
      </Box>

      </Container>
    </Box>
  );
}

export default ServiceCard;
