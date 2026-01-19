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
import { Link } from "react-router-dom";

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
        backgroundImage: `url("https://i.ibb.co/mFyqzbng/grey-textured-background-1.jpg")`,
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
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Link to={product.link} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: "20px",
                    overflow: "hidden",
                    width: "300px",
                    margin: "0 auto",
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

        {/* Fixed Banner 1 */}
      
          <Box
            mt={6}
            sx={{
              position: "relative",
              textAlign: "center",
              px: { xs: 2, md: 0 },
              display: "flex",           // Ensures centering
              justifyContent: "center",  // Ensures centering
            }}
          >
            <Box
              component="img"
              src="https://i.ibb.co/1fC4Gthk/image.webp"
              alt="SSS Platform Banner"
              loading="lazy"
              sx={{
                width: "100%",
                // Medium screen optimization
                maxWidth: { xs: "100%", md: "800px", lg: "1000px" }, 
                maxHeight: { xs: "400px", md: "700px" },
                objectFit: "cover",
                borderRadius: "30px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(6, 249, 243, 0.2)",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                  boxShadow:
                    "0 30px 60px rgba(0,0,0,0.6), 0 0 30px rgba(6, 249, 243, 0.5)",
                },
                animation: "floating 6s ease-in-out infinite",
                "@keyframes floating": {
                  "0%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-15px)" },
                  "100%": { transform: "translateY(0px)" },
                },
              }}
            />
          </Box>
        {/* Banner 2 */}
        <Box
          mt={6}
          sx={{
            position: "relative",
            textAlign: "center",
            perspective: "1000px",
          }}
        >
          <a
            href="https://sssplatform.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              component="img"
              src="https://i.ibb.co/YTwy8KSF/image.webp"
              alt="Banner"
              loading="lazy"
              sx={{
                width: "100%",
                maxHeight: "700px",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "30px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                mb: "50px",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.5), 0 0 20px rgba(6, 249, 243, 0.2)",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  transform: "translateY(-15px) rotateX(2deg)",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(6, 249, 243, 0.6)",
                  filter: "brightness(1.1)",
                },
                animation: "bannerFloating 6s ease-in-out infinite",
                "@keyframes bannerFloating": {
                  "0%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-20px)" },
                  "100%": { transform: "translateY(0px)" },
                },
              }}
            />
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default ServiceCard;