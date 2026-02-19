import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Box, Typography, IconButton, Slider, Stack } from "@mui/material";
import {
  FaInstagram, FaLinkedin, FaYoutube, FaSnapchat,
  FaTiktok, FaWhatsapp, FaPlay, FaPause, FaVolumeMute, FaVolumeUp
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

// Video Assets
import demoVideo from "./video/slider.mp4";
import demoVideo2 from "./video/V.mp4";
import demoVideo3 from "./video/video_n.mp4";

const carouselItems = [
  { id: 1, type: "video", url: demoVideo, fit: "cover" },
  { id: 2, type: "video", url: demoVideo2, fit: "cover" },
  { id: 3, type: "video", url: demoVideo3, fit: "none" },
];

const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

const FadeCarousel = () => {
  const videoRefs = useRef([]);
  const controlsTimerRef = useRef(null); // Ref for the hide timer
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [showControls, setShowControls] = useState(true); // Control visibility state

  const [videoStates, setVideoStates] = useState(
    carouselItems.map(() => ({ currentTime: 0, duration: 0 }))
  );

  // --- SHOW/HIDE CONTROLS LOGIC ---
  const handleMouseMove = () => {
    setShowControls(true); // Show when mouse moves
    
    // Clear existing timer
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);

    // Hide after 3 seconds of inactivity
    controlsTimerRef.current = setTimeout(() => {
      if (isPlaying) { // Only hide if video is actually playing
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        video.pause();
        if (i !== index) video.currentTime = 0;
      }
    });

    const activeVideo = videoRefs.current[index];
    if (activeVideo && isPlaying) {
      activeVideo.play().catch((err) => console.warn("Autoplay blocked", err));
    }
    setIsUserInteracting(false);
  }, [index, isPlaying]);

  const handleNext = () => setIndex((prev) => (prev + 1) % carouselItems.length);

  const handleTimeUpdate = (idx) => {
    const video = videoRefs.current[idx];
    if (video && idx === index) {
      const time = video.currentTime;
      setVideoStates((prev) => {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], currentTime: time };
        return updated;
      });
      if (!isUserInteracting && time >= 5) handleNext();
    }
  };

  const handleLoadedMetadata = (idx, e) => {
    setVideoStates((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], duration: e.target.duration };
      return updated;
    });
  };

  const handleSeek = (event, newValue) => {
    setIsUserInteracting(true);
    const video = videoRefs.current[index];
    if (video) video.currentTime = newValue;
  };

  const handleManualNav = (idx) => {
    setIsUserInteracting(true);
    setIndex(idx);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Box 
      onMouseMove={handleMouseMove} // Detect movement here
      sx={{ mt: { xs: "100px" }, position: "relative", bgcolor: "black", overflow: "hidden", cursor: showControls ? "default" : "none" }}
    >
      <Carousel
        fade
        activeIndex={index}
        onSelect={(i) => setIndex(i)}
        interval={null}
        indicators={false}
      >
        {carouselItems.map((item, idx) => (
          <Carousel.Item key={item.id}>
            <Box sx={{ position: "relative", height: "80vh", display: "flex", justifyContent: "center" }}>
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={item.url}
                muted={isMuted}
                playsInline
                onEnded={handleNext}
                onTimeUpdate={() => handleTimeUpdate(idx)}
                onLoadedMetadata={(e) => handleLoadedMetadata(idx, e)}
                style={{ height: "100%", width: "100%", objectFit: item.fit }}
              />

              {/* VIDEO CONTROLLER OVERLAY */}
              <Box sx={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.95))",
                p: 4, pt: 12, zIndex: 20,
                // ANIMATION FOR HIDING
                opacity: showControls ? 1 : 0,
                pointerEvents: showControls ? "auto" : "none",
                transition: "opacity 0.5s ease-in-out"
              }}>

                {/* BIG ROUNDED SLIDE INDICATORS */}
                <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mb: 3 }}>
                  {carouselItems.map((_, i) => {
                    const isActive = i === index;
                    return (
                      <Box
                        key={i}
                        onClick={() => handleManualNav(i)}
                        sx={{
                          width: isActive ? 50 : 12,
                          height: 8,
                          borderRadius: 10,
                          bgcolor: isActive ? "#06f9f3" : "rgba(255,255,255,0.25)",
                          cursor: "pointer",
                          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: isActive ? "0px 0px 10px rgba(6, 249, 243, 0.5)" : "none",
                          "&:hover": { bgcolor: "#06f9f3" }
                        }}
                      />
                    );
                  })}
                </Stack>

                {/* SEEK BAR */}
                <Slider
                  size="small"
                  value={videoStates[idx]?.currentTime || 0}
                  max={videoStates[idx]?.duration || 1}
                  onChange={handleSeek}
                  onMouseDown={() => setIsUserInteracting(true)}
                  sx={{
                    color: isUserInteracting ? "#fff" : "#06f9f3", mb: 1.5,
                    '& .MuiSlider-track': { transition: 'none', height: 4 },
                    '& .MuiSlider-rail': { height: 4, opacity: 0.3 },
                    '& .MuiSlider-thumb': {
                      width: 14, height: 14, backgroundColor: '#fff',
                      display: isUserInteracting ? 'block' : 'none'
                    }
                  }}
                />

                {/* CONTROLS & STATUS */}
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton onClick={() => setIsPlaying(!isPlaying)} sx={{ color: "#06f9f3" }}>
                      {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
                    </IconButton>
                    <IconButton onClick={() => setIsMuted(!isMuted)} sx={{ color: "#06f9f3" }}>
                      {isMuted ? <FaVolumeMute size={22} /> : <FaVolumeUp size={22} />}
                    </IconButton>
                    <Typography variant="caption" sx={{ color: "#06f9f3", fontFamily: "monospace", ml: 2, fontSize: '0.9rem' }}>
                      {formatTime(videoStates[idx]?.currentTime)} / {formatTime(videoStates[idx]?.duration)}
                    </Typography>
                  </Stack>

                  <Typography variant="caption" sx={{
                    color: isUserInteracting ? "#fff" : "#06f9f3",
                    fontWeight: 'bold', border: '1.5px solid', px: 2, py: 0.5, borderRadius: 1.5,
                    letterSpacing: 1.2, fontSize: '0.75rem',
                    transition: "0.3s all ease"
                  }}>
                    {isUserInteracting ? "FULL VIEW MODE" : "AUTO-PREVIEW (5S)"}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* SOCIAL SIDEBAR */}
      <Box sx={{
        position: "fixed", top: "50%", left: 0, transform: "translateY(-50%)",
        display: { xs: "none", md: "flex" }, flexDirection: "column", gap: 1.5, zIndex: 1200, pl: 2,
        opacity: showControls ? 1 : 0.3, // Dim sidebar when controls hide
        transition: "opacity 0.5s ease"
      }}>
        {socialLinks.map(({ icon, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer">
            <Box sx={{
              width: 38, height: 38, borderRadius: "50%", backgroundColor: "#06f9f3",
              display: "flex", justifyContent: "center", alignItems: "center", color: "#17202a",
              transition: "0.3s", "&:hover": { transform: "translateX(5px)", backgroundColor: "#fff" },
            }}>
              {icon}
            </Box>
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default FadeCarousel;