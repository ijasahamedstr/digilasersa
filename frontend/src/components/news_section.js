import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Newssection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const feedbacks = [
    {
      name: "م / محمد الجاسم",
      type: "image",
      image: "https://i.ibb.co/MkFnqKvs/Whats-App-Image-2025-07-19-at-09-30-29-e5bb216a.webp",
      stars: 5,
      text: "شركة الليزر هي الافضل دايما في الشاشات 😍🤝",
    },
    {
      name: "نورة القحطاني",
      type: "video",
      video: "https://pouch.jumpshare.com/preview/9nAird2VeaBUPce7Y5Djrlx7JLVb-YRVNjzj8kO4z1fmwOl4ofWCc0Gs3mYLpFEOOUQnWwUm2ZXhbqlepg4_NLGvYw4uYWN7xT5KckX6VYQ",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
    {
      name: "نورة القحطاني",
      type: "video",
      video: "https://pouch.jumpshare.com/preview/U_N-0kok0QsU33lrHlj2kuZMrDlqTbnSj-8B7AzwjJNVUSDAMCNOvQLdLLk7MT6Qga9lynSOi7V8ndGC_VperYA9dVtAxDj6JHloBdAvI18",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
    {
      name: "نورة القحطاني",
      type: "video",
      video: "https://pouch.jumpshare.com/preview/GPUGeZeRvP6ApPrRmd0_x--Nz_tSXMMBuLhMtW_W0EDm_ELOCw8SIU-KHofPfynjga9lynSOi7V8ndGC_VperYA9dVtAxDj6JHloBdAvI18",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
    {
      name: "نورة القحطاني",
      type: "video",
      video: "https://pouch.jumpshare.com/preview/NoQ9hBAAaWwpXiIH4zjCwFlHu9l7XBKXssHqanmpXNq_RvB0jjiCycEcvkpO68P-ga9lynSOi7V8ndGC_VperYA9dVtAxDj6JHloBdAvI18",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
  ];

  return (
    <section
      dir="rtl"
      style={{
        backgroundColor: "#030909",
        paddingTop: "40px",
        paddingBottom: "80px",
        marginTop: "-30px",
        paddingRight:'30px',
        paddingLeft:'30px'
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            color: "#00fffc",
            textAlign: "center",
            marginBottom: "30px",
            fontFamily: "Tajawal",
            fontWeight: "bold",
            fontSize: { xs: "22px", sm: "28px", md: "32px" },
          }}
        >
          آراء العملاء
        </Typography>

        <Slider {...settings}>
          {feedbacks.map((item, index) => (
            <Box key={index} px={1}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#0d1a1a",
                  color: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%", // 16:9 ratio
                  }}
                >
                  {item.type === "image" ? (
                    <Box
                      component="img"
                      src={item.image}
                      alt={`Feedback ${index + 1}`}
                      loading="lazy"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Box
                      component="video"
                      src={item.video}
                      controls
                      preload="none"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    >
                      متصفحك لا يدعم تشغيل الفيديو.
                    </Box>
                  )}
                </CardMedia>

                <CardContent sx={{ flexGrow: 1, px: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: "10px",
                      textAlign: "center",
                      fontSize: { xs: "16px", sm: "18px" },
                      fontFamily: "Tajawal",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Box
                    sx={{
                      color: "#ffc107",
                      marginBottom: "8px",
                      textAlign: "center",
                      fontSize: "20px",
                    }}
                  >
                    {"⭐".repeat(item.stars)}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "14px", sm: "16px" },
                      textAlign: "center",
                      fontFamily: "Tajawal",
                    }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default Newssection;
