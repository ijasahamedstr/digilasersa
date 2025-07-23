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
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
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
      video: "https://pouch.jumpshare.com/preview/EyHzyFD0n5xMOB2K17wgtaoG6yLoyKdvNIx4ZF4LjK7Oq5nFIrPJGj5xS16lSNKXWM9A3w1pYno-9O8zyUIknn6ke2LCw20ZmIa0qNGL2bg",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
    {
      name: "نورة القحطاني",
      type: "video",
      video: "https://pouch.jumpshare.com/preview/U_N-0kok0QsU33lrHlj2kuZMrDlqTbnSj-8B7AzwjJNVUSDAMCNOvQLdLLk7MT6Q5_uz8zI5YAVhRDj-WHQfWFzi9YRy7meQVD1yXTYlI-U",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
    {
      name: "نورة القحطاني",
      type: "video",
      video: "https://pouch.jumpshare.com/preview/GPUGeZeRvP6ApPrRmd0_x--Nz_tSXMMBuLhMtW_W0EDm_ELOCw8SIU-KHofPfynj180qw6Wz63xgGFhJwl5Vt_Icsf3jI5CWqJGjDWOoqlI",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
    {
      name: "نورة القحطاني",
      type: "video",
      video: "https://pouch.jumpshare.com/preview/NoQ9hBAAaWwpXiIH4zjCwFlHu9l7XBKXssHqanmpXNq_RvB0jjiCycEcvkpO68P-lTSKH2NF66QMNwcCRiQOLn0-bSTjtTK0TKyeJ1JKGyQ",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#030909",
        paddingTop: "40px",
        paddingBottom: "80px",
        marginTop: "-30px",
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
          }}
        >
          آراء العملاء
        </Typography>

        <Slider {...settings}>
          {feedbacks.map((item, index) => (
            <Box key={index} paddingX={2}>
              <Card>
                <CardMedia
                  component="div"
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    overflow: "hidden",
                    borderRadius: "4px",
                  }}
                >
                  {item.type === "image" ? (
                    <Box
                      component="img"
                      src={item.image}
                      alt={`Feedback ${index + 1}`}
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

                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ marginBottom: "10px", textAlign: "center" }}
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
                    sx={{ fontSize: "16px", textAlign: "center" }}
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
