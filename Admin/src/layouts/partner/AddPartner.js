import React, { useState } from "react";
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

const AddPartner = () => {
  const [loading, setLoading] = useState(false);

  // Partner form field states
  const [partner, setPartner] = useState({
    partnername: "",
    partnerimagelink: "", // optional, if you want to store an image link
  });

  // Handle changes in input fields
  const handleChange = ({ target: { name, value } }) => {
    setPartner((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_HOST}/Partner`, partner);

      if (response.data.status === 401 || !response.data) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message || "Partner addition failed. Please try again!",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: response.data.message || "Partner added successfully!",
        });
        setPartner({ partnername: "", partnerimagelink: "" });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || "Partner addition failed. Please try again!",
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
                  Add New Partner
                </MDTypography>
              </MDBox>

              {/* Add Partner Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Partner Name */}
                  <TextField
                    label="Partner Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="partnername"
                    value={partner.partnername}
                    onChange={handleChange}
                  />

                  {/* Optional Partner Image Link */}
                  <TextField
                    label="Partner Image Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="partnerimagelink"
                    value={partner.partnerimagelink}
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

export default AddPartner;
