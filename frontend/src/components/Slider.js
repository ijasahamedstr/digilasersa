import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { Box } from "@mui/material";
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

// Carousel images
const carouselItems = [
  { id: 1, img: "https://i.ibb.co/nsDXF6Z2/New-Web-Final-2.webp" },
  { id: 2, img: "https://i.ibb.co/nsDXF6Z2/New-Web-Final-2.webp" },
  { id: 3, img: "https://i.ibb.co/nsDXF6Z2/New-Web-Final-2.webp" },
];

// Social media links
const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

// Fireworks effect (Saudi celebration style)
const useFireworks = (canvasRef) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = [];

    function randomColor() {
      const colors = ["#00FF00", "#32CD32", "#ADFF2F", "#FFFFFF", "#FFD700"];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function createFirework(x, y) {
      for (let i = 0; i < 150; i++) {
        particles.push({
          x,
          y,
          angle: Math.random() * 2 * Math.PI,
          speed: Math.random() * 5 + 1,
          radius: Math.random() * 3,
          color: randomColor(),
          life: 120,
          opacity: 1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${hexToRgb(p.color)},${p.opacity})`;
        ctx.fill();

        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.life--;
        p.opacity -= 0.01;

        if (p.life <= 0 || p.opacity <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(draw);
    }

    function loop() {
      createFirework(Math.random() * W, Math.random() * H * 0.5);
      setTimeout(loop, 600);
    }

    draw();
    loop();

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [canvasRef]);
};

// Helper: HEX → RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}

const FadeCarousel = () => {
  const [showSplash, setShowSplash] = useState(true);
  const canvasRef = useRef(null);

  useFireworks(canvasRef);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2000,
          overflow: "hidden",
        }}
      >
        {/* Fireworks */}
        <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />

        {/* Responsive Saudi National Day Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            px: 2,
          }}
        >
          <img
            src="https://i.ibb.co/B2g5TMK4/saudi-national-day-celebration.webp"
            alt="Saudi National Day"
            style={{
              width: "90%",
              maxWidth: "600px",
              minWidth: "280px", // 👈 ensure not too small on mobile
              height: "auto",
              zIndex: 2100,
              filter: "drop-shadow(0px 0px 20px #00ff00)",
              animation: "pulse 2s infinite",
            }}
          />
        </Box>

        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.9; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", position: "relative", overflow: "hidden", marginTop: "100px" }}>
      <Carousel
        fade
        nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: "black" }} />}
        prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: "black" }} />}
      >
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.img}
              alt={`slide-${item.id}`}
              style={{
                objectFit: "cover",
                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.8)",
                minHeight: "280px", // 👈 ensures carousel doesn’t shrink too much
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Social Media Sidebar (Desktop) */}
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
        {socialLinks.map(({ icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
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

      {/* Social Media Bottom Bar (Mobile) */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          display: { xs: "flex", md: "none" },
          justifyContent: "space-around",
          backgroundColor: "rgba(0,0,0,0.7)",
          py: 1,
          zIndex: 1300,
        }}
      >
        {socialLinks.map(({ icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
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
    </Box>
  );
};

export default FadeCarousel;
