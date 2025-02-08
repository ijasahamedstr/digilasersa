import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import axios from 'axios'; // Ensure axios is imported
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles

function Eventsection() {
  const [Event, setEvent] = useState([]); // State to store event data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_HOST}/News`);
        setEvent(response.data); // Set the fetched events
      } catch (err) {
        console.error('Error fetching data: ', err);
        setError('Failed to fetch data');
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
    <section
      style={{
        backgroundColor: '#f2f3f4',
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Noto Kufi Arabic, sans-serif',
            fontSize: '2rem',
            marginBottom: '30px',
          }}
        >
          آخر أعمالنا
        </Typography>

        <Swiper spaceBetween={30} slidesPerView={1} loop>
          {/* SwiperSlide for each event */}
          {Event.map((event, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
                  borderRadius: '8px',
                  boxShadow: 3,
                  backgroundColor: 'transparent',
                  border: 'none', // Explicitly set border to none
                  outline: 'none', // Ensure outline is removed
                  width: '100%', // Full width of the container
                  maxWidth: '100%', // Allow cards to scale with container width
                  margin: '0 auto', // Center align the card horizontally
                }}
              >
                {/* Image part */}
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', sm: '50%' }, // Full width on small screens
                    height: { xs: 200, sm: '100%' }, // Fixed height for images on small screens, full height on large
                    objectFit: 'cover',
                    border: 'none', // Explicitly set border to none
                    borderRadius: '8px', // Apply rounded corners to the image
                  }}
                  src={`${process.env.REACT_APP_API_HOST}/uploads/News/${event.newsimage}`} // Dynamic image URL
                  alt={event.title} // Dynamic alt text
                />
                {/* Text part */}
                <Box
                  sx={{
                    width: { xs: '100%', sm: '50%' },
                    textAlign: 'right', // Align text to the right for larger screens
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: { xs: 2, sm: 0 }, // Padding on top for small screens
                  }}
                >
                  <CardContent sx={{ height: '100%' }}>
                    <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Tajawal' }}>
                      {event.newsname} {/* Dynamic title */}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: '20px', fontFamily: 'Tajawal' }}>
                      {event.newsdec} {/* Dynamic description */}
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
