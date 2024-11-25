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
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Typography variant="h4" color="white" paragraph>
              Contact Us
            </Typography>
            <Typography variant="body1" color="white">
              We’d love to hear from you! Please fill out the form below or reach out to us via email.
            </Typography>
          </Grid>

          {/* Contact Form Section on the Left */}
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <TextField
                label="الاسم"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{ input: { color: 'white' }, label: { color: 'white' }, '& .MuiOutlinedInput-root': { color: 'white', borderColor: 'white' }}}
              />
              <TextField
                label="جوال"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                sx={{ input: { color: 'white' }, label: { color: 'white' }, '& .MuiOutlinedInput-root': { color: 'white', borderColor: 'white' }}}
              />
              <TextField
                label="بريد الكتروني"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
                sx={{ input: { color: 'white' }, label: { color: 'white' }, '& .MuiOutlinedInput-root': { color: 'white', borderColor: 'white' }}}
              />
              <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '15px' }}>
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
