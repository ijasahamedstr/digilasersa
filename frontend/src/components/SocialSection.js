import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import {
  Box,
  Typography,
  useMediaQuery,
  Grid,
  Card,
  CardContent,
  Paper,
  CardMedia,
  Button,
} from "@mui/material";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Form from "react-bootstrap/Form";

const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  message: "",
};



const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/k6VPk87/Bar-one.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/k6VPk87/Bar-one.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/k6VPk87/Bar-one.webp",
  },
];

const products = [
  {
    cardTitles: "تحسين محركات البحث",
    imageUrls: "https://i.ibb.co/MnnCvh0/3b76025704ab1da5d342fa24fb810899.webp",
  },
  {
    cardTitles: "تحليل اداء الحسابات",
    imageUrls: "https://i.ibb.co/6470jhZ/BLG02x-feature-image-edited.webp",
  },
  {
    cardTitles: "التفاعل الجماهيرى",
    imageUrls:
      "https://i.ibb.co/p2JHCXn/hands-holding-smartphone-social-media-concept-1.webp",
  },
  {
    cardTitles: "إنشاء وتطوير الحسابات",
    imageUrls:
      "https://i.ibb.co/vqBp1bh/custom-illustrations-personalizing-web-design.webp",
  },
];

const products1 = [
  {
    cardTitles: "تصميم حملات بريدية",
    imageUrls:
      "https://i.ibb.co/QcL2Nf7/hand-pressing-envelope-that-is-sent-world.webp",
  },
  {
    cardTitles: "تصميم خطط الترويج",
    imageUrls:
      "https://i.ibb.co/VHwzKFh/businessman-holding-blank-screen-smartphone.webp",
  },
  {
    cardTitles: "تصميم خطط إنتشار",
    imageUrls:
      "https://i.ibb.co/GWjxdzt/social-media-marketing-concept-marketing-with-applications-1.webp",
  },
  {
    cardTitles: "تصميم حملات إعلانية",
    imageUrls:
      "https://i.ibb.co/9rzmNDr/social-media-concept-composition-1.webp",
  },
];

const products2 = [
  {
    cardTitles: "إنتاج وتصوير الفيديو",
    imageUrls:
      "https://i.ibb.co/8XbpfhT/the-camera-lens-canon-eos-5d-mark-ii-wallpaper-preview.webp",
  },
  {
    cardTitles: "تصميمات الجرافيك",
    imageUrls: "https://i.ibb.co/myjxs0q/r-shutterstock-2083434319.webp",
  },
  {
    cardTitles: "كتابة المحتوس الابداعي",
    imageUrls:
      "https://i.ibb.co/jrJcVDQ/creativity-creative-ideas-imagination-inspiration-design-concept.webp",
  },
  {
    cardTitles: "بناء الهوية التجارية",
    imageUrls: "https://i.ibb.co/gV7hWyK/33.webp",
  },
];

const products3 = [
  {
    cardTitles: "تحليل متغيرات العملاء",
    imageUrls: "https://i.ibb.co/1fWQrqB/advertising-plan.webp",
  },
  {
    cardTitles: "تحليل المنافسين",
    imageUrls:
      "https://i.ibb.co/M7R6gFV/How-a-Competitive-Analysis-Affects-Your-Website-s-Design.webp",
  },
  {
    cardTitles: "تحليل سلوك المستخدم",
    imageUrls: "https://i.ibb.co/PDSd98R/1684982244581.webp",
  },
  {
    cardTitles: "تحليل أداء الحسابات",
    imageUrls: "https://i.ibb.co/cc4f53M/how-to-do-behavioral-analysis.webp",
  },
];

const products4 = [
  {
    cardTitles: "خدمة العملاء",
    imageUrls: "https://i.ibb.co/F8LRzf8/customerservice.webp",
  },
  {
    cardTitles: "تدريب الموظفين",
    imageUrls: "https://i.ibb.co/0jSRHgD/1632994991100.webp",
  },
  {
    cardTitles: "الحلول المتكاملة",
    imageUrls:
      "https://i.ibb.co/1LHCh8h/649dd33f3c4d970a7923f531-strategic-project-management-article-cascade-strategy-blog.webp",
  },
  {
    cardTitles: "الاستراتيجيات والخطط",
    imageUrls:
      "https://i.ibb.co/WzNM4f4/How-to-Analyze-a-Digital-Ad-for-Performance-Results.webp",
  },
];

const SocialSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () =>
    Object.values(formData).every((field) => field.trim() !== "");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill out all fields.");
      return;
    }

    const { name, phone, message } = formData;
    const whatsappNumber = "966570849999";
    const text = `👋 مرحبًا، لدي استفسار:\n\n📛 الاسم: ${name}\n📞 الجوال: ${phone}\n📝 الرسالة: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };


  return (
    <Container
      maxWidth={false}
      sx={{ padding: 0 }}
      style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "100px" }}
    >
      <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <Carousel
          fade
          nextIcon={
            <span
              className="carousel-control-next-icon"
              style={{ backgroundColor: "black" }}
            />
          }
          prevIcon={
            <span
              className="carousel-control-prev-icon"
              style={{ backgroundColor: "black" }}
            />
          }
        >
          {carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.img}
                alt={item.title}
                style={{
                  objectFit: "cover",
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                }}
              />
              <Carousel.Caption>
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {item.content}
                </Typography>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Social Media Icons - Hidden on Mobile */}
                        <Box
                          sx={{
                            position: "fixed",
                            top: "50%",
                            left: 0,
                            transform: "translateY(-50%)",
                            display: {
                              xs: "none", // Hide on extra-small and small screens
                              md: "flex", // Show on medium screens and up
                            },
                            flexDirection: "column",
                            gap: "15px",
                            zIndex: 2,
                            paddingLeft: 2,
                          }}
                        >
                          {[
                            { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
                            { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
                            { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
                            { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
                            { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
                            { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
                            { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
                          ].map((social, index) => (
                            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                              <Box
                                sx={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: "50%",
                                  backgroundColor: "#06f9f3",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "#17202a",
                                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                                  transition: "transform 0.3s ease",
                                  "&:hover": { transform: "scale(1.2)" },
                                }}
                              >
                                {social.icon}
                              </Box>
                            </a>
                          ))}
                        </Box>
       
                      </Box>

      <Paper sx={{ p: 2, width: "100%" }}>
        <Container maxWidth={false} sx={{ padding: 0 }}>
          <Grid container spacing={2} sx={{ marginTop: "40px" }}>
            {/* Left Column - 30% width on medium and larger screens, full width on smaller screens */}
            <Grid
              item
              xs={12} // Full width on mobile
              md={4} // 30% width on medium and larger screens
              sx={{ order: { xs: 1, md: 1 } }} // Left column is first on all screens
            >
              <Card
                sx={{
                  borderRadius: "20px", // Rounded corners for the card
                  boxShadow: 3, // Subtle shadow
                  overflow: "hidden", // Prevents image overflow
                  display: "flex", // Flex container
                  flexDirection: "column", // Stacks content vertically
                  height: "100%", // Full height
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Box
                    component="img"
                    src="https://i.ibb.co/Xs6LX9j/roi-calculation-for-saas-seo-campaigns.webp"
                    alt="description"
                    sx={{
                      width: "100%", // Responsive image
                      height: "auto", // Maintain aspect ratio
                      objectFit: "cover", // Covers container without distortion
                      borderRadius: "20px", // Rounded corners for the image
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>

            {/* Right Column - 70% width on medium and larger screens, full width on smaller screens */}
            <Grid
              item
              xs={12} // Full width on mobile
              md={8} // 70% width on medium and larger screens
              sx={{ direction: "rtl", order: { xs: 2, md: 2 } }} // Right column is second on all screens
            >
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Card
                    sx={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "20px",
                      boxShadow: 3,
                    }}
                  >
                    <CardContent>
                      {/* Box to ensure proper alignment */}
                      <Box sx={{ padding: "16px" }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: "bold",
                            color: "#333",
                            fontSize: {
                              xs: "1.5rem",
                              sm: "2rem",
                              md: "2.5rem",
                            }, // Responsive font size
                          }}
                        >
                          التسويق الالكتروني والسوشيال ميديا
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" }, // Adjust font size for different screen sizes
                    }}
                  >
                    نعمل بجد لتحقيق أقصى استفادة من وجودك الرقمي لكى نضمن لك
                    تفاعل جمهورك، وتعزيز مكانتك في السوق ونلبي احتياجاتك بفريق
                    يتابع عن كثب أحدث التطورات في عالم السوشيال ميديا ليضمن لك
                    البقاء في الصدارة.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Service Section */}
      <section
        style={{
          backgroundColor: "#000000",
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ paddingX: { xs: 2, sm: 3, md: 5 }, textAlign: "center" }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "Changa, sans-serif",
              color: "white",
              fontSize: { xs: "30px", sm: "40px", md: "50px" }, // Responsive font size for typography
            }}
          >
            خدمـات التسويق الالكتروني والسوشيال ميديا
          </Typography>
        </Container>
      </section>

      {/* Swiper Section */}
      <Container maxWidth="xl" sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: 2,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
            }}
          >
            <span style={{ color: "#015057", fontFamily: "Tajawal", }}>
              إدارة حسابات السوشيال ميديا
            </span>
          </Typography>
        </Box>

        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: 3,
                    "&:hover": { boxShadow: 6 },
                    marginBottom: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`Service ${index}`}
                    image={product.imageUrls}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      {product.cardTitles}
                    </Typography>
                  </CardContent>
                </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Swiper Section */}
      <Container maxWidth="xl" sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: 2,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
            }}
          >
            <span style={{ color: "#015057", fontFamily: "Tajawal" }}>
              إدارة الإعلانات المدفوعة
            </span>
          </Typography>
        </Box>

        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {products1.map((product, index) => (
            <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: 3,
                    "&:hover": { boxShadow: 6 },
                    marginBottom: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`Service ${index}`}
                    image={product.imageUrls}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      {product.cardTitles}
                    </Typography>
                  </CardContent>
                </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Swiper Section */}
      <Container maxWidth="xl" sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: 2,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
            }}
          >
            <span style={{ color: "#015057", fontFamily: "Tajawal" }}>
              إنشاء المحتوى الإبداعي
            </span>
          </Typography>
        </Box>

        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {products2.map((product, index) => (
            <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: 3,
                    "&:hover": { boxShadow: 6 },
                    marginBottom: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`Service ${index}`}
                    image={product.imageUrls}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      {product.cardTitles}
                    </Typography>
                  </CardContent>
                </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Swiper Section */}
      <Container maxWidth="xl" sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: 2,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
            }}
          >
            <span style={{ color: "#015057", fontFamily: "Tajawal" }}>
              تحليل البيانات المختلفة
            </span>
          </Typography>
        </Box>

        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {products3.map((product, index) => (
            <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: 3,
                    "&:hover": { boxShadow: 6 },
                    marginBottom: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`Service ${index}`}
                    image={product.imageUrls}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      {product.cardTitles}
                    </Typography>
                  </CardContent>
                </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Swiper Section */}
      <Container maxWidth="xl" sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: 2,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
            }}
          >
            <span style={{ color: "#015057", fontFamily: "Tajawal" }}>
              الإستشارات التسويقية
            </span>
          </Typography>
        </Box>

        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {products4.map((product, index) => (
            <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: 3,
                    "&:hover": { boxShadow: 6 },
                    marginBottom: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`Service ${index}`}
                    image={product.imageUrls}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      {product.cardTitles}
                    </Typography>
                  </CardContent>
                </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <section
        style={{
          backgroundColor: "#000000",
          backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
          width: "100%",
          margin: "0 auto",
          marginBottom: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
          paddingBottom: "50px",
          marginTop: "-30px",
          direction: "rtl",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 },
            textAlign: "center",
          }}
        >
          <Grid container spacing={4}>
            {/* Text Section on the Right */}
           <Grid
             item
             xs={12}
             sm={6}
             sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "flex-end",
               textAlign: "justify",
               direction: "ltr",
               pr: 5,
             }}
           >
             <Typography variant="h4" color="white">
               Contact Us
             </Typography>
           
             <Typography variant="h5" color="#00fffc" sx={{ textAlign: "justify", direction: "rtl" }}>
               للطلب والإستفسار /
             </Typography>
           
             <Grid container spacing={2} sx={{ pt: "30px", direction: "rtl", alignItems: "center" }}>
               {[
                 { label: "مدير السوشيال ميديا", value: "9999 084 057" },
               ].map(({ label, value }) => (
                 <React.Fragment key={label}>
                   <Grid item xs={4}>
                     <Typography
                       variant="body1"
                       sx={{
                         color: "white",
                         fontSize: { xs: "17px", sm: "18px", md: "20px" },
                         textAlign: "right",
                       }}
                     >
                       {label}
                     </Typography>
                   </Grid>
           
                   <Grid item xs={1}>
                     <Typography
                       variant="body1"
                       sx={{
                         color: "white",
                         fontSize: { xs: "17px", sm: "18px", md: "20px" },
                         textAlign: "right",
                       }}
                     >
                       :
                     </Typography>
                   </Grid>
           
                   <Grid item xs={7}>
                     <Typography
                       variant="body1"
                       sx={{
                         color: "white",
                         fontSize: { xs: "17px", sm: "18px", md: "20px" },
                         textAlign: "right",
                       }}
                     >
                       {value}
                     </Typography>
                   </Grid>
                 </React.Fragment>
               ))}
             </Grid>
           </Grid>

            {/* Contact Form Section on the Left */}
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
              <h2
                style={{
                  color: "white",
                  fontFamily: "Tajawal",
                  fontSize: "26px",
                  textAlign: "right",
                  marginBottom: "20px",
                  direction: "rtl",
                }}
              >
                 للشكاوي ..
              </h2>

                 <form onSubmit={handleFormSubmit} style={{ direction: "rtl" }}>
            <Form.Group className="mb-3 d-flex align-items-center" style={{ gap: "10px" }}>
              <Form.Label
                style={{
                  color: "white",
                  width: "150px",
                  fontSize: "20px",
                  textAlign: "right",
                }}
              >
                الاسم
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ background: "#17202a", border: "none", color: "white" }}
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" style={{ gap: "10px" }}>
              <Form.Label
                style={{
                  color: "white",
                  width: "150px",
                  fontSize: "20px",
                  textAlign: "right",
                }}
              >
                الجوال
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  background: "#17202a",
                  border: "none",
                  color: "white",
                  textAlign: "right",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" style={{ gap: "10px" }}>
              <Form.Label
                style={{
                  color: "white",
                  width: "150px",
                  fontSize: "20px",
                  textAlign: "right",
                }}
              >
                رسالتك
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                style={{ background: "#17202a", border: "none", color: "white" }}
              />
            </Form.Group>

            {/* Centered Button */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "15px",paddingRight:'150px' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  background: "#00fffc",
                  color: "#1e272e",
                  padding: { xs: "10px", sm: "15px" },
                  width: "50%",
                }}
              >
                ارسال
              </Button>
            </div>
          </form>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Container>
  );
};

export default SocialSection;
