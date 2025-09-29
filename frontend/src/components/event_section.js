import { useState, useEffect, useRef } from "react";
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
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Eventsection() {
  const [Event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ref for main Swiper
  const mainSwiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/News`
        );
        setEvent(response.data.reverse());
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("فشل في جلب البيانات");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );

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
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ px: { xs: 2, sm: 3, md: 5 }, textAlign: "center" }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontFamily: "Tajawal, sans-serif",
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2.5rem" },
            fontWeight: 700,
            mb: "30px",
            color: "#096e69",
          }}
        >
          آخر أخبارنا
        </Typography>

        <Box
          sx={{ position: "relative" }}
          onMouseEnter={() => mainSwiperRef.current?.autoplay.stop()}
          onMouseLeave={() => mainSwiperRef.current?.autoplay.start()}
        >
          <Swiper
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            {Event.map((event, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    borderRadius: "8px",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    width: "100%",
                    margin: "0 auto",
                    alignItems: "center",
                  }}
                >
                  {/* Image slider */}
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "50%" },
                      pr: { sm: 1 },
                      pb: { xs: 1, sm: 0 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: { xs: 300, sm: 450, md: 550 },
                    }}
                  >
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      modules={[Pagination, Autoplay]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop
                      style={{ width: "100%", height: "100%" }}
                    >
                      {event.newsimagelinks?.map((image, i) => (
                        <SwiperSlide key={i}>
                          <CardMedia
                            component="img"
                            image={image}
                            alt={`${event.newsname} - ${i + 1}`}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              borderRadius: "8px",
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Box>

                  {/* Text content */}
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "50%" },
                      textAlign: "right",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      pl: { sm: 1 },
                    }}
                  >
                    <CardContent sx={{ paddingTop: 0 }}>
                      <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                          fontFamily: "Tajawal",
                          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                          fontWeight: 700,
                        }}
                      >
                        {event.newsname}
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                          fontFamily: "Tajawal",
                          lineHeight: 1.6,
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
        </Box>
      </Container>
    </section>
  );
}

export default Eventsection;
