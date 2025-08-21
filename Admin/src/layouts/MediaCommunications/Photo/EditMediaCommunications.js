import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "react-router-dom";
import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Import Ant Design components
import { Image } from "antd";

// Import SweetAlert2
import Swal from "sweetalert2";

const EditMediaCommunications = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    MediaCommunicationsphotoname: "",
    MediaCommunicationsphotoimage: null,
    MediaCommunicationsphototype: "", // ✅ Added
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setFormData({ ...formData, MediaCommunicationsphotoimage: file });
    }
  };

  // Handle text/dropdown input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.MediaCommunicationsphotoname || !formData.MediaCommunicationsphototype) {
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
      formDataToSend.append("MediaCommunicationsphotoname", formData.MediaCommunicationsphotoname);
      formDataToSend.append("MediaCommunicationsphototype", formData.MediaCommunicationsphototype);
      if (formData.MediaCommunicationsphotoimage) {
        formDataToSend.append("photo", formData.MediaCommunicationsphotoimage);
      }

      await axios.put(
        `${process.env.REACT_APP_API_HOST}/MediaCommunicationsphoto/${id}`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setLoading(false);

      Swal.fire({
        title: "Success!",
        text: "Category updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      setLoading(false);
      setError("Error updating Printing data. Please try again.");
      Swal.fire({
        title: "Error!",
        text: "Error updating Printing data. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Fetch data for editing
  useEffect(() => {
    const fetchMediaCommunications = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/MediaCommunicationsphoto/${id}`
        );
        setFormData({
          MediaCommunicationsphotoname: response.data.MediaCommunicationsphotoname,
          MediaCommunicationsphotoimage: response.data.MediaCommunicationsphotoimage,
          MediaCommunicationsphototype: response.data.MediaCommunicationsphototype || "", // ✅ keep old value
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Error fetching Printing data. Please try again.");
        console.error("Error fetching Printing data: ", err);
      }
    };

    fetchMediaCommunications();
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
                  Edit Media Communications Photo
                </MDTypography>
              </MDBox>

              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  {/* Name */}
                  <TextField
                    label="Photo Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsphotoname"
                    value={formData.MediaCommunicationsphotoname}
                    onChange={handleInputChange}
                  />

                  {/* ✅ Dropdown Photo Type */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Photo Type</InputLabel>
                    <Select
                      name="MediaCommunicationsphototype"
                      value={formData.MediaCommunicationsphototype}
                      onChange={handleInputChange}
                      sx={{ height: "40px" }}
                    >
                      <MenuItem value="Profile">Profile</MenuItem>
                      <MenuItem value="Event">Event</MenuItem>
                      <MenuItem value="Campaign">Campaign</MenuItem>
                      <MenuItem value="Advertising">Advertising</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Upload Image */}
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="photo"
                      accept="image/*"
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
                        "&:hover": { borderColor: "#1565c0", backgroundColor: "#f5f5f5" },
                      }}
                    >
                      Upload Image
                    </Button>
                  </label>

                  {/* Preview */}
                  <MDBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mb: 2, border: "1px solid #e0e0e0", borderRadius: "8px", p: 1 }}
                  >
                    {imagePreview || formData.MediaCommunicationsphotoimage ? (
                      <Image.PreviewGroup>
                        <Image
                          src={
                            imagePreview
                              ? imagePreview
                              : `${process.env.REACT_APP_API_HOST}/uploads/MediaCommunications/Photo/${formData.MediaCommunicationsphotoimage}`
                          }
                          alt="Photo"
                          style={{ maxWidth: "150px", borderRadius: "8px" }}
                        />
                      </Image.PreviewGroup>
                    ) : (
                      <img
                        src="https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg"
                        alt="Default"
                        style={{ maxWidth: "50px", borderRadius: "8px" }}
                      />
                    )}
                  </MDBox>

                  {/* Messages */}
                  {loading && <MDTypography color="info">Loading...</MDTypography>}
                  {error && <MDTypography color="error">{error}</MDTypography>}
                  {success && <MDTypography color="success">{success}</MDTypography>}

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
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
