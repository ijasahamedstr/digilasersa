import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";
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
import { Carousel } from "react-bootstrap";
import axios from "axios";
import Hr from "./hr";


const carouselItems = [
  {
    id: 1,
    img: "https://i.ibb.co/m5QPn0Y3/Top.webp",
  },
  {
    id: 2,
    img: "https://i.ibb.co/m5QPn0Y3/Top.webp",
  },
  {
    id: 3,
    img: "https://i.ibb.co/m5QPn0Y3/Top.webp",
  },
];

const socialLinks = [
  {
    icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
    link: "https://x.com/digilasersa",
  },
  {
    icon: <FaInstagram size={25} />,
    link: "https://www.instagram.com/digilasersa",
  },
  {
    icon: <FaLinkedin size={25} />,
    link: "https://www.linkedin.com/company/digilasersa",
  },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  {
    icon: <FaSnapchat size={25} />,
    link: "https://www.snapchat.com/add/digilasersa",
  },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

const cardStyles = {
  flex: 1,
  width: { xs: "90%", sm: 300, md: 350 },
  outline: "none",
  position: "relative", // required for pseudo-elements
  "&:focus": { outline: "none" },
  borderTop: "20px solid #b0b0b0", // Top border only

  // Left border matching image height
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0, // start from top (image start)
    width: "20px", // border thickness
    height: "140px", // match CardMedia height
    backgroundColor: "#b0b0b0",
  },

  // Right border matching image height
  "&::after": {
    content: '""',
    position: "absolute",
    right: 0,
    top: 0,
    width: "20px",
    height: "140px", // match CardMedia height
    backgroundColor: "#b0b0b0",
  },
};

const InfoCard = ({ image, title, text }) => (
  <Card sx={cardStyles}>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent sx={{ direction: "rtl", textAlign: "center" }}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
          backgroundColor: "#e7e7e7",
          px: 1,
          py: 0.5,
          borderRadius: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#246869",
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          lineHeight: 2,
        }}
      >
        {text}
      </Typography>
    </CardContent>
  </Card>
);


const SoundSection = () => {
  const [loading, setLoading] = useState(true); // Splash screen
  const [error, setError] = useState(null);

  // 🔹 Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 🔹 Fetch data (dummy call, since no state uses it now)
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API_HOST}/Promotionalgifts`);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to fetch data");
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

   const cards = [
    {
      image: "https://i.ibb.co/vCNbjj3R/Layer.webp",
      title: "الأنظمة الصوتية",
      text: "نضـمن لك إنشاء غرف و ستــــــــوديوهـات معزولة صوتياً بالكامل حيث نتحـكم بدقة في مســتويات الصـــوت الداخل والخارج لضمان بيـــئة عمـــل هــادئة ومثالية .",
    },
    {
      image: "https://i.ibb.co/vCNbjj3R/Layer.webp",
      title: "الأنظمة الصوتية",
      text: "نوفـر  حــلولاً متـقدمة للمــعالجة الصــــوتية باســــتخدام أحــــدث المـــــعدات لضــــبط مســـتويات الصــوت وتحسين جودة العمل والإنتاج.",
    },
    {
      image: "https://i.ibb.co/vCNbjj3R/Layer.webp",
      title: "الأنظمة الصوتية",
      text: "نوفـر  حــلولاً متـقدمة للمــعالجة الصــــوتية باســــتخدام أحــــدث المـــــعدات لضــــبط مســـتويات الصــوت وتحسين جودة العمل والإنتاج.",
    },
  ];

  // --- Splash Screen ---
  if (loading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          flexDirection: "column",
          p: 2,
        }}
      >
        <Box
          component="img"
          src="https://i.ibb.co/hRZ1bMy/78-removebg-preview.png"
          alt="Company Logo"
          sx={{
            width: { xs: "70%", sm: "50%", md: "40%", lg: "30%" },
            maxWidth: "500px",
            height: "auto",
            mb: 2,
          }}
        />
        <CircularProgress sx={{ color: "#00fffc" }} />
      </Box>
    );
  }

  return (
    <>
    <Container
      maxWidth={false}
      style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: "100px" }}
    >
      {/* Carousel Section */}
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
                alt={`Slide ${item.id}`}
                style={{
                  objectFit: "cover",
                  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Social Media Icons on the Left Side */}
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 2,
            zIndex: 1200,
            pl: 2,
          }}
        >
          {socialLinks.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
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
                  boxShadow: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                {icon}
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </Container>
     {/* Split Section: Text Left, Image Right */}
      <section
        style={{
          width: "100%",
          margin: "0 auto",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "0px",
          backgroundImage: 'url("https://i.ibb.co/HDJTjg7j/New-Web-Sound01.webp")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",
            height: "100%",
            px: { xs: 2, sm: 3, md: 5 },
            textAlign: { xs: "center", md: "left" },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left Side Text */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 4, md: 40 }, // pushes text further down on desktop
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.4,
                mb: { xs: 3, md: 4 },
                color: "#008488",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
              }}
            >
              أنظـمة صــوتيـة للمـساجد
              <br />
              وقـــاعــات الاجــتماعـات
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#6c2632",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" },
                maxWidth: { xs: "100%", md: "90%" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              تجهز المساجد وقاعات الاجتماعات والمحاضرات بأحدث الأنظمة الصوتية
              مع ضمان صوت نقي وواضح
            </Typography>
          </Box>

          {/* Right Side Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              mt: { xs: 3, md: 0 },
              height: { xs: "auto", md: "100%" },
            }}
          >
            <Box
              component="img"
              src="https://i.ibb.co/7tGdc5pR/180.webp"
              alt="Sound Systems"
              sx={{
                width: { xs: "90%", sm: "70%", md: "80%" },
                height: "auto",
                maxHeight: { xs: "60vh", md: "100vh" },
                objectFit: "contain",
                boxShadow: 5,
                mb: { xs: 3, md: "-10px" }, // normal on mobile, -11px only on desktop
              }}
            />
          </Box>
        </Container>
      </section>
      <Hr/>
      <section
        style={{
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#ffffff",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" }, // image below text on mobile
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 3, md: 0 },
            textAlign: { xs: "center", md: "left" },
            minHeight: "100%",
          }}
        >
          {/* Left Side - Image (40% on desktop) */}
          <Box
            sx={{
              flex: { xs: 1, md: 0.4 },
              maxWidth: { xs: "100%", md: "40%" },
            }}
          >
            <Box
              component="img"
              src="https://i.ibb.co/RGNfbJfD/New-1.webp"
              alt="Left Side"
              sx={{
                width: { xs: "90%", sm: "70%", md: "100%" },
                height: "auto",
                maxHeight: { xs: "80vh", md: "100vh" },
                objectFit: "contain",
                boxShadow: 5,
                mb: { xs: 3, md: "-10px" },
              }}
            />
          </Box>

          {/* Right Side - Text (60% on desktop) */}
          <Box
            sx={{
              flex: { xs: 1, md: 0.6 },
              maxWidth: { xs: "100%", md: "60%" },
              backgroundColor: { xs: "transparent", md: "#b0b0b0" }, // remove bg on mobile
              px: { xs: 4, md: 8 },
              py: { xs: 6, md: 18 },
              borderRadius: "0 12px 12px 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              direction: "rtl",
              textAlign: "right",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                color: { xs: "#000000", md: "#008488" }, // black on mobile, teal on desktop
                mb: 2,
                mt: 2,
                fontSize: { xs: "1.1rem", sm: "1.7rem", md: "2.6rem", lg: "2.7rem" }, // mobile heading 1.1rem
              }}
            >
              أنظمة صوتية للمناسبات الكبرى :
            </Typography>

            {/* Horizontal line under heading */}
            <Box
              sx={{
                width: { xs: "60%", sm: "70%", md: "480px" },
                maxWidth: "100%",
                height: "3px",
                backgroundColor: { xs: "#000000", md: "#ffffff" }, // black on mobile, white on desktop
                mb: 3,
                borderRadius: "2px",
                alignSelf: "flex-start",
              }}
            />

            <Typography
              variant="h3"
              sx={{
                color: { xs: "#000000", md: "hsla(0, 0%, 100%, 1.00)" }, // black on mobile, white on desktop
                lineHeight: 1.8,
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: "1.6rem", xl: "1.5rem" },
                textAlign: "justify",
                direction: "rtl",
              }}
            >
              نقدم خدمات توريد وتركيب وتشغيل الأنظمة الصوتية للمعارض والمؤتمرات والفعاليات الرسمية والخاصة
              بالإضافة إلى قاعات المحاضرات والاجتماعات
            </Typography>
          </Box>
        </Container>
      </section>            
      <section
        style={{
          width: "100%",
          margin: "0 auto",
          marginBottom: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundImage: 'url("https://i.ibb.co/5gr6yg6h/New-3.webp")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Section heading */}
        <Typography
          variant="h3"
          sx={{
            color: "#000000ff",
            textAlign: { xs: "center", md: "left" },
            mt: { xs: "20px", md: "25px" }, // positive margin, heading above cards
            mb: { xs: 3, md: 6 },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            backgroundColor: "#b0b0b0",
            display: "block",
            width: { xs: "auto", md: "60%" },
            px: { xs: 2, md: 4 },
            py: { xs: 1, md: 4 },
            borderRadius: { xs: "8px", md: "6px" },
            mx: { xs: 0, md: "auto" },
            mr: { xs: "auto", md: 0 },
          }}
        >
          خدماتنا الصوتية
        </Typography>

        {/* Cards container */}
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
            mt: { xs: 2, md: 4 }, // small spacing between heading and cards
          }}
        >
          {cards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </Container>
      </section>
      <section
        style={{
          width: "100%",
          margin: "0 auto",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row", // default is row (desktop)
          flexWrap: "wrap", // allow wrapping for mobile
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "24px",
          paddingBottom: "10px",
          backgroundImage: 'url("https://i.ibb.co/xqJRQ9h4/New-2.webp")',
          backgroundSize: "cover",
        }}
      >
        {/* Right Side - Text */}
        <Box
          sx={{
            flex: "1 1 100%", // full width on mobile
            maxWidth: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            order: { xs: 1, md: 2 }, // text on top on mobile, right on desktop
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "#000000ff",
              mb: 2,
              mt: 0,
              fontSize: { xs: "1.7rem", sm: "2rem", md: "2.6rem", lg: "2.7rem" },
              alignItems: "center",
              direction: "rtl",
              textAlign: "center",
              pt: 3,
              px: 3,
              marginTop: { xs: 0, md: "-215px" },
              backgroundColor: "#b0b0b0",
            }}
          >
            مهمتنا
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "hsla(0, 0%, 0%, 1.00)",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: "1.6rem", xl: "2rem" },
              textAlign: "justify",
              direction: "rtl",
              px: { xs: 4, sm: 8, md: 10, lg: 12 },
              mx: { xs: 2, sm: 3, md: 4, lg: 5 },
              py: { xs: 2, sm: 3, md: 4 },
            }}
          >
            نحرص على استهدام أحدث التنقنيات والأساليب المتطورة لضمان تقديم أدق التفاصيل باحترافية
            مع التركيز على الدقة في التنفيذ والتميز في النتائج وتقديم تجربة فريدة وناجحه لسيادتكم.
          </Typography>
        </Box>

        {/* Left Side Image */}
        <Box
          sx={{
            flex: "1 1 100%", // full width on mobile
            maxWidth: { xs: "100%", md: "50%" },
            height: { xs: "200px", sm: "250px", md: "500px", lg: "600px" },
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            order: { xs: 2, md: 1 }, // image below text on mobile, left on desktop
          }}
        >
          <Box
            component="img"
            src="https://i.ibb.co/KjNqfm0N/Place.webp"
            alt="Left Side"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Bottom horizontal line */}
          <Box
            sx={{
              height: "4px",
              width: "100%",
              backgroundColor: "#0a898b",
              mt: 1,
            }}
          />
        </Box>
      </section>
      
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
          <img
            src="https://i.ibb.co/H3XBzjv/Background-copy.webp"
            alt="main-slide"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              display: "block",
              boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default SoundSection;
