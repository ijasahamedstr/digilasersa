import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaImage, FaUsers } from "react-icons/fa";

function Votemain() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("ar"); // Default Arabic

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // One-time reload (fixes animation loop issues)
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  // Simulate splash delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // --- Splash Screen ---
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
          flexDirection: "column",
          zIndex: 9999,
          p: 2,
        }}
      >
        <Box
          component="img"
          src="https://i.ibb.co/hRZ1bMy/78-removebg-preview.png"
          alt="Logo"
          sx={{
            width: { xs: "70%", sm: "40%", md: "30%" },
            maxWidth: "400px",
            mb: 2,
          }}
        />
        <CircularProgress sx={{ color: "#00fffc" }} />
      </Box>
    );
  }

  // ✅ Text translations
  const text = {
    ar: {
      title: "اختر اللغة",
      interact: "التفاعل مع الجمهور",
      canvas: "لوحات الكنفس",
      langButton: "English",
      direction: "rtl",
      align: "right",
    },
    en: {
      title: "Choose Language",
      interact: "Audience Interaction",
      canvas: "Canvas Boards",
      langButton: "العربية",
      direction: "ltr",
      align: "left",
    },
  };

  // ✅ Product list based on selected language
  const products = [
    {
      name: text[language].interact,
      imageUrl:
        "https://i.ibb.co/FbBVCypZ/image-1738852577324-black-box-with-gold-bow-it-that-says-esk-it.webp",
      link: "/تصويت",
      icon: <FaUsers size={26} color="#00fffc" />,
    },
    {
      name: text[language].canvas,
      imageUrl:
        "https://i.ibb.co/fVGcDD4f/image-1738850649164-67wl6jw1-9.webp",
      link: "/لوحات الكنفس",
      icon: <FaImage size={26} color="#00fffc" />,
    },
  ];

  // --- Main Page ---
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #0a0f2c, #000814)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        px: 2,
        py: 6,
      }}
      dir={text[language].direction} // ✅ RTL / LTR support
    >
      {/* 🌍 Language Selection Section */}
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: "#00fffc",
          fontWeight: "bold",
          fontFamily: "Tajawal",
        }}
      >
        {text[language].title}
      </Typography>

      <Button
        onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
        sx={{
          backgroundColor: "#00fffc",
          color: "#000",
          fontWeight: "bold",
          borderRadius: "30px",
          px: 3,
          py: 1.2,
          mb: 4,
          boxShadow: "0 0 15px rgba(0,255,252,0.5)",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#00bfae",
            boxShadow: "0 0 25px rgba(0,255,252,0.8)",
            transform: "scale(1.05)",
          },
        }}
      >
        {text[language].langButton}
      </Button>

      {/* 🔹 Feature Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: 5,
          mt: 2,
        }}
      >
        {products.map((product, index) => {
          const cardContent = (
            <Card
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "25px",
                overflow: "hidden",
                width: { xs: "95%", sm: "450px", md: "520px" },
                mx: "auto",
                bgcolor: "#0a1a2a",
                boxShadow: "0 0 35px rgba(0,255,252,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.04)",
                  boxShadow: "0 0 45px rgba(0,255,252,0.35)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="280"
                image={product.imageUrl}
                alt={product.name}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                }}
              />

              <CardContent
                sx={{
                  flexGrow: 1,
                  background: "#0a6d6a",
                  textAlign: "center",
                  py: 2.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  {product.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      fontFamily: "Tajawal",
                    }}
                  >
                    {product.name}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          );

          return product.link ? (
            <Link
              to={product.link}
              key={index}
              style={{ textDecoration: "none" }}
            >
              {cardContent}
            </Link>
          ) : (
            cardContent
          );
        })}
      </Box>
    </Box>
  );
}

export default Votemain;
