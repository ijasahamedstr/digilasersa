import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Image } from "antd"; // Import Ant Design Image component

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const EditScreenssection = () => {
  const [imagePreviews, setImagePreviews] = useState([]); // Store multiple image previews
  const { id } = useParams();
  const [formData, setFormData] = useState({
    projectname: "",
    projectype: "",
    projectdec: "",
    projectimages: [], // Store multiple images
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [success, setSuccess] = useState(null); // Success message state

  // Handle file upload and preview for multiple files
  const handleFileChange = (event) => {
    const files = event.target.files;
    const newPreviews = [];
    const newFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newPreviews.push(URL.createObjectURL(file)); // Generate preview URL
      newFiles.push(file); // Add the file to the new files array
    }

    setImagePreviews(newPreviews); // Update the preview URLs
    setFormData({ ...formData, projectimages: newFiles }); // Update form data with the selected files
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
    if (!formData.projectname || !formData.projectype || !formData.projectdec) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      setError(null); // Reset error before making the request
      setSuccess(null); // Reset success before making the request

      const formDataToSend = new FormData();
      formDataToSend.append("projectname", formData.projectname);
      formDataToSend.append("projectype", formData.projectype);
      formDataToSend.append("projectdec", formData.projectdec);

      // Append each image file to FormData
      formData.projectimages.forEach((file, index) => {
        formDataToSend.append(`projectimages[${index}]`, file); // Send files as projectimages[0], projectimages[1], etc.
      });

      const response = await axios.put(
        `${process.env.REACT_APP_API_HOST}/Screensdepartment/${id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      setLoading(false);
      setSuccess("Category updated successfully!");
    } catch (err) {
      setLoading(false);
      setError("Error updating Screensdepartment data. Please try again.");
      console.error("Error updating Screensdepartment data: ", err);
    }
  };

  useEffect(() => {
    const fetchScreensdepartment = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/Screensdepartment/${id}`
        );
        setFormData({
          projectname: response.data.projectname,
          projectype: response.data.projectype,
          projectdec: response.data.projectdec,
          projectimages: response.data.projectimages || [], // Keep existing image data
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Error fetching Screensdepartment data. Please try again.");
        console.error("Error fetching Screensdepartment data: ", err);
      }
    };

    fetchScreensdepartment();
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
                  Edit Category
                </MDTypography>
              </MDBox>

              {/* Edit Category Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  {/* Project Name */}
                  <TextField
                    label="Project Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="projectname"
                    value={formData.projectname}
                    onChange={handleInputChange}
                  />

                  {/* Project Type Dropdown */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Promotional gifts Type</InputLabel>
                    <Select
                      label="Project Type"
                      sx={{ height: "40px" }}
                      name="projectype"
                      value={formData.projectype}
                      onChange={handleInputChange}
                    >
                      <MenuItem value="دروع ومجسمات" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        دروع ومجسمات
                      </MenuItem>
                      <MenuItem value="خشـبيات" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        خشـبيات
                      </MenuItem>
                      <MenuItem value="مكتـبيات" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        مكتـبيات
                      </MenuItem>
                      <MenuItem value="اكسسوارات" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        اكسسوارات
                      </MenuItem>
                    </Select>
                  </FormControl>

                  {/* Project Description */}
                  <TextField
                    label="Project Description"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="projectdec"
                    multiline
                    rows={4}
                    value={formData.projectdec}
                    onChange={handleInputChange}
                  />

                  {/* Image Upload Field */}
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="projectimages"
                      accept="image/*"
                      type="file"
                      multiple // Allow multiple file uploads
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
                      Upload Images
                    </Button>
                  </label>

                  {/* Image Previews with Ant Design Image.PreviewGroup */}
                  <MDBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      mb: 2,
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      padding: "8px",
                      flexWrap: "wrap", // Wrap images if there are too many
                    }}
                  >
                    <Image.PreviewGroup>
                      {imagePreviews.length > 0 ? (
                        imagePreviews.map((preview, index) => (
                          <Image key={index} width={200} src={preview} alt={`Preview ${index}`} />
                        ))
                      ) : formData.projectimages.length > 0 ? (
                        formData.projectimages.map((image, index) => (
                          <Image
                            key={index}
                            width={200}
                            src={`${process.env.REACT_APP_API_HOST}/uploads/Screenssection/${image}`}
                            alt={`Existing Image ${index}`}
                          />
                        ))
                      ) : (
                        <Image
                          width={200}
                          src="https://via.placeholder.com/200" // Placeholder image URL
                          alt="No images available"
                        />
                      )}
                    </Image.PreviewGroup>
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

export default EditScreenssection;
