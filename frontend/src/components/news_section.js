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
      name: "أحمد العتيبي",
      image: "https://via.placeholder.com/300x200",
      stars: 5,
      text: "خدمة رائعة وسريعة جدًا! أنصح بالتعامل معهم بشدة.",
    },
    {
      name: "نورة القحطاني",
      image: "https://via.placeholder.com/300x200",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
    {
      name: "سعيد الغامدي",
      image: "https://via.placeholder.com/300x200",
      stars: 5,
      text: "التعامل راقٍ والخدمة احترافية جدًا.",
    },
    {
      name: "رهف الشهري",
      image: "https://via.placeholder.com/300x200",
      stars: 5,
      text: "أنصح الجميع بتجربتهم، كانوا في قمة الاحترافية.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#030909",
        paddingTop: "40px",
        paddingBottom: "80px",
        marginTop:'-30px'
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
                  component="img"
                  height="200"
                  image={item.image}
                  alt={`Customer ${index + 1}`}
                />
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
