import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import {
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  WhatsApp,
} from "@mui/icons-material";
import { FaSnapchat, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#212121", color: "#fff" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            marginTop: "15px",
          }}
        >
          <Grid container justifyContent="center">
            {[ 
              { icon: <Twitter />, label: "twitter", url: "https://x.com/digilasersa" },
              { icon: <Instagram />, label: "instagram", url: "https://www.instagram.com/digilasersa" },
              { icon: <LinkedIn />, label: "linkedin", url: "https://www.linkedin.com/company/digilasersa" },
              { icon: <YouTube />, label: "youtube", url: "https://youtube.com/@digilaserSa" },
              { icon: <WhatsApp />, label: "whatsapp", url: "http://wa.me/966571978888" },
              { icon: <FaTiktok />, label: "tiktok", url: "https://www.tiktok.com/@digilasersa" },
              { icon: <FaSnapchat />, label: "snapchat", url: "https://www.snapchat.com/add/digilasersa" },
            ].map(({ icon, label, url }) => (
              <Grid item key={label} sx={{ margin: "0 8px" }}>
                <IconButton
                  color="inherit"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  sx={{
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    color: "#0ff5ec",
                  }}
                >
                  {icon}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Container>

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          padding: "10px 0",
          fontSize: "19px",
        }}
      >
        <Typography variant="body2" align="center">
          © 2025 Copyright: All Rights Reserved
          <a href="https://mdbootstrap.com/" style={{ color: "#fff" }}>
            {/* Link text here */}
          </a>
        </Typography>
      </div>
    </AppBar>
  );
}
