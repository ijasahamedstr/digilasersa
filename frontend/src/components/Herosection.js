import { Container, Typography } from "@mui/material";

function Herosection() {
  return (
    <section
      style={{
        backgroundColor: "#f2f3f4",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
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
            // Keep text in one row and scale size for mobile
            whiteSpace: "nowrap",
            fontSize: { xs: "18px", sm: "24px", md: "inherit" }, 
          }}
        >
          <span 
            style={{ 
              // Responsive font size for the highlighted word
              fontSize: "clamp(24px, 8vw, 50px)", 
              color: "" 
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
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontFamily: "Tajawal",
          }}
        >
          نسرد قصة الإعلان بشكل مختلف تبصره العين وينبهر به العقل ، ويجد مكانا
          في خيال الناس
        </Typography>
      </Container>
    </section>
  );
}

export default Herosection;