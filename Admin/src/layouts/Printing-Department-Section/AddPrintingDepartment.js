import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const AddPrintingDepartment = () => {
  const [loading, setLoading] = useState(false);

  // Form states
  const [Printing, setPrinting] = useState({
    Printingname: "",
    Printingtype: "",
    Printingimagelink: "",
  });

  // Handle changes in input fields
  const handleChange = ({ target: { name, value } }) => {
    setPrinting((prevState) => ({
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
        `${process.env.REACT_APP_API_HOST}/Printingdepartment`,
        Printing
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
        setPrinting({ Printingname: "", Printingtype: "", Printingimagelink: "" });
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
                  Add New Printing Department
                </MDTypography>
              </MDBox>

              {/* Add Category Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Printing Name */}
                  <TextField
                    label="Printing Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Printingname"
                    value={Printing.Printingname}
                    onChange={handleChange}
                  />

                  {/* Printing Image Link */}
                  <TextField
                    label="Printing Image Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Printingimagelink"
                    value={Printing.Printingimagelink}
                    onChange={handleChange}
                  />

                  {/* Dropdown for Printing Type */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Printing Type</InputLabel>
                    <Select
                      label="Printing Type"
                      sx={{ height: "40px" }}
                      name="Printingtype"
                      value={Printing.Printingtype}
                      onChange={handleChange}
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

export default AddPrintingDepartment;
