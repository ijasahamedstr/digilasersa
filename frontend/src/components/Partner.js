import React, { useState, useEffect } from "react";
import {
  Container,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import Slider from "react-slick";
import axios from "axios";

// Settings for first line (Right to Left)
const sliderSettingsRTL = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 6,
  slidesToScroll: 1,
  rtl: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

// Settings for second line (Left to Right)
const sliderSettingsLTR = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 6,
  slidesToScroll: 1,
  rtl: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/Partner`
        );
        setPartners(response.data);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("فشل في تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  // Split partners into two rows
  const halfwayIndex = Math.ceil(partners.length / 2);
  const firstRowPartners = partners.slice(0, halfwayIndex);
  const secondRowPartners = partners.slice(halfwayIndex);

  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Noto Kufi Arabic, sans-serif",
          fontSize: "2rem",
          mb: 4,
        }}
      >
        شركاء النجاح
      </Typography>

      {/* Row 1 - Right to Left */}
      <Slider {...sliderSettingsRTL}>
        {firstRowPartners.map((partner, index) => (
          <Box
            key={`rtl-${index}`}
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={2}
          >
            <Box
              sx={{
                width: "120px",
                height: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "12px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={`${process.env.REACT_APP_API_HOST}/uploads/Partner/${partner.partnerimage}`}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Row 2 - Left to Right */}
      <Slider {...sliderSettingsLTR}>
        {secondRowPartners.map((partner, index) => (
          <Box
            key={`ltr-${index}`}
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={2}
          >
            <Box
              sx={{
                width: "120px",
                height: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "12px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={`${process.env.REACT_APP_API_HOST}/uploads/Partner/${partner.partnerimage}`}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Partner;
