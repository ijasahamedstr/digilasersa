import React from "react";

const sectionStyles = {
  backgroundColor: '#f2f3f4',
  backgroundImage: 'url(https://i.ibb.co/w6PTfXT/image-7.webp)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  margin: '0 auto',
  marginBottom: '30px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  minHeight: '80vh',
  paddingTop: '20px',
  paddingBottom: '20px',
  marginTop: '-30px',
  position: 'relative',
  flexDirection: 'column',
  textAlign: 'right',
  '@media (max-width: 600px)': {
    minHeight: '60vh',
    marginTop: '0',
    padding: '10px',
  },
  fontFamily: 'Tajawal'
};



function Imagesection() {
  return (
    <section style={sectionStyles}>

    </section>
  );
}

export default Imagesection;
