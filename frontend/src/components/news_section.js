import React from "react";
import { Container, Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

function Newssection() {
  return (
    <section
      style={{
        backgroundColor: '#030909',
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center', // Horizontally center the content
        alignItems: 'center', // Vertically center the content
        height: 'auto', // Adjust height to fit the content
        paddingTop: '20px', // Padding for the top
        paddingBottom: '20px', // Padding for the bottom
        marginTop: '-30px',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 }, // Responsive padding for different screen sizes
          textAlign: 'center', // Center text for all screen sizes
          marginTop:'30px',
          marginBottom:'30px'
        }}
      >
        {/* News Section Heading */}
        <Typography variant="h4" sx={{ marginBottom: '20px',color:'#fdfefe' }}>
        تعليقات العملاء 
        </Typography>

        {/* Grid for News Cards */}
        <Grid container spacing={4}>
          {/* Image News Card 1 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                alt="News Image 1"
                height="200"
                image="https://via.placeholder.com/300x200"
              />
              <CardContent>
                <Typography variant="h5" sx={{marginBottom:'10px'}}>عنوان أخبار الصورة</Typography>
                <Typography variant="body2" color="textSecondary" sx={{fontSize:'18px'}}>
                هذا وصف مختصر للأخبار المصورة. يمكن أن يكون هذا ملخصًا موجزًا ​​للمقالة.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Image News Card 2 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                alt="News Image 2"
                height="200"
                image="https://via.placeholder.com/300x200"
              />
              <CardContent>
                <Typography variant="h5" sx={{marginBottom:'10px'}}>عنوان أخبار الصورة</Typography>
                <Typography variant="body2" color="textSecondary" sx={{fontSize:'18px'}}>
                هذا وصف مختصر للأخبار المصورة. يمكن أن يكون هذا ملخصًا موجزًا ​​للمقالة.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Video News Card */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia>
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </CardMedia>
              <CardContent>
                <Typography variant="h5" sx={{marginBottom:'10px'}}>عنوان أخبار الصورة</Typography>
                <Typography variant="body2" color="textSecondary" sx={{fontSize:'18px'}} >
                هذا وصف مختصر للأخبار المصورة. يمكن أن يكون هذا ملخصًا موجزًا ​​للمقالة.
                </Typography>
              </CardContent>
            </Card>
          </Grid>        
        </Grid>
      </Container>
    </section>
  );
}

export default Newssection;
