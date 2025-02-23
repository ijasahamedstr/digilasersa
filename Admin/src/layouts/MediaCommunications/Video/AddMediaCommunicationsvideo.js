import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const AddMediaCommunicationsVideo = () => {
  const [loading, setLoading] = useState(false);
  const [videoPreview, setVideoPreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Seller Form field states
  const [MediaCommunications, setMediaCommunications] = useState({
    MediaCommunicationsvideoname: "",
    file: null,
  });

  // Handle changes in input fields
  const handleChange = ({ target: { name, value } }) => {
    setMediaCommunications((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle video file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setMediaCommunications((prevState) => ({
      ...prevState,
      file: selectedFile,
    }));

    if (selectedFile) {
      const videoURL = URL.createObjectURL(selectedFile);
      setVideoPreview(videoURL);
    }
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if both video name and file are provided
    if (!MediaCommunications.MediaCommunicationsvideoname || !MediaCommunications.file) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please provide both a video name and a video file.",
      });
      return; // Prevent submission if fields are missing
    }

    setLoading(true);
    setUploadProgress(0); // Reset progress when a new upload starts

    const formData = new FormData();
    formData.append(
      "MediaCommunicationsvideoname",
      MediaCommunications.MediaCommunicationsvideoname
    );
    formData.append("Video", MediaCommunications.file); // Ensure this is the correct field name

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_HOST}/MediaCommunicationsvideo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            // Calculate the percentage of upload progress
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percent); // Update the progress state
          },
        }
      );

      if (response.data.status === 401 || !response.data) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Video upload failed. Please try again!",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Video uploaded successfully!",
        });
        setMediaCommunications({ MediaCommunicationsvideoname: "", file: null });
        setVideoPreview(null);
        setUploadProgress(0); // Reset progress after successful upload
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Video upload failed. Please try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  Add New Media Communications Video
                </MDTypography>
              </MDBox>

              {/* Add Category Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Video Name */}
                  <TextField
                    label="MediaCommunications Video Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsvideoname"
                    value={MediaCommunications.MediaCommunicationsvideoname}
                    onChange={handleChange}
                  />

                  {/* Video Upload Field */}
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="video"
                      accept="video/*"
                      type="file"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      fullWidth
                      sx={{
                        mb: 2,
                        textTransform: "none",
                        borderColor: "#1976d2",
                        color: "#1976d2",
                        "&:hover": {
                          borderColor: "#1565c0",
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      Upload Video
                    </Button>
                  </label>

                  {/* Video Preview */}
                  {videoPreview && (
                    <MDBox
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        mb: 2,
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "8px",
                      }}
                    >
                      <video
                        width="100%"
                        height="auto"
                        controls
                        style={{
                          maxWidth: "300px",
                          borderRadius: "4px",
                        }}
                      >
                        <source src={videoPreview} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </MDBox>
                  )}

                  {/* Upload Progress Bar */}
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <MDBox sx={{ mb: 2 }}>
                      <LinearProgress variant="determinate" value={uploadProgress} />
                    </MDBox>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ color: "#FFFFFF" }}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default AddMediaCommunicationsVideo;
