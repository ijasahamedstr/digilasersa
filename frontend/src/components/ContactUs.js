import React, { useState } from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import Form from "react-bootstrap/Form";

// Initial form state (email removed)
const INITIAL_FORM_STATE = {
  name: "",
  phone: "",
  message: "",
};

function ContactUs() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () =>
    Object.values(formData).every((field) => field.trim() !== "");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill out all fields.");
      return;
    }

    const { name, phone, message } = formData;
    const whatsappNumber = "966505868888"; // WhatsApp number with country code
    const text = `👋 مرحبًا، لدي استفسار:\n\n📛 الاسم: ${name}\n📞 الجوال: ${phone}\n📝 الرسالة: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank"); // Open WhatsApp
  };

  return (
    <section style={styles.section}>
      <Container maxWidth="xl" sx={styles.container}>
        <Grid container spacing={4}>
          <RightTextSection />
          <LeftFormSection
            formData={formData}
            handleChange={handleChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Grid>
      </Container>
    </section>
  );
}

function RightTextSection() {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        textAlign: "justify",
        direction: "ltr",
        pr: 5,
      }}
    >
      <Typography variant="h4" color="white">
        Contact Us
      </Typography>

      <Typography
        variant="h5"
        color="#00fffc"
        sx={{ textAlign: "justify", direction: "rtl" }}
      >
        للطلب والإستفسار /
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ pt: "30px", direction: "rtl", alignItems: "center" }}
      >
        {[
          { label: "رقم الاتصال", value: "8888 197 057" },
          { label: "بريد إلكتروني", value: "info@digilaser.sa" },
        ].map(({ label, value }) => (
          <React.Fragment key={label}>
            <Grid item xs={4}>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "17px", sm: "18px", md: "20px" },
                  textAlign: "right",
                }}
              >
                {label}
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "17px", sm: "18px", md: "20px" },
                  textAlign: "right",
                }}
              >
                :
              </Typography>
            </Grid>

            <Grid item xs={7}>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "17px", sm: "18px", md: "20px" },
                  textAlign: "right",
                }}
              >
                {value}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
}

function ContactInfo({ label, phone }) {
  return (
    <>
      <Typography variant="h6" color="white" sx={{ marginTop: "30px" }}>
        {label}
      </Typography>
      <Typography color="white" sx={styles.phoneText}>
        {phone}
      </Typography>
    </>
  );
}

function LeftFormSection({ formData, handleChange, handleFormSubmit }) {
  const fields = [
    { label: "الاسم", name: "name", type: "text" },
    { label: "جـوال", name: "phone", type: "text" },
    { label: "رسالتك", name: "message", type: "textarea" },
  ];

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" sx={styles.formTitle}>
        للإستفسار ..
      </Typography>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        {fields.map(({ label, name, type }) => (
          <Form.Group key={name} controlId={name} style={styles.formGroup}>
            <Form.Label style={styles.label}>{label}</Form.Label>
            {type === "textarea" ? (
              <Form.Control
                as="textarea"
                rows={3}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                style={styles.input}
              />
            ) : (
              <Form.Control
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                style={styles.input}
              />
            )}
          </Form.Group>
        ))}

        {/* Centered Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
            paddingRight: "150px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              background: "#00fffc",
              color: "#1e272e",
              padding: { xs: "10px", sm: "15px" },
              width: "50%",
            }}
          >
            ارسال
          </Button>
        </div>
      </form>
    </Grid>
  );
}

const styles = {
  section: {
    backgroundColor: "#000",
    backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0",
    marginTop: "-30px",
    direction: "ltr",
  },
  container: {
    paddingX: { xs: 2, sm: 3, md: 5 },
    textAlign: "center",
  },
  formTitle: {
    color: "white",
    fontFamily: "Tajawal",
    fontSize: "26px",
    textAlign: "right",
    marginBottom: "20px",
    direction: "rtl",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    direction: "rtl",
  },
  formGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  label: {
    color: "white",
    fontFamily: "Tajawal",
    fontSize: "22px",
    width: "150px",
    textAlign: "right",
  },
  input: {
    background: "#17202a",
    border: "none",
    outline: "none",
    color: "#fff",
  },
  phoneText: {
    fontWeight: "bold",
    paddingRight: "250px",
    fontSize: { xs: "12px", sm: "18px" },
  },
};

export default ContactUs;
