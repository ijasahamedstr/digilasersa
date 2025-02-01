import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Swal from "sweetalert2";
import axios from "axios"; // Add axios import

const AddSocialmediasection = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [soicalmedianame, setSoicalmedianame] = useState("");
  const [soicalmediamaintype, setSoicalmediamaintype] = useState("");
  const [soicalmediasubtype, setSoicalmediasubtype] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before submission
    const formData = new FormData();
    formData.append("soicalmedianame", soicalmedianame);
    formData.append("soicalmediamaintype", soicalmediamaintype);
    formData.append("soicalmediasubtype", soicalmediasubtype);
    files.forEach((file) => formData.append("userimg", file));

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_HOST}/Socialmedia`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        resetForm();
        Swal.fire({
          title: "Success!",
          text: "Your operation was successful.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error?.response?.data?.error || "An error occurred",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);

    const previews = selectedFiles.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(previews).then((results) => setImagePreviews(results));
  };

  const resetForm = () => {
    setSoicalmedianame("");
    setSoicalmediamaintype("");
    setSoicalmediasubtype("");
    setFiles([]);
    setImagePreviews([]);
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
                  Add New Social media section
                </MDTypography>
              </MDBox>

              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Category Name */}
                  <TextField
                    label="soicalmedia Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="soicalmedianame"
                    value={soicalmedianame}
                    onChange={(e) => setSoicalmedianame(e.target.value)}
                  />

                  {/* Dropdown for Project Type */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>soicalmedia Main Type</InputLabel>
                    <Select
                      label="soicalmedia Main Type"
                      sx={{ height: "40px" }}
                      name="soicalmediamaintype"
                      value={soicalmediamaintype}
                      onChange={(e) => setSoicalmediamaintype(e.target.value)}
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

                  {/* Dropdown for Project Type */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>soicalmedia Sub Type</InputLabel>
                    <Select
                      label="soicalmedia sub Type"
                      sx={{ height: "40px" }}
                      name="soicalmediasubtype"
                      value={soicalmediasubtype}
                      onChange={(e) => setSoicalmediasubtype(e.target.value)}
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

                  {/* Image Upload Field */}
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="projectimage"
                      accept="image/*"
                      type="file"
                      multiple
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      fullWidth
                      sx={{
                        mb: 2,
                        textTransform: "none",
                        borderColor: "#1976d2",
                        color: "#1976d2",
                        "&:hover": {
                          borderColor: "#1565c0",
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      Upload Images
                    </Button>
                  </label>

                  {/* Image Previews */}
                  {imagePreviews.length > 0 && (
                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {imagePreviews.map((preview, index) => (
                        <img
                          key={index}
                          src={preview}
                          alt={`Preview ${index}`}
                          style={{
                            maxWidth: "150px",
                            height: "auto",
                            margin: "10px",
                            borderRadius: "4px",
                          }}
                        />
                      ))}
                    </div>
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

export default AddSocialmediasection;
