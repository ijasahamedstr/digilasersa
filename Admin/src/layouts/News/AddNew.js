import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import Swal from "sweetalert2"; // Ensure Swal is imported
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function AddNews() {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // Seller Form field states
  const [Categorie, setCategorie] = useState("");
  const [Categoriedec, setCategoriedec] = useState("");
  const [Categoriesstatus, setCategoriesstatus] = useState("");
  const [file, setFile] = useState(null); // Ensure this is null initially

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Categorie":
        setCategorie(value);
        break;
      case "Categoriedec":
        setCategoriedec(value);
        break;
      case "Categoriesstatus":
        setCategoriesstatus(value);
        break;
      default:
        break;
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile); // Update the file state

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(selectedFile); // Convert the image file to a URL
    }
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare form data for submission
    const formData = new FormData();
    formData.append("photo", file); // Append the selected file
    formData.append("Categorie", Categorie);
    formData.append("Categoriedec", Categoriedec);
    formData.append("Categoriesstatus", Categoriesstatus);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data", // Indicating multipart form
      },
    };

    try {
      // Make the POST request to register the category
      const res = await axios.post(
        `${process.env.REACT_APP_API_HOST}/categories`,
        formData,
        config
      );

      // Check response for success or failure
      if (res.data.status === 401 || !res.data) {
        // If error, display a failure message
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Category addition failed. Please try again!",
        });
      } else {
        // On success, show a success message
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Category added successfully!",
        });

        // Clear form fields after successful addition
        setCategorie("");
        setCategoriedec("");
        setCategoriesstatus("");
        setFile(null); // Reset file input
        setImagePreview(null); // Clear the image preview
      }
    } catch (error) {
      // If there's an error during the request, display a failure message
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Category addition failed. Please try again!",
      });
    } finally {
      setLoading(false); // Stop the loading state
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
                  Add New Category
                </MDTypography>
              </MDBox>

              {/* Add Category Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Category Name */}
                  <TextField
                    label="Category Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Categorie"
                    value={Categorie}
                    onChange={handleChange}
                  />

                  {/* Category Description */}
                  <TextField
                    label="Category Description"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Categoriedec"
                    value={Categoriedec}
                    onChange={handleChange}
                  />

                  {/* Dropdown for Show on Menu */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Show on Menu?</InputLabel>
                    <Select
                      label="Show on Menu?"
                      sx={{ height: "40px" }}
                      name="Categoriesstatus"
                      value={Categoriesstatus}
                      onChange={handleChange}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Image Upload Field */}
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="photo"
                      accept="image/*"
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
                      Upload Image
                    </Button>
                  </label>

                  {/* Image Preview */}
                  {imagePreview && (
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
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "200px", // Limit the image size
                          borderRadius: "4px",
                        }}
                      />
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
}

export default AddNews;
