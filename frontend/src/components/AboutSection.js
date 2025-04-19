import React from "react";
import { Container, Typography, Box } from "@mui/material";

function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "black",
        backgroundImage: {
          xs: "none", // No background image on small screens
          sm: "url(https://i.ibb.co/dJ33jYt/New-Web-5-copy.webp)", // Background image for larger screens
        },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        margin: "0 auto",
        marginBottom: "0px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: { xs: "-30px", sm: "-30px" },
        position: "relative",
        flexDirection: "column",
        textAlign: "right",
        fontFamily: "Tajawal",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          px: { xs: 2, md: 10 }, // Responsive horizontal padding
          pb: 5,
          boxSizing: "border-box",
          fontFamily: "Tajawal",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#b5dff0",
            textAlign: "right",
            pr: { xs: 1, sm: 3 },
            mb: 2,
            fontSize: { xs: "30px", sm: "50px" },
            fontFamily: "Tajawal",
          }}
        >
          1992 منذ
        </Typography>

        <Box
          className="corner-cut-box"
          sx={{
            position: "relative",
            display: "inline-block",
            pr: 2,
            mb: 4,
            backgroundColor: "#0f3341",
            fontFamily: "Tajawal",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#b5dff0",
              pr: 3,
              pl: 8,
              fontSize: { xs: "30px", sm: "50px" },
              fontFamily: "Tajawal",
            }}
          >
            من نحن
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: "#ffffff",
            textAlign: "right",
            pr: { xs: 1, sm: 3 },
            fontSize: { xs: "20px", sm: "25px" },
            fontFamily: "Tajawal",
          }}
        >
          شركة الليزر الرقمي للدعاية والإعلان
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ffffff",
            textAlign: "right",
            pr: { xs: 1, sm: 3 },
            fontSize: { xs: "20px", sm: "25px" },
            mt: 3,
            fontFamily: "Tajawal",
          }}
        >
          تعتبر من أعرق الشركات وخبرتنا تزيد عن 32 عام ونقدم <br />
          أفضل حلول الدعاية والإعلان منذ عام ١٩٩٢ م
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ffffff",
            textAlign: "right",
            pr: { xs: 1, sm: 3 },
            fontSize: "35px",
            mt: 3,
            fontFamily: "Tajawal",
          }}
        >
          فنحن متخصصون في مجالات متعددة منها
          <ul
            style={{
              textAlign: "right",
              paddingRight: "20px",
              marginTop: "20px",
              direction: "rtl",
              fontSize: "20px",
            }}
          >
            <li>توريد وتركيب الشاشات الرقمية</li>
            <li>الطباعة بكافة أنواعها والهدايا الدعائية</li>
            <li>تصوير الفيديوهات وتغطية المؤتمرات</li>
            <li>إدارة حسابات التواصل الاجتماعي</li>
          </ul>
        </Typography>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          direction: "rtl",
          fontFamily: "Tajawal",
          paddingBottom:'60px'
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#ffffff",
            textAlign: "right",
            pr: { xs: 1, sm: 3 },
            fontSize: { xs: "20px", sm: "25px" },
          }}
        >
          مما أكسبتنا بأن نكون من
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "35px",
            color: "#b5dff0",
            fontFamily: "Tajawal",
          }}
        >
          صناع الإعلان بالمملكة
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutSection;
