import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Editor } from "@tinymce/tinymce-react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function AddPromotionalgifts() {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [newsheading, setNewsheading] = useState("");
  const [newsdec, setNewsdec] = useState("");
  const [file, setFile] = useState(null);
  const [Categoriesstatus, setCategoriesstatus] = useState("Yes");
  const editorRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "newsheading") setNewsheading(value);
    if (name === "newsdec") setNewsdec(value);
  };

  const handleCategoryStatusChange = (e) => {
    setCategoriesstatus(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && !selectedFile.type.startsWith("image/")) {
      Swal.fire({
        icon: "error",
        title: "Invalid File Type",
        text: "Please select an image file!",
      });
      return;
    }

    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      Swal.fire({
        icon: "error",
        title: "File Size Too Large",
        text: "The file size exceeds the limit of 5 MB.",
      });
      return;
    }

    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleEditorChange = (content) => {
    setNewsdec(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!newsheading || !newsdec || !file) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields must be filled out, and an image must be uploaded!",
      });
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("newsheading", newsheading);
    formData.append("newsdec", newsdec);
    formData.append("Categoriesstatus", Categoriesstatus);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_HOST}/News`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.status === 401 || !res.data) {
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

        setNewsheading("");
        setNewsdec("");
        setFile(null);
        setImagePreview(null);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred during the submission. Please try again.",
      });
      console.error(error);
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
                  Add Promotional gifts section
                </MDTypography>
              </MDBox>

              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Gift Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="GiftName"
                    value={newsheading}
                    onChange={handleChange}
                  />

                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Promotional gifts Type</InputLabel>
                    <Select
                      label="Promotional gifts Type"
                      sx={{ height: "40px" }}
                      name="Categoriesstatus"
                      value={Categoriesstatus}
                      onChange={handleCategoryStatusChange}
                    >
                      <MenuItem
                        value="دروع ومجسمات"
                        style={{ fontFamily: "Tajawal, sans-serif", fontSize: "18px" }}
                      >
                        دروع ومجسمات
                      </MenuItem>
                      <MenuItem
                        value="خشـبيات"
                        style={{ fontFamily: "Tajawal, sans-serif", fontSize: "18px" }}
                      >
                        خشـبيات
                      </MenuItem>
                      <MenuItem
                        value="مكتـبيات"
                        style={{ fontFamily: "Tajawal, sans-serif", fontSize: "18px" }}
                      >
                        مكتـبيات
                      </MenuItem>
                      <MenuItem
                        value="اكسسوارات"
                        style={{ fontFamily: "Tajawal, sans-serif", fontSize: "20px" }}
                      >
                        اكسسوارات
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="photo"
                      accept="image/*"
                      type="file"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
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
                      Upload Image
                    </Button>
                  </label>

                  {imagePreview && (
                    <MDBox
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        mb: 2,
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "8px",
                      }}
                    >
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "200px",
                          borderRadius: "4px",
                        }}
                      />
                    </MDBox>
                  )}

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

export default AddPromotionalgifts;
