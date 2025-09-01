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

const AddNews = () => {
  const [loading, setLoading] = useState(false);

  // News Form field states
  const [News, setNews] = useState({
    newsname: "",
    newsdec: "",
    newsimagelink: "",
  });

  // Handle changes in input fields
  const handleChange = ({ target: { name, value } }) => {
    setNews((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_HOST}/News`, News);

      if (response.data.status === 401 || !response.data) {
        Swal.fire({
          icon: "error",
          title: "News addition failed",
          text: "There was an issue adding the news. Please try again later.",
          confirmButtonColor: "#d33",
          confirmButtonText: "Retry",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "News added successfully!",
          text: "Your news has been added. You can now view it in the list.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        setNews({ newsname: "", newsdec: "", newsimagelink: "" });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops... Something went wrong",
        text: "We encountered an error while adding the news. Please try again later.",
        confirmButtonColor: "#d33",
        confirmButtonText: "Retry",
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
                  Add New News
                </MDTypography>
              </MDBox>

              {/* Add News Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* News Name */}
                  <TextField
                    label="News Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="newsname"
                    value={News.newsname}
                    onChange={handleChange}
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
                    value={News.newsdec}
                    onChange={handleChange}
                  />

                  {/* News Image Link */}
                  <TextField
                    label="News Image Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="newsimagelink"
                    value={News.newsimagelink}
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

export default AddNews;
