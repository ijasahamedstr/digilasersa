import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Eventsection() {
  const [Event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/News`
        );
        setEvent(response.data);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("فشل في جلب البيانات");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <div>{error}</div>;

  return (
    <section
      style={{
        backgroundColor: "#f2f3f4",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: "center",
        }}
      >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Tajawal, sans-serif", // New font
          fontSize: "2rem",
          fontWeight: 700, // Bold
          marginBottom: "30px",
          color: "#096e69", // Optional color
        }}
      >
        آخر أعمالنا
      </Typography>

        <Swiper spaceBetween={30} slidesPerView={1} loop>
          {Event.map((event, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  borderRadius: "8px",
                  boxShadow: 3,
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", sm: "50%" },
                    height: { xs: 200, sm: "100%" },
                    objectFit: "cover",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  src={`${process.env.REACT_APP_API_HOST}/uploads/News/${event.newsimage}`}
                  alt={event.title}
                />
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%" },
                    textAlign: "right",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: { xs: 2, sm: 0 },
                  }}
                >
                  <CardContent sx={{ height: "100%" }}>
                    <Typography
                      variant="h3"
                      gutterBottom
                      sx={{
                        fontFamily: "Tajawal",
                        fontSize: { xs: "1.5rem", md: "3rem" },
                      }}
                    >
                      {event.newsname}
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        fontFamily: "Tajawal",
                      }}
                    >
                      {event.newsdec}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default Eventsection;
