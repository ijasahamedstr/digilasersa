import React, { useState, useEffect } from "react";
import {
  Container,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";
import Slider from "react-slick";
import axios from "axios";

// Slick carousel settings with Autoplay
const settings = {
  infinite: true, // Enable infinite looping
  speed: 500, // Transition speed
  slidesToShow: 5, // Number of items to show at a time
  slidesToScroll: 1, // Number of items to scroll at a time
  autoplay: true, // Enable autoplay
  autoplaySpeed: 3000, // Time (in ms) between automatic slides
  responsive: [
    {
      breakpoint: 1024, // for tablets and large screens
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600, // for small screens (mobile)
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // for very small screens (extra small mobile)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/Partner`,
        );
        setPartners(response.data); // Set the fetched partner data
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle loading and error states
  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  return (
    <Container
      maxWidth="xl"
      style={{ marginBottom: "60px", marginTop: "60px" }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{
          fontFamily: "Noto Kufi Arabic, sans-serif",
          fontSize: "2rem",
          marginBottom: "30px",
        }}
      >
        شركاء النجاح
      </Typography>
      <Slider {...settings}>
        {partners.length > 0 ? (
          partners.map((partner, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "30px",
              }}
            >
              <CardMedia
                component="img"
                src={`${process.env.REACT_APP_API_HOST}/uploads/Partner/${partner.partnerimage}`}
                sx={{
                  width: "200px", // Set a fixed width for all images
                  height: "200px", // Set a fixed height for all images
                  objectFit: "contain", // Maintain aspect ratio while scaling
                  transition: "transform 0.3s ease", // Smooth transition for zoom
                  "&:hover": {
                    transform: "scale(1.1)", // Zoom effect on hover
                  },
                }}
                className="zoom-image"
              />
            </div>
          ))
        ) : (
          <div>No partners available</div>
        )}
      </Slider>
    </Container>
  );
};

export default Partner;
