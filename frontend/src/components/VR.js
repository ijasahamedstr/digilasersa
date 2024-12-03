import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const carouselItems = [
  {
    id: 1,
    img: 'https://i.ibb.co/bHpMRSN/image.png',
    title: 'Welcome to Our Adventure',
    content: 'Explore the beauty of nature with us.'
  },
  {
    id: 2,
    img: 'https://i.ibb.co/bHpMRSN/image.png',
    title: 'Unforgettable Moments',
    content: 'Create memories that last a lifetime.'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/bHpMRSN/image.png',
    title: 'Join Our Community',
    content: 'Be part of something special.'
  },
];

const VRSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px' }}>
      <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        
        {/* Carousel Section */}
        <Carousel
          fade
          nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: 'black' }} />}
          prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: 'black' }} />}
        >
          {carouselItems.map(item => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={item.title}
                style={{
                  height: '80vh',
                  objectFit: 'cover',
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)',
                }}
              />
              <Carousel.Caption>
                <Typography variant="h4" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                  {item.content}
                </Typography>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Social Media Icons */}
        {!isMobile && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              zIndex: 2,
              paddingLeft: 2,
            }}
          >
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform, idx) => {
              const icons = {
                facebook: <FaFacebook size={25} />,
                twitter: <FaTwitter size={25} />,
                instagram: <FaInstagram size={25} />,
                linkedin: <FaLinkedin size={25} />
              };
              const colors = {
                facebook: '#3b5998',
                twitter: '#00acee',
                instagram: '#C13584',
                linkedin: '#0077b5',
              };
              return (
                <a key={platform} href={`https://www.${platform}.com`} target="_blank" rel="noopener noreferrer">
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: colors[platform],
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  >
                    {icons[platform]}
                  </Box>
                </a>
              );
            })}
          </Box>
        )}
      </Box>

      <section
        style={{
            backgroundColor: '#eaecee', // Fallback background color
            backgroundImage: 'url("https://i.ibb.co/6R5BLw7/image.png")', // Replace with your image URL
            backgroundSize: 'cover', // Ensure the image covers the entire section
            width: '100%',
            margin: '0 auto',
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh', // Set height to 100% of the viewport height
            paddingTop: '20px',
            paddingBottom: '20px',
        }}
        >
        <Container
            maxWidth="xl"
            sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: 'center',
            }}
        >
            {/* Icon Cards Row */}
            <div
            style={{
                display: 'flex',
                justifyContent: 'center', // Center the button container horizontally
                flexWrap: 'wrap',
                gap: '20px', // Spacing between the cards, if needed
            }}
            >
            {/* Buttons in a row */}
            <div
                style={{
                display: 'flex',
                justifyContent: 'space-evenly', // Distribute buttons with more space
                gap: '20px', // Default space between buttons
                width: '100%', // Ensure buttons stretch across container
                flexDirection: 'row', // Row by default
                flexWrap: 'wrap', // Allow buttons to wrap on smaller screens
                }}
            >
                <button
                style={{
                    padding: '12px 25px',
                    backgroundColor: '#17202a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: 'auto', // Adjust width automatically on different screen sizes
                    fontFamily: 'Noto Kufi Arabic',
                }}
                >
                فيديو
                </button>
                <button
                style={{
                    padding: '12px 25px',
                    backgroundColor: '#17202a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: 'auto', // Adjust width automatically on different screen sizes
                }}
                >
                <span
                style={{
                    fontSize: window.innerWidth <= 600
                    ? '2rem' // For small screens (xs)
                    : window.innerWidth <= 960
                    ? '2.5rem' // For medium screens (sm)
                    : '3rem', // For large screens (md),
                    fontFamily: 'Noto Kufi Arabic',
                }}
                >
                VR 
                </span>
                <span> Videos</span>

                </button>
                <button
                style={{
                    padding: '12px 25px',
                    backgroundColor: '#17202a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: 'auto', // Adjust width automatically on different screen sizes
                    fontFamily: 'Noto Kufi Arabic',
                }}
                >
               فـوتـو
                </button>
            </div>
            </div>
        </Container>
        </section>

      {/* Service Section */}
      <section
        style={{
            width: '100%',
            margin: '0 auto',
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            paddingBottom: '20px',
            marginTop: '30px',
        }}
    >
        <Container maxWidth="xl" sx={{ paddingX: { xs: 2, sm: 3, md: 5 }, textAlign: 'center' }}>
            {/* Icon Cards Row */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '20px',  // Spacing between the cards
                }}
            >
                {/* Card 1 */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#333',
                        padding: '20px',
                        borderRadius: '8px',
                        color: '#fff',
                        textAlign: 'center',
                        maxWidth: '250px',
                        flex: '1 1 22%',
                    }}
                >
                    <div
                        style={{
                            fontSize: '40px',
                            marginBottom: '10px',
                        }}
                    >
                        <i className="fas fa-cogs"></i> {/* Example icon */}
                    </div>
                    <img
                        src="your-image-url-1.jpg" // Replace with your actual image URL
                        alt="Content Creation"
                        style={{
                            width: '80%', // Adjust size
                            height: 'auto',
                            borderRadius: '8px',
                            marginBottom: '10px', // Add space between image and title
                        }}
                    />
                    <h4 style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'Noto Kufi Arabic' }}>
                        الإعداد وصناعة المحتوي
                    </h4>
                </div>

                {/* Card 2 */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#333',
                        padding: '20px',
                        borderRadius: '8px',
                        color: '#fff',
                        textAlign: 'center',
                        maxWidth: '250px',
                        flex: '1 1 22%',
                    }}
                >
                    <div
                        style={{
                            fontSize: '40px',
                            marginBottom: '10px',
                        }}
                    >
                        <i className="fas fa-wrench"></i> {/* Example icon */}
                    </div>
                    <img
                        src="your-image-url-2.jpg" // Replace with your actual image URL
                        alt="Graphic Design"
                        style={{
                            width: '80%', // Adjust size
                            height: 'auto',
                            borderRadius: '8px',
                            marginBottom: '10px',
                        }}
                    />
                    <h4 style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'Noto Kufi Arabic' }}>
                        المونتاج والجرافيك
                    </h4>
                </div>

                {/* Card 3 */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#333',
                        padding: '20px',
                        borderRadius: '8px',
                        color: '#fff',
                        textAlign: 'center',
                        maxWidth: '250px',
                        flex: '1 1 22%',
                    }}
                >
                    <div
                        style={{
                            fontSize: '40px',
                            marginBottom: '10px',
                        }}
                    >
                        <i className="fas fa-cogs"></i> {/* Example icon */}
                    </div>
                    <img
                        src="your-image-url-3.jpg" // Replace with your actual image URL
                        alt="Filming and Direction"
                        style={{
                            width: '80%', // Adjust size
                            height: 'auto',
                            borderRadius: '8px',
                            marginBottom: '10px',
                        }}
                    />
                    <h4 style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'Noto Kufi Arabic' }}>
                        التصوير والإخراج
                    </h4>
                </div>

                {/* Card 4 */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#333',
                        padding: '20px',
                        borderRadius: '8px',
                        color: '#fff',
                        textAlign: 'center',
                        maxWidth: '250px',
                        flex: '1 1 22%',
                    }}
                >
                    <div
                        style={{
                            fontSize: '40px',
                            marginBottom: '10px',
                        }}
                    >
                        <i className="fas fa-cogs"></i> {/* Example icon */}
                    </div>
                    <img
                        src="your-image-url-4.jpg" // Replace with your actual image URL
                        alt="Podcast and Audio Production"
                        style={{
                            width: '80%', // Adjust size
                            height: 'auto',
                            borderRadius: '8px',
                            marginBottom: '10px',
                        }}
                    />
                    <h4 style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'Noto Kufi Arabic' }}>
                        الإنتاج الصوتي والبودكاست
                    </h4>
                </div>
            </div>
        </Container>
    </section>
    <section
  style={{
    backgroundColor: '#eaecee', // Fallback background color
    backgroundImage: 'url("https://i.ibb.co/JkNJH14/image.png")', // Replace with your image URL
    backgroundSize: 'cover', // Ensure the image covers the entire section
    width: '100%',
    margin: '0 auto',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh', // Set height to 100% of the viewport height
    paddingTop: '20px',
    paddingBottom: '20px',
  }}
>
  <Container
    maxWidth="xl"
    sx={{
      paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
      textAlign: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start', // Align the text to the left
        alignItems: 'center',
        width: '100%',
        height: '100%', // Take full height of the section
        textAlign: 'left', // Align text to the left inside the div
        padding: '0 20px', // Add padding to avoid text sticking to the edges
      }}
    >
      <h2 style={{ color: '#fdfefe', fontFamily: 'Arial, sans-serif' }}>
      استشارات مجانية
      </h2>
    </div>
  </Container>
</section>


    </Container>
  );
};

export default VRSection;
