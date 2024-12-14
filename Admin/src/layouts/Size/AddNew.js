import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import Swal from "sweetalert2"; // Ensure Swal is imported
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

function AddCategories() {
  const [loading, setLoading] = useState(false);

  // Seller Form field states
  const [size, setSize] = useState("");

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "size":
        setSize(value);
        break;
      default:
        break;
    }
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare the data for submission
    const payload = {
      size: size,
    };

    try {
      // Make the POST request to register the category
      const res = await axios.post(`${process.env.REACT_APP_API_HOST}/size`, payload, {
        headers: {
          "Content-Type": "application/json", // Sending as JSON
        },
      });

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
        setSize("");
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
                  {/* Category Size */}
                  <TextField
                    label="Size"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="size"
                    value={size}
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
}

export default AddCategories;
