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
import React, { useState, useEffect } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// SweetAlert2
import Swal from "sweetalert2";

const EditPromotionalgifts = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    giftname: "",
    gifttype: "",
    giftimagelink: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.giftname || !formData.gifttype) {
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
        `${process.env.REACT_APP_API_HOST}/Promotionalgifts/${id}`,
        formData // Send only text data
      );

      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Gift updated successfully!",
      });
    } catch (err) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error updating gift data. Please try again.",
      });
    }
  };

  useEffect(() => {
    const fetchGift = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/Promotionalgifts/${id}`
        );
        setFormData({
          giftname: response.data.giftname,
          gifttype: response.data.gifttype,
          giftimagelink: response.data.giftimagelink || "",
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error fetching gift data. Please try again.",
        });
      }
    };

    fetchGift();
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
                  Edit Promotional gifts section
                </MDTypography>
              </MDBox>

              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Gift Name */}
                  <TextField
                    label="Gift Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="giftname"
                    value={formData.giftname}
                    onChange={handleInputChange}
                  />

                  {/* Dropdown for Gift Type */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Promotional gifts Type</InputLabel>
                    <Select
                      label="Promotional gifts Type"
                      sx={{ height: "40px" }}
                      name="gifttype"
                      value={formData.gifttype}
                      onChange={handleInputChange}
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

                  {/* Image Link */}
                  <TextField
                    label="Gift Image Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="giftimagelink"
                    value={formData.giftimagelink}
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

export default EditPromotionalgifts;
