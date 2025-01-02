import React from "react";
import { Container, Typography } from "@mui/material";

const sectionStyles = {
  backgroundColor: 'Black',
  backgroundImage: 'url(https://i.ibb.co/dJ33jYt/New-Web-5-copy.webp)', // Default background image
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  margin: '0 auto',
  marginBottom: '0px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
  marginTop: '-30px',
  position: 'relative',
  flexDirection: 'column',
  textAlign: 'right',
  fontFamily: 'Tajawal',
  '@media (max-width: 600px)': {
    marginTop: '0',
    padding: '10px',
    backgroundColor: 'black',  // Keep background color black
    backgroundImage: 'none',   // Remove background image on small screens
  },
};

const containerStyles = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '0 20px', // Default padding
  boxSizing: 'border-box',
  paddingBottom:'40px',
  fontFamily: 'Tajawal',
  '@media (min-width: 1024px)': { // For desktop view (larger screens)
    paddingRight: '80px', // Change padding-right for desktop

  },
};

const typographyHeadingStyles = {
  color: '#b5dff0',
  textAlign: 'right',
  paddingRight: '20px',
  marginBottom: '20px',
  fontSize: '50px',
  '@media (max-width: 600px)': {
    fontSize: '30px',
    paddingRight: '10px',
  },
  fontFamily: 'Tajawal'
};

const typographyBodyStyles = {
  color: '#ffffff',
  textAlign: 'right',
  paddingRight: '20px',
  fontSize: '25px',
  '@media (max-width: 600px)': {
    fontSize: '20px',
    paddingRight: '10px',
  },
  fontFamily: 'Tajawal'
};

const cornerCutBoxStyles = {
  position: 'relative',
  display: 'inline-block',
  paddingRight: '20px',
  marginBottom: '30px',
  backgroundColor: '#0f3341',
  fontFamily: 'Tajawal'
};

function AboutSection() {
  return (
    <section style={sectionStyles}>
      <Container maxWidth="xxl" sx={containerStyles}>
        <Typography variant="h4" sx={typographyHeadingStyles}>
          1992 منذ
        </Typography>

        <div className="corner-cut-box" style={cornerCutBoxStyles}>
          <Typography variant="h4" sx={{ ...typographyHeadingStyles, paddingLeft: '60px' }}>
            من نحن
          </Typography>
        </div>

        <Typography variant="body1" sx={typographyBodyStyles}>
          شركة الليزر الرقمي للدعاية والإعلان
        </Typography>
        <Typography variant="body1" sx={{ ...typographyBodyStyles, marginTop: '30px' }}>
          تعتبر من أعرق الشركات وخبرتنا تزيد عن 32 عام ونقدم <br />
          أفضل حلول الدعاية والإعلان منذ عام ١٩٩٢ م
        </Typography>

        <Typography variant="body1" sx={{ ...typographyBodyStyles, fontSize: '35px', marginTop: '30px' }}>
          فنحن متخصصون في مجالات متعددة منها
          <ul
            style={{
              textAlign: 'right',
              paddingRight: '20px',
              marginTop: '20px',
              direction: 'rtl',
              fontSize: '20px',
              '@media (max-width: 600px)': {
                fontSize: '15px',
                paddingRight: '10px',
              },
            }}
          >
            <li>توريد وتركيب الشاشات الرقمية</li>
            <li>الطباعة بكافة أنواعها والهدايا الدعائية</li>
            <li>تصوير الفيديوهات وتغطية المؤتمرات</li>
            <li>إدارة حسابات التواصل الاجتماعي</li>
          </ul>
        </Typography>
      </Container>

      <Container maxWidth="xl" sx={{ ...containerStyles, direction: 'rtl' }}>
        <Typography variant="body1" sx={typographyBodyStyles}>
          مما أكسبتنا بأن نكون من
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '35px', color: '#b5dff0', fontFamily: 'Tajawal' }}>
          صناع الإعلان بالمملكة
        </Typography>
      </Container>
    </section>
  );
}

export default AboutSection;
