import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, Grid, Card, Button } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaInstagram, FaLinkedin,FaYoutube,FaSnapchat,FaTiktok,FaWhatsapp  } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Form from 'react-bootstrap/Form';
import Slider from "react-slick"; 

const carouselItems = [
  {
    id: 1,
    img: 'https://i.ibb.co/Z2VmmWt/Top-Screen.png',
    title: 'Screen 1',
    content: 'Your content here for screen 1',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/Z2VmmWt/Top-Screen.png',
    title: 'Screen 2',
    content: 'Your content here for screen 2',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/Z2VmmWt/Top-Screen.png',
    title: 'Screen 3',
    content: 'Your content here for screen 3',
  },
];

const sliderSettings = {
  dots: true,  // Display navigation dots
  infinite: true,  // Infinite scroll
  speed: 500,  // Speed of slide transition
  autoplay: true,  // Enable autoplay
  autoplaySpeed: 3000,  // Time between slides in ms
  slidesToShow: 1,  // Show one image at a time
  slidesToScroll: 1,  // Scroll one image at a time
};

const ScreensSection = () => {
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
                      src="https://via.placeholder.com/800x600.png"
                      alt="Waterproof Outdoor LED Screen"
                      sx={{
                        width: '100%',
                        height: { xs: 'auto', sm: '350px' }, // Adjust height for mobile
                        objectFit: 'cover',
                        paddingBottom: '30px',
                        paddingRight: { xs: '0', sm: '150px' }, // Adjust padding for small screens
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
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                            textAlign: 'center',
                            direction: 'rtl',
                          }}
                        >
                          الشاشات الإلكترونية الخارجية
                        </Typography>
                      </Card>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                        textAlign: 'justify',
                        direction: 'rtl',
                        paddingRight: '20px',
                        marginTop: '15px',
                        paddingLeft: '20px',
                      }}
                    >
                      تعتبر شاشات العرض الإلكترونية الخارجية المتخصصة في عرض الصور
                      ومقاطع الفيديو من احدث طرق التسويق حاليا...
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
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign: 'center',
                          direction: 'rtl',
                        }}
                      >
                        الشاشات الإلكترونية الداخلية
                      </Typography>
                    </Card>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                      textAlign: 'justify',
                      direction: 'rtl',
                      paddingRight: '20px',
                      marginTop: '10px', // Add margin to separate paragraphs
                    }}
                  >
                    تعتبر شاشات العرض الداخلية هي الوسيلة الأفضل في زيادة معدل التواصل
                    المباشر مع العملاء طوال فترة تواجدهم في المكان كونها تجذب الانتباه بشكل
                    كبير .. كما يمكن من خلالها عرض جميع المحتويات الإعلانية المرئية سواء كانت
                    صور أو مقاطع فيديو.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                      textAlign: 'justify',
                      direction: 'rtl',
                      paddingRight: '20px',
                      marginTop: '10px',
                      paddingLeft:'20px'
                    }}
                  >
                    كما تتميز هذه الشاشات بدقة الوضوح و توفر أحجام ومقاسات مختلفة.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                      textAlign: 'justify',
                      direction: 'rtl',
                      paddingRight: '20px',
                      marginTop: '10px',
                      paddingLeft:'20px'
                    }}
                  >
                    وللعلم قامت شركة الأبحاث Nielsen بالتحقيق في تأثير العروض الرقمية والمحتوى
                    المرئي في نقاط البيع فتبين أن الشركات التي استخدمت شاشات العرض الإلكترونية
                    داخل المتاجر حسنت معدلات الوعي بالعلامات التجارية الخاصة بها بنسبة تصل إلى 14٪.
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={7}>
                  <Box
                    component="img"
                    src="https://i.ibb.co/pP9Tm8q/Indoor-LED-Screens-3.png"
                    alt="Waterproof Outdoor LED Screen"
                    sx={{
                      width: '100%',
                      height: { xs: '250px', sm: '350px' }, // Adjust height for smaller screens
                      objectFit: 'cover',
                      paddingBottom: '30px',
                      paddingRight: '30px',
                      paddingLeft: { xs: '0px', sm: '150px' }, // Reduce padding on smaller screens
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
                    src="https://i.ibb.co/4ZRSqZR/images-1-1.png"
                    alt="Waterproof Outdoor LED Screen"
                    sx={{
                      width: '100%',  // Set the width to 1115px
                      height: '350px',  // Set the height to 400px
                      objectFit: 'cover',
                      paddingBottom: '30px',
                      paddingRight: { xs: '0', sm: '150px' },
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
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign:'center',
                          direction: 'rtl',
                        }}
                      >
                        
                    شــاشة العـــرض النصـــية
                      </Typography>
                    </Card>
                  </Box>

                  <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                    textAlign: 'justify',
                    direction: 'rtl',
                    paddingRight:'20px',
                    paddingLeft:'20px'
                  }}
                >
                  يتميز هذ النوع من الشاشات بسهولة التركيب بحيث يمكن من خلالها تقديم معلومات واضحة ومباشرة للعميل بطريقة مبتكرة .. كذلك تمكنك من عرض المحتوى بأكثر من طريقة .كما تتميز هذه الشاشات ببرنامج تشغيل سهل يحتوي على عدد كبير من تأثيرات الحركة كما أنها تعرض جميع اللغات المكتوبة من جهاز الكمبيوتر مما يعمل علي زيادة فرص الاتصال والتواصل مع عملاءك بشكل أفضل
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
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign:'center',
                          direction: 'rtl',
                        }}
                      >
                        
                  الشاشات الإلكترونية الداخلية
                      </Typography>
                    </Card>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                      textAlign: 'justify',
                      direction: 'rtl',
                      paddingRight:'20px',
                      paddingLeft:'20px'
                    }}
                  >
                    
                  
                    تستخدم شاشات الاستاند عادة لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية .. كما يمكن استخدامها أيضًا في المؤتمرات و العروض التقديمية وذلك للعرض بشكل بارز ومميز .. و تعتبر شاشات الاستاند وسيلة فعالة لجذب انتباه العملاء والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب .. هذا المنتج يدعم الصيغ المتنوعة من الصور والفيديوهات .. و يمكن عرضها بنجاح .وبفضل التقنية المتقدمة تستخدم لضمان طبقات الصورة الواضحة .. والعمق اللوني وعرض الألوان الطبيعية.
                    الشاشة الدعائية العمودية صُنعت باستخدام خط المعالجة LED الجديد .. وجُهزت برقاقة تحكم ذكية رئيسية للتقليل من التكلفة وتبديد القدرة .الشاشة الدعائية العمودية تنفذ التشغيل الدوري HD 1080P الكامل .كما أنها تدعم وظيفة التوقيت الزمني فالإعلانات يمكن عرضها في الوقت المختار مسبقاً وكذلك يمكن لكافة المستخدمين ضبط بداية ووقت إيقاف الإعلان.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={7}> {/* Changed from 8 to 7 to give it 60% width */}
                  <Box
                    component="img"
                    src="https://i.ibb.co/cQ60b37/ba98a6a8fcff86f3c8a44e5e92deeba6.png"
                    alt="Waterproof Outdoor LED Screen"
                    sx={{
                      width: '100%',  // Set the width to 100%
                      height: '350px',  // Set the height to 500px
                      objectFit: 'cover',
                      paddingBottom: '30px',
                      paddingRight: '30px',
                      paddingLeft: { xs: '0px', sm: '150px' }, // Reduce padding on smaller screens
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
                    src="https://i.ibb.co/wp6cW3d/images-2.png"
                    alt="Waterproof Outdoor LED Screen"
                    sx={{
                      width: '100%',  // Set the width to 1115px
                      height: '350px',  // Set the height to 400px
                      objectFit: 'cover',
                      paddingBottom: '30px',
                      paddingRight: { xs: '0', sm: '150px' }, // Adjust padding for small screens
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
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign:'center',
                          direction: 'rtl',
                        }}
                      >
                        
                    الشـــــاشات التفــــاعلـية
                      </Typography>
                    </Card>
                  </Box>

                  <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  textAlign: 'justify',
                  direction: 'rtl',
                  paddingRight:'20px',
                  paddingLeft:'20px'
                }}
              >
               تعد الشاشة التفاعلية أحدث ما توصلت إليه التكنولوجيا كوسيلة حديثة ومتطورة للدعاية المميزة .. حيث تساعد بشكل كبير ومؤثر في عملية الدعاية والإعلان للمنتجات والخدمات للجهات الحكومية والشركات والمجتمعات.
               وهذا ما جعل الشاشة التفاعلية أهمية بالغة في عصر الرسائل الإعلانية .. وبناء علي ذلك قررت الشركة توفير الكثير من الشاشات التفاعلية ذات مقاسات وألوان مختلفة بالإضافة إلى توفير أجهزة النداء الآلي والشاشات التفاعلية للبنوك والجهات الحكومية والمستشفيات .كما يتم استخدامها كشاشة إعلانات تفاعلية في المولات والمجمعات التجارية والاستهلاكية.
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
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                          textAlign:'center',
                          direction: 'rtl',
                        }}
                      >
                        
                        شـــاشات العـــدادات والساعات الرقمية
                      </Typography>
                    </Card>
                  </Box>
                  <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  textAlign: 'justify',
                  direction: 'rtl',
                  paddingRight:'20px',
                  paddingLeft:'20px'
                }}
              >
                
              
                شاشات عدادات؟ المشاريع والساعات الرقمية ومحطات البنزين :شاشات مخصصة لنظام محطات الوقود حيث تعرض أسعار الوقود بطريقه احترافية وسهلة التحكمعداد المشاريع عبارة عن عداد ديجتال يعمل عن طريق العد التنازلي بعدد الايام المتبقي علي انتهاء المشروع الساعات الرقمية تعرض الوقت والتاريخ عن طريق الاتصال بالقمر الصناعي.
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
                      paddingLeft: { xs: '0px', sm: '150px' }, // Reduce padding on smaller screens
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
        marginBottom: '30px',
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
          {/* Left Section: Image Carousel */}
          <Grid item xs={12} md={7}>
            <Slider {...sliderSettings}>
              <Box
                component="img"
                src="https://i.ibb.co/R0Z6RYR/images-3.png"
                alt="Waterproof Outdoor LED Screen"
                sx={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                }}
              />
              <Box
                component="img"
                src="https://i.ibb.co/XXzZ4rk/another-image.png" // Add your second image here
                alt="Second Image"
                sx={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                }}
              />
              {/* Add more images as needed */}
            </Slider>
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
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' },
                    textAlign: 'center',
                    direction: 'rtl',
                  }}
                >
                  الشاشات الإلكترونية الخارجية
                </Typography>
              </Card>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                textAlign: 'justify',
                direction: 'rtl',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              تعمل شاشات الاستدعاء بمفردها لا تحتاج إلى أجهزة كمبيوتر للعمل معها.
              تبدا بــ 4 خدمات مختلفة حسب رغبة العميل و يمكن زيادة الخدمات مسـتقبلا الى 12 خدمـة.
              النظام يعمل بنغمة Ding Dong والنداء برقم العميل والشباك.
              تحتفظ باخر رقم تم طلبه عند انقطاع التيار الكهربائي للبدء من هذا الرقم بعد عودة التيار.
              النظام مزود بوحدة برنتر لطباعة الأرقام المسلسلة متعددة المهام النظام لا يحتاج إلى أي وحدات تحكم
              أو وحدات تشغيل اضافية.
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
