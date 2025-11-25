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

const AddPromotionalgifts = () => {
  const [loading, setLoading] = useState(false);

  // Seller Form field states
  const [giftDetails, setGiftDetails] = useState({
    giftname: "",
    gifttype: "",
    giftimagelink: "",
  });

  // Handle changes in input fields
  const handleChange = ({ target: { name, value } }) => {
    setGiftDetails((prevState) => ({
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
        `${process.env.REACT_APP_API_HOST}/Promotionalgifts`,
        giftDetails
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
        setGiftDetails({ giftname: "", gifttype: "", giftimagelink: "" });
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
                  Add New Promotional Gifts
                </MDTypography>
              </MDBox>

              {/* Add Category Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Category Name */}
                  <TextField
                    label="Gifts Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="giftname"
                    value={giftDetails.giftname}
                    onChange={handleChange}
                  />

                  {/* Dropdown for Promotional Gifts Type */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Promotional gifts Type</InputLabel>
                    <Select
                      label="Promotional gifts Type"
                      sx={{ height: "40px" }}
                      name="gifttype"
                      value={giftDetails.gifttype}
                      onChange={handleChange}
                    >
                      <MenuItem value="دروع ومجسمات" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        دروع ومجسمات
                      </MenuItem>
                      <MenuItem value="خشـبيات" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        خشـبيات
                      </MenuItem>
                      <MenuItem value="مكتـبيات" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        مكتـبيات
                      </MenuItem>
                      <MenuItem value="اكسسوارات" style={{ fontFamily: "Tajawal, sans-serif" }}>
                        اكسسوارات
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label="Gifts Image Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="giftimagelink"
                    value={giftDetails.giftimagelink}
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

export default AddPromotionalgifts;
