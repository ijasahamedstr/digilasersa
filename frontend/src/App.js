import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Home from "./components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CircularProgress } from "@mui/material"; // ✅ Added import
import Footer from "./components/Footer";
import Products from "./components/Products";
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
// import Votemain from "./components/Votemain";
// import Vote from "./components/Vote";
// import VoteImage from "./components/Voteimage";

const theme = createTheme({
  typography: {
    fontFamily: "Changa, sans-serif",
  },
});

function App() {
  const [loading, setLoading] = useState(true);
  const [footerVisible, setFooterVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // show splash for 2s
    return () => clearTimeout(timer);
  }, []);

  // --- Splash Screen Overlay ---
  if (loading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          flexDirection: "column",
          p: 2,
        }}
      >
        <Box
          component="img"
          src="https://i.ibb.co/hRZ1bMy/78-removebg-preview.png"
          alt="Company Logo"
          sx={{
            width: { xs: "70%", sm: "50%", md: "40%", lg: "30%" },
            maxWidth: "500px",
            height: "auto",
            mb: 2,
          }}
        />
        <CircularProgress sx={{ color: "#00fffc" }} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/الرئيسية" element={<Home />} />
          <Route path="/من نحن" element={<Aboutus setFooterVisible={setFooterVisible} />} />
          <Route path="/قسم البرمجيات" element={<WebsiteSection/>} />
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
          <Route path="/إتصل بنا" element={<ContactusForm />} />
          <Route path="/update/:id" element={<UpdateFild />} />
          <Route path="/قسم الصوتيات" element={<SoundSection />} />
          <Route path="/قسم الفن التشكيلي" element={<ComingSoonPage />} />
          {/* <Route path="/تصويت" element={<Vote />} />
          <Route path="/قسم الفن التشكيلي" element={<Votemain />} />
          <Route path="/تصويت" element={<Vote />} />
          <Route path="/لوحات الكنفس" element={<VoteImage />} /> */}
        </Routes>
         {footerVisible && <Footer />}
      </Router>
    </ThemeProvider>
  );
}

export default App;
