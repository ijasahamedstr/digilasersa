import { useState, useEffect, useRef } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  TextField,
  Radio,
  Grid,
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
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const API_HOST = process.env.REACT_APP_API_HOST || "http://localhost:8000";

const Vote = () => {
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState({ name: "", mobile: "" });
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [votingActive, setVotingActive] = useState(false);
  const [voteCounts, setVoteCounts] = useState({});
  const [language, setLanguage] = useState("en"); // 🌍 Language state

  const registerRef = useRef(null);

  const votingStart = new Date("2025-10-10T00:00:00");
  const votingEnd = new Date("2025-10-20T23:59:59");

  const texts = {
    en: {
      title: "🗳️ DigiLaser Voting Competition",
      select: "Select your favorite image — one choice only!",
      submit: "Submit Vote",
      registerPrompt: "Please register to confirm your vote",
      name: "Full Name",
      mobile: "Mobile Number",
      confirmVote: "Confirm & Submit Vote",
      notAvailable: "🕒 Voting Not Available",
      openOn: "Voting will open on",
      closedOn: "Voting closed on",
      thankYou: "🎉 Thank You for Voting!",
      recorded: "Your vote has been recorded successfully.",
      back: "Back to Home",
    },
    ar: {
      title: "🗳️ مسابقة التصويت من ديجي ليزر",
      select: "اختر صورتك المفضلة — خيار واحد فقط!",
      submit: "إرسال التصويت",
      registerPrompt: "يرجى التسجيل لتأكيد تصويتك",
      name: "الاسم الكامل",
      mobile: "رقم الجوال",
      confirmVote: "تأكيد وإرسال التصويت",
      notAvailable: "🕒 التصويت غير متاح حالياً",
      openOn: "سيتم فتح التصويت في",
      closedOn: "تم إغلاق التصويت في",
      thankYou: "🎉 شكراً لتصويتك!",
      recorded: "تم تسجيل تصويتك بنجاح.",
      back: "العودة إلى الصفحة الرئيسية",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      checkVotingStatus();
      fetchVoteCounts();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const checkVotingStatus = () => {
    const now = new Date();
    setVotingActive(now >= votingStart && now <= votingEnd);
  };

  const fetchVoteCounts = async () => {
    try {
      const res = await fetch(`${API_HOST}/vote`);
      const data = await res.json();
      let counts = {};
      if (Array.isArray(data)) {
        data.forEach((vote) => {
          const id = vote.imageNumber;
          counts[id] = (counts[id] || 0) + 1;
        });
      } else {
        counts = data;
      }
      setVoteCounts(counts);
    } catch (err) {
      console.error("Error fetching vote counts:", err);
    }
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

  const imageOptions = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    label: `Option ${i + 1}`,
    src: `https://picsum.photos/seed/${i + 1}/800/600`,
  }));

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonColor: "#00fffc",
      background: "#0a0a0a",
      color: "#fff",
    });
  };

  const handleRegister = async () => {
    if (!user.name || !user.mobile) {
      showAlert(
        language === "en" ? "Missing Details" : "البيانات ناقصة",
        language === "en"
          ? "Please enter your name and mobile number."
          : "يرجى إدخال الاسم ورقم الجوال.",
        "warning"
      );
      return;
    }

    if (!/^\d{9,15}$/.test(user.mobile)) {
      showAlert(
        language === "en" ? "Invalid Number" : "رقم غير صالح",
        language === "en"
          ? "Please enter a valid mobile number."
          : "يرجى إدخال رقم جوال صحيح.",
        "error"
      );
      return;
    }

    if (!selectedOption) {
      showAlert(
        language === "en" ? "No Selection" : "لم يتم الاختيار",
        language === "en"
          ? "Please select an image before submitting your vote."
          : "يرجى اختيار صورة قبل إرسال التصويت.",
        "warning"
      );
      return;
    }

    try {
      const response = await fetch(`${API_HOST}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          mobile: user.mobile,
          imageNumber: selectedOption,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        showAlert(
          language === "en" ? "Vote Failed" : "فشل التصويت",
          data.message || (language === "en" ? "You have already voted." : "لقد قمت بالتصويت مسبقاً."),
          "error"
        );
        return;
      }

      await fetchVoteCounts();
      setRegistered(true);
      setSubmitted(true);
      showAlert(
        language === "en" ? "Success!" : "تم بنجاح!",
        language === "en"
          ? "Your vote has been recorded successfully."
          : "تم تسجيل تصويتك بنجاح.",
        "success"
      );
    } catch (err) {
      console.error("Vote Submit Error:", err);
      showAlert(
        language === "en" ? "Error" : "خطأ",
        language === "en"
          ? "Could not submit vote. Try again later."
          : "تعذر إرسال التصويت. حاول لاحقاً.",
        "error"
      );
    }
  };

  const handleSubmitVote = () => {
    if (!selectedOption) {
      showAlert(
        language === "en" ? "No Selection" : "لم يتم الاختيار",
        language === "en"
          ? "Please select an image before submitting your vote."
          : "يرجى اختيار صورة قبل إرسال التصويت.",
        "warning"
      );
      return;
    }

    if (!registered) {
      setShowRegister(true);
      Swal.fire({
        title: language === "en" ? "Register to Vote" : "سجّل للتصويت",
        text:
          language === "en"
            ? "Please enter your name and mobile number to confirm your vote."
            : "يرجى إدخال الاسم ورقم الجوال لتأكيد تصويتك.",
        icon: "info",
        confirmButtonColor: "#00fffc",
        background: "#0a0a0a",
        color: "#fff",
      });
      setTimeout(() => {
        registerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

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

  // 🕒 Voting not active
  if (!votingActive && !submitted) {
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
          {texts[language].notAvailable}
        </Typography>
        <Typography variant="body1">
          {new Date() < votingStart
            ? `${texts[language].openOn} ${votingStart.toLocaleString()}`
            : `${texts[language].closedOn} ${votingEnd.toLocaleString()}`}
        </Typography>

        {/* 🌐 Language toggle */}
        <Button
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          sx={{ mt: 3, color: "#00fffc", border: "1px solid #00fffc" }}
        >
          {language === "en" ? "العربية" : "English"}
        </Button>
      </Box>
    );
  }

  // 🎉 After vote submission
  if (submitted) {
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
          {texts[language].thankYou}
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {texts[language].recorded}
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "#00fffc", color: "#000", fontWeight: "bold" }}
          onClick={() => (window.location.href = "/")}
        >
          {texts[language].back}
        </Button>
      </Box>
    );
  }

  return (
    <>
      {/* 🌐 Language toggle button */}
      <Button
        variant="contained"
        onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        sx={{
          position: "fixed",
          top: 100,
          right: 20,
          zIndex: 2000,
          bgcolor: "#00fffc",
          color: "#000",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      >
        {language === "en" ? "العربية" : "English"}
      </Button>

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

      {/* Voting Section */}
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff",
          width: "100%",
          minHeight: "100vh",
          py: 5,
          px: 2,
          textAlign: "center",
          direction: language === "ar" ? "rtl" : "ltr",
          fontFamily: language === "ar" ? "Tajawal, sans-serif" : "inherit",
          mt: "100px", // 👈 Added margin-top 150px
        }}
      >
        <Typography variant="h3" sx={{ color: "#00fffc", mb: 3 }}>
          {texts[language].title}
        </Typography>

        {!showRegister ? (
          <>
            <Typography variant="h5" sx={{ mb: 4 }}>
              {texts[language].select}
            </Typography>

            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{ maxWidth: "1400px", mx: "auto" }}
            >
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
                    sx={{
                      position: "relative",
                      border:
                        selectedOption === option.id
                          ? "4px solid #00fffc"
                          : "2px solid #222",
                      borderRadius: "14px",
                      overflow: "hidden",
                      transition: "transform 0.25s ease, border 0.25s ease",
                      "&:hover": { transform: "translateY(-6px) scale(1.02)" },
                      cursor: "pointer",
                      width: "100%",
                      maxWidth: {
                        xs: "160px",
                        sm: "220px",
                        md: "280px",
                        lg: "320px",
                      },
                      height: {
                        xs: "110px",
                        sm: "150px",
                        md: "190px",
                        lg: "220px",
                      },
                      bgcolor: "#0a1a1a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <Radio
                      checked={selectedOption === option.id}
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        color: "#00fffc",
                        zIndex: 5,
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        bgcolor: "rgba(0,0,0,0.8)",
                        color: "#00fffc",
                        fontWeight: "bold",
                        fontSize: "0.85rem",
                        borderRadius: "8px",
                        px: 1,
                        py: 0.3,
                        zIndex: 4,
                        boxShadow: "0 0 5px #00fffc",
                      }}
                    >
                      {voteCounts[option.id] || 0}{" "}
                      {language === "en" ? "votes" : "تصويت"}
                    </Box>

                    <Box
                      component="img"
                      src={option.src}
                      alt={option.label}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

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

            <Button
              variant="contained"
              sx={{
                bgcolor: "#00fffc",
                color: "#000",
                mt: 6,
                mb: 8,
                fontWeight: "bold",
                px: 5,
                py: 1.5,
                borderRadius: "10px",
              }}
              onClick={handleSubmitVote}
            >
              {texts[language].submit}
            </Button>
          </>
        ) : (
          <Box ref={registerRef} sx={{ maxWidth: 400, mx: "auto", textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#00fffc", mb: 3 }}>
              {texts[language].registerPrompt}
            </Typography>

            <TextField
              fullWidth
              label={texts[language].name}
              variant="outlined"
              sx={{
                mb: 3,
                input: { color: "#fff" },
                label: { color: "#00fffc" },
                "& .MuiOutlinedInput-root fieldset": { borderColor: "#00fffc" },
              }}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />

            <TextField
              fullWidth
              label={texts[language].mobile}
              variant="outlined"
              sx={{
                mb: 3,
                input: { color: "#fff" },
                label: { color: "#00fffc" },
                "& .MuiOutlinedInput-root fieldset": { borderColor: "#00fffc" },
              }}
              value={user.mobile}
              onChange={(e) => setUser({ ...user, mobile: e.target.value })}
            />

            <Button
              variant="contained"
              sx={{
                bgcolor: "#00fffc",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "10px",
                px: 4,
                py: 1.2,
              }}
              onClick={handleRegister}
            >
              {texts[language].confirmVote}
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Vote;
