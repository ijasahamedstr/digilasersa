import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useParams } from "react-router-dom";
import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Import SweetAlert2
import Swal from "sweetalert2";

const EditPrintingDepartment = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    Printingname: "",
    Printingtype: "",
    Printingimagelink: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.Printingname || !formData.Printingtype || !formData.Printingimagelink) {
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

      const response = await axios.put(
        `${process.env.REACT_APP_API_HOST}/Printingdepartment/${id}`,
        formData
      );

      setLoading(false);

      Swal.fire({
        title: "Success!",
        text: "Category updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      setLoading(false);
      setError("Error updating Printing data. Please try again.");

      Swal.fire({
        title: "Error!",
        text: "Error updating Printing data. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const fetchPrinting = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/Printingdepartment/${id}`
        );
        setFormData({
          Printingname: response.data.Printingname || "",
          Printingtype: response.data.Printingtype || "",
          Printingimagelink: response.data.Printingimagelink || "",
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Error fetching Printing data. Please try again.");
        console.error("Error fetching Printing data: ", err);
      }
    };

    fetchPrinting();
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
                  Edit Printing Section
                </MDTypography>
              </MDBox>

              {/* Edit Category Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Printing Name */}
                  <TextField
                    label="Printing Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Printingname"
                    value={formData.Printingname}
                    onChange={handleInputChange}
                  />

                  {/* Printing Type Dropdown */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Printing Type</InputLabel>
                    <Select
                      label="Printing Type"
                      sx={{ height: "40px" }}
                      name="Printingtype"
                      value={formData.Printingtype}
                      onChange={handleInputChange}
                    >
                      <MenuItem
                        value="مطـبوعات ورقـية"
                        style={{ fontFamily: "Tajawal, sans-serif" }}
                      >
                        مطـبوعات ورقـية
                      </MenuItem>
                      <MenuItem value="بنـر وسـتيكر" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        بنـر وسـتيكر
                      </MenuItem>
                      <MenuItem
                        value="طباعه مسطحات UV"
                        style={{ fontFamily: "Tajawal, sans-serif" }}
                      >
                        طباعه مسطحات UV
                      </MenuItem>
                      <MenuItem
                        value="طباعه منسوجات dtf"
                        style={{ fontFamily: "Tajawal, sans-serif" }}
                      >
                        طباعه منسوجات dtf
                      </MenuItem>
                      <MenuItem
                        value="طبــاعة dtf-uv"
                        style={{ fontFamily: "Tajawal, sans-serif" }}
                      >
                        طبــاعة dtf-uv
                      </MenuItem>
                    </Select>
                  </FormControl>

                  {/* Printing Image Link */}
                  <TextField
                    label="Printing Image Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Printingimagelink"
                    value={formData.Printingimagelink}
                    onChange={handleInputChange}
                  />

                  {/* Loading/Error/Success */}
                  {loading && (
                    <MDTypography variant="body1" color="info">
                      Loading...
                    </MDTypography>
                  )}
                  {error && (
                    <MDTypography variant="body1" color="error">
                      {error}
                    </MDTypography>
                  )}
                  {success && (
                    <MDTypography variant="body1" color="success">
                      {success}
                    </MDTypography>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ color: "#FFFFFF" }}
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

export default EditPrintingDepartment;
