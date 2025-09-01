import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// SweetAlert2
import Swal from "sweetalert2";

const EditNews = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    newsname: "",
    newsdec: "",
    newsimagelink: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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

      const response = await axios.put(`${process.env.REACT_APP_API_HOST}/News/${id}`, formData);

      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "News updated successfully!",
      });

      setFormData({
        newsname: "",
        newsdec: "",
        newsimagelink: "",
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

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_HOST}/News/${id}`);
        setFormData({
          newsname: response.data.newsname || "",
          newsdec: response.data.newsdec || "",
          newsimagelink: response.data.newsimagelink || "",
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

              {/* Edit News Form */}
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

                  {/* News Image Link */}
                  <TextField
                    label="News Image Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="newsimagelink"
                    value={formData.newsimagelink}
                    onChange={handleInputChange}
                  />

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
