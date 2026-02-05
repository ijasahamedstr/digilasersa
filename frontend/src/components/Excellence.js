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
  { id: 5, name: "الرقعه", imageUrl: "https://i.ibb.co/390ZD5jy/jpg.webp", link: "/audio" },
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
      pb: 15 // Increased bottom padding for the whole page
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
          mb: 12, // More space after the main title
          fontFamily: "Tajawal", 
          fontWeight: "bold", 
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          color: "#096e69", 
          fontSize: { xs: "2.5rem", md: "4rem" }
        }}>
          فنون الخط العربي
        </Typography>
        
        {/* GRID SPACING: Increased to 10 for significant vertical gaps */}
        <Grid container spacing={15} direction="column" alignItems="center">
          {products.map((product) => (
            <Grid item xs={12} key={product.id} sx={{ width: "100%" }}>
              <Link to={product.link} style={{ textDecoration: "none" }}>
                <Card sx={{ 
                  position: "relative",
                  width: "100%",
                  height: { xs: "300px", sm: "450px", md: "600px" }, // Taller cards for a more "gallery" feel
                  borderRadius: "40px", // Increased roundness
                  overflow: "hidden", 
                  boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
                  transition: '0.6s cubic-bezier(0.4, 0, 0.2, 1)', 
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  '&:hover': { 
                    transform: 'scale(1.02) translateY(-10px)', // Added a lift effect
                    boxShadow: "0 35px 80px rgba(0,0,0,0.8)"
                  } 
                }}>
                  
                  {/* FULL WIDTH BACKGROUND IMAGE */}
                  <CardMedia 
                    component="img" 
                    image={product.imageUrl} 
                    alt={product.name} 
                    sx={{ 
                      height: "100%",
                      width: "100%",
                      objectFit: "contain", // Changed to cover to fill the extra space elegantly
                      objectPosition: "center"
                    }} 
                  />

                  {/* BOTTOM RIGHT CONTENT OVERLAY */}
                  <CardContent sx={{ 
                    position: "absolute",
                    top: 0,
                    right: 0, 
                    width: "100%",
                    height: "100%",
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "flex-end", 
                    alignItems: "flex-end",    
                    background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)", 
                    p: { xs: 4, sm: 6, md: 10 }, // Increased padding for a more luxurious look
                    textAlign: "right"
                  }}>
                    
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        color: "white", 
                        fontWeight: "bold", 
                        fontFamily: "Tajawal",
                        mb: 3,
                        textShadow: "0 4px 15px rgba(0,0,0,0.8)",
                        fontSize: { xs: "2rem", sm: "3.5rem", md: "4.5rem" }
                      }}
                    >
                      {product.name}
                    </Typography>
                    
                    {/* BUTTON STYLE */}
                    <Box sx={{ 
                      px: { xs: 4, md: 8 }, 
                      py: 1.5, 
                      border: "2px solid #06f9f3",
                      bgcolor: "rgba(0, 0, 0, 0.5)", 
                      color: "#06f9f3", 
                      borderRadius: "60px",
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", md: "1.4rem" },
                      fontFamily: "Tajawal",
                      backdropFilter: "blur(12px)",
                      transition: "0.4s",
                      "&:hover": { 
                        bgcolor: "#06f9f3", 
                        color: "#17202a",
                        boxShadow: "0 0 35px #06f9f3",
                        transform: "scale(1.05)"
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