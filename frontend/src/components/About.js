import { Container, Typography, Box, Card, CardContent } from "@mui/material";

const Aboutus = () => {
  return (
    <>
      {/* Section: About Us */}
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
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "100px",
          paddingBottom: "100px",
          marginTop: { xs: "-30px", sm: "60px" },
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
            fontFamily: "Tajawal",
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

            <Box sx={{ mt: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#ffffff",
                  textAlign: "right",
                  pr: { xs: 1, sm: 3 },
                  fontSize: "35px",
                }}
              >
                فنحن متخصصون في مجالات متعددة منها
              </Typography>
              <ul
                style={{
                  textAlign: "right",
                  paddingRight: "20px",
                  marginTop: "20px",
                  direction: "rtl",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                <li>توريد وتركيب الشاشات الرقمية</li>
                <li>الطباعة بكافة أنواعها والهدايا الدعائية</li>
                <li>تصوير الفيديوهات وتغطية المؤتمرات</li>
                <li>إدارة حسابات التواصل الاجتماعي</li>
              </ul>
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
              alt="About Us Visual"
              sx={{
                maxWidth: "300px",
                width: { xs: "80%", sm: "60%", md: "50%" },
                height: "auto",
                marginBottom: "-350px",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Section: Vision, Mission, Goal */}
      <Box
        sx={{
          backgroundColor: "#f2f3f4",
          backgroundImage: "url(https://i.ibb.co/yy9Fn7t/New-Web-3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          paddingTop: "20px",
          paddingBottom: "20px",
          textAlign: "right",
          marginTop: "-30px",
          "@media (max-width: 600px)": {
            minHeight: "60vh",
            padding: "10px",
            textAlign: "center",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: { xs: 2, sm: 3, md: 5 },
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
          {/* Vision Card */}
          <Card
            sx={{
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "8px",
              width: "35%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
              "@media (max-width: 600px)": {
                width: "100%",
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
                  fontSize: "1.5rem",
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

          {/* Goal Card */}
          <Card
            sx={{
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "8px",
              width: "35%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
              "@media (max-width: 600px)": {
                width: "100%",
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
                  fontSize: "1.5rem",
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

          {/* Message Card */}
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
                "@media (max-width: 600px)": {
                  width: "100%",
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
                    fontSize: "1.5rem",
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
    </>
  );
};

export default Aboutus;
