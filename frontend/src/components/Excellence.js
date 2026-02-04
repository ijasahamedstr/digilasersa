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
  { id: 1, name: "الثلث", imageUrl: "https://i.ibb.co/Lhr83dVs/1-jpg.webp", link: "/gifts" },
  { id: 2, name: "الثلث", imageUrl: "https://i.ibb.co/6J0wbmsS/2-jpg.webp", link: "/printing" },
  { id: 3, name: "الثلث", imageUrl: "https://i.ibb.co/PZ5s1QT4/jpg.webp", link: "/fine-arts" },
  { id: 4, name: "الديوانى", imageUrl: "https://i.ibb.co/5XkYjGnC/jpg.webp", link: "/screens" },
  { id: 5, name: " الصوتيات", imageUrl: "https://i.ibb.co/390ZD5jy/jpg.webp", link: "/audio" },
  { id: 6, name: "الفارسى", imageUrl: "https://i.ibb.co/B2nfYvBk/jpg.webp", link: "/software" },
  { id: 7, name: "الكوفى", imageUrl: "https://i.ibb.co/F4RsfLv8/jpg.webp", link: "/social-media" },
  { id: 8, name: "النسخ", imageUrl: "https://i.ibb.co/Q7Ws08fS/jpg.webp", link: "/media" },
];

const Excellence = () => {
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
              width: 40, 
              height: 40, 
              borderRadius: "50%", 
              backgroundColor: "#06f9f3", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              color: "#17202a", 
              boxShadow: "0 0 10px rgba(6, 249, 243, 0.5)", 
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
          mb: 8, 
          fontFamily: "Tajawal", 
          fontWeight: "bold", 
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          color: "#096e69", 
        }}>
          فنون الخط العربي
        </Typography>
        
        <Grid container spacing={4} direction="column" alignItems="center">
          {products.map((product) => (
            <Grid item xs={12} key={product.id} sx={{ width: "100%" }}>
              <Link to={product.link} style={{ textDecoration: "none" }}>
                <Card sx={{ 
                  position: "relative",
                  width: "100%",
                  height: { xs: "250px", sm: "350px", md: "450px" }, 
                  borderRadius: "30px", 
                  overflow: "hidden", 
                  boxShadow: "0 15px 45px rgba(0,0,0,0.5)",
                  transition: '0.5s ease-in-out', 
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  '&:hover': { transform: 'scale(1.01)' } 
                }}>
                  
                  {/* FULL WIDTH BACKGROUND IMAGE */}
                  <CardMedia 
                    component="img" 
                    image={product.imageUrl} 
                    alt={product.name} 
                    sx={{ 
                      height: "100%",
                      width: "100%",
                      objectFit: "contain", // Set to cover to fill the card
                      objectPosition: "center"
                    }} 
                  />

                  {/* BOTTOM RIGHT CONTENT OVERLAY */}
                  <CardContent sx={{ 
                    position: "absolute",
                    top: 0,
                    right: 0, // Anchored to the right
                    width: "100%",
                    height: "100%",
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "flex-end", // Bottom
                    alignItems: "flex-end",    // Right side alignment
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)", 
                    p: { xs: 3, sm: 5, md: 7 }, 
                    textAlign: "right" // Right-aligned text for Arabic
                  }}>
                    
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        color: "white", 
                        fontWeight: "bold", 
                        fontFamily: "Tajawal",
                        mb: 2,
                        textShadow: "0 4px 15px rgba(0,0,0,0.8)",
                        fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" }
                      }}
                    >
                      {product.name}
                    </Typography>
                    
                    {/* BUTTON STYLE */}
                    <Box sx={{ 
                      px: { xs: 3, md: 6 }, 
                      py: 1.2, 
                      border: "2px solid #06f9f3",
                      bgcolor: "rgba(0, 0, 0, 0.4)", 
                      color: "#06f9f3", 
                      borderRadius: "50px",
                      fontWeight: "bold",
                      fontSize: { xs: "0.9rem", md: "1.2rem" },
                      fontFamily: "Tajawal",
                      backdropFilter: "blur(8px)",
                      transition: "0.3s",
                      "&:hover": { 
                        bgcolor: "#06f9f3", 
                        color: "#17202a",
                        boxShadow: "0 0 25px #06f9f3",
                        transform: "translateY(-3px)"
                      }
                    }}>
                      انتقل إلى القسم
                    </Box>
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

export default Excellence;