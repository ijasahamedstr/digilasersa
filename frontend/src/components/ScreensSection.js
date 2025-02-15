import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, Grid, Card, Button } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaSnapchat, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const carouselItems = [
  {
    id: 1,
    img: 'https://i.ibb.co/Z2VmmWt/Top-Screen.png',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/Z2VmmWt/Top-Screen.png',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/Z2VmmWt/Top-Screen.png',
  },
];

const ScreensSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(true); // To show video modal on page load

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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Full-Screen Video Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        centered 
        size="xl" // Makes the modal extra large
        style={{ // Inline CSS for full-screen modal
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
        }}
        dialogClassName="modal-fullscreen" // Custom class for full-screen styling
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Video Introduction
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ // Inline CSS for modal body
          width: '100%',
          height: 'calc(100vh - 60px)', // Adjust for header height
          padding: 0,
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
          <video
            width="100%"
            height="100%"
            controls
            autoPlay
            onEnded={handleCloseModal}  // Close the modal when the video ends
            style={{ // Inline CSS for video
              objectFit: 'cover',
            }}
          >
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>

      {/* Rest of the code remains unchanged */}
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
              <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#06f9f3", display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }}>
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
                <FaYoutube size={25} />
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
              }}
            >
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
                    borderTop: '2px solid #979a9a',
                    borderLeft: '2px solid #979a9a',
                    position: 'relative',
                    height: 'auto',
                    flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
                  }}
                >
                  {/* Left Section: Image */}
                  <Grid item xs={12} md={7}>
                    <Box
                      component="img"
                      src="https://i.ibb.co/6tj2L8K/Waterproof-P6-66-Outdoor-LED-Screen-Signboard.webp"
                      alt="https://via.placeholder.com/800x400"
                      sx={{
                        width: '100%',
                        height: 'auto', // Maintain aspect ratio
                        objectFit: 'cover', // Ensure the image covers the space without distortion
                        maxHeight: { xs: '250px', sm: '350px', md: '500px' }, // Set max height for different screens
                        paddingBottom: '30px',
                        paddingRight: { xs: '20px', sm: '300px' }, // Adjust padding for small screens

                      }}
                    />
                  </Grid>

                  {/* Right Section: Text and Card */}
                  <Grid item xs={12} md={5} sx={{ paddingLeft: { sm: '150px', xs: '0' } }}>
                    <Box sx={{ padding: '16px' }}>
                      <Card
                        sx={{
                          backgroundColor: '#b0b0b0',
                          padding: '1rem',
                          borderRadius: '8px',
                          boxShadow: 3,
                          maxWidth: '100%',
                        }}
                      >
                        <Link to="/Outdoor-LED" style={{ textDecoration: 'none' }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                            textAlign: 'center',
                            direction: 'rtl',
                            fontFamily: 'Tajawal'
                          }}
                        >
                          الشاشات الإلكترونية الخارجية
                        </Typography>
                        </Link>
                      </Card>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' },
                        textAlign: 'justify',
                        direction: 'rtl',
                        paddingRight: '20px',
                        marginTop: '15px',
                        paddingLeft:'30px',
                        fontFamily: 'Tajawal'
                      }}
                    >
                      تعتبر شاشات العرض الإلكترونية الخارجية المتخصصة في عرض الصور ومقاطع الفيديو من احدث طرق التسويق حاليا لأنها تعتبر الوسيلة الافضل في جذب ولفت انتباه العملاء . كما تتميز هذه الشاشات بأنها شديدة الوضوح في وقت النهار  ، كما أنها موفرة للكهرباء .
                    </Typography>
                  </Grid>

                  {/* Bottom and Right Borders */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: '0%',
                      width: '30%',
                      borderBottom: '2px solid #979a9a',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: '0%',
                      height: '18%',
                      width: '18%',
                      borderRight: '2px solid #979a9a',
                    }}
                  />

                  {/* Vertical Border at Bottom Center */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '0',
                      left: '30%',
                      transform: 'translateX(-22%)',
                      height: '30px',
                      borderLeft: '2px solid #979a9a',
                    }}
                  />

                  {/* Horizontal Border at Right Center */}
                  <Box
                    sx={{
                      position: 'absolute',
                      right: '0',
                      top: '18%',
                      transform: 'translateY(-1%)',
                      width: '1%',
                      borderTop: '2px solid #979a9a',
                    }}
                  />
                </Grid>
              </Container>
            </section>


          <section
            style={{
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              background: '#d5d8dc',
            }}
          >
            <Container
              maxWidth="xxl"
              sx={{
                marginBottom: '15px',
                paddingRight: { xs: '20px', sm: '100px' },
                paddingLeft: { xs: '20px', sm: '100px' },
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: '40px',
                  borderTop: '2px solid #979a9a',
                  borderRight: '2px solid #979a9a',
                  position: 'relative',
                  flexDirection: { xs: 'column', sm: 'row' }, // Stack on smaller screens
                }}
              >
                <Grid item xs={12} sm={5}>
                  <Box sx={{ padding: '16px' }}>
                    <Card
                      sx={{
                        backgroundColor: '#b0b0b0',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: 3,
                        maxWidth: '100%',
                      }}
                    >
                      <Link to="/Indoor-Screen" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign: 'center',
                          direction: 'rtl',
                          fontFamily: 'Tajawal'
                        }}
                      >
                        الشاشات الإلكترونية الداخلية
                      </Typography>
                      </Link>
                    </Card>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' },
                      textAlign: 'justify',
                      direction: 'rtl',
                      paddingRight: '20px',
                      marginTop: '10px', // Add margin to separate paragraphs
                      fontFamily: 'Tajawal',
                      paddingLeft:'20px'
                    }}
                  >
                    تعتبر الوسيلة الأفضل في زيادة معدل التواصل المباشر مع العملاء في المكان كونها تجذب الانتباه بشكل كبير . كما يمكن من خلالها عرض جميع المحتويات الإعلانية سواء كانت صور أو مقاطع فيديو لتتميزها بدقة الوضوح و توفر أحجام ومقاسات مختلفة  .

                  </Typography>
                </Grid>

                <Grid item xs={12} sm={7}>
                  <Box
                    component="img"
                    src="https://i.ibb.co/Y8cDXch/Indoor-LED-Screens-3.webp"
                    alt="Waterproof Outdoor LED Screen"
                    sx={{
                      width: '100%',
                      height: { xs: '250px', sm: '350px' }, // Adjust height for smaller screens
                      objectFit: 'cover',
                      paddingBottom: '30px',
                      paddingRight: '30px',
                      paddingLeft: { xs: '0px', sm: '300px' }, // Reduce padding on smaller screens
                    }}
                  />
                </Grid>

                {/* Bottom and Right Borders */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: '0%',
                    width: '30%',
                    borderBottom: '2px solid #979a9a',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '0%',
                    height: '20%',
                    width: '20%',
                    borderLeft: '2px solid #979a9a',
                  }}
                />

                {/* Vertical Border at Bottom Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    right: '30%',
                    transform: 'translateX(-22%)',
                    height: '22px',
                    borderLeft: '2px solid #979a9a',
                  }}
                />

                {/* Horizontal Border at Right Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '0',
                    top: '20%',
                    transform: 'translateY(-1%)',
                    width: '2%',
                    borderTop: '2px solid #979a9a',
                  }}
                />
              </Grid>
            </Container>
          </section>      
          
          <section
            style={{
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
                  borderTop: '2px solid #979a9a',
                  borderLeft: '2px solid #979a9a',
                  position: 'relative',
                  height: 'auto',
                }}
              >
                {/* Left Section: Image */}
                <Grid item xs={12} md={7}>
                  <Box
                    component="img"
                    src="https://i.ibb.co/ThHxYZj/images-1-1.webp"
                    alt="Waterproof Outdoor LED Screen"
                    sx={{
                      width: '100%',
                      height: 'auto', // Maintain aspect ratio
                      objectFit: 'cover', // Ensure the image covers the space without distortion
                      maxHeight: { xs: '250px', sm: '350px', md: '500px' }, // Set max height for different screens
                      paddingBottom: '30px',
                      paddingRight: { xs: '20px', sm: '300px' }, // Adjust padding for small screens

                    }}
                  />
                </Grid>

                {/* Right Section: Text and Card */}
                <Grid item xs={12} md={5}>
                  <Box sx={{ padding: '16px' }}>
                    <Card
                      sx={{
                        backgroundColor: '#b0b0b0',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: 3,
                        maxWidth: '100%',
                      }}
                    >
                      <Link to="/TextDisplay-Screen" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign:'center',
                          direction: 'rtl',
                          fontFamily: 'Tajawal'
                        }}
                      >
                        
                    شــاشة العـــرض النصـــية
                      </Typography>
                      </Link>
                    </Card>
                  </Box>

                  <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                    textAlign: 'justify',
                    direction: 'rtl',
                    paddingRight:'20px',
                    paddingLeft:'20px',
                    fontFamily: 'Tajawal'
                  }}
                >
                  سهلة التركيب ويمكنها تقديم معلومات مباشرة للعميل بطريقة مبتكرة. وعرض المحتوى بأكثر من طريقة .كما تتميز ببرنامج تشغيل سهل يحتوي على عدد كبير من تأثيرات الحركة تعرض جميع اللغات المكتوبة من جهاز الكمبيوتر مما لزيادة فرص الاتصال والتواصل مع عملاءك بشكل أفضل .
                </Typography>
                </Grid>

                {/* Bottom and Right Borders */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '0%',
                    width: '30%',
                    borderBottom: '2px solid #979a9a',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: '0%',
                    height: '20%',
                    width: '20%',
                    borderRight: '2px solid #979a9a',
                  }}
                />

                {/* Vertical Border at Bottom Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    left: '30%',
                    transform: 'translateX(-22%)',
                    height: '22px',
                    borderLeft: '2px solid #979a9a',
                  }}
                />

                {/* Horizontal Border at Right Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: '0',
                    top: '20%',
                    transform: 'translateY(-1%)',
                    width: '1%',
                    borderTop: '2px solid #979a9a',
                  }}
                />
              </Grid>
            </Container>
          </section>

          <section
            style={{
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              background: '#d5d8dc',
            }}
          >
            <Container
              maxWidth="xxl"
              sx={{
                marginBottom: '15px',
                paddingRight: { xs: '20px', sm: '100px' }, // Apply smaller padding on mobile
                paddingLeft: { xs: '20px', sm: '100px' },  // Apply smaller padding on mobile
              }}
            >
             
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: '40px',
                  borderTop: '2px solid #979a9a',
                  borderRight: '2px solid #979a9a',
                  position: 'relative',
                }}
              >
                <Grid item xs={12} md={5}> {/* Changed from 4 to 5 to give it 40% width */}
                  <Box sx={{ padding: '16px' }}>
                    <Card
                      sx={{
                        backgroundColor: '#b0b0b0',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: 3,
                        maxWidth: '100%',
                      }}
                    >
                       <Link to="/ElectronicScreens" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign:'center',
                          direction: 'rtl',
                          fontFamily: 'Tajawal'
                        }}
                      >
                        
                  الشاشات الإلكترونية الداخلية
                      </Typography>
                      </Link>
                    </Card>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                      textAlign: 'justify',
                      direction: 'rtl',
                      paddingRight:'20px',
                      paddingLeft:'20px',
                      fontFamily: 'Tajawal'
                    }}
                  >
                    تستخدم لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية. والمؤتمرات و العروض التقديمية و تعتبر وسيلة فعالة لجذب انتباه العملاء والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب. ويدعم الصيغ المتنوعة من الصور والفيديوهات.
                    وجُهزت برقاقة تحكم ذكية للتقليل من التكلفة.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={7}> {/* Changed from 8 to 7 to give it 60% width */}
                  <Box
                    component="img"
                    src="https://i.ibb.co/rx40DsL/webp.webp"
                    alt="Waterproof Outdoor LED Screen"
                    sx={{
                      width: '100%',  // Set the width to 100%
                      height: '350px',  // Set the height to 500px
                      objectFit: 'cover',
                      paddingBottom: '30px',
                      paddingRight: '30px',
                      paddingLeft: { xs: '0px', sm: '300px' }, // Reduce padding on smaller screens
                    }}
                  />
                </Grid>

                {/* Bottom and Right Borders */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: '0%',
                    width: '30%',
                    borderBottom: '2px solid #979a9a',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '0%',
                    height: '20%',
                    width: '20%',
                    borderLeft: '2px solid #979a9a',
                  }}
                />

                {/* Vertical Border at Bottom Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    right: '30%',
                    transform: 'translateX(-22%)',
                    height: '22px',
                    borderLeft: '2px solid #979a9a',
                  }}
                />

                {/* Horizontal Border at Right Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '0',
                    top: '20%',
                    transform: 'translateY(-1%)',
                    width: '2%',
                    borderTop: '2px solid #979a9a',
                  }}
                />
              </Grid>
            </Container>
          </section>




          <section
            style={{
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
                  borderTop: '2px solid #979a9a',
                  borderLeft: '2px solid #979a9a',
                  position: 'relative',
                  height: 'auto',
                }}
              >
                {/* Left Section: Image */}
                <Grid item xs={12} md={7}>
                  <Box
                    component="img"
                    src="https://i.ibb.co/0V0BFpy/43inch-capacitive-touch-screen-4-1.webp"
                    alt="Waterproof Outdoor LED Screen"
                    sx={{
                      width: '100%',  // Set the width to 1115px
                      height: '350px',  // Set the height to 400px
                      objectFit: 'cover',
                      paddingBottom: '30px',
                      paddingRight: { xs: '0', sm: '300px' }, // Adjust padding for small screens
                    }}
                  />
                </Grid>

                {/* Right Section: Text and Card */}
                <Grid item xs={12} md={5}>
                  <Box sx={{ padding: '16px' }}>
                    <Card
                      sx={{
                        backgroundColor: '#b0b0b0',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: 3,
                        maxWidth: '100%',
                      }}
                    >
                      <Link to="/InteractiveScreens" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign:'center',
                          direction: 'rtl',
                          fontFamily: 'Tajawal'
                        }}
                      >
                        
                    الشـــــاشات التفــــاعلـية
                      </Typography>
                      </Link>
                    </Card>
                  </Box>

                  <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  textAlign: 'justify',
                  direction: 'rtl',
                  paddingRight:'20px',
                  paddingLeft:'20px',
                  fontFamily: 'Tajawal'
                }}
              >
               تعد أحدث وسيلة حديثة ومتطورة للدعاية المميزة وذات مقاسات وألوان مختلفة.حيث تساعد بشكل كبير ومؤثر في عملية الدعاية والإعلان للمنتجات والخدمات للجهات الحكومية والشركات والمجتمعات.
              </Typography>
                </Grid>

                {/* Bottom and Right Borders */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '0%',
                    width: '30%',
                    borderBottom: '2px solid #979a9a',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: '0%',
                    height: '20%',
                    width: '20%',
                    borderRight: '2px solid #979a9a',
                  }}
                />

                {/* Vertical Border at Bottom Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    left: '30%',
                    transform: 'translateX(-22%)',
                    height: '22px',
                    borderLeft: '2px solid #979a9a',
                  }}
                />

                {/* Horizontal Border at Right Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: '0',
                    top: '20%',
                    transform: 'translateY(-1%)',
                    width: '1%',
                    borderTop: '2px solid #979a9a',
                  }}
                />
              </Grid>
            </Container>
          </section>


          <section
            style={{
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              background: '#d5d8dc',
            }}
          >
            <Container
              maxWidth="xxl"
              sx={{
                marginBottom: '15px',
                paddingRight: { xs: '20px', sm: '100px' }, // Apply smaller padding on mobile
                paddingLeft: { xs: '20px', sm: '100px' },  // Apply smaller padding on mobile
              }}
            >
              
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: '40px',
                  borderTop: '2px solid #979a9a',
                  borderRight: '2px solid #979a9a',
                  position: 'relative',
                }}
              >
                <Grid item xs={12} md={5}> {/* Changed from 4 to 5 to give it 40% width */}
                  <Box sx={{ padding: '16px' }}>
                    <Card
                      sx={{
                        backgroundColor: '#b0b0b0',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: 3,
                        maxWidth: '100%',
                      }}
                    >
                       <Link to="/CountingScreen" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign:'center',
                          direction: 'rtl',
                          fontFamily: 'Tajawal'
                        }}
                      >
                        
                        شـــاشات العـــدادات والساعات الرقمية
                      </Typography>
                      </Link>
                    </Card>
                  </Box>
                  <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  textAlign: 'justify',
                  direction: 'rtl',
                  paddingRight:'20px',
                  paddingLeft:'20px',
                  fontFamily: 'Tajawal'
                }}
              >
                
              
                مخصصة لنظام المحطات حيث تعرض أسعار الوقود بطريقه احترافية وسهلة التحكم وعداد ديجتال للعد التنازلي بعدد الايام المتبقي علي انتهاء المشروع الساعات الرقمية تعرض الوقت والتاريخ عن طريق الاتصال بالقمر الصناعي.
              </Typography>
                </Grid>

                <Grid item xs={12} md={7}> {/* Changed from 8 to 7 to give it 60% width */}
                  <Box
                    component="img"
                    src="https://i.ibb.co/khVdR4G/H373531b9588744f68ab5fc76071a9825-C-jpg-300x300.png"
                    alt="Waterproof Outdoor LED Screen"
                    sx={{
                      width: '100%',  // Set the width to 100%
                      height: '350px',  // Set the height to 500px
                      objectFit: 'cover',
                      paddingBottom: '30px',
                      paddingRight: '30px',
                      paddingLeft: { xs: '0px', sm: '300px' }, // Reduce padding on smaller screens
                    }}
                  />
                </Grid>

                {/* Bottom and Right Borders */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: '0%',
                    width: '30%',
                    borderBottom: '2px solid #979a9a',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '0%',
                    height: '20%',
                    width: '20%',
                    borderLeft: '2px solid #979a9a',
                  }}
                />

                {/* Vertical Border at Bottom Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '0',
                    right: '30%',
                    transform: 'translateX(-22%)',
                    height: '22px',
                    borderLeft: '2px solid #979a9a',
                  }}
                />

                {/* Horizontal Border at Right Center */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '0',
                    top: '20%',
                    transform: 'translateY(-1%)',
                    width: '2%',
                    borderTop: '2px solid #979a9a',
                  }}
                />
              </Grid>
            </Container>
          </section>

          <section
              style={{
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom:'50px'
              }}
            >
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
                    borderTop: '2px solid #979a9a',
                    borderLeft: '2px solid #979a9a',
                    position: 'relative',
                    height: 'auto',
                    flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
                  }}
                >
                  {/* Left Section: Image */}
                  <Grid item xs={12} md={7}>
                    <Box
                      component="img"
                      src="https://via.placeholder.com/800x400"
                      alt="Waterproof Outdoor LED Screen"
                      sx={{
                        width: '100%',
                        height: 'auto', // Maintain aspect ratio
                        objectFit: 'cover', // Ensure the image covers the space without distortion
                        maxHeight: { xs: '250px', sm: '350px', md: '500px' }, // Set max height for different screens
                        paddingBottom: '30px',
                        paddingRight: { xs: '20px', sm: '300px' }, // Adjust padding for small screens

                      }}
                    />
                  </Grid>

                  {/* Right Section: Text and Card */}
                  <Grid item xs={12} md={5} sx={{ paddingLeft: { sm: '150px', xs: '0' } }}>
                    <Box sx={{ padding: '16px' }}>
                      <Card
                        sx={{
                          backgroundColor: '#b0b0b0',
                          padding: '1rem',
                          borderRadius: '8px',
                          boxShadow: 3,
                          maxWidth: '100%',
                        }}
                      >
                        <Link to="/Meterscreens" style={{ textDecoration: 'none' }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                            textAlign: 'center',
                            direction: 'rtl',
                            fontFamily: 'Tajawal'
                          }}
                        >
                          جهاز ارقام الانتظار
                        </Typography>
                        </Link>
                      </Card>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem' },
                        textAlign: 'justify',
                        direction: 'rtl',
                        paddingRight: '20px',
                        marginTop: '15px',
                        paddingLeft:'30px',
                        fontFamily: 'Tajawal'
                      }}
                    >
                      تعمل بمفردها لا تحتاج إلى كمبيوتر .
4 خدمات مختلفة حسب رغبة العميل
نظام يعمل بنغمة ونداء برقم العميل والشباك.
تحتفظ باخر رقم عند انقطاع التيار الكهربائي
مزود بوحدة برنتر لطباعة الأرقام المسلسلة
                    </Typography>
                  </Grid>

                  {/* Bottom and Right Borders */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: '0%',
                      width: '30%',
                      borderBottom: '2px solid #979a9a',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: '0%',
                      height: '18%',
                      width: '18%',
                      borderRight: '2px solid #979a9a',
                    }}
                  />

                  {/* Vertical Border at Bottom Center */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '0',
                      left: '30%',
                      transform: 'translateX(-22%)',
                      height: '30px',
                      borderLeft: '2px solid #979a9a',
                    }}
                  />

                  {/* Horizontal Border at Right Center */}
                  <Box
                    sx={{
                      position: 'absolute',
                      right: '0',
                      top: '18%',
                      transform: 'translateY(-1%)',
                      width: '1%',
                      borderTop: '2px solid #979a9a',
                    }}
                  />
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

export default ScreensSection;