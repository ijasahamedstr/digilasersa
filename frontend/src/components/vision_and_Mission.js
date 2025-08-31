import React from "react";
import { Box, Card, CardContent, Typography, Container } from "@mui/material";

function VisionandMission() {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f3f4",
        backgroundImage: "url(https://i.ibb.co/6JZdkSY0/New-Web-3.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: { xs: "60vh", sm: "80vh" },
        paddingTop: "20px",
        paddingBottom: "20px",
        textAlign: "right",
        marginTop: { xs: "-31px", sm: "-30px" },
        paddingX: { xs: "10px", sm: 0 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Vision */}
        <Card
          sx={{
            background: "rgba(0, 0, 0, 0.7)",
            borderRadius: "8px",
            width: { xs: "100%", sm: "32%" },
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                fontSize: "2rem",
                color: "#0ff5ec",
                fontFamily: "Tajawal",
                fontWeight: "500",
              }}
            >
              رؤيتنا
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.4rem" },
                marginTop: "15px",
                color: "white",
                fontFamily: "Tajawal",
                fontWeight: "500",
              }}
            >
              الريادة في مجال الدعاية والإعلان بتقديم حلول إبداعية تواكب تطلعات
              السوق وتعزز من حضور العلامات التجارية.
            </Typography>
          </CardContent>
        </Card>

        {/* Goal */}
        <Card
          sx={{
            background: "rgba(0, 0, 0, 0.7)",
            borderRadius: "8px",
            width: { xs: "100%", sm: "32%" },
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                fontSize: "2rem",
                color: "#0ff5ec",
                fontFamily: "Tajawal",
                fontWeight: "500",
              }}
            >
              هدفنا
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.4rem" },
                marginTop: "15px",
                color: "white",
                fontFamily: "Tajawal",
                fontWeight: "500",
              }}
            >
              النمو المستدام، وتوسيع قاعدة عملائنا من خلال تقديم قيمة حقيقية
              وجودة عالية وشراكات مبنية على الثقة.
            </Typography>
          </CardContent>
        </Card>

        {/* Mission */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            marginBottom: "50px",
          }}
        >
          <Card
            sx={{
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "8px",
              width: { xs: "100%", sm: "50%", md: "40%" },
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "2rem",
                  color: "#0ff5ec",
                  fontFamily: "Tajawal",
                  fontWeight: "500",
                }}
              >
                رسالتنا
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.4rem" },
                  marginTop: "15px",
                  color: "white",
                  fontFamily: "Tajawal",
                  fontWeight: "500",
                }}
              >
                نقدم خدمات احترافية في الطباعة والتصميم والإعلانات باستخدام أحدث
                التقنيات، مع الالتزام بالجودة والابتكار لرضا عملائنا.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default VisionandMission;
