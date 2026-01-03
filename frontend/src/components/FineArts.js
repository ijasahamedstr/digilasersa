import { useState, useEffect } from "react";
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
import { Container, Box } from "@mui/material";

const socialLinks = [
  { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
  { icon: <FaInstagram size={25} />, link: "https://www.instagram.com/digilasersa" },
  { icon: <FaLinkedin size={25} />, link: "https://www.linkedin.com/company/digilasersa" },
  { icon: <FaYoutube size={25} />, link: "https://youtube.com/@digilaserSa" },
  { icon: <FaSnapchat size={25} />, link: "https://www.snapchat.com/add/digilasersa" },
  { icon: <FaTiktok size={25} />, link: "https://www.tiktok.com/@digilasersa" },
  { icon: <FaWhatsapp size={25} />, link: "http://wa.me/966571978888" },
];

const BORDER_THICKNESS = 18; // 🔥 change this to control 3D border thickness

const LAYERS = 5;
const STEP = 6; // depth per layer
const DEPTH = 40;


const FineArts = () => {
  const [showModal, setShowModal] = useState(true);

  // 🔹 Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 🔹 Force a one-time refresh on first load
  useEffect(() => {
    if (!sessionStorage.getItem("hasReloaded")) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  // 🔹 Auto close modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
  

      {/* Social Media Icons */}
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
        {socialLinks.map(({ icon, link }, idx) => (
          <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
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

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          mt: "100px",
          position: "relative",
          backgroundImage: `url("https://i.ibb.co/Kx0StNYq/rock-texture-wallpaper-min.webp")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >

        <Container maxWidth="xl" disableGutters sx={{
          mt: 10,        // 🔥 TOP SPACE
          padding: 15,
          margin: "0 auto",
          width: "100%",
        }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mb: 10,
            perspective: "1500px", // gives depth for 3D effect
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: "20px",
              transformStyle: "preserve-3d",
              transition: "transform 0.5s, box-shadow 0.5s",
              boxShadow: "0 20px 35px rgba(0,0,0,0.4)", // initial shadow
              "&:hover": {
                boxShadow: "0 60px 60px rgba(0,0,0,0.6), 0 0 20px #06f9f3", // stronger shadow + glow
              },
            }}
          >
            {/* Main Image */}
            <Box
              component="img"
              src="https://i.ibb.co/ch6Pqwc4/1.webp"
              alt="3D Card Image"
              sx={{
                width: "100%",
                borderRadius: "20px",
                display: "block",
                boxShadow: "0 10px 25px rgba(0,0,0,0.5)", // shadow on the image itself
              }}
            />

            {/* Optional thickness effect */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "10px",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                backgroundColor: "#06f9f3",
                transform: "translateZ(-20px)",
                zIndex: 1,
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mb: 10,
            perspective: "1600px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              transformStyle: "preserve-3d",
              transition: "transform 0.5s ease",
            }}
          >
            {/* FRONT IMAGE */}
            <Box
              component="img"
              src="https://i.ibb.co/HfdGFLhj/image.webp"
              alt="3D Border Image"
              sx={{
                width: "100%",
                borderRadius: "20px",
                display: "block",
                position: "relative",
                zIndex: 6,
                boxShadow: "30px 30px 35px rgba(0,0,0,0.6)",
              }}
            />

            {/* BORDER LAYER 1 */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "20px",
                border: "4px solid #06f9f3",
                transform: `translateZ(-${BORDER_THICKNESS}px)`,
                zIndex: 5,
              }}
            />

            {/* BORDER LAYER 2 */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "20px",
                border: "4px solid #04cfcf",
                transform: `translateZ(-${BORDER_THICKNESS * 2}px)`,
                zIndex: 4,
              }}
            />

            {/* BACK BORDER (DEPTH COLOR) */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "20px",
                background: "#022f2f",
                transform: `translateZ(-${BORDER_THICKNESS * 3}px)`,
                zIndex: 3,
              }}
            />

            {/* BLACK SHADOW PLATE */}
            <Box
              sx={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "26px",
                background: "rgba(0,0,0,0.9)",
                transform: `translateZ(-${BORDER_THICKNESS * 4}px)`,
                zIndex: 1,
                filter: "blur(18px)",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mb: 10,
            perspective: "1600px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              transformStyle: "preserve-3d",
              transition: "transform 0.6s ease",
            }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src="https://i.ibb.co/TBWgkXqD/image.webp"
              alt="Blur Outline Image"
              sx={{
                width: "100%",
                borderRadius: "22px",
                display: "block",
                position: "relative",
                zIndex: 10,
                boxShadow: "35px 35px 45px rgba(0,0,0,0.65)",
              }}
            />

            {/* BLUR OUTLINE GLOW */}
            <Box
              sx={{
                position: "absolute",
                inset: "-6px",
                borderRadius: "28px",
                background:
                  "linear-gradient(135deg, #06f9f3, #00b3ff, #06f9f3)",
                filter: "blur(14px)",
                opacity: 0.85,
                transform: `translateZ(-${BORDER_THICKNESS}px)`,
                zIndex: 6,
              }}
            />

            {/* INNER SOFT EDGE */}
            <Box
              sx={{
                position: "absolute",
                inset: "-2px",
                borderRadius: "24px",
                background: "rgba(6, 249, 243, 0.15)",
                transform: `translateZ(-${BORDER_THICKNESS * 1.5}px)`,
                zIndex: 5,
              }}
            />

            {/* DEPTH PLATE */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "22px",
                background: "#031d1d",
                transform: `translateZ(-${BORDER_THICKNESS * 2.5}px)`,
                zIndex: 3,
              }}
            />

            {/* DARK SHADOW BASE */}
            <Box
              sx={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "34px",
                background: "rgba(0,0,0,0.95)",
                filter: "blur(30px)",
                transform: `translateZ(-${BORDER_THICKNESS * 4}px)`,
                zIndex: 1,
              }}
            />
          </Box>
        </Box>


  




<Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    mb: 10,
    perspective: "1600px",
  }}
>
  <Box
    sx={{
      position: "relative",
      width: "100%",
      transformStyle: "preserve-3d",
      transition: "transform 0.6s ease",
      "&:hover": {
        transform: "rotateY(12deg) rotateX(8deg)",
      },
    }}
  >
    {/* FRONT IMAGE */}
    <Box
      component="img"
      src="https://i.ibb.co/ZRhj4MH7/image.webp"
      alt="4 Side Layer Image"
      sx={{
        width: "100%",
        borderRadius: "18px",
        position: "relative",
        zIndex: 10,
        boxShadow: "0 12px 20px rgba(0,0,0,0.3)",
      }}
    />

    {/* RIGHT SIDE */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: `-${DEPTH}px`,
        width: `${DEPTH}px`,
        height: "100%",
        background: "#d9d9d9",
        transform: `rotateY(90deg) translateZ(${DEPTH / 2}px)`,
        transformOrigin: "left",
      }}
    />

    {/* LEFT SIDE */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: `-${DEPTH}px`,
        width: `${DEPTH}px`,
        height: "100%",
        background: "#cfcfcf",
        transform: `rotateY(-90deg) translateZ(${DEPTH / 2}px)`,
        transformOrigin: "right",
      }}
    />

    {/* TOP SIDE */}
    <Box
      sx={{
        position: "absolute",
        top: `-${DEPTH}px`,
        left: 0,
        width: "100%",
        height: `${DEPTH}px`,
        background: "#eeeeee",
        transform: `rotateX(90deg) translateZ(${DEPTH / 2}px)`,
        transformOrigin: "bottom",
      }}
    />

    {/* BOTTOM SIDE */}
    <Box
      sx={{
        position: "absolute",
        bottom: `-${DEPTH}px`,
        left: 0,
        width: "100%",
        height: `${DEPTH}px`,
        background: "#bfbfbf",
        transform: `rotateX(-90deg) translateZ(${DEPTH / 2}px)`,
        transformOrigin: "top",
      }}
    />

    {/* BASE SHADOW */}
    <Box
      sx={{
        position: "absolute",
        inset: "-40px",
        background: "rgba(0,0,0,0.35)",
        filter: "blur(40px)",
        transform: `translateZ(-${DEPTH * 2}px)`,
        zIndex: -1,
      }}
    />
  </Box>
</Box>











      </Container>


      </Box>

     
    </>
  );
};

export default FineArts;
