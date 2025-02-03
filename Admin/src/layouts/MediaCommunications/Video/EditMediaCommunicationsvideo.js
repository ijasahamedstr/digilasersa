import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Import SweetAlert2
import Swal from "sweetalert2";

const EditMediaCommunicationsVideo = () => {
  const [videoPreview, setVideoPreview] = useState(null); // State to hold video preview
  const { id } = useParams();
  const [formData, setFormData] = useState({
    MediaCommunicationsvideoname: "",
    MediaCommunicationsvideo: null,
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [success, setSuccess] = useState(null); // Success message state

  // Handle file upload and preview (for video)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file type (Only allow video files)
      if (!file.type.startsWith("video/")) {
        Swal.fire({
          title: "Error!",
          text: "Please select a valid video file.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      // Check file size (For example, limit to 50MB)
      const MAX_SIZE = 50 * 1024 * 1024; // 50MB
      if (file.size > MAX_SIZE) {
        Swal.fire({
          title: "Error!",
          text: "File size exceeds the 50MB limit.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      // Revoke the old preview URL to free up memory
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }

      const previewUrl = URL.createObjectURL(file); // Create a URL for the selected file
      setVideoPreview(previewUrl); // Set the preview URL for the video
      setFormData({ ...formData, MediaCommunicationsvideo: file }); // Update the formData with the selected file
    }
  };

  // Handle input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.MediaCommunicationsvideoname) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      setLoading(true);
      setError(null); // Reset error before making the request
      setSuccess(null); // Reset success before making the request

      const formDataToSend = new FormData();
      formDataToSend.append("MediaCommunicationsvideoname", formData.MediaCommunicationsvideoname);
      if (formData.MediaCommunicationsvideo) {
        formDataToSend.append("Video", formData.MediaCommunicationsvideo);
      }

      const response = await axios.put(
        `${process.env.REACT_APP_API_HOST}/MediaCommunicationsvideo/${id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      setLoading(false);

      // SweetAlert success message
      Swal.fire({
        title: "Success!",
        text: "Category updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      setLoading(false);
      setError("Error updating Printing data. Please try again.");

      // SweetAlert error message
      Swal.fire({
        title: "Error!",
        text: "Error updating Printing data. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const fetchMediaCommunicationsvideo = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/MediaCommunicationsvideo/${id}`
        );
        setFormData({
          MediaCommunicationsvideoname: response.data.MediaCommunicationsvideoname,
          MediaCommunicationsvideo: response.data.MediaCommunicationsvideo, // Keep existing video data
        });

        // Set the preview if there's an existing video
        if (response.data.MediaCommunicationsvideo) {
          const existingVideoUrl = `${process.env.REACT_APP_API_HOST}/uploads/MediaCommunications/Video/${response.data.MediaCommunicationsvideo}`;
          setVideoPreview(existingVideoUrl);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Error fetching MediaCommunicationsvideo data. Please try again.");
        console.error("Error fetching MediaCommunicationsvideo data: ", err);
      }
    };

    fetchMediaCommunicationsvideo();
  }, [id]);

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
                  Edit Media Communications Video
                </MDTypography>
              </MDBox>

              {/* Edit Category Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  {/* Category Name */}
                  <TextField
                    label="MediaCommunications Video Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsvideoname"
                    value={formData.MediaCommunicationsvideoname}
                    onChange={handleInputChange} // Handle change
                  />

                  {/* Video Upload Field */}
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="video"
                      accept="video/*"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange} // Handle file selection
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

                  {/* Display Loading or Error/Success Messages */}
                  {loading && (
                    <MDTypography variant="body1" color="info">
                      Loading...
                    </MDTypography>
                  )}
                  {error && (
                    <MDTypography variant="body1" color="error">
                      {error}
                    </MDTypography>
                  )}
                  {success && (
                    <MDTypography variant="body1" color="success">
                      {success}
                    </MDTypography>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ color: "#FFFFFF" }}
                    disabled={loading} // Disable button during loading
                  >
                    Update
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

export default EditMediaCommunicationsVideo;
