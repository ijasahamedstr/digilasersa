import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress 
        variant="determinate" 
        size={props.size}  // Responsive size based on screen size
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
  size: PropTypes.number.isRequired,  // Add the size prop type
};

export default function Progress() {
  const [progress1] = React.useState(86);
  const [progress2] = React.useState(90);
  const [progress3] = React.useState(95);
  const [progress4] = React.useState(98);

  // Get the theme object and media query hook to adjust layout for mobile screens
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Set progress size based on screen size
  const progressSize = isMobile ? 80 : 100;  // Smaller on mobile, bigger on desktop

  return (
    <section
      style={{
        backgroundColor: '#011e24',
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '20px',
        paddingBottom: '20px',
        marginTop: '-30px',
      }}
    >
      <Grid 
        container 
        spacing={6}  // Increased gap between items
        justifyContent="center" 
        direction={isMobile ? 'column' : 'row'} // Stack vertically on mobile
        alignItems="center"
        sx={{
          width: '100%',
          flex: 1, // Ensures the grid takes up available height
          textAlign:'center'
        }}
      >
        <Grid item xs={6} sm={3} lg={2}> {/* Added responsive width for grid items */}
          <CircularProgressWithLabel value={progress1} color="primary" size={progressSize} />
          <Typography variant="body2" color="#324933" style={{ marginTop: '10px' }}>
          نسبة المبيعات السنوية
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}> {/* Added responsive width for grid items */}
          <CircularProgressWithLabel value={progress2} color="secondary" size={progressSize} />
          <Typography variant="body2" color="#324933" style={{ marginTop: '10px' }}>
          الخدمات والصيانة
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}> {/* Added responsive width for grid items */}
          <CircularProgressWithLabel value={progress3} sx={{ color: '#ff9800' }} size={progressSize} />
          <Typography variant="body2" color="#324933" style={{ marginTop: '10px' }}>
          الدعم الفني والتقني
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}> {/* Added responsive width for grid items */}
          <CircularProgressWithLabel value={progress4} sx={{ color: '#4caf50' }} size={progressSize} />
          <Typography variant="body2" color="#324933" style={{ marginTop: '10px' }}>
          الجودة
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
