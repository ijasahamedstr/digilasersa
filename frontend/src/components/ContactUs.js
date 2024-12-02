import React from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';

function ContactUs() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Redirect to another site
    window.location.href = 'https://another-site.com/contact';
  };

  return (
    <section
      style={{
        backgroundColor: '#000000',
        width: '100%',
        margin: '0 auto',
        marginBottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        marginTop: '-30px',
        direction: 'ltr', // Set the section to RTL direction
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
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }} sx={{ direction: 'rtl' }}>
          <Typography variant="h4" color="white" paragraph>
            Contact Us
          </Typography>
          <Typography variant="h5" color="#00fffc">
            للتواصل السريع /
          </Typography>
          <Typography variant="h6" color="white" sx={{ marginTop: '50px' }}>
            قسم الشاشات : <span style={{ fontWeight: 'bold' }}>2222 026 057</span>
          </Typography>
          <Typography variant="h6" color="white" sx={{ marginTop: '10px' }}>
          قسم الطباعة  : <span style={{ fontWeight: 'bold' }}>8888 190 057</span>
          </Typography>
        </Grid>

          {/* Contact Form Section on the Left */}
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <form
              onSubmit={handleFormSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                direction: 'rtl', // Set the form to right-to-left direction
              }}
            >
              <TextField
                label="الاسم"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <TextField
                label="جوال"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <TextField
                label="بريد الكتروني"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <TextField
                label="رسالتك"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{
                  input: {
                    color: 'white',
                    textAlign: 'right', // Align text to the right
                  },
                  label: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              />
              <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '15px',background:'#00fffc',color:'#1e272e' }}>
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
