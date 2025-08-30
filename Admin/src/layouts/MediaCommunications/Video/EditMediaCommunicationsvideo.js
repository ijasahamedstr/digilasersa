import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// SweetAlert2
import Swal from "sweetalert2";

const EditMediaCommunications = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    MediaCommunicationsvideoname: "",
    MediaCommunicationsvideotype: "",
    MediaCommunicationsvideolink: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.MediaCommunicationsvideoname || !formData.MediaCommunicationsvideotype) {
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

      await axios.put(`${process.env.REACT_APP_API_HOST}/MediaCommunicationsvideo/${id}`, {
        MediaCommunicationsvideoname: formData.MediaCommunicationsvideoname,
        MediaCommunicationsvideotype: formData.MediaCommunicationsvideotype,
        MediaCommunicationsvideolink: formData.MediaCommunicationsvideolink,
      });

      setSuccess("Video updated successfully!");
      Swal.fire({
        title: "Success!",
        text: "Video updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      setError("Error updating Media Communications data. Please try again.");
      Swal.fire({
        title: "Error!",
        text: "Error updating Media Communications data. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error updating Media Communications data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch video by ID
  useEffect(() => {
    const fetchMediaCommunicationsvideo = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/MediaCommunicationsvideo/${id}`
        );

        setFormData({
          MediaCommunicationsvideoname: response.data.MediaCommunicationsvideoname || "",
          MediaCommunicationsvideotype: response.data.MediaCommunicationsvideotype || "",
          MediaCommunicationsvideolink: response.data.MediaCommunicationsvideolink || "",
        });
      } catch (err) {
        if (err.response?.status === 404) {
          setError("Media Communication video not found.");
        } else {
          setError("Error fetching MediaCommunicationsvideo data. Please try again.");
        }
        console.error("Error fetching MediaCommunicationsvideo data:", err);
      } finally {
        setLoading(false);
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

              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Video Name */}
                  <TextField
                    label="Media Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsvideoname"
                    value={formData.MediaCommunicationsvideoname}
                    onChange={handleInputChange}
                  />

                  {/* Video Type */}
                  <TextField
                    select
                    label="Video Type"
                    name="MediaCommunicationsvideotype"
                    value={formData.MediaCommunicationsvideotype}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                    fullWidth
                  >
                    <MenuItem value="فيديو">فيديو</MenuItem>
                    <MenuItem value="فيديوهات الواقع الافتراضي">فيديوهات الواقع الافتراضي</MenuItem>
                    <MenuItem value="فـوتـو">فـوتـو</MenuItem>
                    <MenuItem value="Motion graphics">Motion graphics</MenuItem>
                    <MenuItem value="Ai Videos">Ai Videos</MenuItem>
                    <MenuItem value="3D Animation">3D Animation</MenuItem>
                  </TextField>

                  {/* Video Link */}
                  <TextField
                    label="Video Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="MediaCommunicationsvideolink"
                    value={formData.MediaCommunicationsvideolink}
                    onChange={handleInputChange}
                  />

                  {/* Status messages */}
                  {loading && <MDTypography color="info">Loading...</MDTypography>}
                  {error && <MDTypography color="error">{error}</MDTypography>}
                  {success && <MDTypography color="success">{success}</MDTypography>}

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
