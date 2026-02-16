import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import AboutSection from "./AboutSection";
import VisionandMission from "./vision_and_Mission";

const Aboutus = ({ setFooterVisible }) => {
  const [loading, setLoading] = useState(true);

  // Show splash screen for 2 seconds
  useEffect(() => {
    // Hide footer on this page
    if (setFooterVisible) setFooterVisible(false);

    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timer);
      // Show footer again when leaving this page
      if (setFooterVisible) setFooterVisible(true);
    };
  }, [setFooterVisible]);

  // --- Splash Screen Overlay ---
  if (loading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          flexDirection: "column",
          p: 2,
        }}
      >
        <Box
          component="img"
          src="https://i.ibb.co/hRZ1bMy/78-removebg-preview.png"
          alt="Company Logo"
          sx={{
            width: { xs: "70%", sm: "50%", md: "40%", lg: "30%" },
            maxWidth: "500px",
            height: "auto",
            mb: 2,
          }}
        />
        <CircularProgress sx={{ color: "#00fffc" }} />
      </Box>
    );
  }

  return (
    // Main Container: Flex Column with 0 gap
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        width: "100%", 
        m: 0, 
        p: 0, 
        gap: 0 
      }}
    >
      
      {/* About Section Wrapper */}
      <Box>
        <AboutSection />
      </Box>

      {/* Image Wrapper */}
      {/* lineHeight: 0 is crucial to remove the tiny space below images */}
      <Box sx={{ width: "100%", position: "relative", overflow: "hidden", lineHeight: 0, m: 0, p: 0 }}>
        <img
          src="https://i.ibb.co/k2VcktBp/copy-jpg-1-1-1.webp"
          alt="main-slide"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            display: "block", // Ensures image behaves as a block
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
          }}
        />
      </Box>

      {/* Vision Section Wrapper */}
      <Box >
        <VisionandMission />
      </Box>
      
    </Box>
  );
};

export default Aboutus;