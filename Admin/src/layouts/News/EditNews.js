import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const EditNews = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    newsname: "",
    newsdec: "",
    newsimagelinks: [""], // array of image links
  });

  // Handle single input changes
  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle multiple image link changes
  const handleImageChange = (index, value) => {
    const updatedLinks = [...formData.newsimagelinks];
    updatedLinks[index] = value;
    setFormData((prevState) => ({
      ...prevState,
      newsimagelinks: updatedLinks,
    }));
  };

  // Add new image field
  const addImageField = () => {
    setFormData((prevState) => ({
      ...prevState,
      newsimagelinks: [...prevState.newsimagelinks, ""],
    }));
  };

  // Remove image field
  const removeImageField = (index) => {
    const updatedLinks = formData.newsimagelinks.filter((_, i) => i !== index);
    setFormData((prevState) => ({
      ...prevState,
      newsimagelinks: updatedLinks,
    }));
  };

  // Fetch existing news data
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_HOST}/News/${id}`);
        setFormData({
          newsname: response.data.newsname || "",
          newsdec: response.data.newsdec || "",
          newsimagelinks: response.data.newsimagelinks?.length
            ? response.data.newsimagelinks
            : [""],
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error fetching News data. Please try again.",
        });
      }
    };

    fetchNews();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.newsname || !formData.newsdec) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    try {
      setLoading(true);
      await axios.put(`${process.env.REACT_APP_API_HOST}/News/${id}`, formData);
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "News updated successfully!",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error updating news data. Please try again.",
      });
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
                  Edit News
                </MDTypography>
              </MDBox>

              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* News Name */}
                  <TextField
                    label="News Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="newsname"
                    value={formData.newsname}
                    onChange={handleInputChange}
                  />

                  {/* News Description */}
                  <TextField
                    label="Enter your text"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="newsdec"
                    value={formData.newsdec}
                    onChange={handleInputChange}
                  />

                  {/* Multiple News Image Links */}
                  {formData.newsimagelinks.map((link, index) => (
                    <MDBox key={index} display="flex" alignItems="center" sx={{ mb: 2 }}>
                      <TextField
                        label={`News Image Link ${index + 1}`}
                        variant="outlined"
                        fullWidth
                        value={link}
                        onChange={(e) => handleImageChange(index, e.target.value)}
                      />
                      {index > 0 && (
                        <Button
                          onClick={() => removeImageField(index)}
                          color="error"
                          sx={{ ml: 1 }}
                        >
                          Remove
                        </Button>
                      )}
                    </MDBox>
                  ))}

                  {/* Add Another Image Button */}
                  <Button
                    onClick={addImageField}
                    variant="outlined"
                    fullWidth
                    sx={{
                      mb: 2,
                      color: "#000",
                      borderColor: "black",
                      "&:hover": {
                        borderColor: "black",
                        backgroundColor: "rgba(0,0,0,0.04)",
                      },
                    }}
                  >
                    + Add Another Image
                  </Button>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ color: "#FFFFFF" }}
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Update"}
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

export default EditNews;
