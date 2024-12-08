import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, useMediaQuery,CardContent,CardMedia,Card,Grid,TextField,Button} from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const carouselItems = [
  {
    id: 1,
    img: 'https://i.ibb.co/ZdsqLHF/image.png',
    title: 'Welcome to Our Adventure',
    content: 'Explore the beauty of nature with us.'
  },
  {
    id: 2,
    img: 'https://i.ibb.co/ZdsqLHF/image.png',
    title: 'Unforgettable Moments',
    content: 'Create memories that last a lifetime.'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/ZdsqLHF/image.png',
    title: 'Join Our Community',
    content: 'Be part of something special.'
  },
];

const products = [
    { cardTitles: "أعمال فنية وإنتاج", imageUrls: "https://i.ibb.co/L98dJh3/Write-lede.png"},
    { cardTitles: "كتابة محتوي وتأليف", imageUrls: "https://i.ibb.co/PckW5CS/dfba4c19cde988c07930123097f49c78.png"},
    { cardTitles: "تصميمات إبداعية", imageUrls: "https://i.ibb.co/LRjJLJH/DALL-E-2024-09-30-00-33-16-A-giant-whimsical-fountain-pen-sitting-confidently-in-a-traditional-direc.png" },
    { cardTitles: "محتـوي حصـري", imageUrls: "https://i.ibb.co/sRHjCqx/piclumen-1727383323200.png"}
  ];

  const images = [
    { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/HRSD.svg" },
    { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/mci.svg" },
    { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOE.svg" },
    { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOH.svg" },
    { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/SAMA.svg" },
    { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOF.svg" },
    { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/MOI.svg" },
    { src: "https://ehsan.sa/assets/images/homepage/sponser-icons/NC.svg" },
  ];
  
  

const VRSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '100px' }}>
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
              position: 'fixed',
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
                backgroundColor: '#eaecee',
                backgroundImage: 'url("https://i.ibb.co/6R5BLw7/image.png")',
                backgroundSize: 'cover',
                width: '100%',
                margin: '0 auto',
                marginBottom: '30px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: '70vh',
                paddingTop: '20px',
                paddingBottom: '20px',
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    paddingX: { xs: 2, sm: 3, md: 5 },
                    textAlign: 'center',
                }}
            >
                {/* Icon Cards Row */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '20px',
                        marginTop: '200px',
                    }}
                >
                    {/* Buttons in a row */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            gap: '20px',
                            width: '100%',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Link to="/Web-Media-Video" style={{ textDecoration: 'none' }}>
                            <button
                                style={{
                                    padding: '12px 25px',
                                    backgroundColor: '#17202a',
                                    color: 'white',
                                    border: '2px solid #f05322',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    width: 'auto',
                                    fontFamily: 'Noto Kufi Arabic',
                                }}
                            >
                                فيديو
                            </button>
                        </Link>

                        <Link to="/vr-videos" style={{ textDecoration: 'none' }}>
                            <button
                                style={{
                                    padding: '12px 25px',
                                    backgroundColor: '#17202a',
                                    color: 'white',
                                    border: '2px solid #f05322',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    width: 'auto',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: window.innerWidth <= 600
                                            ? '2rem'
                                            : window.innerWidth <= 960
                                            ? '2.5rem'
                                            : '3rem',
                                        fontFamily: 'Noto Kufi Arabic',
                                    }}
                                >
                                    VR 
                                </span>
                                <span> Videos</span>
                            </button>
                        </Link>

                        <Link to="/Web-Media-photo" style={{ textDecoration: 'none' }}>
                            <button
                                style={{
                                    padding: '12px 25px',
                                    backgroundColor: '#17202a',
                                    color: 'white',
                                    border: '2px solid #f05322',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    width: 'auto',
                                    fontFamily: 'Noto Kufi Arabic',
                                }}
                            >
                                فـوتـو
                            </button>
                        </Link>
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
                <div>
                    <div
                        style={{
                            fontSize: '40px',
                            marginBottom: '10px',
                        }}
                    >
                        <i className="fas fa-cogs"></i> {/* Example icon */}
                    </div>
                    <img
                        src="https://i.ibb.co/5rFRKP8/8888.png" // Replace with your actual image URL
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
                <div>
                    <div
                        style={{
                            fontSize: '40px',
                            marginBottom: '10px',
                        }}
                    >
                        <i className="fas fa-wrench"></i> {/* Example icon */}
                    </div>
                    <img
                        src="https://i.ibb.co/VCSWsK1/999.png" // Replace with your actual image URL
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
                <div>
                    <div
                        style={{
                            fontSize: '40px',
                            marginBottom: '10px',
                        }}
                    >
                        <i className="fas fa-cogs"></i> {/* Example icon */}
                    </div>
                    <img
                        src="https://i.ibb.co/v1q6M6x/5251.png" // Replace with your actual image URL
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
                <div>
                    <div
                        style={{
                            fontSize: '40px',
                            marginBottom: '10px',
                        }}
                    >
                        <i className="fas fa-cogs"></i> {/* Example icon */}
                    </div>
                    <img
                        src="https://i.ibb.co/Kjj6dBM/Screenshot-2024-08-13-171715.png" // Replace with your actual image URL
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
        backgroundImage: 'url("https://i.ibb.co/QjSmXMm/image.png")', // Replace with your image URL
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Ensure the image is centered
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh', // Set height to 70% of the viewport height
        paddingTop: '20px',
        paddingBottom: '20px',
        '@media (max-width: 768px)': {
            height: 'auto', // Adjust the height for medium screens
            paddingTop: '10px',
            paddingBottom: '10px',
        },
        '@media (max-width: 480px)': {
            height: 'auto', // Adjust the height for smaller screens
        },
    }}
>
    <Container
        maxWidth="xl"
        sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: 'center',
            '@media (max-width: 768px)': {
                paddingX: '2rem', // Adjust padding for medium screens
            },
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
                '@media (max-width: 768px)': {
                    justifyContent: 'center', // Center text on smaller screens
                    padding: '0 10px', // Adjust padding for smaller screens
                },
            }}
        >
            <h2
                style={{
                    color: '#fdfefe',
                    fontFamily: 'Noto Kufi Arabic, sans-serif',
                    fontSize: '1.8rem', // Default font size for larger screens
                    padding: '10px 20px', // Add padding inside the box
                    backgroundColor: '#333', // Box background color
                    border: '2px solid #f05322', // Border color and thickness
                    borderRadius: '8px', // Rounded corners for the box
                    display: 'inline-block', // Ensure the box only wraps the text
                    '@media (max-width: 768px)': {
                        fontSize: '1.5rem', // Font size for medium screens
                    },
                    '@media (max-width: 600px)': {
                        fontSize: '1.3rem', // Font size for smaller screens (smaller devices)
                    },
                    '@media (max-width: 400px)': {
                        fontSize: '1.2rem', // Further reduction for very small screens
                    },
                }}
            >
                استشارات مجانية
            </h2>
        </div>

        {/* Unordered List */}
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start', // Align the list to the left side
                alignItems: 'flex-start', // Align items to the top
                width: '100%',
                marginTop: '20px', // Space between the heading and the list
                padding: '0 20px', // Add padding for proper spacing
                '@media (max-width: 768px)': {
                    justifyContent: 'center', // Center the list on smaller screens
                    padding: '0 10px', // Adjust padding for smaller screens
                },
            }}
        >
            <ul
                style={{
                    color: '#fdfefe',
                    fontFamily: 'Noto Kufi Arabic, sans-serif',
                    listStyleType: 'disc', // Add disc bullet points
                    paddingLeft: '20px', // Indent the list items
                    lineHeight: '2.5', // Spacing between list items
                    direction: 'ltr', // Left-to-right for list items (English style)
                    fontSize: '1rem', // Adjust font size for better readability
                    width: '100%', // Ensure the list spans the entire width
                    textAlign: 'left', // Align list items to the left
                    '@media (max-width: 768px)': {
                        fontSize: '0.9rem', // Slightly smaller font size for medium screens
                    },
                    '@media (max-width: 480px)': {
                        fontSize: '0.8rem', // Further adjustment for very small screens
                    },
                }}
            >
                <li>كيف تصور منتجك</li>
                <li>كيف تختار المصور</li>
                <li>كيف اقيم التصوير</li>
                <li>كيف احـصل فكرة</li>
            </ul>
        </div>
    </Container>
</section>
<section
    style={{
        backgroundColor: '#eaecee', // Fallback background color
        backgroundImage: 'url("https://i.ibb.co/j5jnj8s/image.png")', // Replace with your image URL
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Ensure the image is centered
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh', // Set height to 70% of the viewport height
        paddingTop: '20px',
        paddingBottom: '20px',
        '@media (max-width: 768px)': {
            height: 'auto', // Adjust the height for medium screens
            paddingTop: '10px',
            paddingBottom: '10px',
        },
        '@media (max-width: 480px)': {
            height: 'auto', // Adjust the height for smaller screens
        },
        marginTop:'-30px'
    }}
>
      {/* Swiper Section */}
    <Container
    maxWidth="xl"
    sx={{
        marginTop: '40px',
        marginBottom: '40px',
        backgroundSize: 'cover', // Makes sure the image covers the entire container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
    }}
    >
    <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 }
        }}
    >
        {products.map((product, index) => (
        <SwiperSlide key={index}>
            <Link to={`/service/${index + 1}`} style={{ textDecoration: 'none' }}>
            <Card
                sx={{
                maxWidth: 345,
                boxShadow: 3,
                border: '2px solid #f05322',  // Add the outline color here
                '&:hover': { boxShadow: 6 },
                marginBottom: '20px',
                }}
            >
                <CardMedia component="img" alt={`Service ${index}`} image={product.imageUrls} sx={{ height: 200 }} />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                    {product.cardTitles}
                </Typography>
                </CardContent>
            </Card>
            </Link>
        </SwiperSlide>
        ))}
    </Swiper>
    </Container>
 </section>
 <section
    style={{
        backgroundColor: '#eaecee', // Fallback background color
        backgroundImage: 'url("https://i.ibb.co/fY5Kt72/image.png")', // Replace with your image URL
        backgroundSize: 'cover', // Ensure the image covers the entire section
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'flex-end', // Align content to the bottom of the section
        alignItems: 'center',
        height: '50vh', // Set height to 100% of the viewport height
        paddingTop: '20px',
        paddingBottom: '20px',
        marginTop: '-30px',
    }}
>
    <Container
        maxWidth="xl"
        sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: 'center',
        }}
    >
        {/* Heading */}
        <h2
            style={{
                fontSize: window.innerWidth <= 600
                    ? '1.5rem' // For small screens (xs)
                    : window.innerWidth <= 960
                    ? '2rem' // For medium screens (sm)
                    : '2.5rem', // For large screens (md)
                color: '#fdfefe',
                fontFamily: 'Noto Kufi Arabic',
                marginBottom: '20px', // Space between heading and buttons
            }}
        >
            معرض أعمالنا
        </h2>

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
                        border: '2px solid #f05322', // Outline color
                        borderRadius: '5px',
                        cursor: 'pointer',
                        width: 'auto', // Adjust width automatically on different screen sizes
                        fontFamily: 'Noto Kufi Arabic',
                    }}
                >
                    معرض مشاريع الفيديو
                </button>
                <button
                    style={{
                        padding: '12px 25px',
                        backgroundColor: '#17202a',
                        color: 'white',
                        border: '2px solid #f05322', // Outline color
                        borderRadius: '5px',
                        cursor: 'pointer',
                        width: 'auto', // Adjust width automatically on different screen sizes
                        fontFamily: 'Noto Kufi Arabic',
                    }}
                >
                    معرض أعمال الفوتوغرافيا
                </button>
            </div>
        </div>
    </Container>
</section>
<section
    style={{
        backgroundColor: '#eaecee', // Fallback background color
        backgroundImage: 'url("https://i.ibb.co/rt2jr0M/image.png")', // Replace with your image URL
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Ensure the image is centered
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end', // Align text at the bottom of the section
        height: '100vh', // Set height to 100% of the viewport height
        paddingTop: '20px',
        paddingBottom: '20px',
        marginTop: '-30px',
        position: 'relative', // Position container for any other potential positioning (like button)
        '@media (max-width: 1024px)': {
            height: 'auto', // Adjust height for medium screens
            paddingTop: '20px',
            paddingBottom: '20px',
            backgroundImage: 'url("https://i.ibb.co/WP9hGvq/small-image.png")', // Optionally change background for medium screens
        },
        '@media (max-width: 768px)': {
            height: 'auto', // Adjust height for tablets and smaller screens
            backgroundSize: 'contain', // Ensure the background image scales well on small screens
            backgroundPosition: 'center', // Maintain the image center for better fit
        },
        '@media (max-width: 480px)': {
            height: 'auto', // Adjust height for mobile screens
            backgroundSize: 'contain', // Adjust image size to fit mobile screens
            backgroundPosition: 'center',
        },
    }}
>
    <Container
        maxWidth="xl"
        sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: 'center',
            position: 'relative', // Container for positioning
            '@media (max-width: 768px)': {
                paddingX: '2rem', // Adjust padding for medium screens
            },
        }}
    >
        <div
            style={{
                display: 'flex',
                justifyContent: 'center', // Center text horizontally
                alignItems: 'center', // Center text vertically (within the div)
                width: '100%',
                height: '100%', // Take full height of the section
                textAlign: 'center', // Align text inside the div to the center
                padding: '0 20px', // Add padding to avoid text sticking to the edges
                marginBottom: '100px', // Extra bottom margin for spacing from the button or footer
                '@media (max-width: 768px)': {
                    padding: '0 10px', // Adjust padding for smaller screens
                },
            }}
        >
            <h2
                style={{
                    color: '#fdfefe',
                    fontFamily: 'Noto Kufi Arabic, sans-serif',
                    fontSize: '1.8rem', // Default font size for larger screens
                    padding: '10px 20px', // Add padding inside the box
                    backgroundColor: '#333', // Box background color
                    border: '2px solid #f05322', // Border color and thickness
                    borderRadius: '8px', // Rounded corners for the box
                    display: 'inline-block', // Ensure the box only wraps the text
                    lineHeight: '1.4', // Ensure line spacing is proper
                    '@media (max-width: 768px)': {
                        fontSize: '1.5rem', // Font size for medium screens
                    },
                    '@media (max-width: 600px)': {
                        fontSize: '1.3rem', // Font size for smaller screens
                    },
                    '@media (max-width: 480px)': {
                        fontSize: '1.1rem', // Further reduction for very small screens (mobile devices)
                    },
                    '@media (max-width: 400px)': {
                        fontSize: '1rem', // Smaller font size for very small mobile screens
                    },
                }}
            >
                نبني أفكارك.. .. ونجسد أحلامك ... لنشيّد بها واقعًا خلابًا ومُبهر.
            </h2>
        </div>
    </Container>
</section>
<section
    style={{
        backgroundColor: '#eaecee', // Fallback background color
        backgroundImage: 'url("https://i.ibb.co/zmVWw4Y/image.png")', // Replace with your image URL
        backgroundSize: 'cover', // Ensure the image covers the entire section
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        height: '80vh', // Set height to 50% of the viewport height
        paddingTop: '20px',
        paddingBottom: '20px',
        marginTop: '-30px',
    }}
>
    <Container maxWidth="xl" style={{ marginBottom: '60px', marginTop: '60px' }}>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center', // Center text horizontally
                alignItems: 'center', // Center text vertically
                width: '100%',
                height: '100%', // Take full height of the section
                textAlign: 'center', // Align text to the center
                padding: '0 20px', // Add padding to avoid text sticking to the edges
                '@media (max-width: 768px)': {
                    padding: '0 10px', // Adjust padding for smaller screens
                },
            }}
        >
            <h2
                style={{
                    color: '#fdfefe',
                    marginBottom:'20px',
                    fontFamily: 'Noto Kufi Arabic, sans-serif',
                    fontSize: '1.8rem', // Default font size for larger screens
                    padding: '10px 20px', // Add padding inside the box
                    backgroundColor: '#333', // Box background color
                    border: '2px solid #f05322', // Border color and thickness
                    borderRadius: '8px', // Rounded corners for the box
                    display: 'inline-block', // Ensure the box only wraps the text
                    '@media (max-width: 768px)': {
                        fontSize: '1.5rem', // Font size for medium screens
                    },
                    '@media (max-width: 600px)': {
                        fontSize: '1.3rem', // Font size for smaller screens (smaller devices)
                    },
                    '@media (max-width: 400px)': {
                        fontSize: '1.2rem', // Further reduction for very small screens
                    },
                }}
            >
                استشارات مجانية
            </h2>
        </div>
        <Grid container spacing={4} justifyContent="center"> {/* Increased spacing to 4 */}
            {images.map((image, index) => (
                <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
                    <Card
                        sx={{
                            width: 145,
                            height: 90,
                            position: 'relative',
                            overflow: 'hidden',
                            '&:hover .zoom-image': {
                                transform: 'scale(1.1)', // Apply zoom effect on hover
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={image.src}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                transition: 'transform 0.3s ease', // Smooth transition for zoom
                            }}
                            className="zoom-image"
                        />
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
</section>
<section
      style={{
        backgroundColor: '#000000',
        width: '100%',
        margin: '0 auto',
        marginBottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        marginTop: '-30px',
        direction: 'ltr', // Set the section to RTL direction
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: 'center',
        }}
      >
        <Grid container spacing={4}>
          {/* Text Section on the Right */}
          <Grid
            item
            xs={12}
            sm={6}
            order={{ xs: 1, sm: 1 }} // Keep this section first on all screen sizes
            sx={{ direction: 'rtl' }}
          >
            <Typography variant="h4" color="white" paragraph>
              Contact Us
            </Typography>
            <Typography variant="h5" color="#00fffc">
              للطلب والإستفسار /
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '50px' }}>
            مدير قسم الميديا  : <span style={{ fontWeight: 'bold' }}>9999 065 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
            مدير فرع الشرقية  : <span style={{ fontWeight: 'bold' }}>9999 064 057</span>
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
            مدير تسويق الميديا  : <span style={{ fontWeight: 'bold' }}>8888 093 057</span>
            </Typography>
          </Grid>

          {/* Contact Form Section on the Left */}
          <Grid
            item
            xs={12}
            sm={6}
            order={{ xs: 2, sm: 2 }} // Move this section to the bottom on mobile (order 2)
          >
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                direction: 'rtl', // Set the form to right-to-left direction
              }}
            >
              <TextField
                label="الاسم"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <TextField
                label="جوال"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <TextField
                label="بريد الكتروني"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <TextField
                label="رسالتك"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: '15px',
                  background: '#00fffc',
                  color: '#1e272e',
                  padding: { xs: '10px', sm: '15px' }, // Responsive padding
                }}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
</Container>
  );
};

export default VRSection;
