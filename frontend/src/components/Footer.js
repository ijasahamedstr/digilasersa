import React from 'react';
import { AppBar, Toolbar, IconButton, Container, Typography, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube, WhatsApp } from '@mui/icons-material';
import { FaSnapchat,FaTiktok  } from 'react-icons/fa';

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121', color: '#fff' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, marginTop: '15px' }}>
          <Grid container justifyContent="center">
            {[
              { icon: <Facebook />, label: 'facebook' },
              { icon: <Twitter />, label: 'twitter' },
              { icon: <Instagram />, label: 'instagram' },
              { icon: <LinkedIn />, label: 'linkedin' },
              { icon: <YouTube />, label: 'youtube' },
              { icon: <WhatsApp />, label: 'whatsapp' },
              { icon: <FaTiktok />, label: 'whatsapp' },
              { icon: <FaSnapchat />, label: 'whatsapp' },
            ].map(({ icon, label }) => (
              <Grid item key={label} sx={{ margin: '0 8px' }}>
                <IconButton
                  color="inherit"
                  href="#!"
                  aria-label={label}
                  sx={{
                    borderRadius: '50%',
                    border: '1px solid #fff',
                    color: '#0ff5ec',
                  }}
                >
                  {icon}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Container>

      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '10px 0', fontSize: '19px' }}>
        <Typography variant="body2" align="center">
          © 2025 Copyright: All Rights Reserved
          <a href="https://mdbootstrap.com/" style={{ color: '#fff' }}>
            {/* Link text here */}
          </a>
        </Typography>
      </div>
    </AppBar>
  );
}
