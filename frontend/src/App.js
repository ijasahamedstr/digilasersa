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
import WebMediaphoto from './components/Web-Media-photo';
import WebMediaVideo from './components/Web-Media-Video';


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
        <Route path="/الرئيسية" element={<Products/>} />
        <Route path="/من نحن" element={<Aboutus/>} />
        <Route path="/الشاشات" element={<ScreensSection/>} />
        <Route path="/الطباعة" element={<PrintingSection/>} />
        <Route path="/الهدايا الدعائية" element={<GiftsSection/>} />
        <Route path="/الإعلام والإنتاج" element={<VRSection/>} />
        <Route path="/التواصل الإجتماعي" element={<SocialSection/>} />
        <Route path="/Web-Media-photo" element={<WebMediaphoto/>} />
        <Route path="/Web-Media-Video" element={<WebMediaVideo/>} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
