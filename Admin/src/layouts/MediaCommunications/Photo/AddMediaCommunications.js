import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const AddMediaCommunications = () => {
  const [loading, setLoading] = useState(false);

  // Form field states
  const [MediaCommunications, setMediaCommunications] = useState({
    MediaCommunicationsphotoname: "",
    MediaCommunicationsphototype: "",
    MediaCommunicationsphotolink: "",
  });

  // Handle changes in text/select fields
  const handleChange = ({ target: { name, value } }) => {
    setMediaCommunications((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_HOST}/MediaCommunicationsphoto`,
        MediaCommunications
      );

      if (response.data.status === 401 || !response.data) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Category addition failed. Please try again!",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Category added successfully!",
        });
        setMediaCommunications({
          MediaCommunicationsphotoname: "",
          MediaCommunicationsphototype: "",
          MediaCommunicationsphotolink: "",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Category addition failed. Please try again!",
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
                  Add New Media Communications Photo
                </MDTypography>
              </MDBox>

              {/* Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <TextField
                    label="Media Communications Photo Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsphotoname"
                    value={MediaCommunications.MediaCommunicationsphotoname}
                    onChange={handleChange}
                  />

                  {/* Type */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Photo Type</InputLabel>
                    <Select
                      name="MediaCommunicationsphototype"
                      value={MediaCommunications.MediaCommunicationsphototype}
                      onChange={handleChange}
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
                    label="Media Communications Photo Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsphotolink"
                    value={MediaCommunications.MediaCommunicationsphotolink}
                    onChange={handleChange}
                  />

                  {/* Submit */}
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

export default AddMediaCommunications;
