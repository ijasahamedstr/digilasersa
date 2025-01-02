import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Home from './components/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer';
import Products from './components/Products';
import Aboutus from './components/About';
import ScreensSection from './components/ScreensSection';
import PrintingSection from './components/PrintingSection';
import GiftsSection from './components/GiftsSection';
import SocialSection from './components/SocialSection';
import VRSection from './components/VR';
import Undercontration from './components/undercontration';
import Outdoorled from './components/screen/outdoorled';
import WebMediaphoto from './components/Media/Web-Media-photo';
import WebMediaVideo from './components/Media/Web-Media-Video';


const theme = createTheme({
  typography: {
    fontFamily: 'Changa, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} >
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/الرئيسية" element={<Home/>} />
        <Route path="/الرئيسية" element={<Products/>} />
        <Route path="/من نحن" element={<Aboutus/>} />
        <Route path="/الشاشات" element={<ScreensSection/>} />
        <Route path="/الطباعة" element={<PrintingSection/>} />
        <Route path="/الهدايا الدعائية" element={<GiftsSection/>} />
        <Route path="/الإعلام والإنتاج" element={<VRSection/>} />
        <Route path="/التواصل الإجتماعي" element={<SocialSection/>} />
        <Route path="/Web-Media-photo" element={<WebMediaphoto/>} />
        <Route path="/Web-Media-Video" element={<WebMediaVideo/>} />
        <Route path="/screens-department" element={<ScreensSection/>} />
        <Route path="/printing-department" element={<PrintingSection/>} />
        <Route path="/gift-department" element={<GiftsSection/>} />
        <Route path="/media-department" element={<VRSection/>} />
        <Route path="/media-department" element={<VRSection/>} />
        <Route path="/social-media-department" element={<SocialSection/>} />
        <Route path="/شركائنا" element={<Undercontration/>} />
        <Route path="/Outdoor-LED" element={<Outdoorled/>} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
