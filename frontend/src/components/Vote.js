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
  const [language, setLanguage] = useState("en");
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

  const validSaudiPrefixes = [
    "050", "053", "055", "054", "056", "058", "059",
    "057", "0570", "0571", "0572", "0575", "051",
  ];

  const isValidSaudiNumber = (mobile) => {
    const clean = mobile.replace(/\D/g, "");
    if (!clean.startsWith("0")) return false;
    return validSaudiPrefixes.some((prefix) => clean.startsWith(prefix));
  };

  const socialLinks = [
    { icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />, link: "https://x.com/digilasersa" },
    { icon: <FaInstagram size={24} />, link: "https://www.instagram.com/digilasersa" },
    { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/company/digilasersa" },
    { icon: <FaYoutube size={24} />, link: "https://youtube.com/@digilaserSa" },
    { icon: <FaSnapchat size={24} />, link: "https://www.snapchat.com/add/digilasersa" },
    { icon: <FaTiktok size={24} />, link: "https://www.tiktok.com/@digilasersa" },
    { icon: <FaWhatsapp size={24} />, link: "http://wa.me/966571978888" },
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

    if (!/^\d{10}$/.test(user.mobile)) {
      showAlert(
        language === "en" ? "Invalid Number" : "رقم غير صالح",
        language === "en"
          ? "Please enter a valid 10-digit Saudi mobile number (e.g. 05xxxxxxxx)."
          : "يرجى إدخال رقم جوال سعودي مكون من 10 أرقام (مثل 05xxxxxxxx).",
        "error"
      );
      return;
    }

    if (!isValidSaudiNumber(user.mobile)) {
      showAlert(
        language === "en" ? "Invalid Saudi Number" : "رقم سعودي غير صالح",
        language === "en"
          ? "Please enter a valid Saudi mobile number starting with the correct prefix."
          : "يرجى إدخال رقم جوال سعودي صحيح يبدأ بالمقدمة الصحيحة.",
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
          data.message ||
            (language === "en"
              ? "You have already voted."
              : "لقد قمت بالتصويت مسبقاً."),
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

  // 🌀 Loading Screen
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
          sx={{ width: "50%", maxWidth: 220, mb: 3 }}
        />
        <CircularProgress sx={{ color: "#00fffc" }} />
      </Box>
    );
  }

  // 🕒 Not Active
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
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          {texts[language].notAvailable}
        </Typography>
        <Typography variant="body1">
          {new Date() < votingStart
            ? `${texts[language].openOn} ${votingStart.toLocaleString()}`
            : `${texts[language].closedOn} ${votingEnd.toLocaleString()}`}
        </Typography>
        <Button
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          sx={{ mt: 3, color: "#00fffc", border: "1px solid #00fffc" }}
        >
          {language === "en" ? "العربية" : "English"}
        </Button>
      </Box>
    );
  }

  // 🎉 Submitted
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
     {/* 🌐 Language Toggle */}
      <Button
        variant="contained"
        onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        sx={{
          position: "fixed",
          top: { xs: 95, sm: 95, md: 100 }, // 🟢 Added top margin for mobile & tablet
          right: { xs: 10, md: 20 },
          zIndex: 2000,
          bgcolor: "#00fffc",
          color: "#000",
          fontWeight: "bold",
          fontSize: { xs: "0.8rem", md: "1rem" },
          borderRadius: "8px",
          px: { xs: 2, md: 3 },
          py: { xs: 0.7, md: 1 },
        }}
      >
        {language === "en" ? "العربية" : "English"}
      </Button>


      {/* 🌐 Social Links (Desktop Only) */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: 1.8,
          zIndex: 1200,
          pl: 2,
        }}
      >
        {socialLinks.map(({ icon, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                backgroundColor: "#06f9f3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#17202a",
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.15)" },
              }}
            >
              {icon}
            </Box>
          </a>
        ))}
      </Box>

      {/* 🌟 Main Section */}
        <Box
          sx={{
            bgcolor: "#000",
            color: "#fff",
            width: "100%",
            minHeight: "100vh",
            py: 5,
            px: { xs: 3, sm: 6, md: 10, lg: 20 },
            textAlign: "center",
            direction: language === "ar" ? "rtl" : "ltr",
            fontFamily: language === "ar" ? "Tajawal, sans-serif" : "inherit",
            // 🟢 Increased top space for mobile & tablet
            mt: { xs: "100px", sm: "120px", md: "100px" },
          }}
        >

        <Typography
          variant="h4"
          sx={{
            color: "#00fffc",
            mb: 3,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            fontWeight: "bold",
          }}
        >
          {texts[language].title}
        </Typography>

        {!showRegister ? (
          <>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                fontSize: { xs: "1rem", md: "1.3rem" },
              }}
            >
              {texts[language].select}
            </Typography>

            {/* 🖼️ Image Grid */}
            <Grid
              container
               spacing={{ xs: 2, sm: 3, md: 4 }} // 🟢 Slightly increased spacing
              justifyContent="center"
              sx={{
                mx: "auto",
              }}
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
                      maxWidth: { xs: 160, sm: 220, md: 260, lg: 300 },
                      height: { xs: 110, sm: 150, md: 190, lg: 220 },
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
                        fontSize: "0.8rem",
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

                    <img
                      src={option.src}
                      alt={option.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                        opacity: selectedOption === option.id ? 1 : 0.9,
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              sx={{
                mt: 5,
                bgcolor: "#00fffc",
                color: "#000",
                fontWeight: "bold",
                fontSize: { xs: "1rem", md: "1.2rem" },
                borderRadius: "10px",
                px: { xs: 3, md: 5 },
                py: { xs: 1, md: 1.2 },
                "&:hover": { bgcolor: "#00cccc" },
              }}
              onClick={handleSubmitVote}
            >
              {texts[language].submit}
            </Button>
          </>
        ) : (
          <Box
            ref={registerRef}
            sx={{
              mt: 5,
              bgcolor: "#111",
              p: { xs: 3, md: 5 },
              borderRadius: "12px",
              maxWidth: "500px",
              mx: "auto",
              boxShadow: "0 0 15px rgba(0,255,252,0.2)",
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: "#00fffc" }}>
              {texts[language].registerPrompt}
            </Typography>
            <TextField
              fullWidth
              label={texts[language].name}
              variant="filled"
              sx={{ mb: 3, bgcolor: "#222", borderRadius: "8px" }}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
            />
            <TextField
              fullWidth
              label={texts[language].mobile}
              variant="filled"
              sx={{ mb: 3, bgcolor: "#222", borderRadius: "8px" }}
              value={user.mobile}
              onChange={(e) => setUser({ ...user, mobile: e.target.value })}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              InputProps={{ style: { color: "#fff" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#00fffc",
                color: "#000",
                fontWeight: "bold",
                fontSize: "1rem",
                py: 1.2,
                "&:hover": { bgcolor: "#00cccc" },
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

