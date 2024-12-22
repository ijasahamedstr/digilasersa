import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import { Box, Typography,CardMedia,Card,Grid,TextField,Button} from '@mui/material';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaFacebook, FaInstagram, FaLinkedin,FaYoutube,FaSnapchat,FaTiktok,FaWhatsapp  } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import Form from 'react-bootstrap/Form'; 

const carouselItems = [
  {
    id: 1,
    img: 'https://i.ibb.co/NjnKh2Q/Untitled-1.jpg',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/NjnKh2Q/Untitled-1.jpg',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/NjnKh2Q/Untitled-1.jpg',
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
  ];
  
  

const VRSection = () => {

     const [formData, setFormData] = useState({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      
       
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };
        
          const handleFormSubmit = (event) => {
            event.preventDefault();
        
            // Add simple validation
            if (!formData.name || !formData.phone || !formData.email || !formData.message) {
              alert("Please fill out all fields.");
              return;
            }
        
            // Redirect to another site (Example: External site)
            window.location.href = 'https://another-site.com/contact';
          };
      
  
  return (
    <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '100px' }}>
            <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <Carousel
          fade
          nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: "black" }} />}
          prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: "black" }} />}
        >
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={item.title}
                style={{
                  height: "80vh",
                  objectFit: "cover",
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                }}
              />
              <Carousel.Caption>
                <Typography variant="h4" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                  {item.content}
                </Typography>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

         {/* Social Media Icons on the Left Side */}
                <Box sx={{ position: "fixed", top: "50%", left: 0, transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "15px", zIndex: 2, paddingLeft: 2 }}>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                      <FaFacebook size={25} />
                    </Box>
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <Box sx={{ width: 40, height: 40, borderRadius
                      : "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                      <FontAwesomeIcon icon={faXTwitter} size={25} />
                    </Box>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                      <FaInstagram size={25} />
                    </Box>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                      <FaLinkedin size={25} />
                    </Box>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                      <FaYoutube  size={25} />
                    </Box>
                  </a>
                  <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer">
                    <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                      <FaSnapchat size={25} />
                    </Box>
                  </a>
                  <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                    <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                      <FaTiktok size={25} />
                    </Box>
                  </a>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                      <FaWhatsapp size={25} />
                    </Box>
                  </a>
                </Box>
            </Box>
            <section
    style={{
        backgroundColor: '#eaecee', // Fallback background color
        backgroundImage: 'url("https://i.ibb.co/6R5BLw7/image.png")', // Replace with your image URL
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Center the background image
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        height: '800px', // Set height to 70% of the viewport height
        paddingTop: '250px',
        paddingBottom: '0px',
    }}
>
    <Container maxWidth="xl" style={{ marginTop: '130px' }}>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center', // Center text horizontally
                alignItems: 'center', // Center text vertically
                width: '100%',
                height: '100%', // Take full height of the section
                textAlign: 'center', // Align text to the center
                padding: '0 20px', // Add padding to avoid text sticking to the edges
            }}
        >
            {/* Optional content like heading */}
        </div>

        {/* Adjusted marginTop for buttons */}
        <Grid
            container
            spacing={2} // Reduced spacing for better alignment on mobile
            justifyContent="center"
            style={{ marginTop: '20px' }} // Reduced marginTop for better alignment
        >
            {/* First button */}
            <Grid item xs={6} sm={6} md={2}>
                <Link to="/Web-Media-Video" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="small" // Small size for mobile responsiveness
                        style={{
                            padding: '8px 18px',
                            backgroundColor: '#17202a',
                            color: 'white',
                            border: '2px solid #f05322',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            width: '100%',
                            fontFamily: 'Tajawal',
                            textAlign: 'center',
                            fontSize: '25px', // Smaller font size for mobile
                            '@media (max-width: 600px)': { // For small screens like mobile
                                fontSize: '14px', // Adjust font size for smaller screens
                            },
                        }}
                    >
                        فيديو
                    </Button>
                </Link>
            </Grid>

            {/* Second button */}
            <Grid item xs={6} sm={6} md={2}>
                <Link to="/vr-videos" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="small" // Small size for mobile responsiveness
                        style={{
                            padding: '8px 18px',
                            backgroundColor: '#17202a',
                            color: 'white',
                            border: '2px solid #f05322',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            width: '100%',
                            fontFamily: 'Tajawal',
                            textAlign: 'center',
                            fontSize: '25px', // Smaller font size for mobile
                            '@media (max-width: 600px)': { // For small screens like mobile
                                fontSize: '14px', // Adjust font size for smaller screens
                            },
                        }}
                    >
                        VR Videos
                    </Button>
                </Link>
            </Grid>

            {/* Third button */}
            <Grid item xs={6} sm={6} md={2}>
                <Link to="/Web-Media-photo" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        size="small" // Small size for mobile responsiveness
                        style={{
                            padding: '8px 18px',
                            backgroundColor: '#17202a',
                            color: 'white',
                            border: '2px solid #f05322',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            width: '100%',
                            fontFamily: 'Tajawal',
                            textAlign: 'center',
                            fontSize: '25px', // Smaller font size for mobile
                            '@media (max-width: 600px)': { // For small screens like mobile
                                fontSize: '14px', // Adjust font size for smaller screens
                            },
                        }}
                    >
                        فـوتـو
                    </Button>
                </Link>
            </Grid>

            {/* Fourth button */}
            <Grid item xs={6} sm={6} md={2}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="small" // Small size for mobile responsiveness
                    style={{
                        padding: '8px 18px',
                        backgroundColor: '#17202a',
                        color: 'white',
                        border: '2px solid #f05322',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        width: '100%',
                        fontFamily: 'Tajawal',
                        textAlign: 'center',
                        fontSize: '25px', // Smaller font size for mobile
                        '@media (max-width: 600px)': { // For small screens like mobile
                            fontSize: '14px', // Adjust font size for smaller screens
                        },
                    }}
                >
                    Button 4
                </Button>
            </Grid>

            {/* Fifth button */}
            <Grid item xs={6} sm={6} md={2}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="small" // Small size for mobile responsiveness
                    style={{
                        padding: '8px 18px',
                        backgroundColor: '#17202a',
                        color: 'white',
                        border: '2px solid #f05322',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        width: '100%',
                        fontFamily: 'Tajawal',
                        textAlign: 'center',
                        fontSize: '25px', // Smaller font size for mobile
                        '@media (max-width: 600px)': { // For small screens like mobile
                            fontSize: '14px', // Adjust font size for smaller screens
                        },
                    }}
                >
                    Button 5
                </Button>
            </Grid>

            {/* Sixth button */}
            <Grid item xs={6} sm={6} md={2}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="small" // Small size for mobile responsiveness
                    style={{
                        padding: '8px 18px',
                        backgroundColor: '#17202a',
                        color: 'white',
                        border: '2px solid #f05322',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        width: '100%',
                        fontFamily: 'Tajawal',
                        textAlign: 'center',
                        fontSize: '25px', // Smaller font size for mobile
                        '@media (max-width: 600px)': { // For small screens like mobile
                            fontSize: '14px', // Adjust font size for smaller screens
                        },
                    }}
                >
                    Button 6
                </Button>
            </Grid>
        </Grid>
    </Container>
</section>



    <section
        style={{
            backgroundColor: '#030909',
            backgroundImage: 'url("https://i.ibb.co/JQKW6v8/Final-Web-Media-VR-line-bk.jpg")', // Background image URL
            backgroundSize: 'cover', // Ensures the image covers the entire section
            backgroundPosition: 'center', // Centers the background image
            width: '100%',
            margin: '0 auto',
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center', // Horizontally center the content
            alignItems: 'center', // Vertically center the content
            height: '350px', // Increased height of the section
            marginTop: '-80px',
        }}
        >
        <Container
            maxWidth="xl"
            sx={{
            paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
            textAlign: 'center', // Center text for all screen sizes
            }}
        >
            {/* Grid for Icon Cards */}
            <Grid container spacing={4}>
            {/* Icon Card 1 */}
            <Grid item xs={6} sm={3}>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img
                    src="https://i.ibb.co/5rFRKP8/8888.png" // Replace with your actual image URL
                    alt="Content Creation"
                    style={{
                    width: '50%', // Adjusted size for mobile responsiveness
                    height: 'auto', // Maintain aspect ratio
                    borderRadius: '8px',
                    marginBottom: '10px', // Add space between image and title
                    display: 'block', // Makes the image block-level for centering
                    marginLeft: 'auto', // Centers image horizontally
                    marginRight: 'auto', // Centers image horizontally
                    }}
                />
                </div>
                <Typography variant="h6" sx={{ color: '#000000',fontWeight:'700', fontFamily: 'Tajawal', fontSize: { xs: '12px', sm: '13px', md: '20px' } }}>
                الإعداد وصناعة المحتوي
                </Typography>
            </Grid>

            {/* Icon Card 2 */}
            <Grid item xs={6} sm={3}>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img
                    src="https://i.ibb.co/VCSWsK1/999.png" // Replace with your actual image URL
                    alt="Content Creation"
                    style={{
                    width: '50%', // Adjusted size for mobile responsiveness
                    height: 'auto', // Maintain aspect ratio
                    borderRadius: '8px',
                    marginBottom: '10px', // Add space between image and title
                    display: 'block', // Makes the image block-level for centering
                    marginLeft: 'auto', // Centers image horizontally
                    marginRight: 'auto', // Centers image horizontally
                    }}
                />
                </div>
                <Typography variant="h6" sx={{ color: '#000000',fontWeight:'700', fontFamily: 'Tajawal', fontSize: { xs: '12px', sm: '13px', md: '20px' } }}>
                المونتاج والجرافيك
                </Typography>
            </Grid>

            {/* Icon Card 3 */}
            <Grid item xs={6} sm={3}>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img
                    src="https://i.ibb.co/v1q6M6x/5251.png" // Replace with your actual image URL
                    alt="Content Creation"
                    style={{
                    width: '50%', // Adjusted size for mobile responsiveness
                    height: 'auto', // Maintain aspect ratio
                    borderRadius: '8px',
                    marginBottom: '10px', // Add space between image and title
                    display: 'block', // Makes the image block-level for centering
                    marginLeft: 'auto', // Centers image horizontally
                    marginRight: 'auto', // Centers image horizontally
                    }}
                />
                </div>
                <Typography variant="h6" sx={{ color: '#000000',fontWeight:'700', fontFamily: 'Tajawal', fontSize: { xs: '12px', sm: '13px', md: '20px' } }}>
                التصوير والإخراج
                </Typography>
            </Grid>

            {/* Icon Card 4 */}
            <Grid item xs={6} sm={3}>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img
                    src="https://i.ibb.co/Kjj6dBM/Screenshot-2024-08-13-171715.png" // Replace with your actual image URL
                    alt="Content Creation"
                    style={{
                    width: '50%', // Adjusted size for mobile responsiveness
                    height: 'auto', // Maintain aspect ratio
                    borderRadius: '8px',
                    marginBottom: '10px', // Add space between image and title
                    display: 'block', // Makes the image block-level for centering
                    marginLeft: 'auto', // Centers image horizontally
                    marginRight: 'auto', // Centers image horizontally
                    }}
                />
                </div>
                <Typography variant="h6" sx={{ color: '#000000', fontWeight:'700', fontFamily: 'Tajawal', fontSize: { xs: '12px', sm: '13px', md: '20px' } }}>
                الإنتاج الصوتي والبودكاست
                </Typography>
            </Grid>
            </Grid>
        </Container>
        </section><br/>


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
            marginTop:'-60px'
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
                        fontFamily: 'Tajawal',
                        padding: '10px 20px', // Add padding inside the box
                        backgroundColor: '#333', // Box background color
                        border: '2px solid #f05322', // Border color and thickness
                        borderRadius: '8px', // Rounded corners for the box
                        display: 'inline-block', // Ensure the box only wraps the text
                        '@media (max-width: 768px)': {
                            fontSize: '1.5rem', // Font size for medium screens
                        },
                        '@media (max-width: 600px)': {
                            fontSize: '1rem', // Font size for smaller screens (smaller devices)
                        },
                        '@media (max-width: 400px)': {
                            fontSize: '1rem', // Further reduction for very small screens
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
                        fontFamily: 'Tajawal',
                        listStyleType: 'disc', // Add disc bullet points
                        paddingLeft: '20px', // Indent the list items
                        lineHeight: '2.5', // Spacing between list items
                        direction: 'ltr', // Left-to-right for list items (English style)
                        fontSize: '1.5rem', // Adjust font size for better readability
                        width: '100%', // Ensure the list spans the entire width
                        textAlign: 'left', // Align list items to the left
                        '@media (max-width: 768px)': {
                            fontSize: '1.5rem', // Slightly smaller font size for medium screens
                        },
                        '@media (max-width: 480px)': {
                            fontSize: '1.5rem', // Further adjustment for very small screens
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
                        border: '2px solid #f05322',
                        '&:hover': { boxShadow: 6 },
                        marginBottom: '20px',
                        position: 'relative', // Required for absolute positioning of the text
                    }}
                    >
                    <CardMedia
                        component="img"
                        alt={`Service ${index}`}
                        image={product.imageUrls}
                        sx={{
                        height: 300,
                        objectFit: 'cover', // Ensures image covers the area without stretching
                        }}
                    />
                    
                    {/* Text overlay on top of the image */}
                    <Typography
                    variant="h6"
                    sx={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)', // This centers the text horizontally
                        color: 'white',
                        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a background to the text for better visibility
                        backgroundColor: '#000000',
                        padding: '10px',
                        borderRadius: '4px',
                        textAlign: 'center', // Ensures the text inside is centered
                        width:'100%',
                        border: '2px solid #f05322'
                    }}
                >
                    {product.cardTitles}
                </Typography>
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
                        ? '1.25rem' // Slightly smaller font size for mobile (xs)
                        : window.innerWidth <= 960
                        ? '1.75rem' // Medium screens (sm)
                        : '3.5rem', // Large screens (md)
                    color: '#fdfefe',
                    fontFamily: 'Tajawal',
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
                            fontFamily: 'Tajawal',
                            fontSize: window.innerWidth <= 600 ? '18px' : '30px', // Smaller font size on mobile
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
                            fontFamily: 'Tajawal',
                            fontSize: window.innerWidth <= 600 ? '18px' : '30px', // Smaller font size on mobile
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
                            fontFamily: 'Tajawal',
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
        backgroundPosition: 'center', // Center the background image
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
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
            }}
        >
            <h2
                style={{
                    color: '#fdfefe',
                    marginBottom: '20px',
                    fontFamily: 'Tajawal',
                    padding: '10px 20px',
                    backgroundColor: '#333',
                    border: '2px solid #f05322',
                    borderRadius: '8px',
                    fontSize: window.innerWidth <= 768 ? '28px' : '40px', // Adjust font size for mobile
                }}
            >
                استشارات مجانية
            </h2>
        </div>

        <Grid container spacing={4} justifyContent="center"> {/* Adjusted spacing for mobile */}
            {images.map((image, index) => (
                <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
                    <CardMedia
                        component="img"
                        image={image.src}
                        sx={{
                            width: '100%',
                            height: 'auto', // Adjust height automatically to maintain aspect ratio
                            objectFit: 'contain',
                            transition: 'transform 0.3s ease', // Smooth transition for zoom
                            '&:hover': {
                                transform: 'scale(1.05)', // Zoom effect on hover
                            },
                        }}
                        className="zoom-image"
                    />
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
        direction: 'rtl',
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
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
            <h2
              style={{
                color: 'white',
                fontFamily: 'Tajawal',
                fontSize: '26px',
                textAlign: 'right',
                marginBottom: '20px',
                direction: 'rtl',
              }}
            >
              للإستفسارات العامة ..
            </h2>

            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                direction: 'rtl',
              }}
              onSubmit={handleFormSubmit}
            >
              <Form.Group
                controlId="name"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  الاسم
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="phone"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  جـوال
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="email"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  بريد الكتروني
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="message"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  رسالتك
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: '15px',
                  background: '#00fffc',
                  color: '#1e272e',
                  padding: { xs: '10px', sm: '15px' },
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
