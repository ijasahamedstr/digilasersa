import React from "react";
import { Box, Card, CardContent, Typography, Container } from "@mui/material";

function VisionandMission() {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f3f4",
        backgroundImage: "url(https://i.ibb.co/BzJcb6d/New-Web-3.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        margin: "0 auto",
        marginBottom: "0px",
        display: "flex",
        justifyContent: "center", // Center content horizontally
        alignItems: "center", // Align items vertically
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
      }}
    >
      <Container
        sx={{
          maxWidth: "lg", // Use a larger container size
          display: "flex",
          justifyContent: "center", // Center cards horizontally
          alignItems: "center",
          gap: "80px", // Increased gap between the cards
          flexDirection: "row",
          "@media (max-width: 600px)": {
            flexDirection: "column", // Stack the cards vertically on smaller screens
            textAlign: "center", // Center text on smaller screens
            gap: "40px", // Reduce gap between stacked cards on smaller screens
            marginBottom:'0px'
          },
        }}
      >
        <Card
          sx={{
            background: "rgba(255, 255, 255, 0.8)",
            padding: "30px", // Increased padding for a larger card
            borderRadius: "8px",
            width: "45%", // Slightly reduced width for more space between cards
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Larger shadow for emphasis
            textAlign: "center",
            "@media (max-width: 600px)": {
              width: "90%", // Increased width on mobile
            },
          }}
        >
          <CardContent>
            <Typography variant="h4" sx={{ fontSize: "1.8rem", color: '#17202a' }}>
              رؤيتنا
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "15px" }}>
              تصنيع تكنولوجيا المستقبل، وإبهار العملاء بتقنياتنا الحديثة ومنتجاتنا عالية الجودة. وخدماتنا المتميزة، نحن نؤمن بأن الابتكار والتطوير هما الطريقة الأمثل لتحقيق أهدافنا
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            background: "rgba(255, 255, 255, 0.8)",
            padding: "30px", // Increased padding for a larger card
            borderRadius: "8px",
            width: "45%", // Slightly reduced width for more space between cards
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Larger shadow for emphasis
            textAlign: "center",
            "@media (max-width: 600px)": {
              width: "90%", // Increased width on mobile
            },
          }}
        >
          <CardContent>
            <Typography variant="h4" sx={{ fontSize: "1.8rem", color: '#17202a' }}>
              هدفنا
            </Typography>
            <Typography sx={{ fontSize: "1rem", marginTop: "15px" }}>
              تعد شركة الليزر الرقمي من دعائم الإعلام في المملكة منذ نشأتها وغير أكثر من ثلاثين عاماً تتبني إستراتيجية التطور لمواكبة احتياجات عملائنا وتطلعاتهم نحو مستقبل
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default VisionandMission;
