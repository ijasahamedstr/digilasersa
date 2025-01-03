import React from 'react';
import { Container, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles

function Eventsection() {
  // Array of event data
  const events = [
    {
      title: 'الشاشة التفاعلية الجديدة',
      description: 'تجربة لنظام تشغيل الشاشة التفاعلية الجديدة يجريها مدير قسم السوشيال ميديا قبل البدأ في تفعيل حملة تسويقية.',
      image: 'https://i.ibb.co/0n3Q45Y/0-C7-A7765-MP4-snapshot-00-02-166.png',
    },
    {
      title: 'الشاشة التفاعلية الجديدة',
      description: 'تجربة لنظام تشغيل الشاشة التفاعلية الجديدة يجريها مدير قسم السوشيال ميديا قبل البدأ في تفعيل حملة تسويقية.',
      image: 'https://i.ibb.co/0n3Q45Y/0-C7-A7765-MP4-snapshot-00-02-166.png',
    },
    {
      title: 'الشاشة التفاعلية الجديدة',
      description: 'تجربة لنظام تشغيل الشاشة التفاعلية الجديدة يجريها مدير قسم السوشيال ميديا قبل البدأ في تفعيل حملة تسويقية.',
      image: 'https://i.ibb.co/0n3Q45Y/0-C7-A7765-MP4-snapshot-00-02-166.png',
    },
  ];

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
        <Swiper spaceBetween={30} slidesPerView={1} loop>
          {/* SwiperSlide for each card */}
          {events.map((event, index) => (
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
                    fontFamily: 'Tajawal',
                  }}
                  image={event.image} // Dynamic image URL
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
                    <Typography variant="h3" gutterBottom sx={{fontFamily: 'Tajawal'}}>
                      {event.title} {/* Dynamic title */}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: '20px',fontFamily: 'Tajawal' }}>
                      {event.description} {/* Dynamic description */}
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
