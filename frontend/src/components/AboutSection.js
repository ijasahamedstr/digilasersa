import { Container, Typography, Box } from "@mui/material";

function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "black",
        backgroundImage: {
          xs: "none",
          sm: "url(https://i.ibb.co/pBZ8sHC2/image.webp)",
        },
        backgroundSize: "cover",
        backgroundPosition: "center", // ✅ Center background image
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
              marginBottom: "60px",
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
            تأسست شركة الليزر عام 1992 م <br />
            والتى تعتبر من أعرق شركات الدعاية والإعلان <br />
            والتى تزيد عن 32 عام من الثقة بالسوق السعودي
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
              marginBottom: "20px",
              direction: "rtl",
              fontSize: { xs: "18px", sm: "20px" },
              color: "#ffffff",
              listStyleType: "square",
              "& li::marker": {
                color: "rgb(6, 247, 243)",
              },
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
              pr: "80px",
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
            src="https://i.ibb.co/3mNGQWmG/32-1.webp"
            alt="شعار من نحن"
            loading="lazy"
            sx={{
              maxWidth: "300px",
              paddingTop: "20px",
              width: { xs: "80%", sm: "60%", md: "50%" },
              height: "auto",
              mb: { xs: "-60px", sm: "-150px", md: "-250px" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default AboutSection;
