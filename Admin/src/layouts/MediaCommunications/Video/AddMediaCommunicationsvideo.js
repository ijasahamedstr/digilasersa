import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const AddMediaCommunicationsVideo = () => {
  const [loading, setLoading] = useState(false);

  // Seller Form field states
  const [MediaCommunications, setMediaCommunications] = useState({
    MediaCommunicationsvideoname: "",
    MediaCommunicationsvideotype: "",
    MediaCommunicationsvideolink: "",
  });

  // Handle changes in input fields
  const handleChange = ({ target: { name, value } }) => {
    setMediaCommunications((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !MediaCommunications.MediaCommunicationsvideoname ||
      !MediaCommunications.MediaCommunicationsvideotype ||
      !MediaCommunications.MediaCommunicationsvideolink
    ) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please provide video name, type, and link.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_HOST}/MediaCommunicationsvideo`,
        MediaCommunications
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
          text: "Video added successfully!",
        });
        setMediaCommunications({
          MediaCommunicationsvideoname: "",
          MediaCommunicationsvideotype: "",
          MediaCommunicationsvideolink: "",
        });
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

                  {/* Dropdown for Video Type */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Video Type</InputLabel>
                    <Select
                      label="Video Type"
                      name="MediaCommunicationsvideotype"
                      value={MediaCommunications.MediaCommunicationsvideotype}
                      onChange={handleChange}
                      sx={{ height: "40px" }}
                    >
                      <MenuItem value="فيديو" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        فيديو
                      </MenuItem>
                      <MenuItem
                        value="فيديوهات الواقع الافتراضي"
                        style={{ fontFamily: "Tajawal, sans-serif" }}
                      >
                        فيديوهات الواقع الافتراضي
                      </MenuItem>
                      <MenuItem value="فـوتـو" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        فـوتـو
                      </MenuItem>
                      <MenuItem
                        value="Motion graphics"
                        style={{ fontFamily: "Tajawal, sans-serif" }}
                      >
                        Motion graphics
                      </MenuItem>
                      <MenuItem value="Ai Videos" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        Ai Videos
                      </MenuItem>
                      <MenuItem value="3D Animation" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        3D Animation
                      </MenuItem>
                    </Select>
                  </FormControl>

                  {/* Video Link */}
                  <TextField
                    label="MediaCommunications Video Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsvideolink"
                    value={MediaCommunications.MediaCommunicationsvideolink}
                    onChange={handleChange}
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
