import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import Home from "./components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const theme = createTheme({
  typography: {
    fontFamily: "Changa, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/الرئيسية" element={<Home />} />
          <Route path="/الرئيسية" element={<Products />} />
          <Route path="/من نحن" element={<Aboutus />} />
          <Route path="/قسم البرمجيات" element={<ComingSoonPage />} />
          <Route path="/منصة صيانة الشاشات" element={<ComingSoonPage />} />
          <Route path="/قسم الفن التشكيلي" element={<ComingSoonPage />} />
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
          <Route path="/قسم الصوتيات" element={<ComingSoonPage />} />
          <Route path="/vr-videos" element={<VRVideos />} />
          <Route path="/Motion-graphics" element={<Motiongraphics />} />
          <Route path="/AIVideos" element={<AIVideos />} />
          <Route path="/3D-Animation" element={<Animation />} />
          <Route path="/إتصل بنا" element={<ContactusForm />} />
          <Route path="/update/:id" element={<UpdateFild />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
