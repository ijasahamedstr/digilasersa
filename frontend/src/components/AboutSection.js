import { Container, Typography, Box } from "@mui/material";

function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "black",
        backgroundImage: {
          xs: "none",
          sm: "url(https://i.ibb.co/QFqF2g1B/image.webp)",
        },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
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
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row-reverse",
          },
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 10 },
          pb: 5,
          boxSizing: "border-box",
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            direction: "ltr",
          }}
        >
          <Box
            className="corner-cut-box"
            sx={{
              position: "relative",
              display: "inline-block",
              pr: 2,
              mb: 4,
              backgroundColor: "#0f3341",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#b5dff0",
                pr: 3,
                pl: 8,
                fontSize: { xs: "30px", sm: "50px" },
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
            }}
          >
            فنحن متخصصون في مجالات متعددة منها
          </Typography>

          <Box
            component="ul"
            sx={{
              textAlign: "right",
              paddingRight: "20px",
              marginTop: "20px",
              direction: "rtl",
              fontSize: "20px",
              color: "#ffffff",
              listStyleType: "disc",
            }}
          >
            <li>توريد وتركيب الشاشات الرقمية</li>
            <li>الطباعة بكافة أنواعها والهدايا الدعائية</li>
            <li>تصوير الفيديوهات وتغطية المؤتمرات</li>
            <li>إدارة حسابات التواصل الاجتماعي</li>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              textAlign: "right",
              pr: { xs: 1, sm: 3 },
              fontSize: { xs: "20px", sm: "25px" },
              mt: 3,
            }}
          >
            مما أكسبتنا بأن نكون من
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#b5dff0",
              textAlign: "right",
              pr: { xs: 1, sm: 3 },
              fontSize: { xs: "30px", sm: "40px" },
            }}
          >
            صناع الإعلان بالمملكة
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src="https://i.ibb.co/fdkx14Lv/321.png"
            alt="شعار من نحن"
            sx={{
              maxWidth: "300px",
              paddingTop:'20px',
              width: { xs: "80%", sm: "60%", md: "50%" },
              height: "auto",
              mb: { xs: "-100px", sm: "-200px", md: "-300px" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default AboutSection;
