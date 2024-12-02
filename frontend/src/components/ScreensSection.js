import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, useMediaQuery, Grid, Card, CardContent, Paper,TextField,Button } from '@mui/material';
import Container from '@mui/material/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const carouselItems = [
  {
    id: 1,
    img: 'https://i.ibb.co/P4Z5Z41/New-Web-Final-2.png',
    title: 'Welcome to Our Adventure',
    content: 'Explore the beauty of nature with us.'
  },
  {
    id: 2,
    img: 'https://i.ibb.co/P4Z5Z41/New-Web-Final-2.png',
    title: 'Unforgettable Moments',
    content: 'Create memories that last a lifetime.'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/P4Z5Z41/New-Web-Final-2.png',
    title: 'Join Our Community',
    content: 'Be part of something special.'
  },
];

const ScreensSection = () => {
  // Hook to detect mobile screen size
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

        {/* Social Media Icons on the Left Side */}
        {!isMobile && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%', // Centers vertically
              left: 0, // Positions the icons to the left
              transform: 'translateY(-50%)', // Vertically centers them by shifting up 50% of their height
              display: 'flex',
              flexDirection: 'column', // Stacks the icons vertically
              gap: '30px', // Sets the gap between icons to 50px
              zIndex: 2, // Ensures it appears in front of carousel images
              paddingLeft: 2, // Adds space to the left side of the screen
            }}
          >
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#3b5998',
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
                <FaFacebook size={25} />
              </Box>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#00acee',
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
                <FaTwitter size={25} />
              </Box>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#C13584',
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
                <FaInstagram size={25} />
              </Box>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#0077b5',
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
                <FaLinkedin size={25} />
              </Box>
            </a>
          </Box>
        )}
      </Box>

      {/* Dashboard Grid Section */}
      <Paper sx={{ p: 2, width: '100%' }}>
        <Container maxWidth={false} sx={{ padding: 0 }}>
          <Grid container spacing={2} sx={{ marginTop: '40px' }}>
            
            {/* Left Column - 30% width on medium and larger screens, full width on smaller screens */}
            <Grid
              item
              xs={12}  // Full width on mobile
              md={4}   // 30% width on medium and larger screens
              sx={{ order: { xs: 1, md: 1 } }}  // Left column is first on all screens
            >
              <Card
                sx={{
                  borderRadius: '20px',
                  boxShadow: 3,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Box
                    component="img"
                    src="https://i.ibb.co/djPgHLc/Waterproof-P6-66-Outdoor-LED-Screen-Signboard.webp"
                    alt="description"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '20px',
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>

            {/* Right Column - 70% width on medium and larger screens, full width on smaller screens */}
            <Grid
              item
              xs={12}  // Full width on mobile
              md={8}   // 70% width on medium and larger screens
              sx={{ direction: 'rtl', order: { xs: 2, md: 2 } }}
            >
              <Card sx={{
                borderRadius: '20px',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                <CardContent sx={{ flex: 1 }}>
                  <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
                    <CardContent>
                      {/* Box to ensure proper alignment */}
                      <Box sx={{ padding: '16px' }}>
                        <Typography variant="h3" sx={{
                          fontWeight: 'bold', 
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } // Responsive font size
                        }}>
                          الشاشات الإلكترونية الخارجية
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                  <Typography variant="body1" sx={{
                    fontSize: { xs: '1rem', sm: '1.5rem', md: '1.7rem' } // Responsive font size
                  }}>
                    تعتبر شاشات العرض الإلكترونية الخارجية المتخصصة في عرض الصور ومقاطع الفيديو من احدث طرق التسويق حاليا لأنها تعتبر الوسيلة الافضل في جذب ولفت انتباه العملاء ..
                    كما تتميز هذه الشاشات بأنها شديدة الوضوح في وقت النهار ، كما أنها موفرة للكهرباء .كذلك تتميز بتنوعها من حيث المقاسات كي تناسب جميع المجالات .تستخدم هذه الشاشات في عرض الإعلانات مما يعمل على الترويج لمنتجاتك وخدماتك مجانا 24/7 بطريقة ملفته وجذابة .. وتحقق زياده الوعي والانتشار لعلامتك التجارية ووصولها لأكبر عدد من العملاء ..ويتم تغيير وتحديث المحتوى الإعلاني عليها من خلال التحكم عن بعد وبكل يسر و سهولة . كما يتم تعزيز علاقتك بالعملاء من خلال عرض وسائل الاتصال والتواصل على الشاشات وبالتالي زيادة إيراداتك وأرباحك وذلك من خلال استغلال الشاشة في عرض إعلانات لشركات تجارية اخرى.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Paper>

        <Paper sx={{ p: 2, width: '100%' }}>
        <Container maxWidth={false} sx={{ padding: 0 }}>
          <Grid container spacing={2} sx={{ marginTop: '40px' }}>

            {/* Left Column - 70% width on medium and larger screens, full width on smaller screens */}
            <Grid
              item
              xs={12}  // Full width on mobile
              md={7}   // 70% width on medium and larger screens
              sx={{ order: { xs: 2, md: 1 } }}  // Added order for responsiveness
            >
              <Card sx={{
                borderRadius: '20px',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                direction: 'rtl',
              }}>
                <CardContent sx={{ flex: 1 }}>
                  <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
                    <CardContent>
                      <Box sx={{ padding: { xs: '8px', sm: '12px', md: '16px' } }}> {/* Adjust padding for mobile */}
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } // Responsive font size
                          }}
                        >
                          الشاشات الإلكترونية الداخلية
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '14px', sm: '16px', md: '23px' }, // Adjusted for smaller devices
                      lineHeight: 1.5,
                      marginTop: '10px', // Added margin for spacing between paragraphs
                    }}
                  >
                    تعتبر شاشات العرض الداخلية هي الوسيلة الأفضل في زيادة معدل التواصل المباشر مع العملاء طوال فترة تواجدهم في المكان كونها تجذب الانتباه بشكل كبير .. كما يمكن من خلالها عرض جميع المحتويات الإعلانية المرئية سواء كانت صور أو مقاطع فيديو.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '14px', sm: '16px', md: '23px' }, // Adjusted for smaller devices
                      lineHeight: 1.5,
                      marginTop: '10px',
                    }}
                  >
                    كما تتميز هذه الشاشات بدقة الوضوح و توفر أحجام ومقاسات مختلفة.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '14px', sm: '16px', md: '23px' }, // Adjusted for smaller devices
                      lineHeight: 1.5,
                      marginTop: '10px',
                    }}
                  >
                    وللعلم قامت شركة الأبحاث Nielsen بالتحقيق في تأثير العروض الرقمية والمحتوى المرئي في نقاط البيع فتبين أن الشركات التي استخدمت شاشات العرض الإلكترونية داخل المتاجر حسنت معدلات الوعي بالعلامات التجارية الخاصة بها بنسبة تصل إلى 14٪.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Column - 30% width on medium and larger screens, full width on smaller screens */}
            <Grid
              item
              xs={12}  // Full width on mobile
              md={5}   // 30% width on medium and larger screens
              sx={{ direction: 'rtl', order: { xs: 1, md: 2 } }} // Set order for right column
            >
              <Card
                sx={{
                  borderRadius: '20px',
                  boxShadow: 3,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Box
                    component="img"
                    src="https://i.ibb.co/1RwMSG8/P1-95-Indoor-High-Definition-Front-Maintenance-Fixed-LED-Display-Screen-with-1000mm-250mm-Aluminum-C.jpg"
                    alt="description"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '20px',
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Paper>


     {/* Dashboard Grid Section */}
     <Paper sx={{ p: 2, width: '100%' }}>
      <Container maxWidth={false} sx={{ padding: 0 }}>
        <Grid container spacing={2} sx={{ marginTop: '40px' }}>

          {/* Left Column - 30% width on medium and larger screens, full width on smaller screens */}
          <Grid
            item
            xs={12}  // Full width on mobile
            md={4}   // 30% width on medium and larger screens
            sx={{ order: { xs: 1, md: 1 } }}  // Left column is first on all screens
          >
            <Card
              sx={{
                borderRadius: '20px', // Rounded corners
                boxShadow: 3,         // Subtle shadow
                overflow: 'hidden',   // Prevent image overflow
                display: 'flex',      // Flex container
                flexDirection: 'column', // Vertical stacking of content
                height: '100%',       // Full height of the container
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="https://i.ibb.co/9y22tyR/68881793-2416484458675252-6626241936149708800-n.jpg"
                  alt="description"
                  sx={{
                    width: '100%',       // Responsive image width
                    height: 'auto',      // Maintain aspect ratio
                    objectFit: 'cover',  // Cover the container without distortion
                    borderRadius: '20px', // Rounded corners on the image
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - 70% width on medium and larger screens, full width on smaller screens */}
          <Grid
            item
            xs={12}  // Full width on mobile
            md={8}   // 70% width on medium and larger screens
            sx={{ direction: 'rtl', order: { xs: 2, md: 2 } }}  // Right column is second on all screens
          >
            <Card sx={{
              borderRadius: '20px',
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}>
              <CardContent sx={{ flex: 1 }}>
                <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
                  <CardContent>
                    <Box sx={{ padding: { xs: '8px', sm: '12px', md: '16px' } }}> {/* Responsive padding */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#333',
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } // Responsive font size
                        }}
                      >
                        شــاشة العـــرض النصـــية
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '16px', sm: '18px', md: '23px' }, // Responsive font size for body text
                    lineHeight: 1.5,
                    marginTop: '10px', // Spacing between paragraphs
                  }}
                >
                  يتميز هذ النوع من الشاشات بسهولة التركيب بحيث يمكن من خلالها تقديم معلومات واضحة ومباشرة للعميل بطريقة مبتكرة .. كذلك تمكنك من عرض المحتوى بأكثر من طريقة .كما تتميز هذه الشاشات ببرنامج تشغيل سهل يحتوي على عدد كبير من تأثيرات الحركة كما أنها تعرض جميع اللغات المكتوبة من جهاز الكمبيوتر مما يعمل علي زيادة فرص الاتصال والتواصل مع عملاءك بشكل أفضل .
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>


      {/* Repeat the same structure for the next section */}
      <Paper sx={{ p: 2, width: '100%' }}>
      <Container maxWidth={false} sx={{ padding: 0 }}>
        <Grid container spacing={2} sx={{ marginTop: '40px' }}>

          {/* Left Column - 70% width on medium and larger screens, full width on smaller screens */}
          <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
            <Card sx={{
              borderRadius: '20px',
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column', 
              height: '100%',
              direction: 'rtl',
            }}>
              <CardContent sx={{ flex: 1 }}>
                <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
                  <CardContent>
                    <Box sx={{ padding: { xs: '8px', md: '16px' } }}> {/* Adjust padding for mobile */}
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          fontWeight: 'bold', 
                          color: '#333', 
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } // Responsive font size
                        }}
                      >
                        شـــــاشات الاســـــــتاند
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '16px', md: '23px' }, // Responsive font size for body text
                    lineHeight: 1.5,
                    marginTop: '10px', // Spacing between paragraphs
                  }}
                >
                  تستخدم شاشات الاستاند عادة لأغراض ترويجية وإعلانية في المتاجر والمطاعم والمعارض التجارية ..
                  كما يمكن استخدامها أيضًا في المؤتمرات والعروض التقديمية وذلك للعرض بشكل بارز ومميز ..
                  و تعتبر شاشات الاستاند وسيلة فعالة لجذب انتباه العملاء والجمهور ونشر الرسائل التسويقية بشكل عصري وجذاب ..
                  هذا المنتج يدعم الصيغ المتنوعة من الصور والفيديوهات .. ويمكن عرضها بنجاح .وبفضل التقنية المتقدمة تستخدم لضمان طبقات الصورة الواضحة ..
                  والعمق اللوني وعرض الألوان الطبيعية.
                  الشاشة الدعائية العمودية صُنعت باستخدام خط المعالجة LED الجديد .. وجُهزت برقاقة تحكم ذكية رئيسية للتقليل من التكلفة وتبديد القدرة .
                  الشاشة الدعائية العمودية تنفذ التشغيل الدوري HD 1080P الكامل .كما أنها تدعم وظيفة التوقيت الزمني فالإعلانات يمكن عرضها في الوقت المختار مسبقاً وكذلك يمكن لكافة المستخدمين ضبط بداية ووقت إيقاف الإعلان..
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - 30% width on medium and larger screens, full width on smaller screens */}
          <Grid item xs={12} md={5} sx={{ direction: 'rtl', order: { xs: 1, md: 2 } }}>
            <Card sx={{
              borderRadius: '20px',
              boxShadow: 3,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}>
              <CardContent sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="https://i.ibb.co/ZTqV7j9/floor-tand.webp"
                  alt="description"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Paper>


    <Paper sx={{ p: 2, width: '100%' }}>
    <Container maxWidth={false} sx={{ padding: 0 }}>
      <Grid container spacing={2} sx={{ marginTop: '40px' }}>

        {/* Left Column - 30% width on medium and larger screens, full width on smaller screens */}
        <Grid
          item
          xs={12}  // Full width on mobile
          md={4}   // 30% width on medium and larger screens
          sx={{ order: { xs: 1, md: 1 } }}  // Left column is first on all screens
        >
          <Card
            sx={{
              borderRadius: '20px',  // Rounded corners for the card
              boxShadow: 3,         // Subtle shadow
              overflow: 'hidden',   // Prevents image overflow
              display: 'flex',      // Flex container
              flexDirection: 'column',  // Stacks content vertically
              height: '100%',       // Full height
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Box
                component="img"
                src="https://i.ibb.co/nL7ySyg/digital-wayfinding-screen-kiosk-signbox-b.jpg"
                alt="description"
                sx={{
                  width: '100%',       // Responsive image
                  height: 'auto',      // Maintain aspect ratio
                  objectFit: 'cover',  // Covers container without distortion
                  borderRadius: '20px', // Rounded corners for the image
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - 70% width on medium and larger screens, full width on smaller screens */}
        <Grid
          item
          xs={12}  // Full width on mobile
          md={8}   // 70% width on medium and larger screens
          sx={{ direction: 'rtl', order: { xs: 2, md: 2 } }}  // Right column is second on all screens
        >
          <Card sx={{
            borderRadius: '20px',
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            <CardContent sx={{ flex: 1 }}>
              <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
                <CardContent>
                  {/* Box to ensure proper alignment */}
                  <Box sx={{ padding: { xs: '8px', md: '16px' } }}> {/* Padding adjusts for mobile */}
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: 'bold', 
                        color: '#333', 
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } // Responsive font size
                      }}
                    >
                      الشـــــاشات التفــــاعلـية
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '16px', md: '23px' },  // Responsive body text font size
                  lineHeight: 1.5, 
                  marginTop: '10px',  // Adds space between paragraphs
                }}
              >
                تعد الشاشة التفاعلية أحدث ما توصلت إليه التكنولوجيا كوسيلة حديثة ومتطورة للدعاية المميزة ..
                حيث تساعد بشكل كبير ومؤثر في عملية الدعاية والإعلان للمنتجات والخدمات للجهات الحكومية والشركات والمجتمعات.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '16px', md: '23px' }, // Responsive font size for body text
                  marginTop: '10px',  // Adds spacing between paragraphs
                }}
              >
                وهذا ما جعل الشاشة التفاعلية أهمية بالغة في عصر الرسائل الإعلانية ..
                وبناء على ذلك قررت الشركة توفير الكثير من الشاشات التفاعلية ذات مقاسات وألوان مختلفة بالإضافة إلى توفير أجهزة النداء الآلي والشاشات التفاعلية للبنوك والجهات الحكومية والمستشفيات. كما يتم استخدامها كشاشة إعلانات تفاعلية في المولات والمجمعات التجارية والاستهلاكية.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  </Paper>


           {/* Repeat the same structure for the next section */}
      <Paper sx={{ p: 2, width: '100%' }}>
      <Container maxWidth={false} sx={{ padding: 0 }}>
        <Grid container spacing={2} sx={{ marginTop: '40px' }}>

          {/* Left Column - 70% width on medium and larger screens, full width on smaller screens */}
          <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}> {/* Order for responsiveness */}
            <Card sx={{
              borderRadius: '20px',
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column', 
              height: '100%',
              direction: 'rtl',
            }}>
              <CardContent sx={{ flex: 1 }}>
                <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
                  <CardContent>
                    <Box sx={{ padding: { xs: '8px', md: '16px' } }}> {/* Adjust padding for mobile */}
                      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', fontSize: {  xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                      شـــاشات عـــدادات المشــاريع
                      والساعات الرقمية ومحطات البنزين 
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '23px' }, lineHeight: 1.5 }}>
                شاشات عدادات؟ المشاريع والساعات الرقمية ومحطات البنزين :شاشات مخصصة لنظام محطات الوقود حيث تعرض أسعار الوقود بطريقه احترافية وسهلة التحكمعداد المشاريع عبارة عن عداد ديجتال يعمل عن طريق العد التنازلي بعدد الايام المتبقي علي انتهاء المشروع الساعات الرقمية تعرض الوقت والتاريخ عن طريق الاتصال بالقمر الصناعي.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - 30% width on medium and larger screens, full width on smaller screens */}
          <Grid item xs={12} md={5} sx={{ direction: 'rtl', order: { xs: 1, md: 2 } }}> {/* Set order for right column */}
            <Card
              sx={{
                borderRadius: '20px',
                boxShadow: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="https://i.ibb.co/FD7MxFj/H5ec7985e4ee74eb0808a9de5a92c9290o-jpg-720x720q50.png"
                  alt="description"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
    <Paper sx={{ p: 2, width: '100%',marginBottom:'50px' }}>
    <Container maxWidth={false} sx={{ padding: 0 }}>
      <Grid container spacing={2} sx={{ marginTop: '40px' }}>
        {/* Left Column - Full width on mobile, 30% width on medium and larger screens */}
        <Grid
          item
          xs={12}  // Full width on mobile
          md={4}   // 30% width on medium and larger screens
          sx={{ order: { xs: 1, md: 1 } }}  // Left column is first on all screens
        >
          <Card
            sx={{
              borderRadius: '20px',  // Rounded corners for the card
              boxShadow: 3,          // Subtle shadow
              overflow: 'hidden',    // Prevents image overflow
              display: 'flex',       // Flex container
              flexDirection: 'column', // Stacks content vertically
              height: '100%',        // Full height
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Box
                component="img"
                src="https://i.ibb.co/R0Z6RYR/images-3.png"
                alt="description"
                sx={{
                  width: '100%',       // Makes the image responsive
                  height: 'auto',      // Maintain aspect ratio
                  objectFit: 'cover',  // Ensures the image covers the container without distortion
                  borderRadius: '20px', // Rounded corners for the image
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Full width on mobile, 70% width on medium and larger screens */}
        <Grid
          item
          xs={12}  // Full width on mobile
          md={8}   // 70% width on medium and larger screens
          sx={{ direction: 'rtl', order: { xs: 2, md: 2 } }}  // Right column is second on all screens
        >
          <Card sx={{
            borderRadius: '20px',
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            <CardContent sx={{ flex: 1 }}>
              <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '20px', boxShadow: 3 }}>
                <CardContent>
                  {/* Box to ensure proper alignment */}
                  <Box sx={{ padding: { xs: '8px', md: '16px' } }}> {/* Adjust padding for mobile */}
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: 'bold', 
                        color: '#333', 
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } // Responsive font size
                      }}
                    >
                      جهاز ارقام الانتظار
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '16px', md: '23px' },  // Responsive font size for body text
                  lineHeight: 1.5, 
                  marginTop: '10px',  // Adds space between paragraphs
                }}
              >
                تعمل شاشات الاستدعاء بمفردها لا تحتاج إلى أجهزة كمبيوتر للعمل معها.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '16px', md: '23px' }, // Responsive font size for body text
                  marginTop: '10px',  // Adds space between paragraphs
                }}
              >
                تبدا بــ 4 خدمات مختلفة حسب رغبة العميل ويمكن زيادة الخدمات مستقبلا الى 12 خدمة.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '16px', md: '23px' }, // Responsive font size for body text
                  marginTop: '10px', 
                }}
              >
                النظام يعمل بنغمة Ding Dong والنداء برقم العميل والشباك.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '16px', md: '23px' }, // Responsive font size for body text
                  marginTop: '10px', 
                }}
              >
                تحتفظ باخر رقم تم طلبه عند انقطاع التيار الكهربائي للبدء من هذا الرقم بعد عودة التيار.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '16px', md: '23px' }, // Responsive font size for body text
                  marginTop: '10px', 
                }}
              >
                النظام مزود بوحدة برنتر لطباعة الأرقام المسلسلة متعددة المهام النظام لا يحتاج إلى أي وحدات تحكم أو وحدات تشغيل إضافية.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  </Paper>
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

export default ScreensSection;
