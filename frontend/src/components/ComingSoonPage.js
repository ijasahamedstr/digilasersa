import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect } from "react";

function ComingSoonPage() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #0a0f2c, #000814)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side – Image */}
          <Grid item xs={12} md={6} style={{ paddingTop: "100px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src="https://i.ibb.co/C50fw0DP/banner-construction-13-bbbbbb.webp"
                alt="Coming Soon Banner"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  height: "auto",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side – Text */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                color: "#0ff5ec",
              }}
            >
              COMING SOON
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              mt={1}
              sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem" } }}
            >
              Website is under construction
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              color="gray"
              sx={{ fontSize: { xs: "0.95rem", sm: "1.5rem" } }}
            >
              We’re currently working hard to bring you a brand new experience.
              Our website is under construction, and we’ll be launching soon
              with exciting updates, features, and content.
            </Typography>

            {/* Button with Link and Icon */}
            <Button
              component={Link}
              to="/الرئيسية"
              variant="contained"
              startIcon={<HomeIcon />}
              sx={{
                mt: 4,
                backgroundColor: "#e53935",
                "&:hover": { backgroundColor: "#c62828" },
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Back to Home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ComingSoonPage;
