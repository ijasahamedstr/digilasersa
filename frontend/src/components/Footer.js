import React from "react";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { Twitter, Instagram, LinkedIn, YouTube, WhatsApp } from "@mui/icons-material";
import { FaSnapchat, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();
  const isAboutPage = location.pathname.includes("من نحن");

  return (
    <>
      <Box sx={styles.section}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <RightTextSection />

            {/* When NOT on the about page show the single "سؤال" button instead of the form */}
            {!isAboutPage && <AskButtonSection />}
          </Grid>
        </Container>
      </Box>

      {/* Footer AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#212121", color: "#fff" }}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "15px",
            }}
          >
            <Grid container justifyContent="center" spacing={1}>
              {[
                { icon: <WhatsApp />, label: "whatsapp", url: "http://wa.me/966571978888" },
                { icon: <Instagram />, label: "instagram", url: "https://www.instagram.com/digilasersa" },
                { icon: <FaTiktok />, label: "tiktok", url: "https://www.tiktok.com/@digilasersa" },
                { icon: <FaSnapchat />, label: "snapchat", url: "https://www.snapchat.com/add/digilasersa" },
                { icon: <Twitter />, label: "twitter", url: "https://x.com/digilasersa" },
                { icon: <YouTube />, label: "youtube", url: "https://youtube.com/@digilaserSa" },
                { icon: <LinkedIn />, label: "linkedin", url: "https://www.linkedin.com/company/digilasersa" },
              ].map(({ icon, label, url }) => (
                <Grid item key={label}>
                  <IconButton
                    color="inherit"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #fff",
                      color: "#0ff5ec",
                    }}
                  >
                    {icon}
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Toolbar>
        </Container>

        <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)", py: 1 }}>
          <Typography variant="body2" align="center">
            © 2025 Copyright: All Rights Reserved
          </Typography>
        </Box>
      </AppBar>
    </>
  );
}

// ================================
// Right Text Section
// ================================
function RightTextSection() {
  const location = useLocation();
  const decodedPath = decodeURIComponent(location.pathname);
  const isHome = decodedPath === "/" || decodedPath === "/الرئيسية";

  // ✅ للإستفسارات العامة → 0571978888  (966571978888)
  const inquiryLocalNumber = "0571978888";
  const inquiryInternationalNumber = `966${inquiryLocalNumber.replace(/^0+/, "")}`; // 966571978888
  const inquiryWhatsappUrl = `https://wa.me/${inquiryInternationalNumber}?text=${encodeURIComponent(
    "👋 مرحبًا، أود الاستفسار."
  )}`;

  // ✅ للشكاوى → يبقى على الرقم السابق 966505868888
  const complaintNumber = "966505868888";
  const complaintWhatsappUrl = `https://wa.me/${complaintNumber}?text=${encodeURIComponent(
    "👋 مرحبًا، لدي شكوى."
  )}`;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 2, md: 0 },
        textAlign: "center",
      }}
    >
      {/* زر للإستفسارات العامة (Home فقط) */}
      {isHome && (
        <>
          <Typography
            variant="h5"
            sx={{
              mb: 1,
              color: "#fff",
              direction: "rtl",
            }}
          >
            للإستفسارات العامة
          </Typography>

          <Button
            variant="contained"
            href={inquiryWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsApp />}
            sx={{
              backgroundColor: "#00fffc",
              color: "#0a0a0aff",
              fontWeight: "bold",
              fontSize: "18px",
              px: 4,
              py: 1.2,
              mb: 10,
              borderRadius: "30px",
              width: { xs: "80%", sm: "60%", md: "40%" },
              animation: "blinker 1.2s linear infinite",
              "@keyframes blinker": {
                "50%": { opacity: 0.3 },
              },
            }}
          >
            اضغط هنا
          </Button>
        </>
      )}

      {/* 🔵 Heading Above the complaints Button */}
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          color: "#FFFF",
          direction: "rtl",
        }}
      >
        {isHome ? "للشكاوى" : "للشكاوى"}
      </Typography>

      <Button
        variant="contained"
        href={complaintWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<WhatsApp />}
        sx={{
          backgroundColor: "#00fffc",
          color: "#0a0a0aff",
          fontWeight: "bold",
          fontSize: "18px",
          px: 4,
          py: 1.2,
          mb: 2,
          borderRadius: "30px",
          width: { xs: "80%", sm: "60%", md: "40%" },
          animation: "blinker 1.2s linear infinite",
          "@keyframes blinker": {
            "50%": { opacity: 0.3 },
          },
        }}
      >
        اضغط هنا
      </Button>
    </Grid>
  );
}

// ================================
// Ask Button Section (replaces the form)
// ================================
function AskButtonSection() {
  const location = useLocation();
  const decodedPath = decodeURIComponent(location.pathname);
  const isHome = decodedPath === "/" || decodedPath === "/الرئيسية";

  // زر الاستفسار / الطلب (نفس الرقم 0571978888)
  const localNumber = "0571978888";
  const internationalNumber = `966${localNumber.replace(/^0+/, "")}`; // => 966571978888
  const presetText = "👋 مرحبًا، لدي سؤال.";
  const whatsappUrl = `https://wa.me/${internationalNumber}?text=${encodeURIComponent(presetText)}`;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        textAlign: "justify",
        pr: 5,
        mt: { xs: 0, md: 0 },
      }}
    >
      {/* عنوان واتصل بنا (Home فقط) */}
      {isHome && (
        <Typography
          variant="h4"
          color="white"
          sx={{ fontSize: { xs: "22px", md: "30px" } }}
        >
          اتصل بنا
        </Typography>
      )}

      {isHome && (
        <Grid
          container
          spacing={2}
          sx={{
            pt: 3,
            mt: "20px",
            direction: "rtl",
            alignItems: "center",
            mr: { xs: 0, sm: 0, md: 0 },
          }}
        >
          {[
            { label: "رقم الاتصال", value: "8888 197 057" },
            { label: "بريد إلكتروني", value: "info@digilaser.sa" },
          ].map(({ label, value }) => (
            <React.Fragment key={label}>
              <Grid item xs={4}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    fontSize: { xs: "17px", md: "30px" },
                    textAlign: "right",
                  }}
                >
                  {label}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    fontSize: { xs: "17px", md: "30px" },
                    textAlign: "right",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    fontSize: { xs: "17px", md: "30px" },
                    textAlign: "right",
                  }}
                >
                  {value}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      )}

      {!isHome && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* 🔵 Heading Above Button (non-home pages) */}
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: "#fff",
              direction: "rtl",
            }}
          >
            للطلب والإستفسار
          </Typography>

          <Button
            variant="contained"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsApp />}
            sx={{
              backgroundColor: "#00fffc",
              color: "#0a0a0aff",
              fontWeight: "bold",
              fontSize: "18px",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              width: { xs: "80%", sm: "60%", md: "40%" },
              animation: "blinker 1.2s linear infinite",
              "@keyframes blinker": {
                "50%": { opacity: 0.3 },
              },
            }}
          >
            اضغط هنا
          </Button>
        </Box>
      )}
    </Grid>
  );
}

// ================================
// Styles
// ================================
const styles = {
  section: {
    backgroundColor: "#000",
    backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 0", // Top/Bottom padding
    mt: "-30px",
    direction: "ltr",
  },
};
