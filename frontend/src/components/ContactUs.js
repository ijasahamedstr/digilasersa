import React, { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import Form from 'react-bootstrap/Form';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add simple validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    // Redirect to another site (Example: External site)
    window.location.href = 'https://another-site.com/contact';
  };

  return (
    <section
      style={{
        backgroundColor: '#000000',
        backgroundImage: 'url("https://i.ibb.co/k3LmJgK/image.webp")',
        width: '100%',
        margin: '0 auto',
        marginBottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        marginTop: '-30px',
        direction: 'ltr',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: 'center',
        }}
      >
        <Grid container spacing={4}>
          {/* Text Section on the Right */}
          <Grid
            item
            xs={12}
            sm={6}
            order={{ xs: 1, sm: 1 }}
            sx={{ direction: 'rtl' }}
          >
            <Typography variant="h4" color="white" paragraph>
              Contact Us
            </Typography>
            <Typography variant="h5" color="#00fffc">
              للطلب والإستفسار /
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '50px' }}>
              قسم الشاشات :
            </Typography>
            <Typography color="white" sx={{ fontWeight: 'bold', paddingRight: '250px', fontSize: { xs: '12px', sm: '18px' } }}>
              2222 026 057
            </Typography>
            <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
              قسم الطباعة :
            </Typography>
            <Typography color="white" sx={{ fontWeight: 'bold', paddingRight: '250px', fontSize: { xs: '12px', sm: '18px' } }}>
              8888 190 057
            </Typography>
          </Grid>


          {/* Contact Form Section on the Left */}
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
            <h2
              style={{
                color: 'white',
                fontFamily: 'Tajawal',
                fontSize: '26px',
                textAlign: 'right',
                marginBottom: '20px',
                direction: 'rtl',
              }}
            >
              للإستفسارات العامة ..
            </h2>

            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                direction: 'rtl',
              }}
              onSubmit={handleFormSubmit}
            >
              <Form.Group
                controlId="name"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  الاسم
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="phone"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  جـوال
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="email"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  بريد الكتروني
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="message"
                className="d-flex align-items-center"
                style={{ gap: '10px' }}
              >
                <Form.Label
                  style={{
                    color: 'white',
                    fontFamily: 'Tajawal',
                    fontSize: '22px',
                    width: '150px',
                    textAlign: 'right',
                  }}
                >
                  رسالتك
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    background: '#17202a',
                    border: 'none',
                    outline: 'none',
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: '15px',
                  background: '#00fffc',
                  color: '#1e272e',
                  padding: { xs: '10px', sm: '15px' },
                }}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default ContactUs;
