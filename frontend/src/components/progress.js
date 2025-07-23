import React from "react";
import PropTypes from "prop-types";
import {
  CircularProgress,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        size={props.size}
        {...props}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default function Progress() {
  const [progress1] = React.useState(86);
  const [progress2] = React.useState(90);
  const [progress3] = React.useState(95);
  const [progress4] = React.useState(98);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const progressSize = isMobile ? 80 : 100;

  return (
    <section
      style={{
        backgroundColor: "#011e24",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "-30px",
      }}
    >
      <Grid
        container
        spacing={6}
        justifyContent="center"
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        sx={{
          width: "100%",
          flex: 1,
          textAlign: "center",
        }}
      >
        <Grid item xs={6} sm={3} lg={2}>
          <CircularProgressWithLabel
            value={progress1}
            color="primary"
            size={progressSize}
          />
          <Typography
            variant="body2"
            color="#ffffff"
            sx={{
              marginTop: "10px",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontFamily: "Tajawal",
            }}
          >
            نسبة المبيعات السنوية
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}>
          <CircularProgressWithLabel
            value={progress2}
            color="secondary"
            size={progressSize}
          />
          <Typography
            variant="body2"
            color="#ffffff"
            sx={{
              marginTop: "10px",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontFamily: "Tajawal",
            }}
          >
            الخدمات والصيانة
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}>
          <CircularProgressWithLabel
            value={progress3}
            sx={{ color: "#ff9800" }}
            size={progressSize}
          />
          <Typography
            variant="body2"
            color="#ffffff"
            sx={{
              marginTop: "10px",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontFamily: "Tajawal",
            }}
          >
            الدعم الفني والتقني
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}>
          <CircularProgressWithLabel
            value={progress4}
            sx={{ color: "#4caf50" }}
            size={progressSize}
          />
          <Typography
            variant="body2"
            color="#ffffff"
            sx={{
              marginTop: "10px",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontFamily: "Tajawal",
            }}
          >
            الجودة
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
