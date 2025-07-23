import React from "react";
import { Box, Card, CardContent, Typography, Container } from "@mui/material";

function VisionandMission() {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f3f4",
        backgroundImage: "url(https://i.ibb.co/yy9Fn7t/New-Web-3.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        margin: "0 auto",
        marginBottom: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
        textAlign: "right",
        "@media (max-width: 600px)": {
          minHeight: "60vh",
          marginTop: "0",
          padding: "10px",
          textAlign: "center",
        },
        marginTop: "-30px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            gap: "15px",
          },
        }}
      >
        <Card
          sx={{
            background: "rgba(0, 0, 0, 0.7)",
            borderRadius: "8px",
            width: "35%",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "@media (max-width: 600px)": {
              width: "100%",
              height: "auto",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                fontSize: "2.5rem",
                color: "#0ff5ec",
                fontFamily: "Tajawal",
                fontWeight: "500",
              }}
            >
              رؤيتنا
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                marginTop: "15px",
                color: "white",
                fontFamily: "Tajawal",
                fontWeight: "500",
              }}
            >
              الريادة في مجال الدعاية والإعلان بتقديم حلول إبداعية تواكب تطلعات السوق وتعزز من حضور العلامات التجارية.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            background: "rgba(0, 0, 0, 0.7)",
            borderRadius: "8px",
            width: "35%",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "@media (max-width: 600px)": {
              width: "100%",
              height: "auto",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                fontSize: "2.5rem",
                color: "#0ff5ec",
                fontFamily: "Tajawal",
                fontWeight: "500",
              }}
            >
              هدفنا
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                marginTop: "15px",
                color: "white",
                fontFamily: "Tajawal",
                fontWeight: "500",
              }}
            >
              النمو المستدام، وتوسيع قاعدة عملائنا من خلال تقديم قيمة حقيقية وجودة عالية وشراكات مبنية على الثقة.
            </Typography>
          </CardContent>
        </Card>

        {/* Centered Card for رسالتنا */}
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
              width: "35%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              "@media (max-width: 600px)": {
                width: "100%",
                height: "auto",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "2.5rem",
                  color: "#0ff5ec",
                  fontFamily: "Tajawal",
                  fontWeight: "500",
                }}
              >
                رسالتنا
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  marginTop: "15px",
                  color: "white",
                  fontFamily: "Tajawal",
                  fontWeight: "500",
                }}
              >
                نقدم خدمات احترافية في الطباعة والتصميم والإعلانات باستخدام أحدث التقنيات، مع الالتزام بالجودة والابتكار لرضا عملائنا.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default VisionandMission;
