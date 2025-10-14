import { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Grid,
  Modal,
  IconButton,
} from "@mui/material";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Close } from "@mui/icons-material";

const VoteImage = () => {
  const [loading, setLoading] = useState(true);
  const [votingActive, setVotingActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const votingStart = new Date("2025-10-10T00:00:00");
  const votingEnd = new Date("2025-10-20T23:59:59");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      checkVotingStatus();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const checkVotingStatus = () => {
    const now = new Date();
    setVotingActive(now >= votingStart && now <= votingEnd);
  };

  const socialLinks = [
    { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
    { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
    { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
    { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
    { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
    { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
    { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
  ];

  const imageOptions = [
    { id: 1, src: "https://i.ibb.co/j9dpqCym/Whats-App-Image-2025-10-13-at-7-46-37-PM.webp" },
    { id: 2, src: "https://i.ibb.co/hR0rqF5t/Whats-App-Image-2025-10-13-at-7-46-37-PM-1.webp" },
    { id: 3, src: "https://i.ibb.co/HfK0QnH8/Whats-App-Image-2025-10-13-at-7-46-38-PM-1.webp" },
    { id: 4, src: "https://i.ibb.co/MkChzXs9/Whats-App-Image-2025-10-13-at-7-46-38-PM.webp" },
    { id: 5, src: "https://i.ibb.co/hRdsF0k3/Whats-App-Image-2025-10-13-at-7-46-39-PM-1.webp" },
    { id: 6, src: "https://i.ibb.co/dw6VMNPT/Whats-App-Image-2025-10-13-at-7-49-29-PM.webp" },
    { id: 7, src: "https://i.ibb.co/HLVS1nmT/Whats-App-Image-2025-10-13-at-7-46-40-PM-1.webp" },
    { id: 8, src: "https://i.ibb.co/zT1FWt8m/Whats-App-Image-2025-10-13-at-7-46-39-PM.webp" },
    { id: 9, src: "https://i.ibb.co/1fvpvBL5/Whats-App-Image-2025-10-13-at-7-46-40-PM.webp" },
    { id: 10, src: "https://i.ibb.co/qLb4rmhN/Whats-App-Image-2025-10-13-at-7-46-41-PM-1.webp" },
    { id: 11, src: "https://i.ibb.co/zMh0knb/Whats-App-Image-2025-10-13-at-7-46-41-PM.webp" },
    { id: 12, src: "https://i.ibb.co/vvs7zxYD/Whats-App-Image-2025-10-13-at-7-46-42-PM-1.webp" },
    { id: 13, src: "https://i.ibb.co/qMYdgXmY/Whats-App-Image-2025-10-13-at-7-46-42-PM.webp" },
    { id: 14, src: "https://i.ibb.co/hbxNYQT/Whats-App-Image-2025-10-13-at-7-46-43-PM-1.webp" },
    { id: 15, src: "https://i.ibb.co/S7wtH2Jf/Whats-App-Image-2025-10-13-at-7-46-43-PM-2.webp" },
    { id: 16, src: "https://i.ibb.co/PZbtM002/Whats-App-Image-2025-10-13-at-7-46-43-PM.webp" },
    { id: 17, src: "https://i.ibb.co/5HR3tNC/Whats-App-Image-2025-10-13-at-7-46-44-PM-1.webp" },
    { id: 18, src: "https://i.ibb.co/BV9qtwxv/Whats-App-Image-2025-10-13-at-7-46-44-PM.webp" },
    { id: 19, src: "https://i.ibb.co/gbPpNzRq/Whats-App-Image-2025-10-13-at-7-46-45-PM-1.webp" },
    { id: 20, src: "https://i.ibb.co/0VtYLwY5/Whats-App-Image-2025-10-13-at-7-46-45-PM.webp" },
    { id: 21, src: "https://i.ibb.co/BHC688HX/Whats-App-Image-2025-10-13-at-7-46-46-PM.webp" },
    { id: 22, src: "https://i.ibb.co/N89dGDB/Whats-App-Image-2025-10-13-at-7-46-46-PM-1.webp" },
    { id: 23, src: "https://i.ibb.co/7xXpt4KG/Whats-App-Image-2025-10-13-at-7-46-47-PM-1.webp" },
    { id: 24, src: "https://i.ibb.co/2YWVF1Q9/Whats-App-Image-2025-10-13-at-7-46-47-PM-2.webp" },
    { id: 25, src: "https://i.ibb.co/hR6sPDwT/Whats-App-Image-2025-10-13-at-7-46-47-PM.webp" },
    { id: 26, src: "https://i.ibb.co/p6ZCH2BG/Whats-App-Image-2025-10-13-at-7-46-48-PM-1.webp" },
    { id: 27, src: "https://i.ibb.co/HDK5HVdQ/Whats-App-Image-2025-10-13-at-7-46-48-PM.webp" },
    { id: 28, src: "https://i.ibb.co/xtPywWdy/Whats-App-Image-2025-10-13-at-7-46-49-PM.webp" },
    { id: 29, src: "https://i.ibb.co/99x196QS/Whats-App-Image-2025-10-13-at-7-46-50-PM-1.webp" },
    { id: 30, src: "https://i.ibb.co/MyTtTY4p/Whats-App-Image-2025-10-13-at-7-46-50-PM.webp" },
    { id: 31, src: "https://i.ibb.co/494pGDm/Whats-App-Image-2025-10-13-at-7-46-51-PM-1.webp" },
    { id: 32, src: "https://i.ibb.co/Z1cqt6Nr/Whats-App-Image-2025-10-13-at-7-46-51-PM.webp" },
    { id: 33, src: "https://i.ibb.co/1tkD60p0/Whats-App-Image-2025-10-13-at-7-46-52-PM-1.webp" },
    { id: 34, src: "https://i.ibb.co/9kBDMsCk/Whats-App-Image-2025-10-13-at-7-46-52-PM-2.webp" },
    { id: 35, src: "https://i.ibb.co/prxRhgNX/Whats-App-Image-2025-10-13-at-7-46-52-PM.webp" },
    { id: 36, src: "https://i.ibb.co/BHMPtQ8s/Whats-App-Image-2025-10-13-at-7-46-53-PM-1.webp" },
    { id: 37, src: "https://i.ibb.co/B2sNL9b3/Whats-App-Image-2025-10-13-at-7-46-53-PM.webp" },
    { id: 38, src: "https://i.ibb.co/ZpH5ZXBn/Whats-App-Image-2025-10-13-at-7-46-54-PM.webp" },
    { id: 39, src: "https://i.ibb.co/mC76GtbK/Whats-App-Image-2025-10-13-at-7-46-55-PM-1.webp" },
    { id: 40, src: "https://i.ibb.co/QFsW9LK8/Whats-App-Image-2025-10-13-at-7-46-55-PM.webp" },
    { id: 41, src: "https://i.ibb.co/RGPVJJX1/Whats-App-Image-2025-10-13-at-7-46-56-PM.webp" },
    { id: 42, src: "https://i.ibb.co/Q7jC9Tsh/Whats-App-Image-2025-10-13-at-7-46-56-PM-1.webp" },
    { id: 43, src: "https://i.ibb.co/twnjwk72/Whats-App-Image-2025-10-13-at-7-46-57-PM.webp" },
    { id: 44, src: "https://i.ibb.co/cKx70NJJ/Whats-App-Image-2025-10-13-at-7-46-59-PM.webp" },
    { id: 45, src: "https://i.ibb.co/wFRrVQVf/Whats-App-Image-2025-10-13-at-7-49-28-PM.webp" },
  ];

  // ✅ Loading Screen
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
          flexDirection: "column",
          zIndex: 9999,
        }}
      >
        <Box
          component="img"
          src="https://i.ibb.co/hRZ1bMy/78-removebg-preview.png"
          alt="Logo"
          sx={{ width: "40%", maxWidth: "300px", mb: 2 }}
        />
        <CircularProgress sx={{ color: "#00fffc" }} />
      </Box>
    );
  }

  // ✅ Voting Not Started / Closed Message
  if (!votingActive) {
    return (
      <Box
        sx={{
          bgcolor: "#000",
          color: "#00fffc",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          p: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          🕒 Voting Not Available
        </Typography>
        <Typography variant="body1">
          {new Date() < votingStart
            ? `Voting will open on ${votingStart.toLocaleString()}`
            : `Voting closed on ${votingEnd.toLocaleString()}`}
        </Typography>
      </Box>
    );
  }

  // ✅ Main Voting Gallery
  return (
    <>
      {/* Social Sidebar */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: 2,
          zIndex: 1200,
          pl: 2,
        }}
      >
        {socialLinks.map(({ icon, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#06f9f3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#17202a",
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              {icon}
            </Box>
          </a>
        ))}
      </Box>

      {/* Image Grid */}
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff",
          width: "100%",
          minHeight: "100vh",
          py: 5,
          px: 2,
          pb: 10,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "#00fffc", mb: 3 }}>
          📸 DigiLaser Voting Gallery
        </Typography>

        <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: "1400px", mx: "auto" }}>
          {imageOptions.map((option) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2.4}
              key={option.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                onClick={() => setSelectedImage(option.src)}
                sx={{
                  position: "relative",
                  border: "2px solid #222",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "transform 0.25s ease",
                  "&:hover": { transform: "translateY(-6px) scale(1.02)", cursor: "pointer" },
                  width: "100%",
                  maxWidth: { xs: "160px", sm: "220px", md: "280px", lg: "320px" },
                  height: { xs: "110px", sm: "150px", md: "190px", lg: "220px" },
                  bgcolor: "#0a1a1a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={option.src}
                  alt={`Option ${option.id}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Bottom-right number label */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    bgcolor: "rgba(0,0,0,0.7)",
                    color: "#00fffc",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 6px #00fffc",
                  }}
                >
                  {option.id}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ✅ Full-Screen Image View Modal */}
      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0,0,0,0.95)", // dark overlay
        }}
      >
        <Box
          sx={{
            position: "relative",
            outline: "none",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#000", // popup background black
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#00fffc",
              backgroundColor: "rgba(0,0,0,0.6)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
            }}
          >
            <Close sx={{ fontSize: 30 }} />
          </IconButton>

          {/* Full Image */}
          <Box
            component="img"
            src={selectedImage}
            alt="Full view"
            sx={{
              width: "95%",
              height: "95%",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: "0 0 20px rgba(0,255,252,0.4)",
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default VoteImage;
