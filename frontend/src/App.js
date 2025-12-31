import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography, Fade } from "@mui/material";
import Confetti from "react-confetti"; // npm i react-confetti

// Components
import ResponsiveAppBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Aboutus from "./components/About";
import ScreensSection from "./components/ScreensSection";
import PrintingSection from "./components/PrintingSection";
import GiftsSection from "./components/GiftsSection";
import SocialSection from "./components/SocialSection";
import VRSection from "./components/VR";
import Undercontration from "./components/undercontration";
import Outdoorled from "./components/screen/outdoorled";
import WebMediaphoto from "./components/Media/Web-Media-photo";
import WebMediaVideo from "./components/Media/Web-Media-Video";
import IndoorScreen from "./components/screen/IndoorScreen";
import TextDisplayScreen from "./components/screen/TextDisplayScreen";
import ElectronicScreens from "./components/screen/ElectronicScreens";
import InteractiveScreens from "./components/screen/InteractiveScreens";
import MeterScreens from "./components/screen/Meterscreens";
import CountingScreen from "./components/screen/CountingScreen";
import VRVideos from "./components/Media/VRVideos";
import Motiongraphics from "./components/Media/Motiongraphics";
import AIVideos from "./components/Media/AIVideos";
import Animation from "./components/Media/3DAnimation";
import UpdateFild from "./components/Update";
import ComingSoonPage from "./components/ComingSoonPage";
import ContactusForm from "./components/Contact";
import SoundSection from "./components/Sound";
import WebsiteSection from "./components/websiteSection";
import FineArts from "./components/FineArts";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
  typography: {
    fontFamily: "Changa, sans-serif",
  },
});

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [footerVisible, setFooterVisible] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          // Start confetti
          setShowConfetti(true);

          // Stop confetti after 15 seconds
          setTimeout(() => {
            setShowConfetti(false);
            setLoading(false); // exit loader AFTER celebration
          }, 8000); // 15 SECONDS

          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle, #001219 0%, #000000 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Celebration Confetti */}
        {showConfetti && (
          <Confetti
            numberOfPieces={600}
            recycle={true}
            gravity={0.12}
            wind={0.02}
            tweenDuration={15000}
            colors={["#00fffc", "#fdf0d5", "#c1121f", "#ffd166", "#06d6a0"]}
          />
        )}

        {/* Futuristic 2026 Logo Container */}
        <Box sx={{ position: "relative", textAlign: "center", mb: 4 }}>
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: "900",
              fontSize: { xs: "5rem", md: "8rem" },
              letterSpacing: "10px",
              textShadow: "0 0 20px #00fffc, 0 0 40px #00fffc",
              opacity: progress / 100,
            }}
          >
            2026
          </Typography>
          <Typography
            sx={{
              color: "#00fffc",
              fontSize: "1.2rem",
              fontWeight: "bold",
              letterSpacing: "5px",
              mt: -2,
            }}
          >
            HAPPY NEW YEAR
          </Typography>
        </Box>

        {/* Company Logo */}
        <Box
          component="img"
          src="https://i.ibb.co/hRZ1bMy/78-removebg-preview.png"
          sx={{ width: "120px", mb: 3, filter: "brightness(0) invert(1)" }}
        />

        {/* Loading Bar with Percentage */}
        <Box sx={{ width: "300px", textAlign: "center" }}>
          <Box
            sx={{
              width: "100%",
              height: "4px",
              bgcolor: "rgba(255,255,255,0.1)",
              borderRadius: "10px",
              mb: 1,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: `${progress}%`,
                height: "100%",
                bgcolor: "#00fffc",
                boxShadow: "0 0 10px #00fffc",
                transition: "width 0.1s linear",
              }}
            />
          </Box>
          <Typography
            sx={{ color: "#fff", fontSize: "0.9rem", fontFamily: "monospace" }}
          >
            {progress}% INITIALIZING CELEBRATION...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Fade in={!loading} timeout={1200}>
        <Box>
          <Router>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/الرئيسية" element={<Home />} />
              <Route path="/من نحن" element={<Aboutus setFooterVisible={setFooterVisible} />} />
              <Route path="/قسم البرمجيات" element={<WebsiteSection />} />
              <Route path="/منصة صيانة الشاشات" element={<ComingSoonPage />} />
              <Route path="/قسم الشاشات" element={<ScreensSection />} />
              <Route path="/قسم الطباعة" element={<PrintingSection />} />
              <Route path="/قسم الهدايا الدعائية" element={<GiftsSection />} />
              <Route path="/الإعلام والإنتاج" element={<VRSection />} />
              <Route path="/قسم السوشيال ميديا" element={<SocialSection />} />
              <Route path="/Web-Media-photo" element={<WebMediaphoto />} />
              <Route path="/Web-Media-Video" element={<WebMediaVideo />} />
              <Route path="/قسم الإعلام والميديا" element={<VRSection />} />
              <Route path="/media-department" element={<VRSection />} />
              <Route path="/شركائنا" element={<Undercontration />} />
              <Route path="/Outdoor-LED" element={<Outdoorled />} />
              <Route path="/Indoor-Screen" element={<IndoorScreen />} />
              <Route path="/TextDisplay-Screen" element={<TextDisplayScreen />} />
              <Route path="/ElectronicScreens" element={<ElectronicScreens />} />
              <Route path="/InteractiveScreens" element={<InteractiveScreens />} />
              <Route path="/Meterscreens" element={<MeterScreens />} />
              <Route path="/CountingScreen" element={<CountingScreen />} />
              <Route path="/vr-videos" element={<VRVideos />} />
              <Route path="/Motion-graphics" element={<Motiongraphics />} />
              <Route path="/AIVideos" element={<AIVideos />} />
              <Route path="/3D-Animation" element={<Animation />} />
              <Route path="/اتصل بنا" element={<ContactusForm />} />
              <Route path="/update/:id" element={<UpdateFild />} />
              <Route path="/قسم الصوتيات" element={<SoundSection />} />
              <Route path="/قسم الفن التشكيلي" element={<FineArts />} />
            </Routes>
            {footerVisible && <Footer />}
          </Router>
        </Box>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
