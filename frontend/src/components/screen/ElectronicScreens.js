import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, Grid, Card, Button } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaInstagram, FaLinkedin,FaYoutube,FaSnapchat,FaTiktok,FaWhatsapp  } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Form from 'react-bootstrap/Form';
import Slider from 'react-slick';


const carouselItems = [
  {
    id: 1,
    img: 'https://i.ibb.co/D7D1QN0/Group-3.webp',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/D7D1QN0/Group-3.webp',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/D7D1QN0/Group-3.webp',
  },
];


const ElectronicScreens = () => {
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


    const images = [
      "https://i.ibb.co/crGY2Sp/customerservice.png",
      "https://i.ibb.co/FXr5DWX/advertising-plan.png",
      "https://i.ibb.co/NVDMdFy/the-camera-lens-canon-eos-5d-mark-ii-wallpaper-preview.png",
      "https://i.ibb.co/6WYNt6b/1632994991100.png"
    ];
  

    const [mainImage, setMainImage] = useState("https://i.ibb.co/SfvVkdQ/IMG-20241222-WA0003.webp");
    const [mainImage1, setMainImage1] = useState("https://i.ibb.co/kKgmDtH/IMG-20241222-WA0010.webp");

    // Function to handle the click on the slider images
    const handleImageClick = (imageSrc) => {
      setMainImage(imageSrc);
      setMainImage1(imageSrc);
    };

  
    // Slick slider settings for vertical slider
    const sliderSettings = {
      infinite: true, 
      speed: 500,
      slidesToShow: 4, 
      slidesToScroll: 1, 
      vertical: true, 
      arrows: true, 
      dots: false, 
      responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1, 
            vertical: true,
            infinite: true, 
            dots: false, 
          },
        },
        {
          breakpoint: 480, // For mobile devices (phones)
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1, 
            vertical: true,
            infinite: true, 
            dots: false,
          },
        },
      ],
    };

  return (
    <>
      <Container maxWidth={false} sx={{ padding: 0 }} style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '100px' }}>
        <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
          <Carousel fade nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: 'black' }} />} prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: 'black' }} />} aria-live="polite">
            {carouselItems.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={item.img}
                  srcSet={`${item.img} 1000w, ${item.img.replace('Top-Screen.png', 'Top-Screen-small.png')} 500w`}
                  sizes="(max-width: 600px) 500px, 1000px"
                  alt={item.title || 'Carousel image'}
                  style={{
                    height: '70vh',
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

               {/* Social Media Icons on the Left Side */}
               <Box sx={{ position: "fixed", top: "50%", left: 0, transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "15px", zIndex: 2, paddingLeft: 2 }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                    <FaFacebook size={25} />
                  </Box>
                </a>
                <a href="https://x.com/digilasersa" target="_blank" rel="noopener noreferrer">
                  <Box sx={{ width: 40, height: 40, borderRadius
                    : "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                    <FontAwesomeIcon icon={faXTwitter} size={25} />
                  </Box>
                </a>
                <a href="https://www.instagram.com/digilasersa" target="_blank" rel="noopener noreferrer">
                  <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                    <FaInstagram size={25} />
                  </Box>
                </a>
                <a href="https://www.linkedin.com/company/digilasersa/" target="_blank" rel="noopener noreferrer">
                  <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                    <FaLinkedin size={25} />
                  </Box>
                </a>
                <a href="https://youtube.com/@digilaserSa" target="_blank" rel="noopener noreferrer">
                  <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                    <FaYoutube  size={25} />
                  </Box>
                </a>
                <a href="https://www.snapchat.com/add/digilasersa" target="_blank" rel="noopener noreferrer">
                  <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                    <FaSnapchat size={25} />
                  </Box>
                </a>
                <a href="https://www.tiktok.com/@digilasersa" target="_blank" rel="noopener noreferrer">
                  <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                    <FaTiktok size={25} />
                  </Box>
                </a>
                <a href="http://wa.me/966571978888" target="_blank" rel="noopener noreferrer">
                  <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
                    <FaWhatsapp size={25} />
                  </Box>
                </a>
              </Box>
              </Box>
            </Container>
              <section
                  style={{
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '30px',
                    position: 'relative',
                    backgroundColor: 'rgba(85, 254, 238, 0.8)', // Semi-transparent background color
                    backgroundImage: `url('https://i.ibb.co/SfvVkdQ/IMG-20241222-WA0003.webp')`, // Your background image URL
                    backgroundSize: 'cover', // Ensures the image covers the entire section
                    backgroundPosition: 'center', // Center the background image
                    zIndex: '1',
                    marginTop:'30px'
                  }}
                >
                  {/* Section-wide overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(85, 254, 238, 0.8)', // Semi-transparent overlay color
                      zIndex: '0', // Place this behind the content but in front of the background
                    }}
                  ></div>

                  <Container
                    maxWidth="xxl"
                    sx={{
                      marginBottom: '30px',
                      paddingRight: { xs: '20px', sm: '100px' },
                      paddingLeft: { xs: '20px', sm: '100px' },
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        marginTop: '40px',
                        position: 'relative',
                        height: 'auto',
                        flexDirection: { xs: 'column', md: 'row' },
                      }}
                    >
                      {/* Left Section: Main Image */}
                      <Grid item xs={12} md={6} sx={{ position: 'relative' }} style={{ paddingTop: '0px' }}>
                        {/* Transparent background overlay */}
                        <div
                          className="image-overlay" // Class to target the hover effect
                          style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(85, 254, 238, 0.5)', // Semi-transparent overlay color
                            zIndex: '1',
                            borderRadius: '8px',
                            transition: 'background-color 0.3s ease', // Smooth transition effect
                          }}
                        ></div>
                        <img
                          src={mainImage} // Use the state for the main image source
                          alt="Descriptive image"
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            position: 'relative',
                            zIndex: '0', // Ensure the image stays behind the overlay
                            borderLeft: '10px solid black', // Add a vertical line to the left
                          }}
                        />

                        <div
                          style={{
                            position: 'absolute',
                            top: '0',
                            left: '40px', // Move the slider to the left
                            width: '180px',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: '2',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRadius: '5px',
                          }}
                        >
                          <Slider {...sliderSettings}>
                            {images.map((image, index) => (
                              <div key={index}>
                                <img
                                  src={image}
                                  alt="mountain range" 
                                  style={{
                                    width: 'calc(100% - 20px)', // Reduce width to account for left and right margin
                                    margin: '10px', // Apply 10px margin on all sides
                                    borderRadius: '5px',
                                    cursor: 'pointer', // Add a cursor to indicate it's clickable
                                  }}
                                  onClick={() => handleImageClick(image)} // Update the main image on click
                                />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </Grid>

                      {/* Right Section: Text and Card */}
                      <Grid item xs={12} md={6} sx={{ direction: 'rtl', textAlign: 'justify' }} style={{ paddingTop: '50px', paddingLeft: '50px', paddingRight: '50px' }} >
                        <div className="image-overlay">
                          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '20px', fontFamily: 'Tajawal' }}>
                            تعتبر الوسيلة الأفضل في زيادة معدل التواصل المباشر مع العملاء في المكان كونها تجذب الانتباه بشكل كبير . كما يمكن من خلالها عرض جميع المحتويات الإعلانية سواء كانت صور أو مقاطع فيديو لتتميزها بدقة الوضوح و توفر أحجام ومقاسات مختلفة .
                          </Typography>
                          <Card
                            sx={{
                              padding: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#24c4bd',
                              borderLeft: '10px solid black', // Add a vertical line to the left
                            }}
                          >
                            <Typography variant="h5" sx={{ fontFamily: 'Tajawal', fontWeight: '600' }}>
                              إسم المشروع رقم
                            </Typography>
                          </Card>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </section>

                {/* Add this CSS for hover effect */}
                <style jsx>{`
                  .image-overlay:hover {
                    background-color: transparent !important; /* Hide the overlay when hovering */
                  }
                `}</style>

                <section
                  style={{
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '60px',
                    position: 'relative',
                    backgroundColor: 'rgba(168, 170, 173, 0.5)', // Semi-transparent background color
                    backgroundImage: `url('https://i.ibb.co/kKgmDtH/IMG-20241222-WA0010.webp')`, // Your background image URL
                    backgroundSize: 'cover', // Ensures the image covers the entire section
                    backgroundPosition: 'center', // Center the background image
                    zIndex: '1',
                  }}
                >
                  {/* Section-wide overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(168, 170, 173, 0.8)', // Semi-transparent overlay color
                      zIndex: '0', // Place this behind the content but in front of the background
                    }}
                  ></div>

                  <Container
                    maxWidth="xxl"
                    sx={{
                      marginBottom: '30px',
                      paddingRight: { xs: '20px', sm: '100px' },
                      paddingLeft: { xs: '20px', sm: '100px' },
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        marginTop: '40px',
                        position: 'relative',
                        height: 'auto',
                        flexDirection: { xs: 'column', md: 'row' },
                      }}
                    >
                      {/* Left Section: Main Image */}
                    

                      {/* Right Section: Text and Card */}
                      <Grid item xs={12} md={6} sx={{ direction: 'rtl', textAlign: 'justify' }} style={{ paddingTop: '50px', paddingLeft: '50px', paddingRight: '50px' }} >
                        <div className="image-overlay">
                          <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '20px', fontFamily: 'Tajawal' }}>
                            تعتبر الوسيلة الأفضل في زيادة معدل التواصل المباشر مع العملاء في المكان كونها تجذب الانتباه بشكل كبير . كما يمكن من خلالها عرض جميع المحتويات الإعلانية سواء كانت صور أو مقاطع فيديو لتتميزها بدقة الوضوح و توفر أحجام ومقاسات مختلفة .
                          </Typography>
                          <Card
                            sx={{
                              padding: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#6f7073',
                              borderRight: '10px solid black', // Add a vertical line to the left
                            }}
                          >
                            <Typography variant="h5" sx={{ fontFamily: 'Tajawal', fontWeight: '600' }}>
                              إسم المشروع رقم
                            </Typography>
                          </Card>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ position: 'relative' }} style={{ paddingTop: '0px' }}>
                        {/* Transparent background overlay */}
                        <div
                          className="image-overlay" // Class to target the hover effect
                          style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(168, 170, 173, 0.7)', // Semi-transparent overlay color
                            zIndex: '1',
                            borderRadius: '8px',
                            transition: 'background-color 0.3s ease', // Smooth transition effect
                          }}
                        ></div>
                        <img
                          src={mainImage1} // Use the state for the main image source
                          alt="Descriptive image"
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            position: 'relative',
                            zIndex: '0', // Ensure the image stays behind the overlay
                            borderRight: '10px solid black', // Add a vertical line to the left
                          }}
                        />

                        <div
                          style={{
                            position: 'absolute',
                            top: '0',
                            right: '40px', // Move the slider to the left
                            width: '180px',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: '2',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRadius: '5px',
                          }}
                        >
                          <Slider {...sliderSettings}>
                            {images.map((image, index) => (
                              <div key={index}>
                                <img
                                  src={image}
                                  alt="mountain range"
                                  style={{
                                    width: 'calc(100% - 20px)', // Reduce width to account for left and right margin
                                    margin: '10px', // Apply 10px margin on all sides
                                    borderRadius: '5px',
                                    cursor: 'pointer', // Add a cursor to indicate it's clickable
                                  }}
                                  onClick={() => handleImageClick(image)} // Update the main image on click
                                />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </section>
                            
              <section
              style={{
                backgroundColor: '#000000',
                backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
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
                  <Grid item xs={12} sm={6}>
                      <Typography variant="h4" color="white" paragraph>
                        Contact Us
                      </Typography>
                      <Typography variant="h5" color="#00fffc">
                        للطلب والإستفسار /
                      </Typography>
                      <Typography variant="h6" color="white" sx={{ marginTop: '50px' }}>
                        المنطقة الوسطي  : <span style={{ fontWeight: 'bold' }}>8888 091 057</span>
                      </Typography>
                      <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
                        المنطقة الغربية  : <span style={{ fontWeight: 'bold' }}>8888 092 057</span>
                      </Typography>
                      <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
                        المنطقة الشرقية  : <span style={{ fontWeight: 'bold' }}>8888 093 057</span>
                      </Typography>
                      <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
                        المدينة المنورة   : <span style={{ fontWeight: 'bold' }}>8888 094 057</span>
                      </Typography>
                      <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
                        مدير قسم الشاشات    : <span style={{ fontWeight: 'bold' }}>2222 026 057</span>
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
            </>
        );
      };

export default ElectronicScreens;
