import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { Twitter, Instagram, LinkedIn, YouTube, WhatsApp } from "@mui/icons-material";
import { FaSnapchat, FaTiktok } from "react-icons/fa";

const INITIAL_FORM_STATE = { name: "", phone: "", message: "" };

export default function Footer() {
  // State for two forms
  const [formData1, setFormData1] = useState(INITIAL_FORM_STATE);
  const [formData2, setFormData2] = useState(INITIAL_FORM_STATE);

  const handleChange = (setFormData) => ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = (formData) =>
    Object.values(formData).every((field) => field.trim() !== "");

  const handleFormSubmit = (formData) => (e) => {
    e.preventDefault();
    if (!isFormValid(formData)) {
      alert("Please fill out all fields.");
      return;
    }

    const { name, phone, message } = formData;
    const whatsappNumber = "966505868888";
    const text = `👋 مرحبًا، لدي استفسار:\n\n📛 الاسم: ${name}\n📞 الجوال: ${phone}\n📝 الرسالة: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Contact Section */}
      <Box sx={styles.section}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Form 1 */}
            <LeftFormSection
              title="للشكوى"
              formData={formData1}
              handleChange={handleChange(setFormData1)}
              handleFormSubmit={handleFormSubmit(formData1)}
            />

            {/* Form 2 */}
            <LeftFormSection
              title="طلب عرض سعر"
              formData={formData2}
              handleChange={handleChange(setFormData2)}
              handleFormSubmit={handleFormSubmit(formData2)}
            />
          </Grid>
        </Container>
      </Box>

      {/* Footer AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#212121", color: "#fff" }}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "15px",
            }}
          >
            <Grid container justifyContent="center" spacing={1}>
              {[
                { icon: <Twitter />, label: "twitter", url: "https://x.com/digilasersa" },
                { icon: <Instagram />, label: "instagram", url: "https://www.instagram.com/digilasersa" },
                { icon: <LinkedIn />, label: "linkedin", url: "https://www.linkedin.com/company/digilasersa" },
                { icon: <YouTube />, label: "youtube", url: "https://youtube.com/@digilaserSa" },
                { icon: <WhatsApp />, label: "whatsapp", url: "http://wa.me/966571978888" },
                { icon: <FaTiktok />, label: "tiktok", url: "https://www.tiktok.com/@digilasersa" },
                { icon: <FaSnapchat />, label: "snapchat", url: "https://www.snapchat.com/add/digilasersa" },
              ].map(({ icon, label, url }) => (
                <Grid item key={label}>
                  <IconButton
                    color="inherit"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{ borderRadius: "50%", border: "1px solid #fff", color: "#0ff5ec" }}
                  >
                    {icon}
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Toolbar>
        </Container>

        <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)", py: 1 }}>
          <Typography variant="body2" align="center">
            © 2025 Copyright: All Rights Reserved
          </Typography>
        </Box>
      </AppBar>
    </>
  );
}

// Reusable Left Form Section
function LeftFormSection({ title, formData, handleChange, handleFormSubmit }) {
  const fields = [
    { label: "الاسم", name: "name", type: "text" },
    { label: "جـوال", name: "phone", type: "text" },
    { label: "رسالتك", name: "message", type: "textarea" },
  ];

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" sx={styles.formTitle}>{title}</Typography>
      <Box component="form" sx={styles.form} onSubmit={handleFormSubmit}>
        {fields.map(({ label, name, type }) => (
          <Box key={name} sx={styles.formGroup}>
            <Typography sx={styles.label}>{label}</Typography>
            <TextField
              variant="outlined"
              multiline={type === "textarea"}
              rows={type === "textarea" ? 3 : 1}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              sx={styles.input}
              fullWidth
            />
          </Box>
        ))}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button type="submit" variant="contained" sx={{ backgroundColor: "#00fffc", color: "#1e272e", width: "50%" }}>
            ارسال
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

const styles = {
  section: {
    backgroundColor: "#000",
    backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0",
    mt: "-30px",
    direction: "ltr",
  },
  formTitle: { color: "white", fontFamily: "Tajawal", fontSize: "26px", textAlign: "right", mb: 2, direction: "rtl" },
  form: { display: "flex", flexDirection: "column", gap: 2, direction: "rtl" },
  formGroup: { display: "flex", alignItems: "center", gap: 2 },
  label: { color: "white", fontFamily: "Tajawal", fontSize: "22px", width: "150px", textAlign: "right" },
  input: { backgroundColor: "#17202a", borderRadius: "5px", "& .MuiInputBase-input": { color: "#fff" } },
};
