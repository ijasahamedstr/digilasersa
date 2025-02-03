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

const EditMediaCommunications = () => {
  const [mediaPreview, setMediaPreview] = useState(null); // State to hold video preview
  const { id } = useParams();
  const [formData, setFormData] = useState({
    MediaCommunicationsvideoname: "",
    MediaCommunicationsvideo: null, // This will store the video file
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle file upload and preview (video only)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create a URL for the selected file
      setMediaPreview(previewUrl); // Set the preview URL
      setFormData({ ...formData, MediaCommunicationsvideo: file }); // Update formData with selected file
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
      setError(null);
      setSuccess(null);

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
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      setSuccess("Category updated successfully!");

      Swal.fire({
        title: "Success!",
        text: "Category updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      setLoading(false);
      setError("Error updating Media Communications data. Please try again.");
      Swal.fire({
        title: "Error!",
        text: "Error updating Media Communications data. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error updating Media Communications data:", err);
    }
  };

  useEffect(() => {
    const fetchMediaCommunicationsvideo = async () => {
      setLoading(true);
      try {
        // Log the ID being fetched
        console.log("Fetching media communications video with ID:", id);

        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/MediaCommunicationsvideo/${id}`
        );

        if (response.status === 404) {
          setError("Media Communication video not found.");
          return;
        }

        setFormData({
          MediaCommunicationsvideoname: response.data.MediaCommunicationsvideoname,
          MediaCommunicationsvideo: response.data.MediaCommunicationsvideo,
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err.response && err.response.status === 404) {
          setError("Media Communication video not found.");
        } else {
          setError("Error fetching MediaCommunicationsvideo data. Please try again.");
        }
        console.error("Error fetching MediaCommunicationsvideo data:", err);
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
                  {/* Media Name */}
                  <TextField
                    label="Media Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsvideoname"
                    value={formData.MediaCommunicationsvideoname}
                    onChange={handleInputChange}
                  />

                  {/* File Upload Field */}
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="photo"
                      accept="video/*" // Only allow video files
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
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
                    {mediaPreview ? (
                      <video
                        controls
                        src={mediaPreview}
                        style={{ maxWidth: "400px", borderRadius: "8px" }}
                      />
                    ) : formData.MediaCommunicationsvideo ? (
                      <video
                        controls
                        src={`${process.env.REACT_APP_API_HOST}/uploads/MediaCommunications/Video/${formData.MediaCommunicationsvideo}`}
                        style={{ maxWidth: "400px", borderRadius: "8px" }}
                      />
                    ) : (
                      <video
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        style={{ maxWidth: "150px", borderRadius: "8px" }}
                        controls
                      />
                    )}
                  </MDBox>

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
                    disabled={loading}
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

export default EditMediaCommunications;
