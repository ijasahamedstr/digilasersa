import { useState, useEffect } from "react";
import {
  Container,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import Slider from "react-slick";
import axios from "axios";

// Slider settings for RTL and LTR rows
const sliderSettingsRTL = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 6,
  slidesToScroll: 1,
  rtl: true,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 6 } },
    { breakpoint: 960, settings: { slidesToShow: 5 } },
    { breakpoint: 600, settings: { slidesToShow: 4 } },
    { breakpoint: 480, settings: { slidesToShow: 3 } },
    { breakpoint: 360, settings: { slidesToShow: 3 } },
  ],
};

const sliderSettingsLTR = {
  ...sliderSettingsRTL,
  rtl: false,
};

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/Partner`,
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

  if (loading)
    return (
      <Box display="flex" justifyContent="center" py={8}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Box textAlign="center" py={4}>
        {error}
      </Box>
    );

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
          fontFamily: "Tajawal, sans-serif", // Change font family
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Responsive font size
          fontWeight: 700, // Bold
          color: "#096e69", // Optional: text color
          mb: 4,
        }}
      >
        شركاء النجاح
      </Typography>

      {/* Row 1 - RTL */}
      <Box px={{ xs: 1, sm: 2, md: 0 }}>
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
                  width: { xs: 80, sm: 100, md: 120 },
                  height: { xs: 80, sm: 100, md: 120 },
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
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    margin: "auto",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Row 2 - LTR */}
      <Box px={{ xs: 1, sm: 2, md: 0 }} mt={4}>
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
                  width: { xs: 80, sm: 100, md: 120 },
                  height: { xs: 80, sm: 100, md: 120 },
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
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    margin: "auto",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Partner;
