import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { 
  Container, 
  Box, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography 
} from "@mui/material";

const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

const products = [
  { 
    id: 1, 
    name: "قسم الهدايا الدعائية", 
    imageUrl: "https://i.ibb.co/HTqDMPHd/FLORA-Desk-Top-Shenanigans-3b3ce98b-jpg.webp",
    link: "/gifts" 
  },
  // Add other products here...
];

const Excellence04 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ 
      width: "100%", 
      minHeight: "100vh",
      backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed",
      pb: 10
    }}>
      
      {/* SOCIAL SIDEBAR */}
      <Box sx={{ 
        position: "fixed", 
        top: "50%", 
        left: 0, 
        transform: "translateY(-50%)", 
        display: { xs: "none", md: "flex" }, 
        flexDirection: "column", 
        gap: 2, 
        zIndex: 1200, 
        pl: 2 
      }}>
        {socialLinks.map(({ icon, link }, idx) => (
          <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
            <Box sx={{ 
              width: 45, height: 45, borderRadius: "50%", 
              backgroundColor: "#06f9f3", display: "flex", 
              justifyContent: "center", alignItems: "center", 
              color: "#17202a", boxShadow: "0 0 10px rgba(6, 249, 243, 0.5)", 
              transition: "0.3s ease", 
              "&:hover": { transform: "scale(1.2)", backgroundColor: "white" } 
            }}>
              {icon}
            </Box>
          </a>
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ pt: 15, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ 
          mb: 10, 
          fontFamily: "Tajawal", 
          fontWeight: "bold", 
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          color: "#096e69", 
          fontSize: { xs: "2.8rem", md: "4rem" }
        }}>
          فنون ديجي ليزر
        </Typography>
        
        <Grid container spacing={5} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} lg={4} key={product.id}>
              <Link to={product.link} style={{ textDecoration: "none" }}>
                <Card sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "30px", // More rounded for larger size
                  overflow: "hidden",
                  margin: "0 auto",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                  transition: "0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  "&:hover": { transform: "translateY(-15px) scale(1.03)" }
                }}>
                  <CardMedia
                    component="img"
                    height="300" // Increased from 280
                    image={product.imageUrl}
                    alt={product.name}
                  />
                  
                  <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexGrow: 1,
                    background: "#0a6d6a",
                    textAlign: "center"
                  }}>
                    <Typography variant="h5" sx={{ // Changed from h6 to h5
                      color: "white",
                      fontSize: "1.4rem", // Bigger font
                      fontWeight: "bold",
                      fontFamily: "Tajawal",
                      letterSpacing: "1px"
                    }}>
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Excellence04;