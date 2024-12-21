import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, Grid, Card, TextField, Button } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaInstagram, FaLinkedin,FaYoutube,FaSnapchat,FaTiktok,FaWhatsapp  } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 

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



// Form styles
const textFieldStyles = {
  input: { color: 'white', textAlign: 'right' },
  label: { color: 'white' },
  '& .MuiOutlinedInput-root': { color: 'white', borderColor: 'white' },
};

const ScreensSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully');
      // Replace with actual form submission logic (API call, etc.)
    } else {
      alert('Please correct the errors before submitting');
    }
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
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
  }}
>
  <Container
    maxWidth="xxl"
    sx={{
      marginBottom: '80px',
      paddingRight: { xs: '20px', sm: '100px' },
      paddingLeft: { xs: '20px', sm: '100px' },
    }}
  >
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '40px',
        borderTop: '2px solid #d5d8dc',
        borderLeft: '2px solid #d5d8dc',
        position: 'relative',
        height: 'auto',
      }}
    >
      <Grid item xs={12} md={8}>
        <Box
          component="img"
          src="https://i.ibb.co/FXmW0NC/download.png"
          alt="Waterproof Outdoor LED Screen"
          sx={{
            width: '100%',  // Set the width to 1115px
            height: '500px',  // Set the height to 400px
            objectFit: 'cover',
            borderRadius: '20px',
            paddingBottom: '30px',
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ padding: '16px' }}>
          <Card
            sx={{
              backgroundColor: '#f5f5f5',
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
                textAlign: 'justify',
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
          borderBottom: '2px solid #d5d8dc',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: '0%',
          height: '9%',
          width: '9%',
          borderRight: '2px solid #d5d8dc',
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
          borderLeft: '2px solid #d5d8dc',
        }}
      />

      {/* Horizontal Border at Right Center */}
      <Box
        sx={{
          position: 'absolute',
          right: '0',
          top: '9%',
          transform: 'translateY(-1%)',
          width: '1%',
          borderTop: '2px solid #d5d8dc',
        }}
      />
    </Grid>
  </Container>
</section>



    
      <section
        style={{
          width: '100%',
          margin: '0 auto',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          paddingTop: '20px',
          paddingBottom: '20px',
          background:'#f8f9f9'
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            marginBottom: '80px',
            paddingRight: { xs: '20px', sm: '100px' }, // Apply smaller padding on mobile
            paddingLeft: { xs: '20px', sm: '100px' },  // Apply smaller padding on mobile
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '40px',
              borderTop: '2px solid #d5d8dc',
              borderRight: '2px solid #d5d8dc',
              position: 'relative',
            }}
          >
            
            <Grid item xs={12} md={4}> {/* Changed from 5 to 4 to give it 30% width */}
              <Box sx={{ padding: '16px' }}>
                <Card
                  sx={{
                    backgroundColor: '#f5f5f5',
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
                      textAlign: 'justify',
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
                  paddingRight:'20px'
                }}
              >
                    تعتبر شاشات العرض الداخلية هي الوسيلة الأفضل في زيادة معدل التواصل المباشر مع العملاء طوال فترة تواجدهم في المكان كونها تجذب الانتباه بشكل كبير .. كما يمكن من خلالها عرض جميع المحتويات الإعلانية المرئية سواء كانت صور أو مقاطع فيديو.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  textAlign: 'justify',
                  direction: 'rtl',
                  paddingRight:'20px'
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
                  paddingRight:'20px'
                }}
              >
                
              
                وللعلم قامت شركة الأبحاث Nielsen بالتحقيق في تأثير العروض الرقمية والمحتوى المرئي في نقاط البيع فتبين أن الشركات التي استخدمت شاشات العرض الإلكترونية داخل المتاجر حسنت معدلات الوعي بالعلامات التجارية الخاصة بها بنسبة تصل إلى 14٪.
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}> {/* Changed from 7 to 8 to give it 70% width */}
              <Box
                component="img"
                src="https://i.ibb.co/pP9Tm8q/Indoor-LED-Screens-3.png"
                alt="Waterproof Outdoor LED Screen"
                sx={{
                  width: '100%',  // Set the width to 1115px
                  height: '500px',  // Set the height to 400px
                  objectFit: 'cover',
                  borderRadius: '20px',
                  paddingBottom:'30px',
                  paddingRight:'30px'
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
                borderBottom: '2px solid #d5d8dc',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '0%',
                height: '9%',
                width: '9%',
                borderLeft: '2px solid #d5d8dc',
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
                borderLeft: '2px solid #d5d8dc',
              }}
            />

            {/* Horizontal Border at Right Center */}
            <Box
              sx={{
                position: 'absolute',
                left: '0',
                top: '9%',
                transform: 'translateY(-1%)',
                width: '1%',
                borderTop: '2px solid #d5d8dc',
              }}
            />
    
          </Grid>
        </Container>
      </section>

      <section
        style={{
          width: '100%',
          margin: '0 auto',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            marginBottom: '80px',
            paddingRight: { xs: '20px', sm: '100px' }, // Apply smaller padding on mobile
            paddingLeft: { xs: '20px', sm: '100px' },  // Apply smaller padding on mobile
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '40px',
              borderTop: '2px solid #d5d8dc',
              borderLeft: '2px solid #d5d8dc',
              position: 'relative',
            }}
          >
            <Grid item xs={12} md={8}> {/* Changed from 7 to 8 to give it 70% width */}
              <Box
                component="img"
                src="https://i.ibb.co/4ZRSqZR/images-1-1.png"
                alt="Waterproof Outdoor LED Screen"
                sx={{
                  width: '100%',  // Set the width to 1115px
                  height: '500px',  // Set the height to 400px
                  objectFit: 'cover',
                  borderRadius: '20px',
                  paddingBottom:'30px'
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}> {/* Changed from 5 to 4 to give it 30% width */}
              <Box sx={{ padding: '16px' }}>
                <Card
                  sx={{
                    backgroundColor: '#f5f5f5',
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
                      textAlign: 'justify',
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
                  paddingRight:'20px'
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
                borderBottom: '2px solid #d5d8dc',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: '0%',
                height: '9%',
                width: '9%',
                borderRight: '2px solid #d5d8dc',
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
                borderLeft: '2px solid #d5d8dc',
              }}
            />

            {/* Horizontal Border at Right Center */}
            <Box
              sx={{
                position: 'absolute',
                right: '0',
                top: '9%',
                transform: 'translateY(-1%)',
                width: '1%',
                borderTop: '2px solid #d5d8dc',
              }}
            />
          </Grid>
        </Container>
      </section>
      <section
        style={{
          width: '100%',
          margin: '0 auto',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          paddingTop: '20px',
          paddingBottom: '20px',
          background:'#f8f9f9'
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            marginBottom: '80px',
            paddingRight: { xs: '20px', sm: '100px' }, // Apply smaller padding on mobile
            paddingLeft: { xs: '20px', sm: '100px' },  // Apply smaller padding on mobile
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '40px',
              borderTop: '2px solid #d5d8dc',
              borderRight: '2px solid #d5d8dc',
              position: 'relative',
            }}
          >
            
            <Grid item xs={12} md={4}> {/* Changed from 5 to 4 to give it 30% width */}
              <Box sx={{ padding: '16px' }}>
                <Card
                  sx={{
                    backgroundColor: '#f5f5f5',
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
                      textAlign: 'justify',
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
                  paddingRight:'20px'
                }}
              >
                
              
                تستخدم شاشات الاستاند عادة لأغراض ترويجية و إعلانية في المتاجر والمطاعم والمعارض التجارية .. كما يمكن استخدامها أيضًا في المؤتمرات و العروض التقديمية وذلك للعرض بشكل بارز ومميز .. و تعتبر شاشات الاستاند وسيلة فعالة لجذب انتباه العملاء والجمهور ونشر الرسائل التسويقية بشكل عصري و جذاب .. هذا المنتج يدعم الصيغ المتنوعة من الصور والفيديوهات .. و يمكن عرضها بنجاح .وبفضل التقنية المتقدمة تستخدم لضمان طبقات الصورة الواضحة .. والعمق اللوني وعرض الألوان الطبيعية.
                الشاشة الدعائية العمودية صُنعت باستخدام خط المعالجة LED الجديد .. وجُهزت برقاقة تحكم ذكية رئيسية للتقليل من التكلفة وتبديد القدرة .الشاشة الدعائية العمودية تنفذ التشغيل الدوري HD 1080P الكامل .كما أنها تدعم وظيفة التوقيت الزمني فالإعلانات يمكن عرضها في الوقت المختار مسبقاً وكذلك يمكن لكافة المستخدمين ضبط بداية ووقت إيقاف الإعلان.
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}> {/* Changed from 7 to 8 to give it 70% width */}
              <Box
                component="img"
                src="https://i.ibb.co/cQ60b37/ba98a6a8fcff86f3c8a44e5e92deeba6.png"
                alt="Waterproof Outdoor LED Screen"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  paddingBottom:'30px',
                  paddingRight:'30px'
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
                borderBottom: '2px solid #d5d8dc',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '0%',
                height: '9%',
                width: '9%',
                borderLeft: '2px solid #d5d8dc',
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
                borderLeft: '2px solid #d5d8dc',
              }}
            />

            {/* Horizontal Border at Right Center */}
            <Box
              sx={{
                position: 'absolute',
                left: '0',
                top: '9%',
                transform: 'translateY(-1%)',
                width: '1%',
                borderTop: '2px solid #d5d8dc',
              }}
            />
    
          </Grid>
        </Container>
      </section>
      <section
        style={{
          width: '100%',
          margin: '0 auto',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            marginBottom: '80px',
            paddingRight: { xs: '20px', sm: '100px' }, // Apply smaller padding on mobile
            paddingLeft: { xs: '20px', sm: '100px' },  // Apply smaller padding on mobile
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '40px',
              borderTop: '2px solid #d5d8dc',
              borderLeft: '2px solid #d5d8dc',
              position: 'relative',
            }}
          >
            <Grid item xs={12} md={8}> {/* Changed from 7 to 8 to give it 70% width */}
              <Box
                component="img"
                src="https://i.ibb.co/wp6cW3d/images-2.png"
                alt="Waterproof Outdoor LED Screen"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  paddingBottom:'30px'
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}> {/* Changed from 5 to 4 to give it 30% width */}
              <Box sx={{ padding: '16px' }}>
                <Card
                  sx={{
                    backgroundColor: '#f5f5f5',
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
                      textAlign: 'justify',
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
                  paddingRight:'20px'
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
                borderBottom: '2px solid #d5d8dc',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: '0%',
                height: '9%',
                width: '9%',
                borderRight: '2px solid #d5d8dc',
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
                borderLeft: '2px solid #d5d8dc',
              }}
            />

            {/* Horizontal Border at Right Center */}
            <Box
              sx={{
                position: 'absolute',
                right: '0',
                top: '9%',
                transform: 'translateY(-1%)',
                width: '1%',
                borderTop: '2px solid #d5d8dc',
              }}
            />
          </Grid>
        </Container>
      </section>
      <section
        style={{
          width: '100%',
          margin: '0 auto',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          paddingTop: '20px',
          paddingBottom: '20px',
          background:'#f8f9f9'
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            marginBottom: '80px',
            paddingRight: { xs: '20px', sm: '100px' }, // Apply smaller padding on mobile
            paddingLeft: { xs: '20px', sm: '100px' },  // Apply smaller padding on mobile
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '40px',
              borderTop: '2px solid #d5d8dc',
              borderRight: '2px solid #d5d8dc',
              position: 'relative',
            }}
          >
            
            <Grid item xs={12} md={4}> {/* Changed from 5 to 4 to give it 30% width */}
              <Box sx={{ padding: '16px' }}>
                <Card
                  sx={{
                    backgroundColor: '#f5f5f5',
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
                      textAlign: 'justify',
                      direction: 'rtl',
                    }}
                  >
                  شـــاشات عـــدادات المشــاريع
                  والساعات الرقمية ومحطات البنزين 
                  </Typography>
                </Card>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  textAlign: 'justify',
                  direction: 'rtl',
                  paddingRight:'20px'
                }}
              >
                
              
                شاشات عدادات؟ المشاريع والساعات الرقمية ومحطات البنزين :شاشات مخصصة لنظام محطات الوقود حيث تعرض أسعار الوقود بطريقه احترافية وسهلة التحكمعداد المشاريع عبارة عن عداد ديجتال يعمل عن طريق العد التنازلي بعدد الايام المتبقي علي انتهاء المشروع الساعات الرقمية تعرض الوقت والتاريخ عن طريق الاتصال بالقمر الصناعي.
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}> {/* Changed from 7 to 8 to give it 70% width */}
              <Box
                component="img"
                src="https://i.ibb.co/khVdR4G/H373531b9588744f68ab5fc76071a9825-C-jpg-300x300.png"
                alt="Waterproof Outdoor LED Screen"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  paddingBottom:'30px',
                  paddingRight:'30px'
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
                borderBottom: '2px solid #d5d8dc',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '0%',
                height: '9%',
                width: '9%',
                borderLeft: '2px solid #d5d8dc',
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
                borderLeft: '2px solid #d5d8dc',
              }}
            />

            {/* Horizontal Border at Right Center */}
            <Box
              sx={{
                position: 'absolute',
                left: '0',
                top: '9%',
                transform: 'translateY(-1%)',
                width: '1%',
                borderTop: '2px solid #d5d8dc',
              }}
            />
    
          </Grid>
        </Container>
      </section>

      <section
        style={{
          width: '100%',
          margin: '0 auto',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            marginBottom: '80px',
            paddingRight: { xs: '20px', sm: '100px' }, // Apply smaller padding on mobile
            paddingLeft: { xs: '20px', sm: '100px' },  // Apply smaller padding on mobile
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: '40px',
              borderTop: '2px solid #d5d8dc',
              borderLeft: '2px solid #d5d8dc',
              position: 'relative',
            }}
          >
            <Grid item xs={12} md={8}> {/* Changed from 7 to 8 to give it 70% width */}
              <Box
                component="img"
                src="https://i.ibb.co/R0Z6RYR/images-3.png"
                alt="Waterproof Outdoor LED Screen"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  paddingBottom:'30px'
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}> {/* Changed from 5 to 4 to give it 30% width */}
              <Box sx={{ padding: '16px' }}>
                <Card
                  sx={{
                    backgroundColor: '#f5f5f5',
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
                      textAlign: 'justify',
                      direction: 'rtl',
                    }}
                  >
                    جهاز ارقام الانتظار
                  </Typography>
                </Card>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                  textAlign: 'justify',
                  direction: 'rtl',
                  paddingRight:'20px'
                }}
              >
              تعمل شاشات الاستدعاء بمفردها لا تحتاج إلى أجهزة كمبيوتر للعمل معها.
              تبدا بــ 4 خدمات مختلفة حسب رغبة العميل و يمكن زيادة الخدمات مسـتقبلا الى 12 خدمـة.
              النظام يعمل بنغمة Ding Dong والنداء برقم العميل والشباك.
              تحتفظ باخر رقم تم طلبه عند انقطاع التيار الكهربائي للبدء من هذا الرقم بعد عودة التيار.
              النظام مزود بوحدة برنتر لطباعة الأرقام المسلسلة متعددة المهام النظام لا يحتاج إلى أي وحدات   تحكم
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
                borderBottom: '2px solid #d5d8dc',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: '0%',
                height: '9%',
                width: '9%',
                borderRight: '2px solid #d5d8dc',
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
                borderLeft: '2px solid #d5d8dc',
              }}
            />

            {/* Horizontal Border at Right Center */}
            <Box
              sx={{
                position: 'absolute',
                right: '0',
                top: '9%',
                transform: 'translateY(-1%)',
                width: '1%',
                borderTop: '2px solid #d5d8dc',
              }}
            />
          </Grid>
        </Container>
      </section>



      <section style={{ backgroundColor: '#000000', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px', paddingBottom: '50px' }}>
        <Container maxWidth="xl" sx={{ paddingX: { xs: 2, sm: 3, md: 5 }, textAlign: 'center' }}>
          <Grid container spacing={4}>
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
            <Grid item xs={12} sm={6}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', direction: 'rtl' }} onSubmit={handleSubmit}>
                <TextField
                  label="الاسم"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  error={Boolean(formErrors.name)}
                  helperText={formErrors.name}
                  sx={textFieldStyles}
                />
                <TextField
                  label="جوال"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  error={Boolean(formErrors.phone)}
                  helperText={formErrors.phone}
                  sx={textFieldStyles}
                />
                <TextField
                  label="البريد الالكتروني"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  error={Boolean(formErrors.email)}
                  helperText={formErrors.email}
                  sx={textFieldStyles}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#00fffc',
                    color: 'black',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#00b8c6',
                    },
                  }}
                >
                  إرسال
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
