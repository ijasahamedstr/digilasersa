import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const EditMediaCommunications = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    MediaCommunicationsphotoname: "",
    MediaCommunicationsphototype: "",
    MediaCommunicationsphotolink: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle text/select input changes
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

      await axios.put(`${process.env.REACT_APP_API_HOST}/MediaCommunicationsphoto/${id}`, formData);

      Swal.fire({
        title: "Success!",
        text: "Category updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Error updating data. Please try again.");
      Swal.fire({
        title: "Error!",
        text: "Error updating data. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Fetch data for editing
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/MediaCommunicationsphoto/${id}`
        );
        setFormData({
          MediaCommunicationsphotoname: response.data.MediaCommunicationsphotoname,
          MediaCommunicationsphototype: response.data.MediaCommunicationsphototype || "",
          MediaCommunicationsphotolink: response.data.MediaCommunicationsphotolink || "",
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Error fetching data. Please try again.");
      }
    };

    fetchData();
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
                <form onSubmit={handleSubmit}>
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

                  {/* Type */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Photo Type</InputLabel>
                    <Select
                      name="MediaCommunicationsphototype"
                      value={formData.MediaCommunicationsphototype}
                      onChange={handleInputChange}
                      sx={{ height: "40px" }}
                    >
                      <MenuItem value="Weddings">Weddings</MenuItem>
                      <MenuItem value="Sports">Sports</MenuItem>
                      <MenuItem value="Products">Products</MenuItem>
                      <MenuItem value="Foods">Foods</MenuItem>
                      <MenuItem value="Factory">Factory</MenuItem>
                      <MenuItem value="Conference">Conference</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Link */}
                  <TextField
                    label="Photo Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsphotolink"
                    value={formData.MediaCommunicationsphotolink}
                    onChange={handleInputChange}
                  />

                  {/* Messages */}
                  {loading && <MDTypography color="info">Loading...</MDTypography>}
                  {error && <MDTypography color="error">{error}</MDTypography>}

                  {/* Submit */}
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
