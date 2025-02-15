import { Typography, Grid, Card, CircularProgress } from '@mui/material';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import axios from 'axios';
import React, { useState, useEffect } from "react";

const Outdoorled = () => {
  const [outdoorLedData, setOutdoorLedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);  
  const [mainImage1, setMainImage1] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_HOST}/Screensdepartment`);
        const filteredData = response.data.filter(item => item.projectype === "الشاشات الإلكترونية الخارجية");

        setOutdoorLedData(filteredData);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data: ', err);
        setOutdoorLedData([]); 
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  // Single image handler to update the main image
  const handleImageClick = (imageSrc, index) => {
    if (index === 0) {
      setMainImage(imageSrc); // Update main image for the first section
    } else {
      setMainImage1(imageSrc); // Update main image for the second section
    }
  };

  return (
    <>
      {outdoorLedData.length > 0 && outdoorLedData.map((project, index) => (
        <section
          key={index}
          style={{
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px',
            position: 'relative',
            backgroundColor: index % 2 === 0 ? 'rgba(85, 254, 238, 0.8)' : 'rgba(168, 170, 173, 0.5)',
            backgroundImage: project?.projectimage?.length > 0 ? `url(${process.env.REACT_APP_API_HOST}/uploads/Screenssection/${project.projectimage[0]})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '1',
            marginTop: '30px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: index % 2 === 0 ? 'rgba(85, 254, 238, 0.8)' : 'rgba(168, 170, 173, 0.8)',
              zIndex: '0',
            }}
          ></div>

          <Container
            maxWidth="xxl"
            sx={{
              marginBottom: '30px',
              paddingRight: { xs: '20px', sm: '100px' },
              paddingLeft: { xs: '20px', sm: '100px' },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '40px',
                position: 'relative',
                height: 'auto',
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              {/* Left Section: Main Image */}
              <Grid item xs={12} md={6} sx={{ position: 'relative' }} style={{ paddingTop: '0px' }}>
                <div
                  className="image-overlay"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(85, 254, 238, 0.5)',
                    zIndex: '1',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s ease',
                  }}
                ></div>
                {project?.projectimage?.length > 0 && (
                  <img
                    src={`${process.env.REACT_APP_API_HOST}/uploads/Screenssection/${project.projectimage[0]}`}
                    alt="Descriptive image"
                    style={{
                      width: '100%',
                      height: '550px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      position: 'relative',
                      zIndex: '0',
                      borderLeft: '10px solid black',
                    }}
                  />
                )}

                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '40px',
                    width: '180px',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: '2',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRadius: '5px',
                  }}
                >
                  <Slider {...sliderSettings}>
                    {project?.projectimage?.map((image, imgIndex) => (
                      <div key={imgIndex}>
                        <img
                          src={`${process.env.REACT_APP_API_HOST}/uploads/Screenssection/${image}`}
                          alt="carousel"
                          style={{
                            width: '90%',
                            height: '100px',
                            objectFit: 'cover',
                            margin: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleImageClick(`${process.env.REACT_APP_API_HOST}/uploads/Screenssection/${image}`, index)}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </Grid>

              {/* Right Section: Text and Card */}
              <Grid item xs={12} md={6} sx={{ direction: 'rtl', textAlign: 'justify' }} style={{ paddingTop: '50px', paddingLeft: '50px', paddingRight: '50px' }}>
                <div className="image-overlay">
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <>
                      <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '20px', fontFamily: 'Tajawal' }}>
                        {project?.projectdec}
                      </Typography>
                      <Card
                        sx={{
                          padding: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: index % 2 === 0 ? '#24c4bd' : '#6f7073',
                          borderLeft: '10px solid black',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      >
                        <Typography variant="h5" sx={{ fontFamily: 'Tajawal', fontWeight: '600' }}>
                          {project?.projectname}
                        </Typography>
                      </Card>
                    </>
                  )}
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      ))}
    </>
  );
};

export default Outdoorled;
