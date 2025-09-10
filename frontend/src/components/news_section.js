import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import Slider from "react-slick";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demoVideo1 from "./video/video_new.mp4";
import demoVideo2 from "./video/video_n.mp4";
import demoVideo3 from "./video/Videos.mp4";

// Feedback card component
function FeedbackCard({ item, index }) {
  const [playVideo, setPlayVideo] = useState(false);

  return (
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
            paddingTop: "56.25%", // 16:9 box
            backgroundColor: "#000",
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
                objectFit: "fill", // ✅ updated
                backgroundColor: "#000",
              }}
            />
          ) : !playVideo ? (
            <Box
              onClick={() => setPlayVideo(true)}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={item.poster}
                alt="Video Thumbnail"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill", // ✅ updated
                  backgroundColor: "#000",
                }}
              />
              <PlayCircleFilledWhiteIcon
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "64px",
                  color: "#DBD9D9",
                }}
              />
            </Box>
          ) : (
            <video
              controls
              autoPlay
              muted
              playsInline
              poster={item.poster}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "fill", // ✅ updated
                backgroundColor: "#000",
              }}
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
  );
}

// Main component
function Newssection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const feedbacks = [
    {
      name: "م / محمد الجاسم",
      type: "image",
      image:
        "https://i.ibb.co/MkFnqKvs/Whats-App-Image-2025-07-19-at-09-30-29-e5bb216a.webp",
      stars: 5,
      text: "شركة الليزر هي الافضل دايما في الشاشات 😍🤝",
    },
    {
      name: "المحامي بدر الزعبي ",
      type: "video",
      isLocal: true,
      video: demoVideo1,
      poster: "https://i.ibb.co/svBQkN62/ezgif-frame-002-1.webp",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
    {
      name: "م / محمد الجاسم",
      type: "image",
      image:
        "https://i.ibb.co/rKT1n34T/Whats-App-Image-2025-09-09-at-9-28-03-PM.webp",
      stars: 5,
      text: "شركة الليزر هي الافضل دايما في الشاشات 😍🤝",
    },
    {
      name: "المحامي محمد البلوشى",
      type: "video",
      isLocal: true,
      video: demoVideo2,
      poster: "https://i.ibb.co/4RwrX7QC/ezgif-frame-001.webp",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
      {
      name: "م / محمد الجاسم",
      type: "image",
      image:
        "https://i.ibb.co/wNBTxp6p/Whats-App-Image-2025-09-09-at-9-28-04-PM.webp",
      stars: 5,
      text: "شركة الليزر هي الافضل دايما في الشاشات 😍🤝",
    },
    {
      name: "كابتن بوربيعة وكابتن مازن",
      type: "video",
      isLocal: true,
      video: demoVideo3,
      poster: "https://i.ibb.co/1Yz3mRYb/ezgif-frame-001.webp",
      stars: 4,
      text: "تجربة ممتازة وجودة عالية. شكرًا لكم.",
    },
    {
      name: "م / محمد الجاسم",
      type: "image",
      image:
        "https://i.ibb.co/HDts0yfq/Whats-App-Image-2025-09-09-at-9-28-02-PM.webp",
      stars: 5,
      text: "شركة الليزر هي الافضل دايما في الشاشات 😍🤝",
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
        paddingRight: "30px",
        paddingLeft: "30px",
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
            <FeedbackCard key={index} item={item} index={index} />
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default Newssection;
