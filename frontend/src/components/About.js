import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import AboutSection from "./AboutSection";
import VisionandMission from "./vision_and_Mission";

const Aboutus = () => {
  const [loading, setLoading] = useState(true);

  // Show splash screen for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      <Box mt={12.5}>
        {/* 100px / 8 = 12.5 (MUI spacing unit) */}
        <AboutSection />
      </Box>
      <VisionandMission />
    </>
  );
};

export default Aboutus;
