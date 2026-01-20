import { Container, Typography, Box } from "@mui/material";

function Herosection() {
  return (
    // Wrapper Box for background color and section padding
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: "Tajawal",
            whiteSpace: "nowrap",
            fontSize: { xs: "18px", sm: "24px", md: "40px" }, 
            color: "#1a1a1a"
          }}
        >
          <span 
            style={{ 
              fontSize: "clamp(24px, 8vw, 50px)", 
              // color: "#c5a059" // Elegant Gold/Bronze accent
            }}
          >
            قصتنا{" "}
          </span>
          صناع الإعلان بالمملكة
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginTop: "15px",
            marginBottom: "40px", // Space between text and image
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontFamily: "Tajawal",
            color: "#555",
            maxWidth: "700px",
            marginX: "auto"
          }}
        >
          نسرد قصة الإعلان بشكل مختلف تبصره العين وينبهر به العقل ، ويجد مكانا
          في خيال الناس
        </Typography>

        <Box
          component="img"
          src="https://i.ibb.co/gZXS9ppL/32-1-1.webp"
          alt="Logo"
          sx={{
            width: { xs: "200px", sm: "300px", md: "400px", lg: "450px" }, 
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            pb: { xs: 4, md: 6 }, // <--- IMAGE BOTTOM PADDING
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        />
      </Container>
  );
}

export default Herosection;