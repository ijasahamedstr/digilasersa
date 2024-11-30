import React from "react";

const sectionStyles = {
  backgroundColor: '#f2f3f4',
  backgroundImage: 'url(https://i.ibb.co/TrM5KCT/image.png)',
  backgroundSize: 'cover', // Default to 'cover' for larger screens
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  margin: '0 auto',
  marginBottom: '30px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  minHeight: '80vh', // Ensure the section takes up at least 80% of the viewport height
  paddingTop: '20px',
  paddingBottom: '20px',
  marginTop: '-30px',
  position: 'relative',
  flexDirection: 'column',
  textAlign: 'right',
  '@media (max-width: 600px)': {
    // On small screens, use 'contain' to ensure the image fits entirely within the section
    backgroundSize: 'contain', // Use 'contain' on mobile devices
    minHeight: '60vh', // Reduce minHeight to fit the screen better
    marginTop: '0', // Remove the top margin on small screens
    paddingTop: '10px', // Adjust padding for smaller screens
    paddingBottom: '10px',
  },
};

function Imagesection() {
  return (
    <section style={sectionStyles}>
      {/* Content of the section */}
    </section>
  );
}

export default Imagesection;
