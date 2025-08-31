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

const EditPartner = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    partnername: "",
    partnerimagelink: "", // optional field if needed
  });
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.partnername) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await axios.put(
        `${process.env.REACT_APP_API_HOST}/Partner/${id}`,
        formData // sending JSON only
      );

      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Partner updated successfully!",
      });
    } catch (err) {
      setLoading(false);
      const errorMessage =
        err.response?.data?.message || "Error updating partner data. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    }
  };

  useEffect(() => {
    const fetchPartner = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_HOST}/Partner/${id}`);
        setFormData({
          partnername: response.data.partnername,
          partnerimagelink: response.data.partnerimagelink || "",
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error fetching partner data. Please try again.",
        });
      }
    };

    fetchPartner();
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
                  Edit Partner
                </MDTypography>
              </MDBox>

              {/* Edit Partner Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Partner Name */}
                  <TextField
                    label="Partner Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="partnername"
                    value={formData.partnername}
                    onChange={handleInputChange}
                  />

                  {/* Optional Partner Image Link */}
                  <TextField
                    label="Partner Image Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="partnerimagelink"
                    value={formData.partnerimagelink}
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

export default EditPartner;
